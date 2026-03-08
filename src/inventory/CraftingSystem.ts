import { ItemId } from '../items/ItemRegistry';

type CraftingItemId = number;

type CraftingSlot = {
  count: number;
  itemId: CraftingItemId;
};

type Recipe = {
  height: number;
  ingredients: Array<CraftingItemId | null>;
  minGridSize: 2 | 3;
  output: {
    count: number;
    itemId: CraftingItemId;
  };
  width: number;
};

export type CraftingMatch = {
  occupiedIndices: number[];
  output: {
    count: number;
    itemId: CraftingItemId;
  };
};

const recipe = (
  width: number,
  height: number,
  ingredients: Array<CraftingItemId | null>,
  output: { count: number; itemId: CraftingItemId },
  minGridSize?: 2 | 3,
): Recipe => ({
  width,
  height,
  ingredients,
  output,
  minGridSize:
    minGridSize ?? ((Math.max(width, height) <= 2 ? 2 : 3) as 2 | 3),
});

const toolRecipes = (
  material: CraftingItemId,
  outputs: {
    axe: CraftingItemId;
    hoe: CraftingItemId;
    pickaxe: CraftingItemId;
    shovel: CraftingItemId;
    sword: CraftingItemId;
  },
): Recipe[] => [
  recipe(
    3,
    3,
    [material, material, material, null, ItemId.Stick, null, null, ItemId.Stick, null],
    { itemId: outputs.pickaxe, count: 1 },
    3,
  ),
  recipe(
    2,
    3,
    [material, material, material, ItemId.Stick, null, ItemId.Stick],
    { itemId: outputs.axe, count: 1 },
    3,
  ),
  recipe(
    2,
    3,
    [material, material, null, ItemId.Stick, null, ItemId.Stick],
    { itemId: outputs.hoe, count: 1 },
    3,
  ),
  recipe(
    1,
    3,
    [material, ItemId.Stick, ItemId.Stick],
    { itemId: outputs.shovel, count: 1 },
    3,
  ),
  recipe(
    1,
    3,
    [material, material, ItemId.Stick],
    { itemId: outputs.sword, count: 1 },
    3,
  ),
];

const armorRecipes = (
  material: CraftingItemId,
  outputs: {
    boots: CraftingItemId;
    chestplate: CraftingItemId;
    helmet: CraftingItemId;
    leggings: CraftingItemId;
  },
): Recipe[] => [
  recipe(
    3,
    2,
    [material, material, material, material, null, material],
    { itemId: outputs.helmet, count: 1 },
    3,
  ),
  recipe(
    3,
    3,
    [material, null, material, material, material, material, material, material, material],
    { itemId: outputs.chestplate, count: 1 },
    3,
  ),
  recipe(
    3,
    3,
    [material, material, material, material, null, material, material, null, material],
    { itemId: outputs.leggings, count: 1 },
    3,
  ),
  recipe(
    3,
    2,
    [material, null, material, material, null, material],
    { itemId: outputs.boots, count: 1 },
    3,
  ),
];

