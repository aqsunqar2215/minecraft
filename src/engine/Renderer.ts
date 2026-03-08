import {
  BoxGeometry,
  Camera,
  Color,
  DirectionalLight,
  FogExp2,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';

import { SKY_COLOR } from '../utils/constants';

type CloudRig = {
  anchor: Group;
  baseOffset: Vector3;
  driftPhase: number;
  driftSpeed: number;
};

const SUN_OFFSET = new Vector3(190, 132, -280);
const CLOUD_DRIFT_RANGE = 360;
const CLOUD_CELL_SIZE = 6;
const CLOUD_CELL_HEIGHT = 1.8;
const SUN_BORDER_COLOR = 0xf2c35d;
const SUN_CORE_COLOR = 0xfff2a6;
const SUN_HIGHLIGHT_COLOR = 0xfffde8;
const CLOUD_TOP_COLOR = 0xffffff;
const CLOUD_BOTTOM_COLOR = 0xd2dfea;

const CLOUD_CONFIGS: Array<{
  baseOffset: Vector3;
  driftPhase: number;
  driftSpeed: number;
  pattern: string[];
}> = [
  {
    baseOffset: new Vector3(-250, 150, -240),
    driftPhase: 0,
    driftSpeed: 3.2,
    pattern: [
      '001100',
      '011110',
      '111111',
      '011110',
    ],
  },
  {
    baseOffset: new Vector3(-30, 158, -330),
    driftPhase: 73,
    driftSpeed: 2.6,
    pattern: [
      '0011100',
      '0111110',
      '1111111',
      '0111110',
    ],
  },
  {
    baseOffset: new Vector3(240, 146, -170),
    driftPhase: 141,
    driftSpeed: 2.1,
    pattern: [
      '0001100',
      '0111110',
      '0011100',
    ],
  },
  {
    baseOffset: new Vector3(150, 154, 90),
    driftPhase: 219,
    driftSpeed: 1.7,
    pattern: [
      '00011000',
      '00111100',
      '01111110',
      '00111100',
    ],
  },
];

export class Renderer {
  public readonly canvas: HTMLCanvasElement;
  public readonly scene: Scene;
  public readonly renderer: WebGLRenderer;
  private readonly skyGroup = new Group();
  private readonly cloudRigs: CloudRig[] = [];
  private readonly skyStartTime = performance.now();
  private resizeHandler: ((aspect: number) => void) | null = null;

  public constructor(root: HTMLElement) {
    this.canvas = document.createElement('canvas');
    root.append(this.canvas);

    this.scene = new Scene();
    this.scene.background = new Color(SKY_COLOR);
    this.scene.fog = new FogExp2(SKY_COLOR, 0.0075);

    const hemisphereLight = new HemisphereLight(0xffffff, 0x506070, 1.9);
    const directionalLight = new DirectionalLight(0xfff4d2, 1.9);
    directionalLight.position.set(96, 160, 64);

    this.buildSkyDecor();

    this.scene.add(hemisphereLight, directionalLight, this.skyGroup);

    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: this.canvas,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.handleResize();

    window.addEventListener('resize', this.handleResize);
  }

  public get aspect(): number {
    return this.canvas.width / this.canvas.height;
  }

  public setResizeHandler(handler: (aspect: number) => void): void {
    this.resizeHandler = handler;
    handler(this.aspect);
  }

  public render(camera: Camera): void {
    this.updateSkyDecor(camera);
    this.renderer.render(this.scene, camera);
  }

  private buildSkyDecor(): void {
    const sun = createPixelSun();
    sun.position.copy(SUN_OFFSET);
    this.skyGroup.add(sun);

    for (const config of CLOUD_CONFIGS) {
      const cloud = createBlockCloud(config.pattern);
      this.cloudRigs.push({
        anchor: cloud,
        baseOffset: config.baseOffset.clone(),
        driftPhase: config.driftPhase,
        driftSpeed: config.driftSpeed,
      });
      this.skyGroup.add(cloud);
    }
  }

  private updateSkyDecor(camera: Camera): void {
    this.skyGroup.position.set(camera.position.x, 0, camera.position.z);

    const elapsedSeconds = (performance.now() - this.skyStartTime) / 1000;

    for (const cloud of this.cloudRigs) {
      const drift =
        ((elapsedSeconds * cloud.driftSpeed + cloud.driftPhase) % CLOUD_DRIFT_RANGE) -
        CLOUD_DRIFT_RANGE / 2;

      cloud.anchor.position.set(
        cloud.baseOffset.x + drift,
        cloud.baseOffset.y,
        cloud.baseOffset.z,
      );
    }
  }

  private readonly handleResize = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.renderer.setSize(width, height, false);
    this.resizeHandler?.(width / height);
  };
}

function createPixelSun(): Group {
  const group = new Group();

  const outer = createSkyMesh(26, 26, 2.2, SUN_BORDER_COLOR);
  const inner = createSkyMesh(18, 18, 2.5, SUN_CORE_COLOR);
  const highlightA = createSkyMesh(4.5, 4.5, 2.8, SUN_HIGHLIGHT_COLOR);
  const highlightB = createSkyMesh(4.5, 4.5, 2.8, SUN_HIGHLIGHT_COLOR);

  highlightA.position.set(-6, 6, 0.3);
  highlightB.position.set(4, -3, 0.3);

  group.add(outer, inner, highlightA, highlightB);
  return group;
}

function createBlockCloud(pattern: string[]): Group {
  const group = new Group();
  const topMaterial = new MeshBasicMaterial({
    color: CLOUD_TOP_COLOR,
    depthWrite: false,
    fog: false,
    opacity: 0.96,
    transparent: true,
  });
  const bottomMaterial = new MeshBasicMaterial({
    color: CLOUD_BOTTOM_COLOR,
    depthWrite: false,
    fog: false,
    opacity: 0.92,
    transparent: true,
  });
  const topGeometry = new BoxGeometry(CLOUD_CELL_SIZE, CLOUD_CELL_HEIGHT, CLOUD_CELL_SIZE);
  const bottomGeometry = new BoxGeometry(CLOUD_CELL_SIZE, CLOUD_CELL_HEIGHT * 0.6, CLOUD_CELL_SIZE);
  const halfWidth = (pattern[0].length - 1) / 2;
  const halfDepth = (pattern.length - 1) / 2;

  for (let row = 0; row < pattern.length; row += 1) {
    for (let column = 0; column < pattern[row].length; column += 1) {
      if (pattern[row][column] !== '1') {
        continue;
      }

      const x = (column - halfWidth) * CLOUD_CELL_SIZE;
      const z = (row - halfDepth) * CLOUD_CELL_SIZE;
      const top = new Mesh(topGeometry, topMaterial);
      const bottom = new Mesh(bottomGeometry, bottomMaterial);

      top.position.set(x, 0, z);
      bottom.position.set(x, -CLOUD_CELL_HEIGHT * 0.75, z);

      group.add(top, bottom);
    }
  }

  return group;
}

function createSkyMesh(width: number, height: number, depth: number, color: number): Mesh {
  return new Mesh(
    new BoxGeometry(width, height, depth),
    new MeshBasicMaterial({
      color,
      depthWrite: false,
      fog: false,
    }),
  );
}
