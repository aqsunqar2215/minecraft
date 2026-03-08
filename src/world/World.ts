import { DoubleSide, Group, Mesh, MeshBasicMaterial, MeshLambertMaterial, Vector3 } from 'three';

import {
  CHUNK_SIZE,
  PLAYER_EYE_HEIGHT,
  SEA_LEVEL,
  WATER_SWIM_ACTIVATION_SUBMERSION,
  WATER_TEXTURE_FLOW_SPEED_U,
  WATER_TEXTURE_FLOW_SPEED_V,
  WATER_SURFACE_HEIGHT,
  WORLD_HEIGHT,
} from '../utils/constants';
import { floorDiv, mod } from '../utils/math';
import { BlockId, BlockRegistry } from './BlockRegistry';
import { Chunk } from './Chunk';
import { ChunkMesher } from './ChunkMesher';
import { createBlockTextureAtlas, createWaterSurfaceTexture } from './BlockTextures';
import { WorldGenerator } from './WorldGenerator';

type SpawnTransform = {
  pitch: number;
  position: Vector3;
  yaw: number;
};

export type WaterState = {
  flow: Vector3;
  headInWater: boolean;
  isInWater: boolean;
  submersion: number;
  surfaceY: number | null;
};

type DynamicWaterBounds = {
  maxX: number;
  maxY: number;
  maxZ: number;
  minX: number;
  minY: number;
  minZ: number;
};

type PropagatedWaterCell = {
  surfaceY: number;
  x: number;
  y: number;
  z: number;
};

const SPAWN_DIRECTION_DISTANCE = 8;
const SPAWN_FLATNESS_RADIUS = 1;
const SPAWN_OPENNESS_RADIUS = 2;
const SPAWN_SEARCH_RADIUS = 72;
const SPAWN_WATER_SCAN_RADIUS = 18;
const STREAM_GENERATION_PADDING = 1;
const STREAM_RETENTION_PADDING = 2;
const DYNAMIC_WATER_HORIZONTAL_RADIUS = 12;
const DYNAMIC_WATER_VERTICAL_RADIUS = 16;
const DYNAMIC_WATER_SURFACE_EPSILON = 0.001;
const WATER_SAMPLE_EPSILON = 0.0001;
const WATER_SPREAD_DIRECTIONS = [
  { dx: 1, dy: 0, dz: 0 },
  { dx: -1, dy: 0, dz: 0 },
  { dx: 0, dy: 0, dz: 1 },
  { dx: 0, dy: 0, dz: -1 },
  { dx: 0, dy: 1, dz: 0 },
  { dx: 0, dy: -1, dz: 0 },
];
const isPowerOfTwo = (value: number): boolean => value > 0 && (value & (value - 1)) === 0;

export class World {
  public readonly group = new Group();
  private readonly chunks = new Map<string, Chunk>();
  private readonly atlasTexture = createBlockTextureAtlas();
  private readonly waterTexture = createWaterSurfaceTexture();
  private readonly solidMaterial = new MeshLambertMaterial({
    alphaTest: 0.15,
    flatShading: true,
    map: this.atlasTexture,
    vertexColors: true,
  });
  private readonly waterMaterial = new MeshBasicMaterial({
    color: 0x2b8fe8,
    depthWrite: true,
    fog: false,
    map: this.waterTexture,
    opacity: 1,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -2,
    side: DoubleSide,
    transparent: false,
    vertexColors: false,
  });
  private readonly generator = new WorldGenerator();
  private readonly dynamicWaterBlocks = new Set<string>();
  private lastStreamCenterKey: string | null = null;
  private spawnTransform: SpawnTransform | null = null;
  private waterAnimationTime = 0;

  public buildInitialWorld(renderDistance: number): void {
    this.ensureChunksAround(0, 0, renderDistance + STREAM_GENERATION_PADDING);
    this.lastStreamCenterKey = this.getChunkKey(0, 0);
  }

  public getChunkCoordinatesFor(worldX: number, worldZ: number): string {
    return `${floorDiv(Math.floor(worldX), CHUNK_SIZE)}, ${floorDiv(Math.floor(worldZ), CHUNK_SIZE)}`;
  }

  public getSpawnPosition(): Vector3 {
    return this.getSpawnTransform().position;
  }

  public getSurfaceHeight(worldX: number, worldZ: number): number {
    return this.generator.getSurfaceHeight(worldX, worldZ);
  }

  public getSurfaceColumn(worldX: number, worldZ: number) {
    return this.generator.getSurfaceProfile(worldX, worldZ);
  }

