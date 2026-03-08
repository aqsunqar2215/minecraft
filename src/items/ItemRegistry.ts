import { BlockId, BlockRegistry } from '../world/BlockRegistry';
import { type BlockTextureKey } from '../world/BlockTextures';

export type ItemId = number;
export type ToolType = 'axe' | 'hoe' | 'pickaxe' | 'shears' | 'shovel' | 'sword';

type ItemKind = 'armor' | 'block' | 'material' | 'tool' | 'utility';

type ToolDefinition = {
  harvestLevel: number;
  miningSpeed: number;
  type: ToolType;
};

type ItemVisual =
  | {
      kind: 'block';
      texture: BlockTextureKey;
    }
  | {
      dataUrl: string;
      kind: 'svg';
    };

type ItemDefinition = {
  kind: ItemKind;
  maxStackSize: number;
  name: string;
  placeBlockId?: BlockId;
  tint: number;
  tool?: ToolDefinition;
  visual: ItemVisual;
};

const svgDataUrl = (content: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(content)}`;

const createSvgIcon = (shapes: string[]): string =>
  svgDataUrl(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">${shapes.join(
      '',
    )}</svg>`,
  );

const rect = (x: number, y: number, width: number, height: number, fill: string): string =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}"/>`;

const polygon = (points: string, fill: string): string =>
  `<polygon points="${points}" fill="${fill}"/>`;

const circle = (cx: number, cy: number, radius: number, fill: string): string =>
  `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${fill}"/>`;

const toolHandle = '#69452a';
const toolHandleLight = '#9b6b42';

const materialPalette = {
  wood: { dark: '#7b5127', light: '#d6a25d', mid: '#b98245', tint: 0xb98245 },
  stone: { dark: '#5a5a5a', light: '#b3b3b3', mid: '#858585', tint: 0x858585 },
  iron: { dark: '#8893a2', light: '#e5edf5', mid: '#c0c9d4', tint: 0xc0c9d4 },
  gold: { dark: '#a5760d', light: '#ffe175', mid: '#dfb63b', tint: 0xdfb63b },
  diamond: { dark: '#1f97a6', light: '#bfffff', mid: '#4cd6e4', tint: 0x4cd6e4 },
} as const;

const createMaterialIcon = (primary: string, highlight: string, shadow: string): string =>
  createSvgIcon([
    polygon('8,1 14,6 12,13 4,15 2,6', shadow),
    polygon('8,2 13,6 11.5,12 4.5,14 3,6', primary),
    polygon('8,3 11.5,6 10.5,10.5 6,12.5 4.5,6', highlight),
  ]);

const createIngotIcon = (primary: string, highlight: string, shadow: string): string =>
  createSvgIcon([
    polygon('3,10 5,5 11,5 13,10 11,12 5,12', shadow),
    polygon('3.5,9.5 5.3,5.8 10.7,5.8 12.5,9.5 10.8,11.2 5.2,11.2', primary),
    rect(5, 6, 6, 1, highlight),
    rect(4.5, 8, 7, 1, highlight),
  ]);

const createStickIcon = (): string =>
  createSvgIcon([
    polygon('6,14 8,14 10,2 8,2', toolHandle),
    polygon('7,14 8.5,14 10.5,2 9,2', toolHandleLight),
  ]);

const createTorchIcon = (): string =>
  createSvgIcon([
    polygon('6,15 8,15 10,6 8,6', toolHandle),
    polygon('7,15 8.5,15 10.2,6 8.9,6', toolHandleLight),
    polygon('5,7 7,3 9,1 11,3 10,7', '#ff8f24'),
    polygon('6,7 7.5,4.5 8.6,3.2 10,4.2 9.4,7', '#ffe178'),
  ]);

const createLadderIcon = (): string =>
  createSvgIcon([
    rect(3, 1, 2, 14, toolHandle),
    rect(11, 1, 2, 14, toolHandle),
    rect(5, 3, 6, 2, toolHandleLight),
    rect(5, 7, 6, 2, toolHandleLight),
    rect(5, 11, 6, 2, toolHandleLight),
  ]);

