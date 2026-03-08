import { type SlotVisualElements, renderSlotVisual } from './SlotVisuals';
import { Inventory } from './Inventory';

type HotbarSlotView = SlotVisualElements & {
  baseClassName: string;
};

export class HotbarUI {
  private readonly root: HTMLDivElement;
  private readonly slots: HotbarSlotView[] = [];

  public constructor(root: HTMLElement) {
    this.root = document.createElement('div');
    this.root.className = 'hotbar';
    root.append(this.root);

    for (let index = 0; index < 9; index += 1) {
      const slot = document.createElement('div');
      slot.className = 'hotbar-slot';
      const icon = document.createElement('span');
      icon.className = 'slot-icon';
      const count = document.createElement('span');
      count.className = 'slot-count';
      slot.append(icon, count);
      this.root.append(slot);
      this.slots.push({
        baseClassName: 'hotbar-slot',
        button: slot,
        icon,
        count,
      });
    }
  }

  public render(inventory: Inventory): void {
    this.root.classList.toggle('hotbar--hidden', inventory.isOpen);

    inventory.getHotbarSlots().forEach((slot, index) => {
      const slotElement = this.slots[index];
      slotElement.button.className =
        index === inventory.selectedHotbarIndex
          ? 'hotbar-slot hotbar-slot--selected'
          : slotElement.baseClassName;
      renderSlotVisual(slot, slotElement);
    });
  }
}