  public getSpawnTransform(): SpawnTransform {
    if (!this.spawnTransform) {
      this.spawnTransform = this.findSpawnTransform();
    }

    return {
      pitch: this.spawnTransform.pitch,
      position: this.spawnTransform.position.clone(),
      yaw: this.spawnTransform.yaw,
    };
  }

  public update(deltaSeconds: number): void {
    this.waterAnimationTime += deltaSeconds;
    this.waterTexture.offset.set(
      ((this.waterAnimationTime * WATER_TEXTURE_FLOW_SPEED_U) % 1 + 1) % 1,
      ((this.waterAnimationTime * WATER_TEXTURE_FLOW_SPEED_V) % 1 + 1) % 1,
    );
  }

  public getWaterAnimationState(): {
    primary: {
      u: number;
      v: number;
    };
    time: number;
  } {
    return {
      primary: {
        u: Number(this.waterTexture.offset.x.toFixed(4)),
        v: Number(this.waterTexture.offset.y.toFixed(4)),
      },
      time: Number(this.waterAnimationTime.toFixed(3)),
    };
  }

  public getWaterTextureState(): {
    height: number;
    isPowerOfTwo: boolean;
    width: number;
  } {
    const image = this.waterTexture.image as { height?: number; width?: number } | undefined;
    const width = image?.width ?? 0;
    const height = image?.height ?? 0;

    return {
      width,
      height,
      isPowerOfTwo: isPowerOfTwo(width) && isPowerOfTwo(height),
    };
  }

  public updateStreaming(worldX: number, worldZ: number, renderDistance: number): void {
    const chunkX = floorDiv(Math.floor(worldX), CHUNK_SIZE);
    const chunkZ = floorDiv(Math.floor(worldZ), CHUNK_SIZE);
    const centerKey = this.getChunkKey(chunkX, chunkZ);

    if (centerKey === this.lastStreamCenterKey) {
      return;
    }

    this.ensureChunksAround(chunkX, chunkZ, renderDistance + STREAM_GENERATION_PADDING);
    this.pruneDistantChunks(chunkX, chunkZ, renderDistance + STREAM_RETENTION_PADDING);
    this.lastStreamCenterKey = centerKey;
  }

  public getWorldMetrics(sampleRadius = 64): {
    averageHeight: number;
    maxHeight: number;
    minHeight: number;
    mountainColumns: number;
    nearestWaterDistance: number | null;
    totalColumns: number;
    waterColumns: number;
  } {
    let waterColumns = 0;
    let mountainColumns = 0;
    let sumHeight = 0;
    let minHeight = Number.POSITIVE_INFINITY;
    let maxHeight = Number.NEGATIVE_INFINITY;
    let nearestWaterDistance = Number.POSITIVE_INFINITY;

    for (let worldZ = -sampleRadius; worldZ <= sampleRadius; worldZ += 1) {
      for (let worldX = -sampleRadius; worldX <= sampleRadius; worldX += 1) {
        const surface = this.generator.getSurfaceProfile(worldX, worldZ);
        sumHeight += surface.height;
        minHeight = Math.min(minHeight, surface.height);
        maxHeight = Math.max(maxHeight, surface.height);

        if (surface.height >= 96) {
          mountainColumns += 1;
        }

        if (surface.waterLevel !== null) {
          waterColumns += 1;
          nearestWaterDistance = Math.min(
            nearestWaterDistance,
            Math.hypot(worldX, worldZ),
          );
        }
      }
    }

    const totalColumns = (sampleRadius * 2 + 1) ** 2;

    return {
      averageHeight: Number((sumHeight / totalColumns).toFixed(2)),
      maxHeight,
      minHeight,
      mountainColumns,
      nearestWaterDistance:
        nearestWaterDistance === Number.POSITIVE_INFINITY
          ? null
          : Number(nearestWaterDistance.toFixed(2)),
      totalColumns,
      waterColumns,
    };
  }

