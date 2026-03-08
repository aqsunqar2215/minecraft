import { CHUNK_SIZE, SEA_LEVEL, WORLD_HEIGHT } from '../utils/constants';
import { clamp, hash2D } from '../utils/math';
import { NoiseField } from '../utils/noise';
import { BlockId } from './BlockRegistry';
import { Chunk } from './Chunk';

type Biome = 'desert' | 'forest' | 'highlands' | 'plains';

type SurfaceProfile = {
  biome: Biome;
  fillerBlock: BlockId;
  fillerDepth: number;
  height: number;
  topBlock: BlockId;
  waterLevel: number | null;
};

const SURFACE_MIN_HEIGHT = SEA_LEVEL - 14;
const SURFACE_MAX_HEIGHT = 126;

const smoothstep = (edge0: number, edge1: number, value: number): number => {
  const alpha = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return alpha * alpha * (3 - 2 * alpha);
};

const mix = (start: number, end: number, alpha: number): number =>
  start + (end - start) * alpha;

export class WorldGenerator {
  private readonly noise: NoiseField;
  private readonly seed: number;

  public constructor(seed = 1337) {
    this.seed = seed;
    this.noise = new NoiseField(seed);
  }

  public getSurfaceHeight(worldX: number, worldZ: number): number {
    return this.sampleSurfaceProfile(worldX, worldZ).height;
  }

  public getSurfaceProfile(worldX: number, worldZ: number): SurfaceProfile {
    return this.sampleSurfaceProfile(worldX, worldZ);
  }

  public populateTerrain(chunk: Chunk): void {
    for (let localX = 0; localX < CHUNK_SIZE; localX += 1) {
      for (let localZ = 0; localZ < CHUNK_SIZE; localZ += 1) {
        const worldX = chunk.worldX + localX;
        const worldZ = chunk.worldZ + localZ;
        const surface = this.sampleSurfaceProfile(worldX, worldZ);

        for (let y = 0; y <= surface.height; y += 1) {
          if (y === 0) {
            chunk.setBlock(localX, y, localZ, BlockId.Bedrock);
            continue;
          }

          if (y < 5 && hash2D(worldX + this.seed, worldZ - y, y) > 0.57) {
            chunk.setBlock(localX, y, localZ, BlockId.Bedrock);
            continue;
          }

          if (y === surface.height) {
            chunk.setBlock(localX, y, localZ, surface.topBlock);
            continue;
          }

          if (y >= surface.height - surface.fillerDepth) {
            chunk.setBlock(localX, y, localZ, surface.fillerBlock);
            continue;
          }

          if (this.shouldCarveCave(worldX, y, worldZ, surface.height)) {
            continue;
          }

          chunk.setBlock(localX, y, localZ, this.pickStoneVariant(worldX, y, worldZ));
        }

        if (surface.waterLevel !== null) {
          for (let y = surface.height + 1; y <= surface.waterLevel; y += 1) {
            chunk.setBlock(localX, y, localZ, BlockId.Water);
          }
        }
      }
    }
  }

  public populateFeatures(
    chunk: Chunk,
    setBlock: (worldX: number, y: number, worldZ: number, blockId: BlockId) => boolean,
    getBlock: (worldX: number, y: number, worldZ: number) => BlockId,
  ): void {
    for (let localX = 0; localX < CHUNK_SIZE; localX += 1) {
      for (let localZ = 0; localZ < CHUNK_SIZE; localZ += 1) {
        const worldX = chunk.worldX + localX;
        const worldZ = chunk.worldZ + localZ;
        const surface = this.sampleSurfaceProfile(worldX, worldZ);

        if (!this.shouldPlaceTreeAt(worldX, worldZ, surface)) {
          continue;
        }

        this.placeTree(worldX, surface.height + 1, worldZ, surface.biome, setBlock, getBlock);
      }
    }
  }

