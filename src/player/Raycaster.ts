import { Vector3 } from 'three';

import { BlockId, BlockRegistry } from '../world/BlockRegistry';
import { World } from '../world/World';

export type BlockHit = {
  block: { x: number; y: number; z: number };
  previous: { x: number; y: number; z: number };
  blockId: BlockId;
  distance: number;
};

export class VoxelRaycaster {
  private readonly world: World;

  public constructor(world: World) {
    this.world = world;
  }

  public cast(origin: Vector3, direction: Vector3, maxDistance: number): BlockHit | null {
    const previous = {
      x: Math.floor(origin.x),
      y: Math.floor(origin.y),
      z: Math.floor(origin.z),
    };

    const samplePoint = new Vector3();

    for (let distance = 0; distance <= maxDistance; distance += 0.1) {
      samplePoint.copy(origin).addScaledVector(direction, distance);

      const block = {
        x: Math.floor(samplePoint.x),
        y: Math.floor(samplePoint.y),
        z: Math.floor(samplePoint.z),
      };

      const blockId = this.world.getBlockId(block.x, block.y, block.z);

      if (BlockRegistry.isSolid(blockId)) {
        return {
          block,
          previous: { ...previous },
          blockId,
          distance,
        };
      }

      previous.x = block.x;
      previous.y = block.y;
      previous.z = block.z;
    }

    return null;
  }
}