  public getLoadedChunkSummary(): {
    count: number;
    maxChunkX: number;
    maxChunkZ: number;
    minChunkX: number;
    minChunkZ: number;
  } {
    let minChunkX = Number.POSITIVE_INFINITY;
    let maxChunkX = Number.NEGATIVE_INFINITY;
    let minChunkZ = Number.POSITIVE_INFINITY;
    let maxChunkZ = Number.NEGATIVE_INFINITY;

    for (const chunk of this.chunks.values()) {
      minChunkX = Math.min(minChunkX, chunk.chunkX);
      maxChunkX = Math.max(maxChunkX, chunk.chunkX);
      minChunkZ = Math.min(minChunkZ, chunk.chunkZ);
      maxChunkZ = Math.max(maxChunkZ, chunk.chunkZ);
    }

    if (this.chunks.size === 0) {
      return {
        count: 0,
        maxChunkX: 0,
        maxChunkZ: 0,
        minChunkX: 0,
        minChunkZ: 0,
      };
    }

    return {
      count: this.chunks.size,
      maxChunkX,
      maxChunkZ,
      minChunkX,
      minChunkZ,
    };
  }

  public getBlockId(worldX: number, y: number, worldZ: number): BlockId {
    if (y < 0 || y >= WORLD_HEIGHT) {
      return BlockId.Air;
    }

    const chunkX = floorDiv(worldX, CHUNK_SIZE);
    const chunkZ = floorDiv(worldZ, CHUNK_SIZE);
    const chunk = this.chunks.get(`${chunkX},${chunkZ}`);

    if (!chunk) {
      return BlockId.Air;
    }

    return chunk.getBlock(mod(worldX, CHUNK_SIZE), y, mod(worldZ, CHUNK_SIZE));
  }

  public isSolidBlockAt(worldX: number, y: number, worldZ: number): boolean {
    return BlockRegistry.isSolid(this.getBlockId(worldX, y, worldZ));
  }

  public sampleWaterState(
    position: Vector3,
    halfWidth: number,
    height: number,
    eyeHeight = PLAYER_EYE_HEIGHT,
  ): WaterState {
    const minX = position.x - halfWidth;
    const maxX = position.x + halfWidth;
    const minY = position.y;
    const maxY = position.y + height;
    const minZ = position.z - halfWidth;
    const maxZ = position.z + halfWidth;

    const startX = Math.floor(minX);
    const endX = Math.floor(maxX - WATER_SAMPLE_EPSILON);
    const startY = Math.floor(minY);
    const endY = Math.floor(maxY - WATER_SAMPLE_EPSILON);
    const startZ = Math.floor(minZ);
    const endZ = Math.floor(maxZ - WATER_SAMPLE_EPSILON);

    let submergedVolume = 0;
    let flowWeight = 0;
    let highestSurfaceY = Number.NEGATIVE_INFINITY;
    const flow = new Vector3();

    for (let y = startY; y <= endY; y += 1) {
      for (let z = startZ; z <= endZ; z += 1) {
        for (let x = startX; x <= endX; x += 1) {
          if (this.getBlockId(x, y, z) !== BlockId.Water) {
            continue;
          }

          const surfaceY = this.getWaterSurfaceY(x, y, z);
          const overlapX = Math.min(maxX, x + 1) - Math.max(minX, x);
          const overlapY = Math.min(maxY, surfaceY) - Math.max(minY, y);
          const overlapZ = Math.min(maxZ, z + 1) - Math.max(minZ, z);

          if (overlapX <= 0 || overlapY <= 0 || overlapZ <= 0) {
            continue;
          }

          const overlapVolume = overlapX * overlapY * overlapZ;
          submergedVolume += overlapVolume;
          highestSurfaceY = Math.max(highestSurfaceY, surfaceY);

          const flowVector = this.getWaterFlowVector(x, y, z);

          if (flowVector.lengthSq() <= 0) {
            continue;
          }

          flow.addScaledVector(flowVector, overlapVolume);
          flowWeight += overlapVolume;
        }
      }
    }

    if (flowWeight > 0) {
      flow.multiplyScalar(1 / flowWeight);
    }

    if (flow.lengthSq() > 1) {
      flow.normalize();
    }

    const totalVolume = Math.max(
      WATER_SAMPLE_EPSILON,
      halfWidth * 2 * (halfWidth * 2) * height,
    );
    const submersion = Math.min(1, submergedVolume / totalVolume);

    return {
      flow,
      headInWater: this.isPointInWater(position.x, position.y + eyeHeight, position.z),
      isInWater: submersion > WATER_SWIM_ACTIVATION_SUBMERSION,
      submersion,
      surfaceY:
        highestSurfaceY === Number.NEGATIVE_INFINITY
          ? null
          : Number(highestSurfaceY.toFixed(3)),
    };
  }

