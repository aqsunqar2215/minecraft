type LookDelta = {
  x: number;
  y: number;
};

export class InputManager {
  private readonly keys = new Set<string>();
  private readonly mouseButtons = new Set<number>();
  private readonly pressed = new Set<string>();
  private readonly documentRef: Document;
  private pointerLockTarget: HTMLElement | null = null;
  private lookDelta: LookDelta = { x: 0, y: 0 };

  public constructor(documentRef: Document) {
    this.documentRef = documentRef;
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('blur', this.handleBlur);
    this.documentRef.addEventListener('mousemove', this.handleMouseMove);
    this.documentRef.addEventListener('pointerlockchange', this.handlePointerLockChange);
  }

  public attachPointerLockTarget(target: HTMLElement): void {
    this.pointerLockTarget = target;
    target.addEventListener('click', this.handlePointerLockRequest);
  }

  public isPointerLocked(): boolean {
    return this.documentRef.pointerLockElement === this.pointerLockTarget;
  }

  public isKeyDown(code: string): boolean {
    return this.keys.has(code);
  }

  public consumePressed(code: string): boolean {
    const wasPressed = this.pressed.has(code);
    this.pressed.delete(code);
    return wasPressed;
  }

  public consumeLookDelta(): LookDelta {
    const delta = this.lookDelta;
    this.lookDelta = { x: 0, y: 0 };
    return delta;
  }

  public isMouseButtonDown(button: number): boolean {
    return this.mouseButtons.has(button);
  }

  private readonly handlePointerLockRequest = (): void => {
    if (!this.pointerLockTarget || this.isPointerLocked()) {
      return;
    }

    this.pointerLockTarget.requestPointerLock();
  };

  private readonly handleKeyDown = (event: KeyboardEvent): void => {
    if (!this.keys.has(event.code)) {
      this.pressed.add(event.code);
    }

    this.keys.add(event.code);

    if (
      event.code === 'Space' ||
      event.code === 'ShiftLeft' ||
      event.code === 'ShiftRight' ||
      event.code.startsWith('Key')
    ) {
      event.preventDefault();
    }
  };

  private readonly handleKeyUp = (event: KeyboardEvent): void => {
    this.keys.delete(event.code);
  };

  private readonly handleMouseDown = (event: MouseEvent): void => {
    this.mouseButtons.add(event.button);
  };

  private readonly handleMouseUp = (event: MouseEvent): void => {
    this.mouseButtons.delete(event.button);
  };

  private readonly handleBlur = (): void => {
    this.keys.clear();
    this.pressed.clear();
    this.mouseButtons.clear();
    this.lookDelta = { x: 0, y: 0 };
  };

  private readonly handleMouseMove = (event: MouseEvent): void => {
    if (!this.isPointerLocked()) {
      return;
    }

    this.lookDelta.x += event.movementX;
    this.lookDelta.y += event.movementY;
  };

  private readonly handlePointerLockChange = (): void => {
    if (this.isPointerLocked()) {
      return;
    }

    this.mouseButtons.clear();
    this.lookDelta = { x: 0, y: 0 };
  };
}
