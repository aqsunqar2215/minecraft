import {
  AIR_CONTROL,
  GROUND_ACCELERATION,
  GRAVITY,
  JUMP_VELOCITY,
  MAX_FALL_SPEED,
  MOUSE_SENSITIVITY,
  SPRINT_SPEED,
  SWIM_SPEED,
  WALK_SPEED,
  WATER_ACCELERATION,
  WATER_BUOYANCY,
  WATER_CURRENT_STRENGTH,
  WATER_DRAG,
  WATER_GRAVITY_SCALE,
  WATER_MAX_RISE_SPEED,
  WATER_MAX_SINK_SPEED,
  WATER_MAX_SWIM_RISE_SPEED,
  WATER_SURFACE_FLOAT_ACCELERATION,
  WATER_SURFACE_FLOAT_DEPTH,
  WATER_SWIM_ACTIVATION_SUBMERSION,
  WATER_SWIM_DOWN_ACCELERATION,
  WATER_SWIM_UP_ACCELERATION,
  WATER_VERTICAL_DRAG,
} from '../utils/constants';
import { buildMovementVector, clamp } from '../utils/math';
import { FirstPersonCamera } from '../engine/Camera';
import { Physics } from '../engine/Physics';
import { InputManager } from '../engine/InputManager';
import { type WaterState } from '../world/World';
import { Player } from './Player';

export class PlayerController {
  private readonly player: Player;
  private readonly input: InputManager;
  private readonly physics: Physics;
  private readonly camera: FirstPersonCamera;

  public constructor(
    player: Player,
    input: InputManager,
    physics: Physics,
    camera: FirstPersonCamera,
  ) {
    this.player = player;
    this.input = input;
    this.physics = physics;
    this.camera = camera;
  }

  public applyLook(delta: { x: number; y: number }): void {
    this.player.yaw -= delta.x * MOUSE_SENSITIVITY;
    this.player.pitch = clamp(
      this.player.pitch - delta.y * MOUSE_SENSITIVITY,
      -Math.PI / 2 + 0.01,
      Math.PI / 2 - 0.01,
    );
  }

  public fixedUpdate(deltaSeconds: number): void {
    const forward =
      Number(this.input.isKeyDown('KeyW')) - Number(this.input.isKeyDown('KeyS'));
    const strafe =
      Number(this.input.isKeyDown('KeyD')) - Number(this.input.isKeyDown('KeyA'));
    const moveDirection = buildMovementVector(this.player.yaw, forward, strafe);
    const waterState = this.physics.sampleWaterState(this.player);
    this.applyWaterState(waterState);

    if (waterState.isInWater) {
      this.updateSwimming(moveDirection, deltaSeconds);
    } else {
      this.updateWalking(moveDirection, forward, strafe, deltaSeconds);
    }

    this.physics.move(this.player, deltaSeconds);
    this.applyWaterState(this.physics.sampleWaterState(this.player));
    this.camera.sync(this.player);
  }

  private applyWaterState(waterState: WaterState): void {
    this.player.isInWater = waterState.isInWater;
    this.player.headInWater = waterState.headInWater;
    this.player.waterSurfaceY = waterState.surfaceY;
    this.player.waterSubmersion = waterState.submersion;
    this.player.waterFlow.copy(waterState.flow);
  }

  private updateWalking(
    moveDirection: ReturnType<typeof buildMovementVector>,
    forward: number,
    strafe: number,
    deltaSeconds: number,
  ): void {
    const targetSpeed =
      this.input.isKeyDown('ShiftLeft') || this.input.isKeyDown('ShiftRight')
        ? SPRINT_SPEED
        : WALK_SPEED;

    if (moveDirection.lengthSq() > 0) {
      moveDirection.normalize().multiplyScalar(targetSpeed);
    }

    const acceleration = this.player.onGround
      ? GROUND_ACCELERATION
      : GROUND_ACCELERATION * AIR_CONTROL;
    const blend = Math.min(1, acceleration * deltaSeconds);

    this.player.velocity.x += (moveDirection.x - this.player.velocity.x) * blend;
    this.player.velocity.z += (moveDirection.z - this.player.velocity.z) * blend;

    if (forward === 0 && strafe === 0 && this.player.onGround) {
      this.player.velocity.x *= 0.82;
      this.player.velocity.z *= 0.82;
    }

    if (this.input.consumePressed('Space') && this.player.onGround) {
      this.player.velocity.y = JUMP_VELOCITY;
      this.player.onGround = false;
    }

    this.player.velocity.y = Math.max(
      this.player.velocity.y - GRAVITY * deltaSeconds,
      -MAX_FALL_SPEED,
    );
  }