  public setBlockId(worldX: number, y: number, worldZ: number, blockId: BlockId): boolean {
    if (y < 0 || y >= WORLD_HEIGHT) {
      return false;
    }

    const chunkX = floorDiv(worldX, CHUNK_SIZE);
    const chunkZ = floorDiv(worldZ, CHUNK_SIZE);
    const chunk = this.chunks.get(`${chunkX},${chunkZ}`);

    if (!chunk) {
      return false;
    }

    const currentBlockId = chunk.getBlock(mod(worldX, CHUNK_SIZE), y, mod(worldZ, CHUNK_SIZE));

    if (currentBlockId === blockId) {
      return true;
    }

    chunk.setBlock(mod(worldX, CHUNK_SIZE), y, mod(worldZ, CHUNK_SIZE), blockId);
    this.dynamicWaterBlocks.delete(this.getBlockKey(worldX, y, worldZ));

    const dirtyChunks = new Map<string, Chunk>([[chunk.key, chunk]]);
    this.rebuildDynamicWaterAround(worldX, y, worldZ, dirtyChunks);
    this.remeshChunks(dirtyChunks.values());

    return true;
  }

  private isPointInWater(worldX: number, y: number, worldZ: number): boolean {
    const blockX = Math.floor(worldX);
    const blockY = Math.floor(y);
    const blockZ = Math.floor(worldZ);

    if (this.getBlockId(blockX, blockY, blockZ) !== BlockId.Water) {
      return false;
    }

    return y < this.getWaterSurfaceY(blockX, blockY, blockZ) - WATER_SAMPLE_EPSILON;
  }

  private getWaterSurfaceY(worldX: number, y: number, worldZ: number): number {
    if (this.getBlockId(worldX, y, worldZ) !== BlockId.Water) {
      return y + 1;
    }

    return this.getBlockId(worldX, y + 1, worldZ) === BlockId.Water
      ? y + 1
      : y + WATER_SURFACE_HEIGHT;
  }

  private getWaterFlowVector(worldX: number, y: number, worldZ: number): Vector3 {
    let flowX = 0;
    let flowZ = 0;
    const centerSurfaceY = this.getWaterSurfaceY(worldX, y, worldZ);
    const directions = [
      { dx: 1, dz: 0 },
      { dx: -1, dz: 0 },
      { dx: 0, dz: 1 },
      { dx: 0, dz: -1 },
    ];

    for (const direction of directions) {
      const neighborX = worldX + direction.dx;
      const neighborZ = worldZ + direction.dz;
      const neighborId = this.getBlockId(neighborX, y, neighborZ);

      if (neighborId === BlockId.Water) {
        const drop = centerSurfaceY - this.getWaterSurfaceY(neighborX, y, neighborZ);

        if (drop > WATER_SAMPLE_EPSILON) {
          flowX += direction.dx * drop;
          flowZ += direction.dz * drop;
        }

        continue;
      }

      if (BlockRegistry.isSolid(neighborId)) {
        continue;
      }

      const belowNeighborId = this.getBlockId(neighborX, y - 1, neighborZ);

      if (!BlockRegistry.isSolid(belowNeighborId)) {
        flowX += direction.dx;
        flowZ += direction.dz;
        continue;
      }

      if (belowNeighborId === BlockId.Water) {
        flowX += direction.dx * 0.35;
        flowZ += direction.dz * 0.35;
      }
    }

    const flow = new Vector3(flowX, 0, flowZ);

    if (flow.lengthSq() > 1) {
      flow.normalize();
    }

    return flow;
  }

