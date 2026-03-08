import {
  BoxGeometry,
  ClampToEdgeWrapping,
  Group,
  Mesh,
  MeshLambertMaterial,
  Vector3,
} from 'three';

import { Inventory } from '../inventory/Inventory';
import { ItemId, ItemRegistry } from '../items/ItemRegistry';
import { Player } from '../player/Player';
import {
  ITEM_DROP_ATTRACT_RADIUS,
  ITEM_DROP_GRAVITY,
  ITEM_DROP_LIFETIME_SECONDS,
  ITEM_DROP_PICKUP_DELAY_SECONDS,
  ITEM_DROP_PICKUP_RADIUS,
  ITEM_DROP_SIZE,
  MAX_FRAME_SECONDS,
} from '../utils/constants';
import {
  BLOCK_TEXTURE_ATLAS_HEIGHT,
  BLOCK_TEXTURE_ATLAS_WIDTH,
  createBlockTextureAtlas,
  getTileSpriteRect,
} from '../world/BlockTextures';
import { World } from '../world/World';

type Axis = 'x' | 'y' | 'z';

type DroppedItem = {
  ageSeconds: number;
  bobOffset: number;
  grounded: boolean;
  itemId: ItemId;
  mesh: Mesh;
  pickupDelaySeconds: number;
  position: Vector3;
  velocity: Vector3;
};

const DROP_HALF_SIZE = ITEM_DROP_SIZE / 2;
const MAX_SUBSTEP_DISTANCE = 0.35;
const PICKUP_TARGET_OFFSET_Y = 1;
const RESTITUTION = 0.28;
const FRICTION = 0.84;

export class DroppedItemManager {
  public readonly group = new Group();
  private readonly geometry = new BoxGeometry(ITEM_DROP_SIZE, ITEM_DROP_SIZE, ITEM_DROP_SIZE);
  private readonly drops: DroppedItem[] = [];
  private readonly materialCache = new Map<ItemId, MeshLambertMaterial>();
  private readonly scratch = new Vector3();
  private readonly world: World;

  public constructor(world: World) {
    this.world = world;
  }

  public get count(): number {
    return this.drops.length;
  }

  public spawn(itemId: ItemId, x: number, y: number, z: number, impulse?: Vector3): void {
    if (itemId === ItemId.Air) {
      return;
    }

    const mesh = new Mesh(this.geometry, this.getMaterial(itemId));
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.rotation.x = 0.5 + Math.random() * 0.35;
    mesh.rotation.y = Math.random() * Math.PI * 2;

    const velocity = new Vector3(
      (Math.random() - 0.5) * 2.1,
      2.4 + Math.random() * 0.9,
      (Math.random() - 0.5) * 2.1,
    );

    if (impulse) {
      velocity.addScaledVector(impulse, 0.85);
    }

    const drop: DroppedItem = {
      ageSeconds: 0,
      bobOffset: Math.random() * Math.PI * 2,
      grounded: false,
      itemId,
      mesh,
      pickupDelaySeconds: ITEM_DROP_PICKUP_DELAY_SECONDS,
      position: new Vector3(
        x + 0.5 + (Math.random() - 0.5) * 0.18,
        y + 0.48,
        z + 0.5 + (Math.random() - 0.5) * 0.18,
      ),
      velocity,
    };

    this.group.add(mesh);
    this.drops.push(drop);
    this.updateMesh(drop);
  }

  public update(deltaSeconds: number, player: Player, inventory: Inventory): void {
    const clampedDelta = Math.min(deltaSeconds, MAX_FRAME_SECONDS);

    for (let index = this.drops.length - 1; index >= 0; index -= 1) {
      const drop = this.drops[index];
      drop.ageSeconds += clampedDelta;
      drop.pickupDelaySeconds = Math.max(0, drop.pickupDelaySeconds - clampedDelta);

      if (drop.ageSeconds >= ITEM_DROP_LIFETIME_SECONDS) {
        this.removeAt(index);
        continue;
      }

      this.applyPickupAttraction(drop, player);
      this.integrate(drop, clampedDelta);
      this.updateMesh(drop);

      if (drop.pickupDelaySeconds > 0) {
        continue;
      }

      this.scratch.set(
        player.position.x,
        player.position.y + PICKUP_TARGET_OFFSET_Y,
        player.position.z,
      );

      if (drop.position.distanceTo(this.scratch) > ITEM_DROP_PICKUP_RADIUS) {
        continue;
      }

      const remaining = inventory.addItem(drop.itemId, 1);

      if (remaining === 0) {
        this.removeAt(index);
      }
    }
  }

  private applyPickupAttraction(drop: DroppedItem, player: Player): void {
    if (drop.pickupDelaySeconds > 0) {
      return;
    }

    this.scratch.set(
      player.position.x,
      player.position.y + PICKUP_TARGET_OFFSET_Y,
      player.position.z,
    );
    this.scratch.sub(drop.position);
    const distance = this.scratch.length();

    if (distance > ITEM_DROP_ATTRACT_RADIUS || distance <= 0.001) {
      return;
    }

    this.scratch.multiplyScalar(1 / distance);
    const force = 14 + (ITEM_DROP_ATTRACT_RADIUS - distance) * 10;
    drop.velocity.addScaledVector(this.scratch, force / 20);
  }

