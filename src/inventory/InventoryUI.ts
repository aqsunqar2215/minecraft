import {
  Inventory,
  type InventorySlotAction,
  type InventorySlotRef,
} from './Inventory';
import { renderSlotVisual, type SlotVisualElements } from './SlotVisuals';

type SlotView = SlotVisualElements & {
  baseClassName: string;
};

const slotKey = (ref: InventorySlotRef): string =>
  'index' in ref ? `${ref.section}:${ref.index}` : ref.section;

export class InventoryUI {
  private readonly overlay: HTMLDivElement;
  private readonly heldPreview: HTMLDivElement;
  private readonly heldPreviewCount: HTMLSpanElement;
  private readonly heldPreviewIcon: HTMLSpanElement;
  private readonly onSlotInteract: (ref: InventorySlotRef, action: InventorySlotAction) => void;
  private readonly playerScreen: HTMLDivElement;
  private readonly slotViews = new Map<string, SlotView[]>();
  private readonly tableScreen: HTMLDivElement;
  private mouseX = window.innerWidth / 2;
  private mouseY = window.innerHeight / 2;

  public constructor(
    root: HTMLElement,
    onSlotInteract: (ref: InventorySlotRef, action: InventorySlotAction) => void,
  ) {
    this.onSlotInteract = onSlotInteract;

    this.overlay = document.createElement('div');
    this.overlay.className = 'inventory-overlay';
    this.overlay.addEventListener('mousemove', (event) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.positionHeldPreview();
    });
    root.append(this.overlay);

    this.playerScreen = this.buildPlayerInventoryScreen();
    this.tableScreen = this.buildCraftingTableScreen();

