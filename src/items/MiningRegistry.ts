import { ItemId, ItemRegistry, type ToolType } from './ItemRegistry';
import { BlockId, BlockRegistry } from '../world/BlockRegistry';

export type MiningToolType = Extract<ToolType, 'axe' | 'pickaxe' | 'shovel'>;

export type MiningProfile = {
  canHarvest: boolean;
  dropItemId: ItemId;
  durationSeconds: number;
  minHarvestLevel: number;
  preferredTool: MiningToolType | null;
  requiredTool: MiningToolType | null;
};

type BlockMiningDefinition = {
  dropItemId?: ItemId;
  minHarvestLevel?: number;
  preferredTool?: MiningToolType;
  requiredTool?: MiningToolType;
};

const DEFAULT_BLOCK_DEFINITION: BlockMiningDefinition = {};

const definitions = new Map<BlockId, BlockMiningDefinition>([
  [BlockId.Grass, { dropItemId: ItemId.Dirt, preferredTool: 'shovel' }],
  [BlockId.Dirt, { preferredTool: 'shovel' }],
  [
    BlockId.Stone,
    {
      dropItemId: ItemId.Cobblestone,
      minHarvestLevel: 1,
      preferredTool: 'pickaxe',
      requiredTool: 'pickaxe',
    },
  ],
  [
    BlockId.Cobblestone,
    {
      minHarvestLevel: 1,
      preferredTool: 'pickaxe',
      requiredTool: 'pickaxe',
    },
  ],
  [BlockId.OakLog, { preferredTool: 'axe' }],
  [BlockId.OakLeaves, { dropItemId: ItemId.Air }],
  [BlockId.OakPlanks, { preferredTool: 'axe' }],
  [BlockId.Bedrock, { dropItemId: ItemId.Air }],
  [BlockId.Sand, { preferredTool: 'shovel' }],
  [BlockId.Gravel, { preferredTool: 'shovel' }],
  [
    BlockId.CoalOre,
    {
      dropItemId: ItemId.Coal,
      minHarvestLevel: 1,
      preferredTool: 'pickaxe',
      requiredTool: 'pickaxe',
    },
  ],
  [
    BlockId.IronOre,
    {
      minHarvestLevel: 2,
      preferredTool: 'pickaxe',
      requiredTool: 'pickaxe',
    },
  ],
  [
    BlockId.GoldOre,
    {
      minHarvestLevel: 3,
      preferredTool: 'pickaxe',
      requiredTool: 'pickaxe',
    },
  ],
  [
    BlockId.DiamondOre,
    {
      dropItemId: ItemId.Diamond,
      minHarvestLevel: 3,
      preferredTool: 'pickaxe',
      requiredTool: 'pickaxe',
    },
  ],
  [BlockId.Water, { dropItemId: ItemId.Air }],
  [BlockId.Glass, { dropItemId: ItemId.Air }],
  [BlockId.CraftingTable, { preferredTool: 'axe' }],
  [
    BlockId.Furnace,
    {
      minHarvestLevel: 1,
      preferredTool: 'pickaxe',
      requiredTool: 'pickaxe',
    },
  ],
  [BlockId.Chest, { preferredTool: 'axe' }],
]);

const getDefinition = (blockId: BlockId): BlockMiningDefinition =>
  definitions.get(blockId) ?? DEFAULT_BLOCK_DEFINITION;

export const getMiningProfile = (blockId: BlockId, heldItemId: ItemId): MiningProfile => {
  const hardness = BlockRegistry.getHardness(blockId);

  if (!Number.isFinite(hardness) || hardness <= 0) {
    return {
      canHarvest: false,
      dropItemId: ItemId.Air,
      durationSeconds: Number.POSITIVE_INFINITY,
      minHarvestLevel: 0,
      preferredTool: null,
      requiredTool: null,
    };
  }

  const definition = getDefinition(blockId);
  const tool = ItemRegistry.getTool(heldItemId);
  const preferredTool = definition.preferredTool ?? null;
  const requiredTool = definition.requiredTool ?? null;
  const minHarvestLevel = definition.minHarvestLevel ?? 0;
  const isPreferredTool = !!tool && preferredTool === tool.type;
  const canHarvest =
    !requiredTool ||
    (!!tool && tool.type === requiredTool && tool.harvestLevel >= minHarvestLevel);
  const speedMultiplier = isPreferredTool ? tool.miningSpeed : 1;
  const durationSeconds = Math.max(
    0.18,
    (hardness * (canHarvest ? 1.5 : 5)) / speedMultiplier,
  );

  return {
    canHarvest,
    dropItemId: canHarvest ? definition.dropItemId ?? (blockId as ItemId) : ItemId.Air,
    durationSeconds,
    minHarvestLevel,
    preferredTool,
    requiredTool,
  };
};
