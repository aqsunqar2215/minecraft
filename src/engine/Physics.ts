import { Player } from '../player/Player';
import { WATER_LEDGE_STEP_HEIGHT } from '../utils/constants';
import { type WaterState, World } from '../world/World';

const EPSILON = 0.0001;
const MAX_MOVEMENT_PER_SUBSTEP = 0.45;

type Axis = 'x' | 'y' | 'z';

export class Physics {
  private readonly world: World;

  public constructor(world: World) {
    this.world = world;
  }

  public sampleWaterState(player: Player): WaterState {
    return this.world.sampleWaterState(
      player.position,
      player.halfWidth,
      player.height,
      player.eyeHeight,
    );
  }

  public move(player: Player, deltaSeconds: number): void {
    const maxDistance =
      Math.max(
        Math.abs(player.velocity.x),
        Math.abs(player.velocity.y),
        Math.abs(player.velocity.z),
      ) * deltaSeconds;
    const substeps = Math.max(1, Math.ceil(maxDistance / MAX_MOVEMENT_PER_SUBSTEP));
    const substepDelta = deltaSeconds / substeps;

    player.onGround = false;

    for (let step = 0; step < substeps; step += 1) {
      this.moveAxis(player, 'x', player.velocity.x * substepDelta);
      this.moveAxis(player, 'z', player.velocity.z * substepDelta);
      this.moveAxis(player, 'y', player.velocity.y * substepDelta);
    }
  }

  private moveAxis(player: Player, axis: Axis, amount: number): void {
    if (Math.abs(amount) < EPSILON) {
      return;
    }

    const originalPosition = player.position.clone();
    player.position[axis] += amount;

    if (!this.hasSolidCollision(player)) {
      return;
    }

    if (
      axis !== 'y' &&
      player.isInWater &&
      this.tryStepOutOfWater(player, originalPosition)
    ) {
      return;
    }

    const bounds = this.getCollisionBounds(
      player.position.x,
      player.position.y,
      player.position.z,
      player.halfWidth,
      player.height,
    );

    let collided = false;
    let resolvedPosition = player.position[axis];

    for (let y = bounds.minY; y <= bounds.maxY; y += 1) {
      for (let z = bounds.minZ; z <= bounds.maxZ; z += 1) {
        for (let x = bounds.minX; x <= bounds.maxX; x += 1) {
          if (!this.world.isSolidBlockAt(x, y, z)) {
            continue;
          }

          collided = true;

          if (axis === 'x') {
            resolvedPosition =
              amount > 0
                ? Math.min(resolvedPosition, x - player.halfWidth - EPSILON)
                : Math.max(resolvedPosition, x + 1 + player.halfWidth + EPSILON);
          }

          if (axis === 'z') {
            resolvedPosition =
              amount > 0
                ? Math.min(resolvedPosition, z - player.halfWidth - EPSILON)
                : Math.max(resolvedPosition, z + 1 + player.halfWidth + EPSILON);
          }

          if (axis === 'y') {
            resolvedPosition =
              amount > 0
                ? Math.min(resolvedPosition, y - player.height - EPSILON)
                : Math.max(resolvedPosition, y + 1 + EPSILON);
          }
        }
      }
    }

    if (!collided) {
      return;
    }

    player.position[axis] = resolvedPosition;
    player.velocity[axis] = 0;

    if (axis === 'y' && amount < 0) {
      player.onGround = true;
    }
  }

  private hasSolidCollision(player: Player): boolean {
    const bounds = this.getCollisionBounds(
      player.position.x,
      player.position.y,
      player.position.z,
      player.halfWidth,
      player.height,
    );

    for (let y = bounds.minY; y <= bounds.maxY; y += 1) {
      for (let z = bounds.minZ; z <= bounds.maxZ; z += 1) {
        for (let x = bounds.minX; x <= bounds.maxX; x += 1) {
          if (this.world.isSolidBlockAt(x, y, z)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  private getCollisionBounds(
    x: number,
    y: number,
    z: number,
    halfWidth: number,
    height: number,
  ): {
    maxX: number;
    maxY: number;
    maxZ: number;
    minX: number;
    minY: number;
    minZ: number;
  } {
    return {
      minX: Math.floor(x - halfWidth),
      maxX: Math.floor(x + halfWidth - EPSILON),
      minY: Math.floor(y),
      maxY: Math.floor(y + height - EPSILON),
      minZ: Math.floor(z - halfWidth),
      maxZ: Math.floor(z + halfWidth - EPSILON),
    };
  }

  private tryStepOutOfWater(player: Player, originalPosition: Player['position']): boolean {
    const maxStepTop = originalPosition.y + WATER_LEDGE_STEP_HEIGHT + EPSILON;
    const candidateTops = new Set<number>();
    const bounds = this.getCollisionBounds(
      player.position.x,
      player.position.y,
      player.position.z,
      player.halfWidth,
      player.height,
    );

    for (
      let y = Math.floor(originalPosition.y - EPSILON);
      y <= Math.floor(maxStepTop);
      y += 1
    ) {
      for (let z = bounds.minZ; z <= bounds.maxZ; z += 1) {
        for (let x = bounds.minX; x <= bounds.maxX; x += 1) {
          if (!this.world.isSolidBlockAt(x, y, z)) {
            continue;
          }

          const blockTop = y + 1;

          if (blockTop <= originalPosition.y + EPSILON || blockTop > maxStepTop) {
            continue;
          }

          candidateTops.add(blockTop);
        }
      }
    }

    const sortedCandidateTops = [...candidateTops].sort((left, right) => left - right);

    for (const blockTop of sortedCandidateTops) {
      player.position.y = blockTop + EPSILON;

      if (this.hasSolidCollision(player)) {
        continue;
      }

      player.velocity.y = Math.max(0, player.velocity.y);
      player.onGround = true;
      return true;
    }

    player.position.y = originalPosition.y;
    return false;
  }
}
