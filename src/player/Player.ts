import { Vector3 } from 'three';

import { PLAYER_EYE_HEIGHT, PLAYER_HEIGHT, PLAYER_WIDTH } from '../utils/constants';

export class Player {
  public readonly position: Vector3;
  public readonly velocity = new Vector3();
  public yaw = 0;
  public pitch = 0;
  public onGround = false;
  public isInWater = false;
  public headInWater = false;
  public waterSurfaceY: number | null = null;
  public waterSubmersion = 0;
  public readonly waterFlow = new Vector3();
  public readonly width = PLAYER_WIDTH;
  public readonly height = PLAYER_HEIGHT;
  public readonly eyeHeight = PLAYER_EYE_HEIGHT;

  public constructor(spawnPosition: Vector3) {
    this.position = spawnPosition.clone();
  }

  public get halfWidth(): number {
    return this.width / 2;
  }
}