const createSignIcon = (): string =>
  createSvgIcon([
    rect(2, 2, 12, 7, '#8f5d2e'),
    rect(3, 3, 10, 5, '#b98245'),
    rect(7, 9, 2, 5, toolHandle),
    rect(4, 5, 8, 1, '#d6a25d'),
  ]);

const createBowlIcon = (): string =>
  createSvgIcon([
    polygon('2,7 4,11 12,11 14,7 12,13 4,13', '#8f5d2e'),
    polygon('4,7.5 5,10 11,10 12,7.5 10.8,11.5 5.2,11.5', '#c99151'),
  ]);

const createBucketIcon = (): string =>
  createSvgIcon([
    rect(4, 4, 8, 2, '#77808d'),
    rect(3, 6, 2, 7, '#77808d'),
    rect(11, 6, 2, 7, '#77808d'),
    rect(5, 11, 6, 2, '#c6d0db'),
    rect(5, 6, 6, 5, '#98a3b1'),
  ]);

const createShieldIcon = (): string =>
  createSvgIcon([
    polygon('8,1 13,4 12,11 8,15 4,11 3,4', '#6e4a26'),
    polygon('8,2 12,4.5 11,10.5 8,13.6 5,10.5 4,4.5', '#b88346'),
    rect(7, 3, 2, 8, '#d1c4a4'),
    rect(5, 6, 6, 2, '#d1c4a4'),
  ]);

const createShearsIcon = (): string =>
  createSvgIcon([
    circle(5, 11, 2.2, '#aab4c2'),
    circle(11, 11, 2.2, '#aab4c2'),
    polygon('5,10 8,8 12,2 13,3 9,9 6,11', '#d7dfe9'),
    polygon('11,10 8,8 4,2 3,3 7,9 10,11', '#8e98a5'),
  ]);

const createMinecartIcon = (): string =>
  createSvgIcon([
    polygon('2,5 4,12 12,12 14,5 12,5 11,9 5,9 4,5', '#6a7381'),
    rect(4, 5, 8, 4, '#a2acba'),
    circle(5, 13, 1.5, '#49515d'),
    circle(11, 13, 1.5, '#49515d'),
  ]);

const createPickaxeIcon = (palette: (typeof materialPalette)[keyof typeof materialPalette]): string =>
  createSvgIcon([
    rect(7, 4, 2, 10, toolHandle),
    rect(8, 4, 1, 10, toolHandleLight),
    rect(2, 1, 12, 2, palette.dark),
    rect(3, 3, 2, 2, palette.mid),
    rect(7, 3, 2, 2, palette.light),
    rect(11, 3, 2, 2, palette.mid),
  ]);

const createAxeIcon = (palette: (typeof materialPalette)[keyof typeof materialPalette]): string =>
  createSvgIcon([
    rect(8, 3, 2, 11, toolHandle),
    rect(9, 3, 1, 11, toolHandleLight),
    rect(4, 1, 5, 5, palette.dark),
    rect(5, 2, 5, 4, palette.mid),
    rect(4, 5, 3, 2, palette.light),
  ]);

const createShovelIcon = (palette: (typeof materialPalette)[keyof typeof materialPalette]): string =>
  createSvgIcon([
    rect(7, 5, 2, 9, toolHandle),
    rect(8, 5, 1, 9, toolHandleLight),
    polygon('5,1 11,1 12,5 4,5', palette.dark),
    polygon('6,2 10,2 10.8,4.2 5.2,4.2', palette.light),
  ]);

const createHoeIcon = (palette: (typeof materialPalette)[keyof typeof materialPalette]): string =>
  createSvgIcon([
    rect(8, 3, 2, 11, toolHandle),
    rect(9, 3, 1, 11, toolHandleLight),
    rect(4, 1, 6, 2, palette.dark),
    rect(4, 3, 3, 2, palette.mid),
    rect(7, 3, 2, 1, palette.light),
  ]);

const createSwordIcon = (palette: (typeof materialPalette)[keyof typeof materialPalette]): string =>
  createSvgIcon([
    rect(7, 2, 2, 8, palette.dark),
    polygon('8,1 10,3 6,3', palette.light),
    rect(5, 9, 6, 2, palette.mid),
    rect(7, 11, 2, 4, toolHandle),
    rect(6, 13, 4, 1, toolHandleLight),
  ]);

