import { Vector3 } from 'three';

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export const floorDiv = (value: number, divisor: number): number =>
  Math.floor(value / divisor);

export const mod = (value: number, divisor: number): number => {
  const remainder = value % divisor;
  return remainder < 0 ? remainder + divisor : remainder;
};

export const hash2D = (x: number, z: number, seed = 0): number => {
  const value = Math.sin(x * 127.1 + z * 311.7 + seed * 19.19) * 43758.5453;
  return value - Math.floor(value);
};

export const buildMovementVector = (
  yaw: number,
  forwardAmount: number,
  strafeAmount: number,
): Vector3 => {
  const forward = new Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = new Vector3(-forward.z, 0, forward.x);
  return forward.multiplyScalar(forwardAmount).add(right.multiplyScalar(strafeAmount));
};