  private sampleSurfaceProfile(worldX: number, worldZ: number): SurfaceProfile {
    const continentalness = this.noise.continentalness(worldX, worldZ);
    const erosion = this.noise.erosion(worldX, worldZ);
    const hills = this.noise.hills(worldX, worldZ);
    const plateau = this.noise.plateau(worldX, worldZ);
    const mountainRegion = this.noise.mountainRegion(worldX, worldZ);
    const mountainRidge = this.noise.mountainRidge(worldX, worldZ);
    const detail = this.noise.detail(worldX, worldZ);
    const lakeSignal = this.noise.lake(worldX, worldZ);
    const pondSignal = this.noise.pond(worldX, worldZ);
    const riverSignal = this.noise.river(worldX, worldZ);
    const temperature = this.noise.temperature(worldX, worldZ);
    const moisture = this.noise.moisture(worldX, worldZ);

    const inlandness = smoothstep(-0.32, 0.38, continentalness);
    const roughness = 1 - smoothstep(0.18, 0.82, erosion);
    const flatness = smoothstep(0.16, 0.84, erosion);
    const coastMask = 1 - smoothstep(-0.02, 0.56, continentalness);
    const oceanMask = smoothstep(0.18, 0.84, coastMask);
    const foothillMask = smoothstep(0.44, 0.72, mountainRegion) * (0.6 + inlandness * 0.4);
    const mountainMask =
      smoothstep(0.64, 0.86, mountainRegion) *
      smoothstep(-0.04, 0.42, continentalness) *
      (0.72 + roughness * 0.28);
    const shorelineMask =
      smoothstep(0.22, 0.78, coastMask) *
      (1 - Math.min(1, mountainMask * 1.25)) *
      (1 - oceanMask * 0.28);
    const plainsMask = 1 - smoothstep(0.38, 0.8, mountainRegion);
    const biome = this.selectBiome(temperature, moisture, mountainMask, mountainRegion);

    let height = SEA_LEVEL - 5;
    height += continentalness * 7;
    height += hills * mix(2.3, 7.2, foothillMask);
    height += plateau * 2.1;
    height += detail * mix(0.9, 2.1, foothillMask);
    height += plainsMask * 0.8;
    height += foothillMask * (3 + Math.max(0, hills) * 3.5);
    height +=
      mountainMask *
      (12 + mountainRidge * 28 + Math.max(0, plateau) * 5) *
      (0.78 + roughness * 0.22);
    height -= smoothstep(0.34, 0.76, -continentalness) * 8;

    switch (biome) {
      case 'desert':
        height = mix(
          height,
          SEA_LEVEL - 2 + continentalness * 4 + hills * 1.4 + detail * 0.6,
          0.55,
        );
        height -= 1.5;
        break;
      case 'forest':
        height += 1.5 + Math.max(0, hills) * 0.7;
        break;
      case 'highlands':
        height += 6 + mountainRidge * 10;
        break;
      case 'plains':
        height -= 1.2;
        break;
    }

    const oceanFloorHeight =
      SEA_LEVEL -
      mix(4.2, 10.6, oceanMask) +
      hills * 0.85 +
      detail * 0.4 -
      Math.max(0, plateau) * 0.35;
    height = mix(height, oceanFloorHeight, oceanMask * (0.72 + flatness * 0.2));

    const shorelineShelfHeight =
      SEA_LEVEL + 1 + hills * 0.4 + detail * 0.18 - Math.max(0, plateau) * 0.1;
    height = mix(height, shorelineShelfHeight, shorelineMask * 0.9);
    const terrainHeightBeforeWaterCarve = height;

    const riverMask = this.sampleRiverMask(riverSignal, biome, continentalness, mountainMask);
    const lakeMask = this.sampleLakeMask(
      lakeSignal,
      riverMask,
      biome,
      continentalness,
      moisture,
      mountainMask,
    );
    const pondMask = this.samplePondMask(
      pondSignal,
      riverMask,
      lakeMask,
      biome,
      continentalness,
      moisture,
      mountainMask,
      flatness,
    );
    const riverDepth = riverMask * mix(3.2, 7.8, mountainMask);
    const lakeDepth = lakeMask * mix(4.2, 6.8, inlandness);
    const pondDepth = pondMask * mix(1.8, 4.6, 0.35 + inlandness * 0.65);
    height -= riverDepth + lakeDepth + pondDepth;

    const riverWaterLevel = riverMask >= 0.18 ? SEA_LEVEL : null;
    const lakeWaterLevel =
      lakeMask >= 0.2 ? Math.floor(Math.min(SEA_LEVEL + 2, height + lakeDepth * 0.92)) : null;
    const pondWaterLevel =
      pondMask >= 0.24
        ? Math.floor(
            Math.min(
              terrainHeightBeforeWaterCarve - riverDepth - lakeDepth * 0.28,
              height + pondDepth * 0.94 + 0.35,
            ),
          )
        : null;
    const coastWaterLevel =
      oceanMask >= 0.16 && mountainMask < 0.22
        ? SEA_LEVEL
        : null;
    const waterLevel = Math.max(
      coastWaterLevel ?? Number.NEGATIVE_INFINITY,
      riverWaterLevel ?? Number.NEGATIVE_INFINITY,
      lakeWaterLevel ?? Number.NEGATIVE_INFINITY,
      pondWaterLevel ?? Number.NEGATIVE_INFINITY,
    );
    const normalizedWaterLevel = Number.isFinite(waterLevel) ? waterLevel : null;

    if (normalizedWaterLevel !== null) {
      const waterDepth =
        coastWaterLevel !== null ? mix(1.8, 3.4, coastMask) : 1;
      height = Math.min(height, normalizedWaterLevel - waterDepth);
    }

    if (normalizedWaterLevel === null && coastMask > 0.18) {
      const dryShoreFloor = SEA_LEVEL + 0.8 + smoothstep(0.18, 0.92, coastMask) * 1.4;
      height = Math.max(height, dryShoreFloor);
    }

    const clampedHeight = Math.max(
      SURFACE_MIN_HEIGHT,
      Math.min(SURFACE_MAX_HEIGHT, Math.floor(height)),
    );
    const isSubmerged = normalizedWaterLevel !== null && clampedHeight < normalizedWaterLevel;
    const fillerDepth =
      3 +
      Math.floor(hash2D(worldX, worldZ, this.seed + 19) * 2) +
      (biome === 'desert' ? 2 : 0);

    if (isSubmerged) {
      const shoreBlock = biome === 'highlands' ? BlockId.Gravel : BlockId.Sand;

      return {
        biome,
        fillerBlock: shoreBlock,
        fillerDepth: Math.max(2, fillerDepth - 1),
        height: clampedHeight,
        topBlock: shoreBlock,
        waterLevel: normalizedWaterLevel,
      };
    }

    if (clampedHeight <= SEA_LEVEL + 1 && biome !== 'highlands') {
      return {
        biome,
        fillerBlock: BlockId.Sand,
        fillerDepth: Math.max(2, fillerDepth - 1),
        height: clampedHeight,
        topBlock: BlockId.Sand,
        waterLevel: null,
      };
    }

    if (biome === 'highlands' && clampedHeight >= 110) {
      return {
        biome,
        fillerBlock: BlockId.Stone,
        fillerDepth: 2,
        height: clampedHeight,
        topBlock: BlockId.Stone,
        waterLevel: null,
      };
    }

    if (biome === 'highlands' && clampedHeight >= 96) {
      return {
        biome,
        fillerBlock: BlockId.Stone,
        fillerDepth: 3,
        height: clampedHeight,
        topBlock: BlockId.Gravel,
        waterLevel: null,
      };
    }

    if (biome === 'desert') {
      return {
        biome,
        fillerBlock: BlockId.Sand,
        fillerDepth,
        height: clampedHeight,
        topBlock: BlockId.Sand,
        waterLevel: null,
      };
    }

    return {
      biome,
      fillerBlock: BlockId.Dirt,
      fillerDepth,
      height: clampedHeight,
      topBlock: BlockId.Grass,
      waterLevel: null,
    };
  }

