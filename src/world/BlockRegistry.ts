import { type BlockTextureKey } from './BlockTextures';

export type BlockFace = 'top' | 'bottom' | 'north' | 'south' | 'east' | 'west';
export type BlockId = number;

type FaceTextures = Record<BlockFace, BlockTextureKey>;

export const BlockId = {
  Air: 0,
  Grass: 1,
  Dirt: 2,
  Stone: 3,
  Cobblestone: 4,
  OakLog: 5,
  OakLeaves: 6,
  OakPlanks: 7,
  Bedrock: 8,
  Sand: 9,
  Gravel: 10,
  CoalOre: 11,
  IronOre: 12,
  GoldOre: 13,
  DiamondOre: 14,
  Water: 15,
  Glass: 16,
  CraftingTable: 17,
  Furnace: 18,
  Chest: 19,
} as const;

type BlockDefinition = {
  faceTextures: FaceTextures;
  hardness: number;
  itemTexture?: BlockTextureKey;
  dropId?: BlockId;
  name: string;
  solid: boolean;
  opaque: boolean;
  renderable: boolean;
};

const allFaces = (texture: BlockTextureKey): FaceTextures => ({
  top: texture,
  bottom: texture,
  north: texture,
  south: texture,
  east: texture,
  west: texture,
});

const sidedFaces = (
  top: BlockTextureKey,
  bottom: BlockTextureKey,
  side: BlockTextureKey,
): FaceTextures => ({
  top,
  bottom,
  north: side,
  south: side,
  east: side,
  west: side,
});

const furnaceFaces = (): FaceTextures => ({
  top: 'furnace_top',
  bottom: 'furnace_top',
  north: 'furnace_front',
  south: 'furnace_side',
  east: 'furnace_side',
  west: 'furnace_side',
});

const chestFaces = (): FaceTextures => ({
  top: 'chest_top',
  bottom: 'chest_top',
  north: 'chest_front',
  south: 'chest_side',
  east: 'chest_side',
  west: 'chest_side',
});

const craftingFaces = (): FaceTextures => ({
  top: 'crafting_top',
  bottom: 'oak_planks',
  north: 'crafting_front',
  south: 'crafting_side',
  east: 'crafting_side',
  west: 'crafting_side',
});

