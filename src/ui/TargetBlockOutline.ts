import { BoxGeometry, EdgesGeometry, LineBasicMaterial, LineSegments } from 'three';

export class TargetBlockOutline {
  public readonly object: LineSegments;

  public constructor() {
    const geometry = new EdgesGeometry(new BoxGeometry(1.01, 1.01, 1.01));
    const material = new LineBasicMaterial({ color: 0xffffff });
    this.object = new LineSegments(geometry, material);
    this.object.visible = false;
  }

  public show(x: number, y: number, z: number): void {
    this.object.visible = true;
    this.object.position.set(x + 0.5, y + 0.5, z + 0.5);
  }

  public hide(): void {
    this.object.visible = false;
  }
}