const createHelmetIcon = (palette: (typeof materialPalette)[keyof typeof materialPalette]): string =>
  createSvgIcon([
    rect(3, 3, 10, 3, palette.dark),
    rect(2, 6, 3, 5, palette.mid),
    rect(11, 6, 3, 5, palette.mid),
    rect(5, 6, 6, 4, palette.light),
    rect(6, 10, 4, 1, palette.dark),
  ]);

const createChestplateIcon = (
  palette: (typeof materialPalette)[keyof typeof materialPalette],
): string =>
  createSvgIcon([
    rect(2, 2, 4, 4, palette.dark),
    rect(10, 2, 4, 4, palette.dark),
    rect(5, 3, 6, 3, palette.light),
    rect(3, 6, 10, 8, palette.mid),
    rect(6, 7, 4, 6, palette.light),
  ]);

const createLeggingsIcon = (
  palette: (typeof materialPalette)[keyof typeof materialPalette],
): string =>
  createSvgIcon([
    rect(3, 2, 10, 4, palette.dark),
    rect(4, 6, 4, 8, palette.mid),
    rect(8, 6, 4, 8, palette.mid),
    rect(5, 7, 2, 6, palette.light),
    rect(9, 7, 2, 6, palette.light),
  ]);

const createBootsIcon = (palette: (typeof materialPalette)[keyof typeof materialPalette]): string =>
  createSvgIcon([
    rect(3, 3, 4, 7, palette.dark),
    rect(9, 3, 4, 7, palette.dark),
    rect(2, 10, 6, 3, palette.mid),
    rect(8, 10, 6, 3, palette.mid),
    rect(3, 11, 3, 1, palette.light),
    rect(10, 11, 3, 1, palette.light),
  ]);

export const ItemId = {
  Air: BlockId.Air,
  Grass: BlockId.Grass,
  Dirt: BlockId.Dirt,
  Stone: BlockId.Stone,
  Cobblestone: BlockId.Cobblestone,
  OakLog: BlockId.OakLog,
  OakLeaves: BlockId.OakLeaves,
  OakPlanks: BlockId.OakPlanks,
  Bedrock: BlockId.Bedrock,
  Sand: BlockId.Sand,
  Gravel: BlockId.Gravel,
  CoalOre: BlockId.CoalOre,
  IronOre: BlockId.IronOre,
  GoldOre: BlockId.GoldOre,
  DiamondOre: BlockId.DiamondOre,
  Water: BlockId.Water,
  Glass: BlockId.Glass,
  CraftingTable: BlockId.CraftingTable,
  Furnace: BlockId.Furnace,
  Chest: BlockId.Chest,
  Stick: 1000,
  Coal: 1001,
  IronIngot: 1002,
  GoldIngot: 1003,
  Diamond: 1004,
  Torch: 1005,
  Ladder: 1006,
  Bowl: 1007,
  Sign: 1008,
  Bucket: 1009,
  Shield: 1010,
  Shears: 1011,
  Minecart: 1012,
  WoodenPickaxe: 1100,
  WoodenAxe: 1101,
  WoodenShovel: 1102,
  WoodenHoe: 1103,
  WoodenSword: 1104,
  StonePickaxe: 1200,
  StoneAxe: 1201,
  StoneShovel: 1202,
  StoneHoe: 1203,
  StoneSword: 1204,
  IronPickaxe: 1300,
  IronAxe: 1301,
  IronShovel: 1302,
  IronHoe: 1303,
  IronSword: 1304,
  GoldPickaxe: 1400,
  GoldAxe: 1401,
  GoldShovel: 1402,
  GoldHoe: 1403,
  GoldSword: 1404,
  DiamondPickaxe: 1500,
  DiamondAxe: 1501,
  DiamondShovel: 1502,
  DiamondHoe: 1503,
  DiamondSword: 1504,
  IronHelmet: 1600,
  IronChestplate: 1601,
  IronLeggings: 1602,
  IronBoots: 1603,
  GoldHelmet: 1700,
  GoldChestplate: 1701,
  GoldLeggings: 1702,
  GoldBoots: 1703,
  DiamondHelmet: 1800,
  DiamondChestplate: 1801,
  DiamondLeggings: 1802,
  DiamondBoots: 1803,
} as const;