const blocks = new Map<BlockId, BlockDefinition>([
  [
    BlockId.Air,
    {
      name: 'Air',
      dropId: BlockId.Air,
      hardness: 0,
      solid: false,
      opaque: false,
      renderable: false,
      faceTextures: allFaces('stone'),
    },
  ],
  [
    BlockId.Grass,
    {
      name: 'Grass',
      dropId: BlockId.Dirt,
      hardness: 0.6,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: sidedFaces('grass_top', 'dirt', 'grass_side'),
    },
  ],
  [
    BlockId.Dirt,
    {
      name: 'Dirt',
      dropId: BlockId.Dirt,
      hardness: 0.5,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('dirt'),
    },
  ],
  [
    BlockId.Stone,
    {
      name: 'Stone',
      dropId: BlockId.Cobblestone,
      hardness: 1.5,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('stone'),
    },
  ],
  [
    BlockId.Cobblestone,
    {
      name: 'Cobblestone',
      dropId: BlockId.Cobblestone,
      hardness: 2,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('cobblestone'),
    },
  ],
  [
    BlockId.OakLog,
    {
      name: 'Oak Log',
      dropId: BlockId.OakLog,
      hardness: 2,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: sidedFaces('oak_log_top', 'oak_log_top', 'oak_log_side'),
    },
  ],
  [
    BlockId.OakLeaves,
    {
      name: 'Oak Leaves',
      dropId: BlockId.Air,
      hardness: 0.2,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('oak_leaves'),
    },
  ],
  [
    BlockId.OakPlanks,
    {
      name: 'Oak Planks',
      dropId: BlockId.OakPlanks,
      hardness: 2,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('oak_planks'),
    },
  ],
  [
    BlockId.Bedrock,
    {
      name: 'Bedrock',
      dropId: BlockId.Air,
      hardness: Number.POSITIVE_INFINITY,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('bedrock'),
    },
  ],
  [
    BlockId.Sand,
    {
      name: 'Sand',
      dropId: BlockId.Sand,
      hardness: 0.5,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('sand'),
    },
  ],
  [
    BlockId.Gravel,
    {
      name: 'Gravel',
      dropId: BlockId.Gravel,
      hardness: 0.6,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('gravel'),
    },
  ],
  [
    BlockId.CoalOre,
    {
      name: 'Coal Ore',
      dropId: BlockId.CoalOre,
      hardness: 3,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('coal_ore'),
    },
  ],
  [
    BlockId.IronOre,
    {
      name: 'Iron Ore',
      dropId: BlockId.IronOre,
      hardness: 3,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('iron_ore'),
    },
  ],
  [
    BlockId.GoldOre,
    {
      name: 'Gold Ore',
      dropId: BlockId.GoldOre,
      hardness: 3,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('gold_ore'),
    },
  ],
  [
    BlockId.DiamondOre,
    {
      name: 'Diamond Ore',
      dropId: BlockId.DiamondOre,
      hardness: 3,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: allFaces('diamond_ore'),
    },
  ],
  [
    BlockId.Water,
    {
      name: 'Water',
      dropId: BlockId.Air,
      hardness: 0,
      solid: false,
      opaque: false,
      renderable: true,
      faceTextures: allFaces('water'),
    },
  ],
  [
    BlockId.Glass,
    {
      name: 'Glass',
      dropId: BlockId.Air,
      hardness: 0.3,
      solid: true,
      opaque: false,
      renderable: true,
      faceTextures: allFaces('glass'),
    },
  ],
  [
    BlockId.CraftingTable,
    {
      name: 'Crafting Table',
      dropId: BlockId.CraftingTable,
      hardness: 2.5,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: craftingFaces(),
    },
  ],
  [
    BlockId.Furnace,
    {
      name: 'Furnace',
      dropId: BlockId.Furnace,
      hardness: 3.5,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: furnaceFaces(),
    },
  ],
  [
    BlockId.Chest,
    {
      name: 'Chest',
      dropId: BlockId.Chest,
      hardness: 2.5,
      solid: true,
      opaque: true,
      renderable: true,
      faceTextures: chestFaces(),
    },
  ],
]);

export const BlockRegistry = {
  getName(id: BlockId): string {
    return (blocks.get(id) ?? blocks.get(BlockId.Air)!).name;
  },

  getFaceTexture(id: BlockId, face: BlockFace): BlockTextureKey {
    return (blocks.get(id) ?? blocks.get(BlockId.Air)!).faceTextures[face];
  },

  getInventoryTexture(id: BlockId): BlockTextureKey {
    const definition = blocks.get(id) ?? blocks.get(BlockId.Air)!;
    return definition.itemTexture ?? definition.faceTextures.north;
  },

  getHardness(id: BlockId): number {
    return (blocks.get(id) ?? blocks.get(BlockId.Air)!).hardness;
  },

  getDropId(id: BlockId): BlockId {
    const definition = blocks.get(id) ?? blocks.get(BlockId.Air)!;
    return definition.dropId ?? id;
  },

  isSolid(id: BlockId): boolean {
    return (blocks.get(id) ?? blocks.get(BlockId.Air)!).solid;
  },

  isOpaque(id: BlockId): boolean {
    return (blocks.get(id) ?? blocks.get(BlockId.Air)!).opaque;
  },

  isRenderable(id: BlockId): boolean {
    return (blocks.get(id) ?? blocks.get(BlockId.Air)!).renderable;
  },

  isLiquid(id: BlockId): boolean {
    return id === BlockId.Water;
  },
};
