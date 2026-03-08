export class CrosshairUI {
  public constructor(root: HTMLElement) {
    const crosshair = document.createElement('div');
    crosshair.className = 'crosshair';
    root.append(crosshair);
  }
}