  private integrate(drop: DroppedItem, deltaSeconds: number): void {
    const maxDistance =
      Math.max(
        Math.abs(drop.velocity.x),
        Math.abs(drop.velocity.y),
        Math.abs(drop.velocity.z),
      ) * deltaSeconds;
    const substeps = Math.max(1, Math.ceil(maxDistance / MAX_SUBSTEP_DISTANCE));
    const substepDelta = deltaSeconds / substeps;

    for (let step = 0; step < substeps; step += 1) {
      drop.grounded = false;
      drop.velocity.y -= ITEM_DROP_GRAVITY * substepDelta;
      this.moveAxis(drop, 'x', drop.velocity.x * substepDelta);
      this.moveAxis(drop, 'z', drop.velocity.z * substepDelta);
      this.moveAxis(drop, 'y', drop.velocity.y * substepDelta);
    }

    if (drop.grounded) {
      drop.velocity.x *= FRICTION;
      drop.velocity.z *= FRICTION;

      if (Math.abs(drop.velocity.x) < 0.02) {
        drop.velocity.x = 0;
      }

      if (Math.abs(drop.velocity.z) < 0.02) {
        drop.velocity.z = 0;
      }
    }
  }

  private moveAxis(drop: DroppedItem, axis: Axis, amount: number): void {
    if (Math.abs(amount) < 0.0001) {
      return;
    }

    drop.position[axis] += amount;

    const minX = Math.floor(drop.position.x - DROP_HALF_SIZE);
    const maxX = Math.floor(drop.position.x + DROP_HALF_SIZE - 0.0001);
    const minY = Math.floor(drop.position.y - DROP_HALF_SIZE);
    const maxY = Math.floor(drop.position.y + DROP_HALF_SIZE - 0.0001);
    const minZ = Math.floor(drop.position.z - DROP_HALF_SIZE);
    const maxZ = Math.floor(drop.position.z + DROP_HALF_SIZE - 0.0001);

    let collided = false;
    let resolvedPosition = drop.position[axis];

    for (let y = minY; y <= maxY; y += 1) {
      for (let z = minZ; z <= maxZ; z += 1) {
        for (let x = minX; x <= maxX; x += 1) {
          if (!this.world.isSolidBlockAt(x, y, z)) {
            continue;
          }

          collided = true;

          if (axis === 'x') {
            resolvedPosition =
              amount > 0
                ? Math.min(resolvedPosition, x - DROP_HALF_SIZE - 0.0001)
                : Math.max(resolvedPosition, x + 1 + DROP_HALF_SIZE + 0.0001);
          }

          if (axis === 'z') {
            resolvedPosition =
              amount > 0
                ? Math.min(resolvedPosition, z - DROP_HALF_SIZE - 0.0001)
                : Math.max(resolvedPosition, z + 1 + DROP_HALF_SIZE + 0.0001);
          }

          if (axis === 'y') {
            resolvedPosition =
              amount > 0
                ? Math.min(resolvedPosition, y - DROP_HALF_SIZE - 0.0001)
                : Math.max(resolvedPosition, y + 1 + DROP_HALF_SIZE + 0.0001);
          }
        }
      }
    }

    if (!collided) {
      return;
    }

    drop.position[axis] = resolvedPosition;

    if (axis === 'y') {
      if (amount < 0) {
        drop.grounded = true;
        drop.velocity.y = Math.abs(drop.velocity.y) > 1 ? -drop.velocity.y * RESTITUTION : 0;
      } else {
        drop.velocity.y = 0;
      }

      return;
    }

    drop.velocity[axis] *= -0.2;
  }

  private updateMesh(drop: DroppedItem): void {
    const bob = drop.grounded ? Math.sin(drop.ageSeconds * 4.6 + drop.bobOffset) * 0.08 : 0;
    drop.mesh.position.set(drop.position.x, drop.position.y + bob, drop.position.z);
    drop.mesh.rotation.y += 0.045;
  }

  private removeAt(index: number): void {
    const [drop] = this.drops.splice(index, 1);

    if (!drop) {
      return;
    }

    this.group.remove(drop.mesh);
  }

  private getMaterial(itemId: ItemId): MeshLambertMaterial {
    const cached = this.materialCache.get(itemId);

    if (cached) {
      return cached;
    }

    const visual = ItemRegistry.getVisual(itemId);
    let material: MeshLambertMaterial;

    if (visual.kind === 'block') {
      const rect = getTileSpriteRect(visual.texture);
      const map = createBlockTextureAtlas();
      map.needsUpdate = true;
      map.wrapS = ClampToEdgeWrapping;
      map.wrapT = ClampToEdgeWrapping;
      map.repeat.set(rect.size / BLOCK_TEXTURE_ATLAS_WIDTH, rect.size / BLOCK_TEXTURE_ATLAS_HEIGHT);
      map.offset.set(
        rect.x / BLOCK_TEXTURE_ATLAS_WIDTH,
        1 - (rect.y + rect.size) / BLOCK_TEXTURE_ATLAS_HEIGHT,
      );

      material = new MeshLambertMaterial({
        alphaTest: 0.1,
        flatShading: true,
        map,
        transparent: true,
      });
    } else {
      material = new MeshLambertMaterial({
        color: ItemRegistry.getTint(itemId),
        flatShading: true,
      });
    }

    this.materialCache.set(itemId, material);
    return material;
  }
}
