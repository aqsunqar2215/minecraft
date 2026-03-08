import './style.css';
import { FirstPersonCamera } from './engine/Camera';
import { DroppedItemManager } from './entities/DroppedItemManager';
import { InputManager } from './engine/InputManager';
import { Physics } from './engine/Physics';
import { Renderer } from './engine/Renderer';
import { HotbarUI } from './inventory/HotbarUI';
import {
  Inventory,
  type InventorySlotAction,
  type InventorySlotRef,
} from './inventory/Inventory';
import { InventoryUI } from './inventory/InventoryUI';
import { Player } from './player/Player';
import { PlayerController } from './player/PlayerController';
import { VoxelRaycaster } from './player/Raycaster';
import { BreakingOverlay } from './ui/BreakingOverlay';
import { CrosshairUI } from './ui/CrosshairUI';
import { TargetBlockOutline } from './ui/TargetBlockOutline';
import {
  FIXED_TIMESTEP_SECONDS,
  INITIAL_RENDER_DISTANCE,
  MAX_FRAME_SECONDS,
  MINING_CRACK_STAGES,
} from './utils/constants';
import { Vector3 } from 'three';
import { ItemId, ItemRegistry } from './items/ItemRegistry';
import { getMiningProfile } from './items/MiningRegistry';
import { BlockId, BlockRegistry } from './world/BlockRegistry';
import { World } from './world/World';

declare global {
  interface Window {
    __webcraftDebug?: {
      closeUi: () => void;
      getScreen: () => string;
      getLoadedChunkSummary: () => {
        count: number;
        maxChunkX: number;
        maxChunkZ: number;
        minChunkX: number;
        minChunkZ: number;
      };
      getWorldMetrics: (sampleRadius?: number) => {
        averageHeight: number;
        maxHeight: number;
        minHeight: number;
        mountainColumns: number;
        nearestWaterDistance: number | null;
        totalColumns: number;
        waterColumns: number;
      };
      getSurfaceColumn: (x: number, z: number) => {
        height: number;
        topBlock: BlockId;
        waterLevel: number | null;
      };
      getWaterAnimationState: () => {
        primary: {
          u: number;
          v: number;
        };
        time: number;
      };
      getWaterTextureState: () => {
        height: number;
        isPowerOfTwo: boolean;
        width: number;
      };
      interactSlot: (ref: InventorySlotRef, action: InventorySlotAction) => void;
      openCraftingTable: () => void;
      openInventory: () => void;
      placeDebugTarget: (blockId: BlockId) => { x: number; y: number; z: number };
      renderGameToText: () => string;
      setBlockAt: (x: number, y: number, z: number, blockId: BlockId) => boolean;
      setView: (yaw: number, pitch: number) => { pitch: number; yaw: number };
      setSelectedHotbar: (index: number) => void;
      teleportTo: (x: number, z: number, y?: number) => { x: number; y: number; z: number };
    };
    render_game_to_text?: () => string;
  }
}

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root element "#app" was not found.');
}

app.replaceChildren();

const renderer = new Renderer(app);
const input = new InputManager(document);
input.attachPointerLockTarget(renderer.canvas);

const camera = new FirstPersonCamera(renderer.aspect);
renderer.setResizeHandler((aspect) => {
  camera.updateAspect(aspect);
});

const world = new World();
world.buildInitialWorld(INITIAL_RENDER_DISTANCE);
renderer.scene.add(world.group);

const spawnTransform = world.getSpawnTransform();
const player = new Player(spawnTransform.position);
player.yaw = spawnTransform.yaw;
player.pitch = spawnTransform.pitch;
const physics = new Physics(world);
const controller = new PlayerController(player, input, physics, camera);
const raycaster = new VoxelRaycaster(world);
const inventory = new Inventory();
const droppedItems = new DroppedItemManager(world);

new CrosshairUI(app);
const hotbarUI = new HotbarUI(app);
const inventoryUI = new InventoryUI(app, (ref, action) => {
  inventory.interact(ref, action);
});
const targetOutline = new TargetBlockOutline();
const breakingOverlay = new BreakingOverlay();
renderer.scene.add(targetOutline.object);
renderer.scene.add(breakingOverlay.object);
renderer.scene.add(droppedItems.group);

const statsPanel = document.createElement('div');
statsPanel.className = 'hud-panel';
app.append(statsPanel);

const helpPanel = document.createElement('div');
helpPanel.className = 'hud-help';
helpPanel.innerHTML = [
  '<strong>WebCraft Playable Slice</strong>',
  'Click to lock pointer',
  'WASD move, Shift sprint / dive, Space jump / swim up',
  'Hold left click to break, right click place / use table',
  'Scroll or 1-9 to change slot, E inventory',
].join('<br />');
app.append(helpPanel);