  private rebuildDynamicWaterAround(
    worldX: number,
    y: number,
    worldZ: number,
    dirtyChunks: Map<string, Chunk>,
  ): void {
    const bounds: DynamicWaterBounds = {
      minX: worldX - DYNAMIC_WATER_HORIZONTAL_RADIUS,
      maxX: worldX + DYNAMIC_WATER_HORIZONTAL_RADIUS,
      minY: Math.max(0, y - DYNAMIC_WATER_VERTICAL_RADIUS),
      maxY: Math.min(WORLD_HEIGHT - 1, y + DYNAMIC_WATER_VERTICAL_RADIUS),
      minZ: worldZ - DYNAMIC_WATER_HORIZONTAL_RADIUS,
      maxZ: worldZ + DYNAMIC_WATER_HORIZONTAL_RADIUS,
    };

    this.clearDynamicWater(bounds, dirtyChunks);

    const queue: PropagatedWaterCell[] = [];
    const propagatedSurfaceByKey = new Map<string, number>();
    const filledSurfaceByKey = new Map<string, number>();

    for (let scanY = bounds.minY; scanY <= bounds.maxY; scanY += 1) {
      for (let scanZ = bounds.minZ; scanZ <= bounds.maxZ; scanZ += 1) {
        for (let scanX = bounds.minX; scanX <= bounds.maxX; scanX += 1) {
          if (!this.hasLoadedChunkAt(scanX, scanZ)) {
            continue;
          }

          if (this.getBlockId(scanX, scanY, scanZ) !== BlockId.Water) {
            continue;
          }

          this.enqueuePropagatedWaterCell(
            queue,
            propagatedSurfaceByKey,
            scanX,
            scanY,
            scanZ,
            this.getWaterColumnSurfaceY(scanX, scanY, scanZ),
          );
        }
      }
    }

    let queueIndex = 0;

    while (queueIndex < queue.length) {
      const cell = queue[queueIndex];
      queueIndex += 1;

      for (const direction of WATER_SPREAD_DIRECTIONS) {
        const neighborX = cell.x + direction.dx;
        const neighborY = cell.y + direction.dy;
        const neighborZ = cell.z + direction.dz;

        if (!this.isWithinDynamicWaterBounds(bounds, neighborX, neighborY, neighborZ)) {
          continue;
        }

        if (!this.hasLoadedChunkAt(neighborX, neighborZ)) {
          continue;
        }

        const neighborId = this.getBlockId(neighborX, neighborY, neighborZ);
        const neighborKey = this.getBlockKey(neighborX, neighborY, neighborZ);

        if (BlockRegistry.isSolid(neighborId)) {
          continue;
        }

        if (neighborId === BlockId.Water) {
          this.enqueuePropagatedWaterCell(
            queue,
            propagatedSurfaceByKey,
            neighborX,
            neighborY,
            neighborZ,
            Math.max(cell.surfaceY, this.getWaterColumnSurfaceY(neighborX, neighborY, neighborZ)),
          );
          continue;
        }

        if (neighborId !== BlockId.Air || !this.canFillDynamicWaterCell(neighborY, cell.surfaceY)) {
          continue;
        }

        const existingSurfaceY =
          filledSurfaceByKey.get(neighborKey) ?? Number.NEGATIVE_INFINITY;

        if (cell.surfaceY <= existingSurfaceY + DYNAMIC_WATER_SURFACE_EPSILON) {
          continue;
        }

        if (!this.setBlockIdFast(neighborX, neighborY, neighborZ, BlockId.Water)) {
          continue;
        }

        this.dynamicWaterBlocks.add(neighborKey);
        filledSurfaceByKey.set(neighborKey, cell.surfaceY);
        this.markDirtyChunk(neighborX, neighborZ, dirtyChunks);
        this.enqueuePropagatedWaterCell(
          queue,
          propagatedSurfaceByKey,
          neighborX,
          neighborY,
          neighborZ,
          cell.surfaceY,
        );
      }
    }
  }

  private clearDynamicWater(bounds: DynamicWaterBounds, dirtyChunks: Map<string, Chunk>): void {
    for (const blockKey of [...this.dynamicWaterBlocks]) {
      const [worldX, y, worldZ] = blockKey.split(',').map(Number);

      if (!this.isWithinDynamicWaterBounds(bounds, worldX, y, worldZ)) {
        continue;
      }

      if (this.getBlockId(worldX, y, worldZ) === BlockId.Water) {
        this.setBlockIdFast(worldX, y, worldZ, BlockId.Air);
        this.markDirtyChunk(worldX, worldZ, dirtyChunks);
      }

      this.dynamicWaterBlocks.delete(blockKey);
    }
  }

  private enqueuePropagatedWaterCell(
    queue: PropagatedWaterCell[],
    propagatedSurfaceByKey: Map<string, number>,
    worldX: number,
    y: number,
    worldZ: number,
    surfaceY: number,
  ): void {
    const blockKey = this.getBlockKey(worldX, y, worldZ);
    const existingSurfaceY = propagatedSurfaceByKey.get(blockKey);

    if (
      existingSurfaceY !== undefined &&
      surfaceY <= existingSurfaceY + DYNAMIC_WATER_SURFACE_EPSILON
    ) {
      return;
    }

    propagatedSurfaceByKey.set(blockKey, surfaceY);
    queue.push({
      x: worldX,
      y,
      z: worldZ,
      surfaceY,
    });
  }

  private canFillDynamicWaterCell(y: number, surfaceY: number): boolean {
    return y + WATER_SURFACE_HEIGHT <= surfaceY + DYNAMIC_WATER_SURFACE_EPSILON;
  }