const BLOCK_ITEM_IDS: ItemId[] = [
  ItemId.Air,
  ItemId.Grass,
  ItemId.Dirt,
  ItemId.Stone,
  ItemId.Cobblestone,
  ItemId.OakLog,
  ItemId.OakLeaves,
  ItemId.OakPlanks,
  ItemId.Bedrock,
  ItemId.Sand,
  ItemId.Gravel,
  ItemId.CoalOre,
  ItemId.IronOre,
  ItemId.GoldOre,
  ItemId.DiamondOre,
  ItemId.Water,
  ItemId.Glass,
  ItemId.CraftingTable,
  ItemId.Furnace,
  ItemId.Chest,
];

const definitions = new Map<ItemId, ItemDefinition>();

for (const blockItemId of BLOCK_ITEM_IDS) {
  definitions.set(blockItemId, {
    kind: 'block',
    maxStackSize: blockItemId === ItemId.Air ? 0 : 64,
    name: BlockRegistry.getName(blockItemId),
    placeBlockId:
      blockItemId !== ItemId.Air && BlockRegistry.isRenderable(blockItemId)
        ? blockItemId
        : undefined,
    tint: 0xffffff,
    visual: {
      kind: 'block',
      texture: BlockRegistry.getInventoryTexture(blockItemId),
    },
  });
}

definitions.set(ItemId.Stick, {
  kind: 'material',
  maxStackSize: 64,
  name: 'Stick',
  tint: 0xb98245,
  visual: { kind: 'svg', dataUrl: createStickIcon() },
});

definitions.set(ItemId.Coal, {
  kind: 'material',
  maxStackSize: 64,
  name: 'Coal',
  tint: 0x2f2f2f,
  visual: {
    kind: 'svg',
    dataUrl: createMaterialIcon('#3d3d3d', '#616161', '#171717'),
  },
});

definitions.set(ItemId.IronIngot, {
  kind: 'material',
  maxStackSize: 64,
  name: 'Iron Ingot',
  tint: materialPalette.iron.tint,
  visual: {
    kind: 'svg',
    dataUrl: createIngotIcon('#c0c9d4', '#edf4fb', '#8d97a6'),
  },
});

definitions.set(ItemId.GoldIngot, {
  kind: 'material',
  maxStackSize: 64,
  name: 'Gold Ingot',
  tint: materialPalette.gold.tint,
  visual: {
    kind: 'svg',
    dataUrl: createIngotIcon('#dfb63b', '#ffe67b', '#9d7114'),
  },
});

definitions.set(ItemId.Diamond, {
  kind: 'material',
  maxStackSize: 64,
  name: 'Diamond',
  tint: materialPalette.diamond.tint,
  visual: {
    kind: 'svg',
    dataUrl: createMaterialIcon('#4cd6e4', '#bfffff', '#177985'),
  },
});

definitions.set(ItemId.Torch, {
  kind: 'utility',
  maxStackSize: 64,
  name: 'Torch',
  tint: 0xffbc49,
  visual: { kind: 'svg', dataUrl: createTorchIcon() },
});

definitions.set(ItemId.Ladder, {
  kind: 'utility',
  maxStackSize: 64,
  name: 'Ladder',
  tint: 0xb98245,
  visual: { kind: 'svg', dataUrl: createLadderIcon() },
});

definitions.set(ItemId.Bowl, {
  kind: 'utility',
  maxStackSize: 64,
  name: 'Bowl',
  tint: 0xb98245,
  visual: { kind: 'svg', dataUrl: createBowlIcon() },
});

definitions.set(ItemId.Sign, {
  kind: 'utility',
  maxStackSize: 16,
  name: 'Oak Sign',
  tint: 0xb98245,
  visual: { kind: 'svg', dataUrl: createSignIcon() },
});

definitions.set(ItemId.Bucket, {
  kind: 'utility',
  maxStackSize: 16,
  name: 'Bucket',
  tint: materialPalette.iron.tint,
  visual: { kind: 'svg', dataUrl: createBucketIcon() },
});