const RECIPES: Recipe[] = [
  recipe(1, 1, [ItemId.OakLog], { itemId: ItemId.OakPlanks, count: 4 }, 2),
  recipe(1, 2, [ItemId.OakPlanks, ItemId.OakPlanks], { itemId: ItemId.Stick, count: 4 }, 2),
  recipe(
    1,
    2,
    [ItemId.Coal, ItemId.Stick],
    { itemId: ItemId.Torch, count: 4 },
    2,
  ),
  recipe(
    2,
    2,
    [ItemId.OakPlanks, ItemId.OakPlanks, ItemId.OakPlanks, ItemId.OakPlanks],
    { itemId: ItemId.CraftingTable, count: 1 },
    2,
  ),
  recipe(
    3,
    3,
    [
      ItemId.Cobblestone,
      ItemId.Cobblestone,
      ItemId.Cobblestone,
      ItemId.Cobblestone,
      null,
      ItemId.Cobblestone,
      ItemId.Cobblestone,
      ItemId.Cobblestone,
      ItemId.Cobblestone,
    ],
    { itemId: ItemId.Furnace, count: 1 },
    3,
  ),
  recipe(
    3,
    3,
    [
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      null,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
    ],
    { itemId: ItemId.Chest, count: 1 },
    3,
  ),
  recipe(
    3,
    3,
    [ItemId.Stick, null, ItemId.Stick, ItemId.Stick, ItemId.Stick, ItemId.Stick, ItemId.Stick, null, ItemId.Stick],
    { itemId: ItemId.Ladder, count: 3 },
    3,
  ),
  recipe(
    3,
    3,
    [
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      null,
      ItemId.Stick,
      null,
    ],
    { itemId: ItemId.Sign, count: 3 },
    3,
  ),
  recipe(
    3,
    2,
    [ItemId.OakPlanks, null, ItemId.OakPlanks, null, ItemId.OakPlanks, null],
    { itemId: ItemId.Bowl, count: 4 },
    3,
  ),
  recipe(
    3,
    2,
    [ItemId.IronIngot, null, ItemId.IronIngot, null, ItemId.IronIngot, null],
    { itemId: ItemId.Bucket, count: 1 },
    3,
  ),
  recipe(
    2,
    2,
    [null, ItemId.IronIngot, ItemId.IronIngot, null],
    { itemId: ItemId.Shears, count: 1 },
    2,
  ),
  recipe(
    3,
    3,
    [
      ItemId.OakPlanks,
      ItemId.IronIngot,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      ItemId.OakPlanks,
      null,
      ItemId.OakPlanks,
      null,
    ],
    { itemId: ItemId.Shield, count: 1 },
    3,
  ),
  recipe(
    3,
    2,
    [
      ItemId.IronIngot,
      null,
      ItemId.IronIngot,
      ItemId.IronIngot,
      ItemId.IronIngot,
      ItemId.IronIngot,
    ],
    { itemId: ItemId.Minecart, count: 1 },
    3,
  ),
  ...toolRecipes(ItemId.OakPlanks, {
    axe: ItemId.WoodenAxe,
    hoe: ItemId.WoodenHoe,
    pickaxe: ItemId.WoodenPickaxe,
    shovel: ItemId.WoodenShovel,
    sword: ItemId.WoodenSword,
  }),
  ...toolRecipes(ItemId.Cobblestone, {
    axe: ItemId.StoneAxe,
    hoe: ItemId.StoneHoe,
    pickaxe: ItemId.StonePickaxe,
    shovel: ItemId.StoneShovel,
    sword: ItemId.StoneSword,
  }),
  ...toolRecipes(ItemId.IronIngot, {
    axe: ItemId.IronAxe,
    hoe: ItemId.IronHoe,
    pickaxe: ItemId.IronPickaxe,
    shovel: ItemId.IronShovel,
    sword: ItemId.IronSword,
  }),
  ...toolRecipes(ItemId.GoldIngot, {
    axe: ItemId.GoldAxe,
    hoe: ItemId.GoldHoe,
    pickaxe: ItemId.GoldPickaxe,
    shovel: ItemId.GoldShovel,
    sword: ItemId.GoldSword,
  }),
  ...toolRecipes(ItemId.Diamond, {
    axe: ItemId.DiamondAxe,
    hoe: ItemId.DiamondHoe,
    pickaxe: ItemId.DiamondPickaxe,
    shovel: ItemId.DiamondShovel,
    sword: ItemId.DiamondSword,
  }),
  ...armorRecipes(ItemId.IronIngot, {
    boots: ItemId.IronBoots,
    chestplate: ItemId.IronChestplate,
    helmet: ItemId.IronHelmet,
    leggings: ItemId.IronLeggings,
  }),
  ...armorRecipes(ItemId.GoldIngot, {
    boots: ItemId.GoldBoots,
    chestplate: ItemId.GoldChestplate,
    helmet: ItemId.GoldHelmet,
    leggings: ItemId.GoldLeggings,
  }),
  ...armorRecipes(ItemId.Diamond, {
    boots: ItemId.DiamondBoots,
    chestplate: ItemId.DiamondChestplate,
    helmet: ItemId.DiamondHelmet,
    leggings: ItemId.DiamondLeggings,
  }),
];

const arraysEqual = (
  left: Array<CraftingItemId | null>,
  right: Array<CraftingItemId | null>,
): boolean => {
  if (left.length !== right.length) {
    return false;
  }

  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }

  return true;
};

const mirrorPattern = (
  pattern: Array<CraftingItemId | null>,
  width: number,
  height: number,
): Array<CraftingItemId | null> => {
  const mirrored: Array<CraftingItemId | null> = [];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      mirrored.push(pattern[y * width + (width - 1 - x)]);
    }
  }

  return mirrored;
};

const normalizeGrid = (
  slots: CraftingSlot[],
  gridSize: 2 | 3,
):
  | {
      height: number;
      occupiedIndices: number[];
      pattern: Array<CraftingItemId | null>;
      width: number;
    }
  | null => {
  let minX: number = gridSize;
  let minY: number = gridSize;
  let maxX = -1;
  let maxY = -1;

  for (let index = 0; index < slots.length; index += 1) {
    const slot = slots[index];

    if (slot.count <= 0 || slot.itemId === ItemId.Air) {
      continue;
    }

    const x = index % gridSize;
    const y = Math.floor(index / gridSize);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  if (maxX < 0 || maxY < 0) {
    return null;
  }

  const width = (maxX - minX + 1) as 1 | 2 | 3;
  const height = (maxY - minY + 1) as 1 | 2 | 3;
  const pattern: Array<CraftingItemId | null> = [];
  const occupiedIndices: number[] = [];

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const index = y * gridSize + x;
      const slot = slots[index];

      if (slot.count > 0 && slot.itemId !== ItemId.Air) {
        pattern.push(slot.itemId);
        occupiedIndices.push(index);
        continue;
      }

      pattern.push(null);
    }
  }

  return {
    width,
    height,
    pattern,
    occupiedIndices,
  };
};

export const findCraftingMatch = (
  slots: CraftingSlot[],
  gridSize: 2 | 3,
): CraftingMatch | null => {
  const normalized = normalizeGrid(slots, gridSize);

  if (!normalized) {
    return null;
  }

  for (const currentRecipe of RECIPES) {
    if (currentRecipe.minGridSize > gridSize) {
      continue;
    }

    if (
      currentRecipe.width !== normalized.width ||
      currentRecipe.height !== normalized.height
    ) {
      continue;
    }

    if (
      arraysEqual(normalized.pattern, currentRecipe.ingredients) ||
      arraysEqual(
        mirrorPattern(normalized.pattern, normalized.width, normalized.height),
        currentRecipe.ingredients,
      )
    ) {
      return {
        occupiedIndices: [...normalized.occupiedIndices],
        output: { ...currentRecipe.output },
      };
    }
  }

  return null;
};