  private selectBiome(
    temperature: number,
    moisture: number,
    mountainMask: number,
    mountainRegion: number,
  ): Biome {
    if (mountainMask > 0.34 || mountainRegion > 0.82) {
      return 'highlands';
    }

    if (temperature > 0.34 && moisture < -0.22 && mountainMask < 0.22) {
      return 'desert';
    }

    if (moisture > 0.08 && mountainMask < 0.4) {
      return 'forest';
    }

    return 'plains';
  }

  private sampleRiverMask(
    riverSignal: number,
    biome: Biome,
    continentalness: number,
    mountainMask: number,
  ): number {
    if (biome === 'desert' && continentalness < 0.18) {
      return 0;
    }

    const threshold = mountainMask > 0.3 ? 0.965 : 0.95;
    const normalized = Math.max(0, (riverSignal - threshold) / (1 - threshold));

    if (normalized <= 0.06) {
      return 0;
    }

    const inlandFactor = 0.45 + smoothstep(-0.35, 0.12, continentalness) * 0.55;
    const mountainFactor = 1 - mountainMask * 0.35;
    return Math.min(1, Math.pow(normalized, 1.55) * inlandFactor * mountainFactor);
  }

  private sampleLakeMask(
    lakeSignal: number,
    riverMask: number,
    biome: Biome,
    continentalness: number,
    moisture: number,
    mountainMask: number,
  ): number {
    if (riverMask > 0.2 || biome === 'desert') {
      return 0;
    }

    const threshold = mountainMask > 0.35 ? 0.97 : 0.94;
    const normalized = Math.max(0, (lakeSignal - threshold) / (1 - threshold));

    if (normalized <= 0.08) {
      return 0;
    }

    const inlandFactor = smoothstep(-0.18, 0.28, continentalness);
    const moistureFactor = 0.55 + smoothstep(-0.18, 0.38, moisture) * 0.45;
    const basinFactor = 1 - mountainMask * 0.45;
    return Math.min(1, Math.pow(normalized, 2.2) * inlandFactor * moistureFactor * basinFactor);
  }