const waterOverlay = document.createElement('div');
waterOverlay.className = 'water-overlay';
app.append(waterOverlay);

camera.sync(player);

let accumulator = 0;
let lastFrameTime = performance.now();
let currentTarget: ReturnType<VoxelRaycaster['cast']> = null;
let miningProgressRatio = 0;
let miningState:
  | {
      durationSeconds: number;
      key: string;
      progressSeconds: number;
    }
  | null = null;

const scratchDirection = new Vector3();
const getTargetKey = (
  target: NonNullable<typeof currentTarget>,
  selectedItemId: ItemId,
): string => `${target.block.x},${target.block.y},${target.block.z},${target.blockId},${selectedItemId}`;

const resetMining = (): void => {
  miningState = null;
  miningProgressRatio = 0;
  breakingOverlay.hide();
};

const updateSelectedHotbar = (): void => {
  for (let index = 0; index < 9; index += 1) {
    if (input.consumePressed(`Digit${index + 1}`)) {
      inventory.setSelectedHotbar(index);
    }
  }
};

const toggleInventory = (): void => {
  if (inventory.isOpen) {
    inventory.close();
  } else {
    inventory.togglePlayerInventory();
  }

  if (inventory.isOpen) {
    document.exitPointerLock?.();
    resetMining();
  }
};

const playerIntersectsBlock = (x: number, y: number, z: number): boolean => {
  const minX = player.position.x - player.halfWidth;
  const maxX = player.position.x + player.halfWidth;
  const minY = player.position.y;
  const maxY = player.position.y + player.height;
  const minZ = player.position.z - player.halfWidth;
  const maxZ = player.position.z + player.halfWidth;

  return (
    minX < x + 1 &&
    maxX > x &&
    minY < y + 1 &&
    maxY > y &&
    minZ < z + 1 &&
    maxZ > z
  );
};

const updateTarget = (): void => {
  currentTarget = raycaster.cast(
    camera.camera.position,
    camera.camera.getWorldDirection(scratchDirection),
    6,
  );

  if (currentTarget) {
    targetOutline.show(
      currentTarget.block.x,
      currentTarget.block.y,
      currentTarget.block.z,
    );
    return;
  }

  targetOutline.hide();
};

const breakBlock = (): boolean => {
  if (!currentTarget || currentTarget.blockId === BlockId.Bedrock) {
    return false;
  }

  const brokenBlock = { ...currentTarget.block };
  const miningProfile = getMiningProfile(currentTarget.blockId, inventory.getSelectedItemId());
  const dropImpulse = camera.camera
    .getWorldDirection(new Vector3())
    .setY(0.4)
    .normalize();

  const didBreak = world.setBlockId(
    brokenBlock.x,
    brokenBlock.y,
    brokenBlock.z,
    BlockId.Air,
  );

  if (!didBreak) {
    return false;
  }

  if (miningProfile.dropItemId !== ItemId.Air) {
    droppedItems.spawn(
      miningProfile.dropItemId,
      brokenBlock.x,
      brokenBlock.y,
      brokenBlock.z,
      dropImpulse,
    );
  }

  updateTarget();
  return true;
};

const updateMining = (deltaSeconds: number): void => {
  if (
    !input.isPointerLocked() ||
    inventory.isOpen ||
    !input.isMouseButtonDown(0) ||
    !currentTarget ||
    currentTarget.blockId === BlockId.Bedrock
  ) {
    resetMining();
    return;
  }

  const selectedItemId = inventory.getSelectedItemId();
  const miningProfile = getMiningProfile(currentTarget.blockId, selectedItemId);

  if (!Number.isFinite(miningProfile.durationSeconds)) {
    resetMining();
    return;
  }

  const targetKey = getTargetKey(currentTarget, selectedItemId);
  const durationSeconds = miningProfile.durationSeconds;

  if (!miningState || miningState.key !== targetKey) {
    miningState = {
      durationSeconds,
      key: targetKey,
      progressSeconds: 0,
    };
  }

  miningState.durationSeconds = durationSeconds;
  miningState.progressSeconds = Math.min(
    miningState.progressSeconds + deltaSeconds,
    miningState.durationSeconds,
  );
  miningProgressRatio = miningState.progressSeconds / miningState.durationSeconds;

  const stage = Math.min(
    MINING_CRACK_STAGES - 1,
    Math.floor(miningProgressRatio * MINING_CRACK_STAGES),
  );

  breakingOverlay.show(
    currentTarget.block.x,
    currentTarget.block.y,
    currentTarget.block.z,
    stage,
  );

  if (miningState.progressSeconds < miningState.durationSeconds) {
    return;
  }

  breakBlock();
  resetMining();
};