  private getWaterColumnSurfaceY(worldX: number, y: number, worldZ: number): number {
    let topY = y;

    while (topY + 1 < WORLD_HEIGHT && this.getBlockId(worldX, topY + 1, worldZ) === BlockId.Water) {
      topY += 1;
    }

    return this.getBlockId(worldX, topY + 1, worldZ) === BlockId.Water
      ? topY + 1
      : topY + WATER_SURFACE_HEIGHT;
  }

  private isWithinDynamicWaterBounds(
    bounds: DynamicWaterBounds,
    worldX: number,
    y: number,
    worldZ: number,
  ): boolean {
    return (
      worldX >= bounds.minX &&
      worldX <= bounds.maxX &&
      y >= bounds.minY &&
      y <= bounds.maxY &&
      worldZ >= bounds.minZ &&
      worldZ <= bounds.maxZ
    );
  }

  private hasLoadedChunkAt(worldX: number, worldZ: number): boolean {
    return this.chunks.has(
      this.getChunkKey(floorDiv(worldX, CHUNK_SIZE), floorDiv(worldZ, CHUNK_SIZE)),
    );
  }

  private getBlockKey(worldX: number, y: number, worldZ: number): string {
    return `${worldX},${y},${worldZ}`;
  }

  private markDirtyChunk(
    worldX: number,
    worldZ: number,
    dirtyChunks: Map<string, Chunk>,
  ): void {
    const chunkKey = this.getChunkKey(
      floorDiv(worldX, CHUNK_SIZE),
      floorDiv(worldZ, CHUNK_SIZE),
    );
    const chunk = this.chunks.get(chunkKey);

    if (chunk) {
      dirtyChunks.set(chunkKey, chunk);
    }
  }

  private remeshChunks(chunks: Iterable<Chunk>): void {
    for (const chunk of this.collectChunkNeighborhood(chunks, 1)) {
      this.remeshChunk(chunk);
    }
  }

  private getChunkKey(chunkX: number, chunkZ: number): string {
    return `${chunkX},${chunkZ}`;
  }

  private collectChunkNeighborhood(chunks: Iterable<Chunk>, radius: number): Chunk[] {
    const collected = new Map<string, Chunk>();

    for (const chunk of chunks) {
      for (let offsetZ = -radius; offsetZ <= radius; offsetZ += 1) {
        for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
          const neighbor = this.chunks.get(
            this.getChunkKey(chunk.chunkX + offsetX, chunk.chunkZ + offsetZ),
          );

          if (neighbor) {
            collected.set(neighbor.key, neighbor);
          }
        }
      }
    }

