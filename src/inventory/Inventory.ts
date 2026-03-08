import { findCraftingMatch, type CraftingMatch } from './CraftingSystem';
import { ItemId, ItemRegistry } from '../items/ItemRegistry';
import { BlockId } from '../world/BlockRegistry';

export type InventorySlot = {
  count: number;
  itemId: ItemId;
};

export type InventoryScreen = 'closed' | 'inventory' | 'crafting_table';

export type InventorySlotRef =
  | { index: number; section: 'hotbar' | 'main' | 'playerCraft' | 'tableCraft' }
  | { section: 'playerResult' | 'tableResult' };

export type InventorySlotAction = {
  button: 'left' | 'right';
  shiftKey: boolean;
};

const HOTBAR_SIZE = 9;
const MAIN_SIZE = 27;
const PLAYER_CRAFT_SIZE = 4;
const TABLE_CRAFT_SIZE = 9;

const createEmptySlot = (): InventorySlot => ({
  itemId: ItemId.Air,
  count: 0,
});

const clearSlot = (slot: InventorySlot): void => {
  slot.itemId = ItemId.Air;
  slot.count = 0;
};

const cloneSlot = (slot: InventorySlot): InventorySlot => ({
  itemId: slot.itemId,
  count: slot.count,
});

export class Inventory {
  public readonly hotbar: InventorySlot[] = Array.from({ length: HOTBAR_SIZE }, createEmptySlot);
  public readonly main: InventorySlot[] = Array.from({ length: MAIN_SIZE }, createEmptySlot);
  public readonly playerCraft: InventorySlot[] = Array.from(
    { length: PLAYER_CRAFT_SIZE },
    createEmptySlot,
  );
  public readonly tableCraft: InventorySlot[] = Array.from(
    { length: TABLE_CRAFT_SIZE },
    createEmptySlot,
  );
  public heldSlot: InventorySlot | null = null;
  public selectedHotbarIndex = 0;

  private openScreen: InventoryScreen = 'closed';
  private playerCraftMatch: CraftingMatch | null = null;
  private playerCraftResult: InventorySlot = createEmptySlot();
  private tableCraftMatch: CraftingMatch | null = null;
  private tableCraftResult: InventorySlot = createEmptySlot();

  public constructor() {
    this.seedInventory();
    this.refreshCrafting();
  }

  public get isOpen(): boolean {
    return this.openScreen !== 'closed';
  }

  public get screen(): InventoryScreen {
    return this.openScreen;
  }

  public get isCraftingTableOpen(): boolean {
    return this.openScreen === 'crafting_table';
  }

  public get slots(): InventorySlot[] {
    return [...this.hotbar, ...this.main];
  }

  public getHotbarSlots(): InventorySlot[] {
    return this.hotbar;
  }

  public getMainSlots(): InventorySlot[] {
    return this.main;
  }

  public getPlayerCraftResult(): InventorySlot {
    return this.playerCraftResult;
  }

  public getTableCraftResult(): InventorySlot {
    return this.tableCraftResult;
  }

  public setSelectedHotbar(index: number): void {
    this.selectedHotbarIndex = ((index % HOTBAR_SIZE) + HOTBAR_SIZE) % HOTBAR_SIZE;
  }

  public cycleHotbar(direction: number): void {
    this.setSelectedHotbar(this.selectedHotbarIndex + direction);
  }

  public getSelectedSlot(): InventorySlot {
    return this.hotbar[this.selectedHotbarIndex];
  }

  public getSelectedItemId(): ItemId {
    const slot = this.getSelectedSlot();
    return slot.count > 0 ? slot.itemId : ItemId.Air;
  }

  public getSelectedPlaceBlockId(): BlockId {
    return ItemRegistry.getPlaceBlockId(this.getSelectedItemId());
  }

  public consumeSelectedItem(): boolean {
    const slot = this.getSelectedSlot();

    if (slot.count <= 0) {
      return false;
    }

    slot.count -= 1;

    if (slot.count === 0) {
      clearSlot(slot);
    }

    return true;
  }

  public addItem(itemId: ItemId, count: number): number {
    if (count <= 0 || !ItemRegistry.has(itemId) || ItemRegistry.getMaxStackSize(itemId) <= 0) {
      return count;
    }

    return this.insertIntoSlots(itemId, count, [this.hotbar, this.main]);
  }

  public toggleOpen(): void {
    if (this.isOpen) {
      this.close();
      return;
    }

    this.togglePlayerInventory();
  }

  public interactWithSlot(index: number): void {
    if (index < HOTBAR_SIZE) {
      this.interact(
        {
          index,
          section: 'hotbar',
        },
        { button: 'left', shiftKey: false },
      );
      return;
    }

    this.interact(
      {
        index: index - HOTBAR_SIZE,
        section: 'main',
      },
      { button: 'left', shiftKey: false },
    );
  }

  public togglePlayerInventory(): void {
    if (this.openScreen === 'inventory') {
      this.close();
      return;
    }

    this.openScreen = 'inventory';
    this.refreshCrafting();
  }

  public openCraftingTable(): void {
    this.openScreen = 'crafting_table';
    this.refreshCrafting();
  }