const placeBlock = (): void => {
  if (!currentTarget) {
    return;
  }

  const selectedBlock = inventory.getSelectedPlaceBlockId();

  if (selectedBlock === BlockId.Air) {
    return;
  }

  const { x, y, z } = currentTarget.previous;

  if (world.getBlockId(x, y, z) !== BlockId.Air) {
    return;
  }

  if (playerIntersectsBlock(x, y, z)) {
    return;
  }

  if (world.setBlockId(x, y, z, selectedBlock)) {
    inventory.consumeSelectedItem();
    updateTarget();
  }
};

renderer.canvas.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

renderer.canvas.addEventListener('mousedown', (event) => {
  if (!input.isPointerLocked() || inventory.isOpen) {
    return;
  }

  if (event.button === 2) {
    if (currentTarget?.blockId === BlockId.CraftingTable) {
      inventory.openCraftingTable();
      document.exitPointerLock?.();
      resetMining();
      return;
    }

    placeBlock();
  }
});

window.addEventListener(
  'wheel',
  (event) => {
    if (inventory.isOpen) {
      return;
    }

    inventory.cycleHotbar(event.deltaY > 0 ? 1 : -1);
    event.preventDefault();
  },
  { passive: false },
);

const placeDebugTarget = (blockId: BlockId): { x: number; y: number; z: number } => {
  const direction = camera.camera.getWorldDirection(new Vector3()).normalize();
  const targetPosition = camera.camera.position.clone().addScaledVector(direction, 3);
  const x = Math.floor(targetPosition.x);
  const y = Math.floor(targetPosition.y);
  const z = Math.floor(targetPosition.z);

  for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
    for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
      for (let offsetZ = -1; offsetZ <= 1; offsetZ += 1) {
        world.setBlockId(x + offsetX, y + offsetY, z + offsetZ, BlockId.Air);
      }
    }
  }

  world.setBlockId(x, y, z, blockId);
  updateTarget();

  return { x, y, z };
};

const teleportTo = (x: number, z: number, y?: number): { x: number; y: number; z: number } => {
  const groundedY = world.getSurfaceHeight(Math.floor(x), Math.floor(z)) + 1.05;
  player.position.set(x, y ?? groundedY, z);
  player.velocity.set(0, 0, 0);
  player.onGround = false;
  world.updateStreaming(player.position.x, player.position.z, INITIAL_RENDER_DISTANCE);
  camera.sync(player);
  updateTarget();

  return {
    x: player.position.x,
    y: player.position.y,
    z: player.position.z,
  };
};

const setBlockAt = (x: number, y: number, z: number, blockId: BlockId): boolean => {
  const didSet = world.setBlockId(x, y, z, blockId);

  if (didSet) {
    updateTarget();
  }

  return didSet;
};

const setView = (yaw: number, pitch: number): { pitch: number; yaw: number } => {
  player.yaw = yaw;
  player.pitch = pitch;
  camera.sync(player);
  updateTarget();

  return { pitch: player.pitch, yaw: player.yaw };
};

const formatStatus = (): string => {
  const { x, y, z } = player.position;
  const targetLabel = currentTarget
    ? `${BlockRegistry.getName(currentTarget.blockId)} @ ${currentTarget.block.x},${currentTarget.block.y},${currentTarget.block.z}`
    : 'none';
  const selectedItemId = inventory.getSelectedItemId();
  const miningProfile = currentTarget
    ? getMiningProfile(currentTarget.blockId, selectedItemId)
    : null;
  const miningLabel =
    miningState && currentTarget ? `${Math.round(miningProgressRatio * 100)}%` : 'idle';
  const pointerState =
    inventory.screen === 'inventory'
      ? 'inventory open'
      : inventory.screen === 'crafting_table'
        ? 'crafting table open'
        : input.isPointerLocked()
          ? 'locked'
          : 'click to play';
  const waterState = player.isInWater
    ? `${Math.round(player.waterSubmersion * 100)}% ${player.headInWater ? 'head-wet' : 'body-wet'}`
    : 'dry';
  const currentLabel = player.isInWater
    ? `${player.waterFlow.x.toFixed(2)}, ${player.waterFlow.z.toFixed(2)}`
    : '0.00, 0.00';
  return [
    `Pointer: ${pointerState}`,
    `XYZ: ${x.toFixed(1)} ${y.toFixed(1)} ${z.toFixed(1)}`,
    `Chunk: ${world.getChunkCoordinatesFor(x, z)}`,
    `Grounded: ${player.onGround ? 'yes' : 'no'}`,
    `Water: ${waterState}`,
    `Current: ${currentLabel}`,
    `Target: ${targetLabel}`,
    `Mining: ${miningLabel}`,
    `Drop: ${!miningProfile || miningProfile.dropItemId === ItemId.Air ? 'none' : ItemRegistry.getName(miningProfile.dropItemId)}`,
    `Drops: ${droppedItems.count}`,
    `Selected: ${selectedItemId === ItemId.Air ? 'hand' : ItemRegistry.getName(selectedItemId)}`,
  ].join('<br />');
};

