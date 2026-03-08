import { Mesh } from 'three';

import { CHUNK_SIZE, WORLD_HEIGHT } from '../utils/constants';
import { BlockId } from './BlockRegistry';

export class Chunk {
  public readonly blocks = new Uint8Array(CHUNK_SIZE * WORLD_HEIGHT * CHUNK_SIZE);
  public mesh: Mesh | null = null;
  public waterMesh: Mesh | null = null;
  public readonly chunkX: number;
  public readonly chunkZ: number;

  public constructor(chunkX: number, chunkZ: number) {
    this.chunkX = chunkX;
    this.chunkZ = chunkZ;
  }

  public get key(): string {
    return `${this.chunkX},${this.chunkZ}`;
  }

  public get worldX(): number {
    return this.chunkX * CHUNK_SIZE;
  }

  public get worldZ(): number {
    return this.chunkZ * CHUNK_SIZE;
  }

  public getBlock(localX: number, y: number, localZ: number): BlockId {
    return this.blocks[Chunk.index(localX, y, localZ)] as BlockId;
  }

  public setBlock(localX: number, y: number, localZ: number, blockId: BlockId): void {
    this.blocks[Chunk.index(localX, y, localZ)] = blockId;
  }

  public static index(localX: number, y: number, localZ: number): number {
    return localX + localZ * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE;
  }
}