definitions.set(ItemId.Shield, {
  kind: 'utility',
  maxStackSize: 1,
  name: 'Shield',
  tint: 0xb98245,
  visual: { kind: 'svg', dataUrl: createShieldIcon() },
});

definitions.set(ItemId.Shears, {
  kind: 'tool',
  maxStackSize: 1,
  name: 'Shears',
  tint: materialPalette.iron.tint,
  tool: {
    harvestLevel: 0,
    miningSpeed: 2,
    type: 'shears',
  },
  visual: { kind: 'svg', dataUrl: createShearsIcon() },
});

definitions.set(ItemId.Minecart, {
  kind: 'utility',
  maxStackSize: 1,
  name: 'Minecart',
  tint: 0xa2acba,
  visual: { kind: 'svg', dataUrl: createMinecartIcon() },
});

const registerToolSet = (
  material: keyof typeof materialPalette,
  items: {
    axe: ItemId;
    hoe: ItemId;
    pickaxe: ItemId;
    shovel: ItemId;
    sword: ItemId;
  },
  stats: {
    harvestLevel: number;
    miningSpeed: number;
  },
  label: string,
): void => {
  const palette = materialPalette[material];

  definitions.set(items.pickaxe, {
    kind: 'tool',
    maxStackSize: 1,
    name: `${label} Pickaxe`,
    tint: palette.tint,
    tool: {
      harvestLevel: stats.harvestLevel,
      miningSpeed: stats.miningSpeed,
      type: 'pickaxe',
    },
    visual: { kind: 'svg', dataUrl: createPickaxeIcon(palette) },
  });
  definitions.set(items.axe, {
    kind: 'tool',
    maxStackSize: 1,
    name: `${label} Axe`,
    tint: palette.tint,
    tool: {
      harvestLevel: stats.harvestLevel,
      miningSpeed: stats.miningSpeed,
      type: 'axe',
    },
    visual: { kind: 'svg', dataUrl: createAxeIcon(palette) },
  });
  definitions.set(items.shovel, {
    kind: 'tool',
    maxStackSize: 1,
    name: `${label} Shovel`,
    tint: palette.tint,
    tool: {
      harvestLevel: stats.harvestLevel,
      miningSpeed: stats.miningSpeed,
      type: 'shovel',
    },
    visual: { kind: 'svg', dataUrl: createShovelIcon(palette) },
  });
  definitions.set(items.hoe, {
    kind: 'tool',
    maxStackSize: 1,
    name: `${label} Hoe`,
    tint: palette.tint,
    tool: {
      harvestLevel: stats.harvestLevel,
      miningSpeed: stats.miningSpeed,
      type: 'hoe',
    },
    visual: { kind: 'svg', dataUrl: createHoeIcon(palette) },
  });
  definitions.set(items.sword, {
    kind: 'tool',
    maxStackSize: 1,
    name: `${label} Sword`,
    tint: palette.tint,
    tool: {
      harvestLevel: stats.harvestLevel,
      miningSpeed: stats.miningSpeed,
      type: 'sword',
    },
    visual: { kind: 'svg', dataUrl: createSwordIcon(palette) },
  });
};

registerToolSet(
  'wood',
  {
    axe: ItemId.WoodenAxe,
    hoe: ItemId.WoodenHoe,
    pickaxe: ItemId.WoodenPickaxe,
    shovel: ItemId.WoodenShovel,
    sword: ItemId.WoodenSword,
  },
  {
    harvestLevel: 1,
    miningSpeed: 2,
  },
  'Wooden',
);

registerToolSet(
  'stone',
  {
    axe: ItemId.StoneAxe,
    hoe: ItemId.StoneHoe,
    pickaxe: ItemId.StonePickaxe,
    shovel: ItemId.StoneShovel,
    sword: ItemId.StoneSword,
  },
  {
    harvestLevel: 2,
    miningSpeed: 4,
  },
  'Stone',
);

registerToolSet(
  'iron',
  {
    axe: ItemId.IronAxe,
    hoe: ItemId.IronHoe,
    pickaxe: ItemId.IronPickaxe,
    shovel: ItemId.IronShovel,
    sword: ItemId.IronSword,
  },
  {
    harvestLevel: 3,
    miningSpeed: 6,
  },
  'Iron',
);