  private samplePondMask(
    pondSignal: number,
    riverMask: number,
    lakeMask: number,
    biome: Biome,
    continentalness: number,
    moisture: number,
    mountainMask: number,
    flatness: number,
  ): number {
    if (biome === 'desert' || biome === 'highlands' || riverMask > 0.12 || lakeMask > 0.18) {
      return 0;
    }

    const threshold = biome === 'forest' ? 0.76 : 0.81;
    const normalized = Math.max(0, (pondSignal - threshold) / (1 - threshold));

    if (normalized <= 0.04) {
      return 0;
    }

    const inlandFactor = smoothstep(-0.08, 0.32, continentalness);
    const moistureFactor = 0.5 + smoothstep(-0.12, 0.44, moisture) * 0.5;
    const basinFactor = 1 - mountainMask * 0.6;
    return Math.min(
      1,
      Math.pow(normalized, 1.45) *
        inlandFactor *
        moistureFactor *
        basinFactor *
        (0.45 + flatness * 0.55),
    );
  }

  private shouldCarveCave(worldX: number, y: number, worldZ: number, surfaceHeight: number): boolean {
    if (y <= 8 || y >= surfaceHeight - 4) {
      return false;
    }

    const primary = this.noise.cavePrimary(worldX, y, worldZ);
    const secondary = this.noise.caveSecondary(worldX, y, worldZ);
    const tunnel = this.noise.caveTunnel(worldX, y, worldZ);
    const depthBelowSurface = surfaceHeight - y;

    if (depthBelowSurface < 6) {
      return false;
    }

    const chamber = primary > 0.56 && secondary > -0.14;
    const spaghetti = tunnel < 0.05 && secondary > -0.26;
    return chamber || spaghetti;
  }

  private pickStoneVariant(worldX: number, y: number, worldZ: number): BlockId {
    const density = this.noise.oreDensity(worldX, y, worldZ);

    if (y <= 16 && density > 0.78) {
      return BlockId.DiamondOre;
    }

    if (y <= 30 && density > 0.74) {
      return BlockId.GoldOre;
    }

    if (y <= 64 && density > 0.69) {
      return BlockId.IronOre;
    }

    if (density > 0.63) {
      return BlockId.CoalOre;
    }

    return BlockId.Stone;
  }