  public close(): void {
    this.returnCraftGrid(this.playerCraft);
    this.returnCraftGrid(this.tableCraft);
    this.openScreen = 'closed';
    this.refreshCrafting();
  }

  public interact(ref: InventorySlotRef, action: InventorySlotAction): void {
    if (action.shiftKey) {
      this.quickMove(ref);
      this.refreshCrafting();
      return;
    }

    if (ref.section === 'playerResult') {
      this.takeCraftingResult('player');
      this.refreshCrafting();
      return;
    }

    if (ref.section === 'tableResult') {
      this.takeCraftingResult('table');
      this.refreshCrafting();
      return;
    }

    const slot = this.resolveSlot(ref);

    if (!slot) {
      return;
    }

    if (action.button === 'left') {
      this.handleLeftClick(slot);
    } else {
      this.handleRightClick(slot);
    }

    this.refreshCrafting();
  }

  private handleLeftClick(slot: InventorySlot): void {
    if (!this.heldSlot) {
      if (slot.count <= 0) {
        return;
      }

      this.heldSlot = cloneSlot(slot);
      clearSlot(slot);
      return;
    }

    if (slot.count <= 0) {
      slot.itemId = this.heldSlot.itemId;
      slot.count = this.heldSlot.count;
      this.heldSlot = null;
      return;
    }

    const maxStackSize = ItemRegistry.getMaxStackSize(slot.itemId);

    if (slot.itemId === this.heldSlot.itemId && slot.count < maxStackSize) {
      const moved = Math.min(maxStackSize - slot.count, this.heldSlot.count);
      slot.count += moved;
      this.heldSlot.count -= moved;

      if (this.heldSlot.count === 0) {
        this.heldSlot = null;
      }

      return;
    }

    const swapped = cloneSlot(slot);
    slot.itemId = this.heldSlot.itemId;
    slot.count = this.heldSlot.count;
    this.heldSlot = swapped;
  }

  private handleRightClick(slot: InventorySlot): void {
    if (!this.heldSlot) {
      if (slot.count <= 0) {
        return;
      }

      const taken = Math.ceil(slot.count / 2);
      this.heldSlot = {
        itemId: slot.itemId,
        count: taken,
      };
      slot.count -= taken;

      if (slot.count === 0) {
        clearSlot(slot);
      }

      return;
    }

    if (slot.count <= 0) {
      slot.itemId = this.heldSlot.itemId;
      slot.count = 1;
      this.heldSlot.count -= 1;

      if (this.heldSlot.count === 0) {
        this.heldSlot = null;
      }

      return;
    }

    const maxStackSize = ItemRegistry.getMaxStackSize(slot.itemId);

    if (slot.itemId !== this.heldSlot.itemId || slot.count >= maxStackSize) {
      return;
    }

    slot.count += 1;
    this.heldSlot.count -= 1;

    if (this.heldSlot.count === 0) {
      this.heldSlot = null;
    }
  }

  private takeCraftingResult(kind: 'player' | 'table'): void {
    const match = kind === 'player' ? this.playerCraftMatch : this.tableCraftMatch;

    if (!match) {
      return;
    }

    if (!this.canHoldCraftResult(match.output.itemId, match.output.count)) {
      return;
    }

    if (!this.heldSlot) {
      this.heldSlot = {
        itemId: match.output.itemId,
        count: match.output.count,
      };
    } else {
      this.heldSlot.count += match.output.count;
    }

    this.consumeCraftingIngredients(kind, match.occupiedIndices);
  }

  private quickMove(ref: InventorySlotRef): void {
    if (ref.section === 'playerResult') {
      this.quickCraftAll('player');
      return;
    }

    if (ref.section === 'tableResult') {
      this.quickCraftAll('table');
      return;
    }

    const source = this.resolveSlot(ref);

    if (!source || source.count <= 0) {
      return;
    }

    if (ref.section === 'main') {
      this.moveSlotToTargets(source, [this.hotbar]);
      return;
    }

    if (ref.section === 'hotbar') {
      this.moveSlotToTargets(source, [this.main]);
      return;
    }

    this.moveSlotToTargets(source, [this.main, this.hotbar]);
  }

  private quickCraftAll(kind: 'player' | 'table'): void {
    while (true) {
      const match = kind === 'player' ? this.playerCraftMatch : this.tableCraftMatch;

      if (!match) {
        return;
      }

      if (!this.canInsertFully(match.output.itemId, match.output.count, [this.hotbar, this.main])) {
        return;
      }

      const remaining = this.insertIntoSlots(match.output.itemId, match.output.count, [
        this.hotbar,
        this.main,
      ]);

      if (remaining > 0) {
        return;
      }

      this.consumeCraftingIngredients(kind, match.occupiedIndices);
      this.refreshCrafting();
    }
  }

  private canHoldCraftResult(itemId: ItemId, count: number): boolean {
    const maxStackSize = ItemRegistry.getMaxStackSize(itemId);

    if (!this.heldSlot) {
      return count <= maxStackSize;
    }

    return this.heldSlot.itemId === itemId && this.heldSlot.count + count <= maxStackSize;
  }