registerToolSet(
  'gold',
  {
    axe: ItemId.GoldAxe,
    hoe: ItemId.GoldHoe,
    pickaxe: ItemId.GoldPickaxe,
    shovel: ItemId.GoldShovel,
    sword: ItemId.GoldSword,
  },
  {
    harvestLevel: 1,
    miningSpeed: 12,
  },
  'Golden',
);

registerToolSet(
  'diamond',
  {
    axe: ItemId.DiamondAxe,
    hoe: ItemId.DiamondHoe,
    pickaxe: ItemId.DiamondPickaxe,
    shovel: ItemId.DiamondShovel,
    sword: ItemId.DiamondSword,
  },
  {
    harvestLevel: 4,
    miningSpeed: 8,
  },
  'Diamond',
);

const registerArmorSet = (
  material: keyof typeof materialPalette,
  items: {
    boots: ItemId;
    chestplate: ItemId;
    helmet: ItemId;
    leggings: ItemId;
  },
  label: string,
): void => {
  const palette = materialPalette[material];

  definitions.set(items.helmet, {
    kind: 'armor',
    maxStackSize: 1,
    name: `${label} Helmet`,
    tint: palette.tint,
    visual: { kind: 'svg', dataUrl: createHelmetIcon(palette) },
  });
  definitions.set(items.chestplate, {
    kind: 'armor',
    maxStackSize: 1,
    name: `${label} Chestplate`,
    tint: palette.tint,
    visual: { kind: 'svg', dataUrl: createChestplateIcon(palette) },
  });
  definitions.set(items.leggings, {
    kind: 'armor',
    maxStackSize: 1,
    name: `${label} Leggings`,
    tint: palette.tint,
    visual: { kind: 'svg', dataUrl: createLeggingsIcon(palette) },
  });
  definitions.set(items.boots, {
    kind: 'armor',
    maxStackSize: 1,
    name: `${label} Boots`,
    tint: palette.tint,
    visual: { kind: 'svg', dataUrl: createBootsIcon(palette) },
  });
};

registerArmorSet(
  'iron',
  {
    boots: ItemId.IronBoots,
    chestplate: ItemId.IronChestplate,
    helmet: ItemId.IronHelmet,
    leggings: ItemId.IronLeggings,
  },
  'Iron',
);

registerArmorSet(
  'gold',
  {
    boots: ItemId.GoldBoots,
    chestplate: ItemId.GoldChestplate,
    helmet: ItemId.GoldHelmet,
    leggings: ItemId.GoldLeggings,
  },
  'Golden',
);

registerArmorSet(
  'diamond',
  {
    boots: ItemId.DiamondBoots,
    chestplate: ItemId.DiamondChestplate,
    helmet: ItemId.DiamondHelmet,
    leggings: ItemId.DiamondLeggings,
  },
  'Diamond',
);

export const ItemRegistry = {
  getName(id: ItemId): string {
    return (definitions.get(id) ?? definitions.get(ItemId.Air)!).name;
  },

  getKind(id: ItemId): ItemKind {
    return (definitions.get(id) ?? definitions.get(ItemId.Air)!).kind;
  },

  getMaxStackSize(id: ItemId): number {
    return (definitions.get(id) ?? definitions.get(ItemId.Air)!).maxStackSize;
  },

  getPlaceBlockId(id: ItemId): BlockId {
    return (definitions.get(id) ?? definitions.get(ItemId.Air)!).placeBlockId ?? BlockId.Air;
  },

  getTint(id: ItemId): number {
    return (definitions.get(id) ?? definitions.get(ItemId.Air)!).tint;
  },

  getTool(id: ItemId): ToolDefinition | null {
    return (definitions.get(id) ?? definitions.get(ItemId.Air)!).tool ?? null;
  },

  getVisual(id: ItemId): ItemVisual {
    return (definitions.get(id) ?? definitions.get(ItemId.Air)!).visual;
  },

  has(id: ItemId): boolean {
    return definitions.has(id);
  },

  isPlaceable(id: ItemId): boolean {
    return this.getPlaceBlockId(id) !== BlockId.Air;
  },

  isTool(id: ItemId): boolean {
    return this.getTool(id) !== null;
  },
};