    return [...collected.values()];
  }

  private ensureChunksAround(centerChunkX: number, centerChunkZ: number, renderDistance: number): void {
    const newChunks: Chunk[] = [];
    const missingChunks: Array<{
      distanceSquared: number;
      key: string;
      chunkX: number;
      chunkZ: number;
    }> = [];

    for (let chunkZ = centerChunkZ - renderDistance; chunkZ <= centerChunkZ + renderDistance; chunkZ += 1) {
      for (let chunkX = centerChunkX - renderDistance; chunkX <= centerChunkX + renderDistance; chunkX += 1) {
        const key = this.getChunkKey(chunkX, chunkZ);

        if (this.chunks.has(key)) {
          continue;
        }

        const offsetX = chunkX - centerChunkX;
        const offsetZ = chunkZ - centerChunkZ;
        missingChunks.push({
          chunkX,
          chunkZ,
          distanceSquared: offsetX * offsetX + offsetZ * offsetZ,
          key,
        });
      }
    }

    missingChunks.sort((left, right) => left.distanceSquared - right.distanceSquared);

    for (const pendingChunk of missingChunks) {
      const chunk = new Chunk(pendingChunk.chunkX, pendingChunk.chunkZ);
      this.generator.populateTerrain(chunk);
      this.chunks.set(pendingChunk.key, chunk);
      newChunks.push(chunk);
    }

    if (newChunks.length === 0) {
      return;
    }

    const featureChunks = this.collectChunkNeighborhood(newChunks, 1);

    for (const chunk of featureChunks) {
      this.generator.populateFeatures(
        chunk,
        (worldX, y, worldZ, blockId) => this.setBlockIdFast(worldX, y, worldZ, blockId),
        (worldX, y, worldZ) => this.getBlockId(worldX, y, worldZ),
      );
    }

    for (const chunk of this.collectChunkNeighborhood(featureChunks, 1)) {
      this.remeshChunk(chunk);
    }
  }

  private pruneDistantChunks(centerChunkX: number, centerChunkZ: number, keepDistance: number): void {
    for (const [key, chunk] of this.chunks) {
      if (
        Math.abs(chunk.chunkX - centerChunkX) <= keepDistance &&
        Math.abs(chunk.chunkZ - centerChunkZ) <= keepDistance
      ) {
        continue;
      }

      this.disposeChunk(chunk);
      this.chunks.delete(key);
    }
  }

  private setBlockIdFast(worldX: number, y: number, worldZ: number, blockId: BlockId): boolean {
    if (y < 0 || y >= WORLD_HEIGHT) {
      return false;
    }

    const chunkX = floorDiv(worldX, CHUNK_SIZE);
    const chunkZ = floorDiv(worldZ, CHUNK_SIZE);
    const chunk = this.chunks.get(`${chunkX},${chunkZ}`);

    if (!chunk) {
      return false;
    }

    chunk.setBlock(mod(worldX, CHUNK_SIZE), y, mod(worldZ, CHUNK_SIZE), blockId);
    return true;
  }

  private remeshChunk(chunk: Chunk): void {
    const { solidGeometry, waterGeometry } = ChunkMesher.build(chunk, (worldX, y, worldZ) =>
      this.getBlockId(worldX, y, worldZ),
    );

    this.disposeChunk(chunk);

    if (solidGeometry) {
      const mesh = new Mesh(solidGeometry, this.solidMaterial);
      mesh.position.set(chunk.worldX, 0, chunk.worldZ);
      chunk.mesh = mesh;
      this.group.add(mesh);
    }

    if (waterGeometry) {
      const mesh = new Mesh(waterGeometry, this.waterMaterial);
      mesh.position.set(chunk.worldX, 0, chunk.worldZ);
      mesh.renderOrder = 1;
      chunk.waterMesh = mesh;
      this.group.add(mesh);
    }
  }

  private disposeChunk(chunk: Chunk): void {
    if (chunk.mesh) {
      this.group.remove(chunk.mesh);
      chunk.mesh.geometry.dispose();
      chunk.mesh = null;
    }

    if (chunk.waterMesh) {
      this.group.remove(chunk.waterMesh);
      chunk.waterMesh.geometry.dispose();
      chunk.waterMesh = null;
    }
  }

  private findSpawnTransform(): SpawnTransform {
    let bestCandidate:
      | {
          footY: number;
          score: number;
          worldX: number;
          worldZ: number;
          yaw: number;
        }
      | null = null;

    for (let worldZ = -SPAWN_SEARCH_RADIUS; worldZ <= SPAWN_SEARCH_RADIUS; worldZ += 1) {
      for (let worldX = -SPAWN_SEARCH_RADIUS; worldX <= SPAWN_SEARCH_RADIUS; worldX += 1) {
        const surface = this.generator.getSurfaceProfile(worldX, worldZ);
        const surfaceY = surface.height;

        if (!this.hasSpawnHeadroom(worldX, surfaceY, worldZ)) {
          continue;
        }

        const direction = this.pickSpawnDirection(worldX, surfaceY + 1, worldZ);
        const heightPenalty =
          Math.max(0, surfaceY - (SEA_LEVEL + 6)) * 1.8 + Math.abs(surfaceY - SEA_LEVEL) * 0.35;
        const waterAffinity = this.measureSpawnWaterAffinity(worldX, worldZ);
        const surfacePreference =
          surface.topBlock === BlockId.Grass
            ? 26
            : surface.topBlock === BlockId.Sand
              ? -24
              : surface.topBlock === BlockId.Gravel
                ? -10
                : -14;
        const score =
          this.measureSpawnOpenness(worldX, surfaceY + 1, worldZ) +
          direction.clearance * 2 -
          heightPenalty -
          Math.hypot(worldX, worldZ) * 0.08 +
          waterAffinity +
          surfacePreference;

        if (!bestCandidate || score > bestCandidate.score) {
          bestCandidate = {
            footY: surfaceY + 1 + 0.01,
            score,
            worldX,
            worldZ,
            yaw: direction.yaw,
          };
        }
      }
    }

    if (!bestCandidate) {
      const fallbackX = 0;
      const fallbackZ = 0;
      return {
        pitch: 0,
        position: new Vector3(
          fallbackX + 0.5,
          this.generator.getSurfaceHeight(fallbackX, fallbackZ) + 1.01,
          fallbackZ + 0.5,
        ),
        yaw: Math.PI,
      };
    }

    return {
      pitch: -0.42,
      position: new Vector3(
        bestCandidate.worldX + 0.5,
        bestCandidate.footY,
        bestCandidate.worldZ + 0.5,
      ),
      yaw: bestCandidate.yaw,
    };
  }

  private hasSpawnHeadroom(worldX: number, surfaceY: number, worldZ: number): boolean {
    if (!BlockRegistry.isSolid(this.getBlockId(worldX, surfaceY, worldZ))) {
      return false;
    }

    for (let y = surfaceY + 1; y <= surfaceY + 2; y += 1) {
      if (this.getBlockId(worldX, y, worldZ) !== BlockId.Air) {
        return false;
      }
    }

    return true;
  }

  private measureSpawnOpenness(worldX: number, footY: number, worldZ: number): number {
    let score = 0;
    const surfaceY = footY - 1;

    for (let offsetZ = -SPAWN_OPENNESS_RADIUS; offsetZ <= SPAWN_OPENNESS_RADIUS; offsetZ += 1) {
      for (let offsetX = -SPAWN_OPENNESS_RADIUS; offsetX <= SPAWN_OPENNESS_RADIUS; offsetX += 1) {
        if (offsetX === 0 && offsetZ === 0) {
          continue;
        }

        for (let offsetY = 0; offsetY <= 1; offsetY += 1) {
          score +=
            this.getBlockId(worldX + offsetX, footY + offsetY, worldZ + offsetZ) === BlockId.Air
              ? 1
              : -1.5;
        }
      }
    }

    for (let offsetZ = -SPAWN_FLATNESS_RADIUS; offsetZ <= SPAWN_FLATNESS_RADIUS; offsetZ += 1) {
      for (let offsetX = -SPAWN_FLATNESS_RADIUS; offsetX <= SPAWN_FLATNESS_RADIUS; offsetX += 1) {
        score -=
          Math.abs(
            this.generator.getSurfaceHeight(worldX + offsetX, worldZ + offsetZ) - surfaceY,
          ) * 0.75;
      }
    }

    return score;
  }

  private measureSpawnWaterAffinity(worldX: number, worldZ: number): number {
    let bestDistance = Number.POSITIVE_INFINITY;
    let bestDepth = 0;

    for (let offsetZ = -SPAWN_WATER_SCAN_RADIUS; offsetZ <= SPAWN_WATER_SCAN_RADIUS; offsetZ += 2) {
      for (
        let offsetX = -SPAWN_WATER_SCAN_RADIUS;
        offsetX <= SPAWN_WATER_SCAN_RADIUS;
        offsetX += 2
      ) {
        if (offsetX === 0 && offsetZ === 0) {
          continue;
        }

        const surface = this.generator.getSurfaceProfile(worldX + offsetX, worldZ + offsetZ);

        if (surface.waterLevel === null) {
          continue;
        }

        const depth = surface.waterLevel - surface.height;

        if (depth < 2) {
          continue;
        }

        const distance = Math.hypot(offsetX, offsetZ);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestDepth = depth;
        }
      }
    }

    if (!Number.isFinite(bestDistance)) {
      return 0;
    }

    const distanceBonus = Math.max(0, 18 - bestDistance) * 0.9;
    const depthBonus = Math.min(7, bestDepth * 1.4);
    return distanceBonus + depthBonus;
  }

  private pickSpawnDirection(worldX: number, footY: number, worldZ: number): {
    clearance: number;
    yaw: number;
  } {
    const directions = [
      { dx: 0, dz: -1, yaw: 0 },
      { dx: 1, dz: 0, yaw: Math.PI / 2 },
      { dx: 0, dz: 1, yaw: Math.PI },
      { dx: -1, dz: 0, yaw: -Math.PI / 2 },
    ];

    let bestDirection = directions[0];
    let bestClearance = -Infinity;

    for (const direction of directions) {
      let clearance = 0;

      for (let step = 1; step <= SPAWN_DIRECTION_DISTANCE; step += 1) {
        const sampleX = worldX + direction.dx * step;
        const sampleZ = worldZ + direction.dz * step;

        if (
          this.getBlockId(sampleX, footY, sampleZ) !== BlockId.Air ||
          this.getBlockId(sampleX, footY + 1, sampleZ) !== BlockId.Air
        ) {
          break;
        }

        clearance += 1;
      }

      if (clearance > bestClearance) {
        bestClearance = clearance;
        bestDirection = direction;
      }
    }

    return {
      clearance: bestClearance,
      yaw: bestDirection.yaw,
    };
  }
}