  private canInsertFully(
    itemId: ItemId,
    count: number,
    groups: InventorySlot[][],
  ): boolean {
    const maxStackSize = ItemRegistry.getMaxStackSize(itemId);
    let capacity = 0;

    for (const slot of groups.flat()) {
      if (slot.count <= 0) {
        capacity += maxStackSize;
        continue;
      }

      if (slot.itemId === itemId) {
        capacity += maxStackSize - slot.count;
      }
    }

    return capacity >= count;
  }

  private consumeCraftingIngredients(kind: 'player' | 'table', occupiedIndices: number[]): void {
    const slots = kind === 'player' ? this.playerCraft : this.tableCraft;

    for (const index of occupiedIndices) {
      const slot = slots[index];

      if (slot.count <= 0) {
        continue;
      }

      slot.count -= 1;

      if (slot.count === 0) {
        clearSlot(slot);
      }
    }
  }

  private moveSlotToTargets(source: InventorySlot, targets: InventorySlot[][]): void {
    const remaining = this.insertIntoSlots(source.itemId, source.count, targets);

    if (remaining === source.count) {
      return;
    }

    source.count = remaining;

    if (source.count === 0) {
      clearSlot(source);
    }
  }

  private insertIntoSlots(
    itemId: ItemId,
    count: number,
    groups: InventorySlot[][],
  ): number {
    let remaining = count;
    const slots = groups.flat();
    const maxStackSize = ItemRegistry.getMaxStackSize(itemId);

    for (const slot of slots) {
      if (slot.itemId !== itemId || slot.count >= maxStackSize) {
        continue;
      }

      const moved = Math.min(maxStackSize - slot.count, remaining);
      slot.count += moved;
      remaining -= moved;

      if (remaining === 0) {
        return 0;
      }
    }

    for (const slot of slots) {
      if (slot.count > 0) {
        continue;
      }

      const moved = Math.min(maxStackSize, remaining);
      slot.itemId = itemId;
      slot.count = moved;
      remaining -= moved;

      if (remaining === 0) {
        return 0;
      }
    }

    return remaining;
  }

  private returnCraftGrid(slots: InventorySlot[]): void {
    for (const slot of slots) {
      if (slot.count <= 0) {
        continue;
      }

      const remaining = this.insertIntoSlots(slot.itemId, slot.count, [this.hotbar, this.main]);
      slot.count = remaining;

      if (slot.count === 0) {
        clearSlot(slot);
      }
    }
  }

  private refreshCrafting(): void {
    this.playerCraftMatch = findCraftingMatch(this.playerCraft, 2);
    this.tableCraftMatch = findCraftingMatch(this.tableCraft, 3);
    this.playerCraftResult = this.playerCraftMatch
      ? { ...this.playerCraftMatch.output }
      : createEmptySlot();
    this.tableCraftResult = this.tableCraftMatch
      ? { ...this.tableCraftMatch.output }
      : createEmptySlot();
  }

  private resolveSlot(ref: InventorySlotRef): InventorySlot | null {
    if (!('index' in ref)) {
      return null;
    }

    if (ref.section === 'hotbar') {
      return this.hotbar[ref.index] ?? null;
    }

    if (ref.section === 'main') {
      return this.main[ref.index] ?? null;
    }

    if (ref.section === 'playerCraft') {
      return this.playerCraft[ref.index] ?? null;
    }

    if (ref.section === 'tableCraft') {
      return this.tableCraft[ref.index] ?? null;
    }

    return null;
  }

  private seedInventory(): void {
    const hotbarDefaults: InventorySlot[] = [
      { itemId: ItemId.WoodenPickaxe, count: 1 },
      { itemId: ItemId.WoodenAxe, count: 1 },
      { itemId: ItemId.WoodenShovel, count: 1 },
      { itemId: ItemId.OakLog, count: 24 },
      { itemId: ItemId.OakPlanks, count: 24 },
      { itemId: ItemId.Stick, count: 16 },
      { itemId: ItemId.Cobblestone, count: 32 },
      { itemId: ItemId.CraftingTable, count: 1 },
    ];

    hotbarDefaults.forEach((slot, index) => {
      this.hotbar[index] = { ...slot };
    });

    const mainDefaults: InventorySlot[] = [
      { itemId: ItemId.StonePickaxe, count: 1 },
      { itemId: ItemId.IronPickaxe, count: 1 },
      { itemId: ItemId.DiamondPickaxe, count: 1 },
      { itemId: ItemId.StoneAxe, count: 1 },
      { itemId: ItemId.StoneShovel, count: 1 },
      { itemId: ItemId.IronIngot, count: 8 },
      { itemId: ItemId.Diamond, count: 4 },
      { itemId: ItemId.Dirt, count: 32 },
      { itemId: ItemId.Sand, count: 32 },
      { itemId: ItemId.Glass, count: 16 },
      { itemId: ItemId.Chest, count: 1 },
      { itemId: ItemId.Furnace, count: 1 },
    ];

    mainDefaults.forEach((slot, index) => {
      this.main[index] = { ...slot };
    });
  }
}