  private updateSwimming(
    moveDirection: ReturnType<typeof buildMovementVector>,
    deltaSeconds: number,
  ): void {
    const hasMoveInput = moveDirection.lengthSq() > 0;

    if (hasMoveInput) {
      moveDirection.normalize().multiplyScalar(SWIM_SPEED);
    }

    const blend = Math.min(1, WATER_ACCELERATION * deltaSeconds);
    this.player.velocity.x += (moveDirection.x - this.player.velocity.x) * blend;
    this.player.velocity.z += (moveDirection.z - this.player.velocity.z) * blend;

    const idleDrag = Math.max(0, 1 - WATER_DRAG * deltaSeconds);

    if (!hasMoveInput) {
      this.player.velocity.x *= idleDrag;
      this.player.velocity.z *= idleDrag;
    }

    const swimUp = this.input.isKeyDown('Space') ? 1 : 0;
    const swimDown =
      this.input.isKeyDown('ShiftLeft') || this.input.isKeyDown('ShiftRight') ? 1 : 0;
    const surfaceBlend = clamp(
      (this.player.waterSubmersion - WATER_SWIM_ACTIVATION_SUBMERSION) / 0.28,
      0,
      1,
    );
    const buoyancyScale = swimDown > 0 ? 0.38 : 1;
    const surfaceLiftScale = swimDown > 0 ? 0.14 : 1;
    const buoyancy =
      Math.max(0, this.player.waterSubmersion - 0.45) * WATER_BUOYANCY * buoyancyScale;
    let isAboveSurfaceTarget = false;
    const surfaceLift =
      this.player.waterSurfaceY === null
        ? 0
        : (() => {
            const targetFeetY = this.player.waterSurfaceY - WATER_SURFACE_FLOAT_DEPTH;
            const offsetToSurfaceTarget = targetFeetY - this.player.position.y;
            isAboveSurfaceTarget = offsetToSurfaceTarget < -0.04;
            const surfaceAcceleration =
              offsetToSurfaceTarget >= 0
                ? offsetToSurfaceTarget * WATER_SURFACE_FLOAT_ACCELERATION
                : offsetToSurfaceTarget * WATER_SURFACE_FLOAT_ACCELERATION * 0.42;

            return clamp(
              surfaceAcceleration * surfaceBlend * surfaceLiftScale,
              -WATER_SURFACE_FLOAT_ACCELERATION * 0.38,
              WATER_SURFACE_FLOAT_ACCELERATION * 0.6,
            );
          })();
    const verticalAcceleration =
      buoyancy +
      surfaceLift +
      swimUp * WATER_SWIM_UP_ACCELERATION -
      swimDown * WATER_SWIM_DOWN_ACCELERATION -
      GRAVITY * WATER_GRAVITY_SCALE;

    this.player.velocity.y += verticalAcceleration * deltaSeconds;
    this.player.velocity.y *= Math.max(0, 1 - WATER_VERTICAL_DRAG * deltaSeconds);

    if (swimUp === 0 && isAboveSurfaceTarget && this.player.velocity.y > 0) {
      this.player.velocity.y *= 0.72;
    }

    if (swimDown > 0 && this.player.velocity.y > 0) {
      this.player.velocity.y *= 0.5;
    }

    this.player.velocity.x +=
      this.player.waterFlow.x *
      WATER_CURRENT_STRENGTH *
      Math.max(0.15, this.player.waterSubmersion) *
      deltaSeconds;
    this.player.velocity.z +=
      this.player.waterFlow.z *
      WATER_CURRENT_STRENGTH *
      Math.max(0.15, this.player.waterSubmersion) *
      deltaSeconds;

    const horizontalSpeed = Math.hypot(this.player.velocity.x, this.player.velocity.z);
    const maxRiseSpeed = swimUp > 0 ? WATER_MAX_SWIM_RISE_SPEED : WATER_MAX_RISE_SPEED;

    if (horizontalSpeed > SWIM_SPEED * 1.35) {
      const scale = (SWIM_SPEED * 1.35) / horizontalSpeed;
      this.player.velocity.x *= scale;
      this.player.velocity.z *= scale;
    }

    this.player.velocity.y = clamp(
      this.player.velocity.y,
      -WATER_MAX_SINK_SPEED,
      maxRiseSpeed,
    );

    if (swimUp > 0 || swimDown > 0) {
      this.player.onGround = false;
    }
  }
}
