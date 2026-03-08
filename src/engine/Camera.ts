import { PerspectiveCamera } from 'three';

import { PLAYER_EYE_HEIGHT } from '../utils/constants';
import { Player } from '../player/Player';

export class FirstPersonCamera {
  public readonly camera: PerspectiveCamera;

  public constructor(aspect: number) {
    this.camera = new PerspectiveCamera(75, aspect, 0.1, 600);
    this.camera.rotation.order = 'YXZ';
  }

  public updateAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  public sync(player: Player): void {
    this.camera.position.set(
      player.position.x,
      player.position.y + PLAYER_EYE_HEIGHT,
      player.position.z,
    );
    this.camera.rotation.y = player.yaw;
    this.camera.rotation.x = player.pitch;
  }
}
