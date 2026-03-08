import { BufferAttribute, BufferGeometry } from 'three';

import { CHUNK_SIZE, WATER_SURFACE_HEIGHT, WORLD_HEIGHT } from '../utils/constants';
import { BlockId, BlockRegistry, type BlockFace } from './BlockRegistry';
import { Chunk } from './Chunk';
import { getTileUv } from './BlockTextures';

type BuildArrays = {
  colors: number[];
  indices: number[];
  normals: number[];
  positions: number[];
  uvs: number[];
};

type ChunkMeshBuildResult = {
  solidGeometry: BufferGeometry | null;
  waterGeometry: BufferGeometry | null;
};

type FaceDefinition = {
  corners: readonly [
    readonly [number, number, number],
    readonly [number, number, number],
    readonly [number, number, number],
    readonly [number, number, number],
  ];
  neighborOffset: readonly [number, number, number];
  normal: readonly [number, number, number];
  shade: number;
  uvTemplate: readonly [
    readonly [number, number],
    readonly [number, number],
    readonly [number, number],
    readonly [number, number],
  ];
};

type UvMode = 'atlas' | 'water';

const WATER_UV_SCALE = 0.35;

const FACE_DEFINITIONS: Record<BlockFace, FaceDefinition> = {
  top: {
    corners: [
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
    ],
    neighborOffset: [0, 1, 0],
    normal: [0, 1, 0],
    shade: 1,
    uvTemplate: [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  },
  bottom: {
    corners: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    neighborOffset: [0, -1, 0],
    normal: [0, -1, 0],
    shade: 0.58,
    uvTemplate: [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  },
  north: {
    corners: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
    neighborOffset: [0, 0, -1],
    normal: [0, 0, -1],
    shade: 0.8,
    uvTemplate: [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  },
  south: {
    corners: [
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ],
    neighborOffset: [0, 0, 1],
    normal: [0, 0, 1],
    shade: 0.8,
    uvTemplate: [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  },
  east: {
    corners: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
      [1, 0, 1],
    ],
    neighborOffset: [1, 0, 0],
    normal: [1, 0, 0],
    shade: 0.72,
    uvTemplate: [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  },
  west: {
    corners: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    neighborOffset: [-1, 0, 0],
    normal: [-1, 0, 0],
    shade: 0.72,
    uvTemplate: [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  },
};

const createBuildArrays = (): BuildArrays => ({
  colors: [],
  indices: [],
  normals: [],
  positions: [],
  uvs: [],
});

const finalizeGeometry = (arrays: BuildArrays): BufferGeometry | null => {
  if (arrays.indices.length === 0) {
    return null;
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(arrays.positions), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(arrays.normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(arrays.uvs), 2));
  geometry.setAttribute('color', new BufferAttribute(new Float32Array(arrays.colors), 3));
  geometry.setIndex(arrays.indices);
  geometry.computeBoundingSphere();

  return geometry;
};

const isSolidLayerBlock = (blockId: BlockId): boolean =>
  BlockRegistry.isRenderable(blockId) && !BlockRegistry.isLiquid(blockId);

const isWaterLayerBlock = (blockId: BlockId): boolean => blockId === BlockId.Water;

const shouldRenderSolidFace = (blockId: BlockId, neighborId: BlockId): boolean =>
  neighborId !== blockId && !BlockRegistry.isOpaque(neighborId);

const shouldRenderWaterFace = (_blockId: BlockId, neighborId: BlockId): boolean =>
  neighborId !== BlockId.Water && !BlockRegistry.isOpaque(neighborId);

const getWaterSurfaceHeight = (
  blockId: BlockId,
  worldX: number,
  y: number,
  worldZ: number,
  getWorldBlock: (worldX: number, y: number, worldZ: number) => BlockId,
): number => {
  if (blockId !== BlockId.Water) {
    return 1;
  }

  return getWorldBlock(worldX, y + 1, worldZ) === BlockId.Water ? 1 : WATER_SURFACE_HEIGHT;
};

const appendFace = (
  arrays: BuildArrays,
  localX: number,
  y: number,
  localZ: number,
  worldX: number,
  worldZ: number,
  blockId: BlockId,
  face: BlockFace,
  surfaceHeight: number,
  uvMode: UvMode,
): void => {
  const definition = FACE_DEFINITIONS[face];
  const baseIndex = arrays.positions.length / 3;
  const atlasUv =
    uvMode === 'atlas' ? getTileUv(BlockRegistry.getFaceTexture(blockId, face)) : null;

  for (let cornerIndex = 0; cornerIndex < definition.corners.length; cornerIndex += 1) {
    const [vertexX, vertexY, vertexZ] = definition.corners[cornerIndex];
    const adjustedY = vertexY === 1 ? surfaceHeight : vertexY;
    let u = 0;
    let v = 0;

    if (atlasUv) {
      const [u0, v0, u1, v1] = atlasUv;
      const [uFactor, vFactor] = definition.uvTemplate[cornerIndex];
      u = uFactor === 0 ? u0 : u1;
      v = vFactor === 0 ? v0 : v1;
    } else if (face === 'top' || face === 'bottom') {
      u = (worldX + vertexX) * WATER_UV_SCALE;
      v = (worldZ + vertexZ) * WATER_UV_SCALE;
    } else if (face === 'north' || face === 'south') {
      u = (worldX + vertexX) * WATER_UV_SCALE;
      v = (y + adjustedY) * WATER_UV_SCALE;
    } else {
      u = (worldZ + vertexZ) * WATER_UV_SCALE;
      v = (y + adjustedY) * WATER_UV_SCALE;
    }

    arrays.positions.push(localX + vertexX, y + adjustedY, localZ + vertexZ);
    arrays.normals.push(...definition.normal);
    arrays.uvs.push(u, v);
    arrays.colors.push(definition.shade, definition.shade, definition.shade);
  }

  arrays.indices.push(
    baseIndex,
    baseIndex + 1,
    baseIndex + 2,
    baseIndex,
    baseIndex + 2,
    baseIndex + 3,
  );
};

const buildLayerGeometry = (
  chunk: Chunk,
  getWorldBlock: (worldX: number, y: number, worldZ: number) => BlockId,
  includeBlock: (blockId: BlockId) => boolean,
  shouldRenderFace: (blockId: BlockId, neighborId: BlockId) => boolean,
  useLoweredSurface: boolean,
  uvMode: UvMode,
): BufferGeometry | null => {
  const arrays = createBuildArrays();

  for (let localX = 0; localX < CHUNK_SIZE; localX += 1) {
    for (let y = 0; y < WORLD_HEIGHT; y += 1) {
      for (let localZ = 0; localZ < CHUNK_SIZE; localZ += 1) {
        const blockId = chunk.getBlock(localX, y, localZ);

        if (!includeBlock(blockId)) {
          continue;
        }

        const worldX = chunk.worldX + localX;
        const worldZ = chunk.worldZ + localZ;
        const surfaceHeight = useLoweredSurface
          ? getWaterSurfaceHeight(blockId, worldX, y, worldZ, getWorldBlock)
          : 1;

        for (const face of Object.keys(FACE_DEFINITIONS) as BlockFace[]) {
          const definition = FACE_DEFINITIONS[face];
          const [offsetX, offsetY, offsetZ] = definition.neighborOffset;
          const neighborId = getWorldBlock(worldX + offsetX, y + offsetY, worldZ + offsetZ);

          if (!shouldRenderFace(blockId, neighborId)) {
            continue;
          }

          appendFace(
            arrays,
            localX,
            y,
            localZ,
            worldX,
            worldZ,
            blockId,
            face,
            surfaceHeight,
            uvMode,
          );
        }
      }
    }
  }

  return finalizeGeometry(arrays);
};

export const ChunkMesher = {
  build(
    chunk: Chunk,
    getWorldBlock: (worldX: number, y: number, worldZ: number) => BlockId,
  ): ChunkMeshBuildResult {
    return {
      solidGeometry: buildLayerGeometry(
        chunk,
        getWorldBlock,
        isSolidLayerBlock,
        shouldRenderSolidFace,
        false,
        'atlas',
      ),
      waterGeometry: buildLayerGeometry(
        chunk,
        getWorldBlock,
        isWaterLayerBlock,
        shouldRenderWaterFace,
        true,
        'water',
      ),
    };
  },
};
