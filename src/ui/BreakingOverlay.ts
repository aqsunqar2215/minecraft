import {
  BoxGeometry,
  CanvasTexture,
  ClampToEdgeWrapping,
  Mesh,
  MeshBasicMaterial,
  NearestFilter,
  SRGBColorSpace,
} from 'three';

import { MINING_CRACK_STAGES } from '../utils/constants';

const TILE_SIZE = 64;
const ATLAS_WIDTH = TILE_SIZE * MINING_CRACK_STAGES;
const ATLAS_HEIGHT = TILE_SIZE;

type Segment = readonly [number, number, number, number];

const crackSegments: readonly Segment[] = [
  [32, 2, 28, 17],
  [28, 17, 35, 28],
  [35, 28, 31, 45],
  [31, 45, 25, 61],
  [28, 17, 15, 21],
  [15, 21, 8, 32],
  [8, 32, 17, 43],
  [35, 28, 49, 24],
  [49, 24, 58, 14],
  [49, 24, 53, 39],
  [17, 43, 10, 56],
  [53, 39, 57, 54],
  [24, 9, 16, 6],
  [39, 11, 47, 7],
  [23, 33, 14, 35],
  [40, 40, 50, 44],
  [28, 52, 18, 56],
  [33, 50, 44, 57],
  [21, 27, 18, 15],
  [42, 30, 47, 18],
] as const;

const createBreakingAtlas = (): CanvasTexture => {
  const canvas = document.createElement('canvas');
  canvas.width = ATLAS_WIDTH;
  canvas.height = ATLAS_HEIGHT;

  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('2D canvas context is required for the breaking overlay atlas.');
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineCap = 'round';
  context.lineJoin = 'round';

  for (let stage = 0; stage < MINING_CRACK_STAGES; stage += 1) {
    const originX = stage * TILE_SIZE;
    const lineCount = Math.ceil(((stage + 1) / MINING_CRACK_STAGES) * crackSegments.length);

    context.save();
    context.translate(originX, 0);

    for (let index = 0; index < lineCount; index += 1) {
      const [x1, y1, x2, y2] = crackSegments[index];
      const width = stage < 3 ? 2 : stage < 7 ? 2.5 : 3;

      context.beginPath();
      context.strokeStyle = 'rgba(0, 0, 0, 0.55)';
      context.lineWidth = width + 1.5;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();

      context.beginPath();
      context.strokeStyle = `rgba(255, 255, 255, ${0.38 + stage * 0.045})`;
      context.lineWidth = width;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    }

    context.restore();
  }

  const texture = new CanvasTexture(canvas);
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.repeat.set(1 / MINING_CRACK_STAGES, 1);
  texture.offset.set(0, 0);
  texture.needsUpdate = true;

  return texture;
};

export class BreakingOverlay {
  public readonly object: Mesh;
  private readonly texture = createBreakingAtlas();

  public constructor() {
    const material = new MeshBasicMaterial({
      alphaTest: 0.08,
      depthWrite: false,
      map: this.texture,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      transparent: true,
    });
    this.object = new Mesh(new BoxGeometry(1.008, 1.008, 1.008), material);
    this.object.visible = false;
  }

  public show(x: number, y: number, z: number, stage: number): void {
    this.object.visible = true;
    this.object.position.set(x + 0.5, y + 0.5, z + 0.5);
    this.setStage(stage);
  }

  public hide(): void {
    this.object.visible = false;
  }

  private setStage(stage: number): void {
    const clampedStage = Math.max(0, Math.min(MINING_CRACK_STAGES - 1, Math.floor(stage)));
    this.texture.offset.x = clampedStage / MINING_CRACK_STAGES;
  }
}