  private shouldPlaceTreeAt(worldX: number, worldZ: number, surface: SurfaceProfile): boolean {
    if (surface.topBlock !== BlockId.Grass) {
      return false;
    }

    if (surface.height <= SEA_LEVEL + 1 || surface.height + 8 >= WORLD_HEIGHT) {
      return false;
    }

    const chance = this.getTreeChance(surface.biome);

    if (chance <= 0) {
      return false;
    }

    const anchorValue = hash2D(worldX * 0.77, worldZ * 1.19, this.seed + 211);

    if (anchorValue < 1 - chance) {
      return false;
    }

    if (!this.isTreeAnchor(worldX, worldZ, anchorValue)) {
      return false;
    }

    return this.hasGentleSlope(worldX, worldZ, surface.height);
  }

  private getTreeChance(biome: Biome): number {
    switch (biome) {
      case 'forest':
        return 0.055;
      case 'highlands':
        return 0.01;
      case 'plains':
        return 0.018;
      case 'desert':
        return 0;
    }
  }

  private isTreeAnchor(worldX: number, worldZ: number, anchorValue: number): boolean {
    for (let offsetZ = -2; offsetZ <= 2; offsetZ += 1) {
      for (let offsetX = -2; offsetX <= 2; offsetX += 1) {
        if (offsetX === 0 && offsetZ === 0) {
          continue;
        }

        if (
          hash2D((worldX + offsetX) * 0.77, (worldZ + offsetZ) * 1.19, this.seed + 211) >
          anchorValue
        ) {
          return false;
        }
      }
    }

    return true;
  }

  private hasGentleSlope(worldX: number, worldZ: number, surfaceHeight: number): boolean {
    const north = this.getSurfaceHeight(worldX, worldZ - 1);
    const south = this.getSurfaceHeight(worldX, worldZ + 1);
    const west = this.getSurfaceHeight(worldX - 1, worldZ);
    const east = this.getSurfaceHeight(worldX + 1, worldZ);

    return (
      Math.abs(surfaceHeight - north) <= 2 &&
      Math.abs(surfaceHeight - south) <= 2 &&
      Math.abs(surfaceHeight - west) <= 2 &&
      Math.abs(surfaceHeight - east) <= 2
    );
  }

  private placeTree(
    worldX: number,
    trunkBaseY: number,
    worldZ: number,
    biome: Biome,
    setBlock: (worldX: number, y: number, worldZ: number, blockId: BlockId) => boolean,
    getBlock: (worldX: number, y: number, worldZ: number) => BlockId,
  ): void {
    const trunkHeight =
      (biome === 'forest' ? 5 : 4) + Math.floor(hash2D(worldX, worldZ, this.seed + 307) * 3);

    for (let offsetY = 0; offsetY < trunkHeight; offsetY += 1) {
      const targetY = trunkBaseY + offsetY;
      const existingBlock = getBlock(worldX, targetY, worldZ);

      if (existingBlock === BlockId.Air || existingBlock === BlockId.OakLeaves) {
        setBlock(worldX, targetY, worldZ, BlockId.OakLog);
      }
    }

    const canopyBaseY = trunkBaseY + trunkHeight - 2;
    const canopyTopY = trunkBaseY + trunkHeight + 1;

    for (let y = canopyBaseY; y <= canopyTopY; y += 1) {
      const vertical = y - canopyBaseY;
      const radius = y === canopyTopY ? 1 : biome === 'forest' && vertical === 1 ? 3 : 2;

      for (let offsetZ = -radius; offsetZ <= radius; offsetZ += 1) {
        for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
          const manhattan = Math.abs(offsetX) + Math.abs(offsetZ) + Math.max(0, vertical - 1);

          if (manhattan > radius + 1) {
            continue;
          }

          if (offsetX === 0 && offsetZ === 0 && y < trunkBaseY + trunkHeight) {
            continue;
          }

          const leafX = worldX + offsetX;
          const leafZ = worldZ + offsetZ;
          const existingBlock = getBlock(leafX, y, leafZ);

          if (existingBlock === BlockId.Air) {
            setBlock(leafX, y, leafZ, BlockId.OakLeaves);
          }
        }
      }
    }
  }
}