    this.heldPreview = document.createElement('div');
    this.heldPreview.className = 'inventory-held-preview';
    this.heldPreviewIcon = document.createElement('span');
    this.heldPreviewIcon.className = 'slot-icon';
    this.heldPreviewCount = document.createElement('span');
    this.heldPreviewCount.className = 'slot-count';
    this.heldPreview.append(this.heldPreviewIcon, this.heldPreviewCount);
    this.overlay.append(this.heldPreview);
  }

  public render(inventory: Inventory): void {
    this.overlay.classList.toggle('inventory-overlay--open', inventory.isOpen);
    this.playerScreen.classList.toggle('inventory-screen--active', inventory.screen === 'inventory');
    this.tableScreen.classList.toggle(
      'inventory-screen--active',
      inventory.screen === 'crafting_table',
    );

    inventory.getMainSlots().forEach((slot, index) => {
      this.renderSlot({ section: 'main', index }, slot);
    });

    inventory.getHotbarSlots().forEach((slot, index) => {
      this.renderSlot(
        { section: 'hotbar', index },
        slot,
        index === inventory.selectedHotbarIndex,
      );
    });

    inventory.playerCraft.forEach((slot, index) => {
      this.renderSlot({ section: 'playerCraft', index }, slot);
    });

    inventory.tableCraft.forEach((slot, index) => {
      this.renderSlot({ section: 'tableCraft', index }, slot);
    });

    this.renderSlot(
      { section: 'playerResult' },
      inventory.getPlayerCraftResult(),
      false,
      true,
    );
    this.renderSlot(
      { section: 'tableResult' },
      inventory.getTableCraftResult(),
      false,
      true,
    );

    if (!inventory.isOpen || !inventory.heldSlot) {
      this.heldPreview.classList.remove('inventory-held-preview--visible');
      return;
    }

    this.heldPreview.classList.add('inventory-held-preview--visible');
    this.positionHeldPreview();
    renderSlotVisual(inventory.heldSlot, {
      button: this.heldPreview,
      icon: this.heldPreviewIcon,
      count: this.heldPreviewCount,
    });
  }

  private buildPlayerInventoryScreen(): HTMLDivElement {
    const screen = this.createScreen('Survival Inventory');
    const panel = screen.querySelector('.inventory-panel');

    if (!panel) {
      throw new Error('Inventory panel root was not created.');
    }

    const layout = document.createElement('div');
    layout.className = 'inventory-layout';
    panel.append(layout);

    const leftColumn = document.createElement('div');
    leftColumn.className = 'inventory-left-column';
    layout.append(leftColumn);

    leftColumn.append(this.createCharacterCard());
    leftColumn.append(this.createCraftCard('Crafting', 2, 'playerCraft', 'playerResult'));

    const rightColumn = document.createElement('div');
    rightColumn.className = 'inventory-right-column';
    layout.append(rightColumn);

    rightColumn.append(this.createStorageCard('Inventory', 'main'));
    panel.append(this.createFooterHotbar());

    return screen;
  }

  private buildCraftingTableScreen(): HTMLDivElement {
    const screen = this.createScreen('Crafting Table');
    const panel = screen.querySelector('.inventory-panel');

    if (!panel) {
      throw new Error('Crafting table panel root was not created.');
    }

    const craftCard = this.createCraftCard('Crafting', 3, 'tableCraft', 'tableResult');
    craftCard.classList.add('inventory-card--wide');
    panel.append(craftCard);
    panel.append(this.createStorageCard('Inventory', 'main'));
    panel.append(this.createFooterHotbar());

    return screen;
  }

  private createScreen(title: string): HTMLDivElement {
    const screen = document.createElement('div');
    screen.className = 'inventory-screen';
    screen.dataset.screen = title.toLowerCase().replaceAll(' ', '-');
    this.overlay.append(screen);

    const panel = document.createElement('div');
    panel.className = 'inventory-panel';
    screen.append(panel);

    const header = document.createElement('div');
    header.className = 'inventory-header';
    header.textContent = title;
    panel.append(header);

    return screen;
  }

  private createCharacterCard(): HTMLDivElement {
    const card = document.createElement('div');
    card.className = 'inventory-card inventory-character-card';

    const label = document.createElement('div');
    label.className = 'inventory-label';
    label.textContent = 'Character';
    card.append(label);

    const silhouette = document.createElement('div');
    silhouette.className = 'inventory-character-preview';
    silhouette.innerHTML = [
      '<div class="inventory-character-head"></div>',
      '<div class="inventory-character-body"></div>',
      '<div class="inventory-character-arm inventory-character-arm--left"></div>',
      '<div class="inventory-character-arm inventory-character-arm--right"></div>',
      '<div class="inventory-character-leg inventory-character-leg--left"></div>',
      '<div class="inventory-character-leg inventory-character-leg--right"></div>',
    ].join('');
    card.append(silhouette);

    const hint = document.createElement('div');
    hint.className = 'inventory-hint';
    hint.textContent = 'LMB move stack  •  RMB split/place 1  •  Shift+Click quick move';
    card.append(hint);

    return card;
  }

  private createCraftCard(
    labelText: string,
    gridSize: 2 | 3,
    inputSection: 'playerCraft' | 'tableCraft',
    resultSection: 'playerResult' | 'tableResult',
  ): HTMLDivElement {
    const card = document.createElement('div');
    card.className = 'inventory-card';

    const label = document.createElement('div');
    label.className = 'inventory-label';
    label.textContent = labelText;
    card.append(label);

    const cluster = document.createElement('div');
    cluster.className = 'crafting-cluster';
    card.append(cluster);

    const grid = document.createElement('div');
    grid.className =
      gridSize === 2 ? 'crafting-grid crafting-grid--2' : 'crafting-grid crafting-grid--3';
    cluster.append(grid);

    for (let index = 0; index < gridSize * gridSize; index += 1) {
      grid.append(this.createSlotButton({ section: inputSection, index }, 'inventory-slot'));
    }

    const arrow = document.createElement('div');
    arrow.className = 'crafting-arrow';
    arrow.textContent = '→';
    cluster.append(arrow);

    cluster.append(this.createSlotButton({ section: resultSection }, 'inventory-slot inventory-slot--result'));

    return card;
  }

  private createStorageCard(labelText: string, section: 'main'): HTMLDivElement {
    const card = document.createElement('div');
    card.className = 'inventory-card inventory-storage-card';

    const label = document.createElement('div');
    label.className = 'inventory-label';
    label.textContent = labelText;
    card.append(label);

    const grid = document.createElement('div');
    grid.className = 'inventory-grid';
    card.append(grid);

    for (let index = 0; index < 27; index += 1) {
      grid.append(this.createSlotButton({ section, index }, 'inventory-slot'));
    }

    return card;
  }

  private createFooterHotbar(): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'inventory-footer';

    const label = document.createElement('div');
    label.className = 'inventory-label';
    label.textContent = 'Hotbar';
    wrapper.append(label);

    const grid = document.createElement('div');
    grid.className = 'inventory-grid inventory-grid--hotbar';
    wrapper.append(grid);

    for (let index = 0; index < 9; index += 1) {
      grid.append(this.createSlotButton({ section: 'hotbar', index }, 'inventory-slot'));
    }

    return wrapper;
  }

  private createSlotButton(ref: InventorySlotRef, baseClassName: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = baseClassName;
    button.dataset.slot = slotKey(ref);

    const icon = document.createElement('span');
    icon.className = 'slot-icon';
    const count = document.createElement('span');
    count.className = 'slot-count';
    button.append(icon, count);

    button.addEventListener('mousedown', (event) => {
      if (event.button !== 0 && event.button !== 2) {
        return;
      }

      event.preventDefault();
      const action: InventorySlotAction = {
        button: event.button === 2 ? 'right' : 'left',
        shiftKey: event.shiftKey,
      };
      this.onSlotInteract(ref, action);
    });

    button.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    const key = slotKey(ref);
    const views = this.slotViews.get(key) ?? [];
    views.push({
      button,
      icon,
      count,
      baseClassName,
    });
    this.slotViews.set(key, views);

    return button;
  }

  private renderSlot(
    ref: InventorySlotRef,
    slot: ReturnType<Inventory['getSelectedSlot']>,
    isSelected = false,
    isResult = false,
  ): void {
    const views = this.slotViews.get(slotKey(ref)) ?? [];

    for (const view of views) {
      view.button.className = [
        view.baseClassName,
        isSelected ? 'inventory-slot--selected' : '',
        isResult && slot.count > 0 ? 'inventory-slot--result' : '',
      ]
        .filter(Boolean)
        .join(' ');

      renderSlotVisual(slot, view);
    }
  }

  private positionHeldPreview(): void {
    this.heldPreview.style.left = `${this.mouseX + 10}px`;
    this.heldPreview.style.top = `${this.mouseY + 10}px`;
  }
}