const renderGameToText = (): string =>
  JSON.stringify({
    screen: inventory.screen,
    player: {
      headInWater: player.headInWater,
      isInWater: player.isInWater,
      onGround: player.onGround,
      submersion: Number(player.waterSubmersion.toFixed(3)),
      x: Number(player.position.x.toFixed(2)),
      y: Number(player.position.y.toFixed(2)),
      z: Number(player.position.z.toFixed(2)),
    },
    selected: ItemRegistry.getName(inventory.getSelectedItemId()),
    selectedIndex: inventory.selectedHotbarIndex,
    hotbar: inventory.getHotbarSlots().map((slot) =>
      slot.count > 0 ? { count: slot.count, item: ItemRegistry.getName(slot.itemId) } : null,
    ),
    held: inventory.heldSlot
      ? {
          count: inventory.heldSlot.count,
          item: ItemRegistry.getName(inventory.heldSlot.itemId),
        }
      : null,
    playerCraft: inventory.playerCraft.map((slot) =>
      slot.count > 0 ? { count: slot.count, item: ItemRegistry.getName(slot.itemId) } : null,
    ),
    tableCraft: inventory.tableCraft.map((slot) =>
      slot.count > 0 ? { count: slot.count, item: ItemRegistry.getName(slot.itemId) } : null,
    ),
    target: currentTarget
      ? {
          item: BlockRegistry.getName(currentTarget.blockId),
          x: currentTarget.block.x,
          y: currentTarget.block.y,
          z: currentTarget.block.z,
        }
      : null,
    water: {
      current: {
        x: Number(player.waterFlow.x.toFixed(3)),
        z: Number(player.waterFlow.z.toFixed(3)),
      },
      headInWater: player.headInWater,
      isInWater: player.isInWater,
      submersion: Number(player.waterSubmersion.toFixed(3)),
    },
    drops: droppedItems.count,
  });

window.__webcraftDebug = {
  closeUi: () => inventory.close(),
  getScreen: () => inventory.screen,
  getLoadedChunkSummary: () => world.getLoadedChunkSummary(),
  getSurfaceColumn: (x: number, z: number) => {
    const surface = world.getSurfaceColumn(Math.floor(x), Math.floor(z));
    return {
      height: surface.height,
      topBlock: surface.topBlock,
      waterLevel: surface.waterLevel,
    };
  },
  getWaterAnimationState: () => world.getWaterAnimationState(),
  getWaterTextureState: () => world.getWaterTextureState(),
  getWorldMetrics: (sampleRadius = 64) => world.getWorldMetrics(sampleRadius),
  interactSlot: (ref, action) => inventory.interact(ref, action),
  openCraftingTable: () => inventory.openCraftingTable(),
  openInventory: () => inventory.togglePlayerInventory(),
  placeDebugTarget,
  renderGameToText,
  setBlockAt,
  setView,
  setSelectedHotbar: (index: number) => inventory.setSelectedHotbar(index),
  teleportTo,
};
window.render_game_to_text = renderGameToText;

const frame = (now: number): void => {
  const deltaSeconds = Math.min((now - lastFrameTime) / 1000, MAX_FRAME_SECONDS);
  lastFrameTime = now;

  if (input.consumePressed('KeyE')) {
    toggleInventory();
  }

  updateSelectedHotbar();

  if (!inventory.isOpen) {
    controller.applyLook(input.consumeLookDelta());
    accumulator += deltaSeconds;

    while (accumulator >= FIXED_TIMESTEP_SECONDS) {
      controller.fixedUpdate(FIXED_TIMESTEP_SECONDS);
      accumulator -= FIXED_TIMESTEP_SECONDS;
    }
  } else {
    input.consumeLookDelta();
  }

  world.update(deltaSeconds);
  world.updateStreaming(player.position.x, player.position.z, INITIAL_RENDER_DISTANCE);
  updateTarget();
  updateMining(deltaSeconds);
  droppedItems.update(deltaSeconds, player, inventory);
  statsPanel.innerHTML = formatStatus();
  hotbarUI.render(inventory);
  inventoryUI.render(inventory);
  waterOverlay.classList.toggle('water-overlay--submerged', player.headInWater);
  waterOverlay.style.opacity = player.headInWater ? '0.58' : player.isInWater ? '0.22' : '0';
  renderer.render(camera.camera);
  requestAnimationFrame(frame);
};

requestAnimationFrame(frame);
