import { type InventorySlot } from './Inventory';
import { ItemRegistry } from '../items/ItemRegistry';
import {
  BLOCK_TEXTURE_ATLAS_HEIGHT,
  BLOCK_TEXTURE_ATLAS_WIDTH,
  getBlockTextureAtlasDataUrl,
  getTileSpriteRect,
} from '../world/BlockTextures';

const DEFAULT_SLOT_SIZE = 54;

const getSlotRenderSize = (button: HTMLElement): number => {
  const boundsWidth = button.getBoundingClientRect().width;

  if (boundsWidth > 0) {
    return boundsWidth;
  }

  const computedWidth = Number.parseFloat(window.getComputedStyle(button).width);

  if (Number.isFinite(computedWidth) && computedWidth > 0) {
    return computedWidth;
  }

  return DEFAULT_SLOT_SIZE;
};

const getIconRenderSize = (button: HTMLElement): number =>
  Math.round(Math.min(46, Math.max(28, getSlotRenderSize(button) * 0.74)));

export type SlotVisualElements = {
  button: HTMLElement;
  count: HTMLElement;
  icon: HTMLElement;
  label?: HTMLElement;
};

export const renderSlotVisual = (
  slot: InventorySlot,
  elements: SlotVisualElements,
  showLabel = false,
): void => {
  const { button, count, icon, label } = elements;

  if (slot.count <= 0) {
    button.setAttribute('aria-label', 'Empty slot');
    button.removeAttribute('title');
    icon.classList.remove('slot-icon--filled');
    icon.classList.remove('slot-icon--block', 'slot-icon--svg');
    icon.setAttribute('aria-hidden', 'true');
    icon.style.backgroundImage = '';
    icon.style.backgroundPosition = '';
    icon.style.backgroundRepeat = '';
    icon.style.backgroundSize = '';
    icon.style.width = '';
    icon.style.height = '';
    count.textContent = '';

    if (label) {
      label.textContent = '';
    }

    return;
  }

  const name = ItemRegistry.getName(slot.itemId);
  const visual = ItemRegistry.getVisual(slot.itemId);
  button.setAttribute('aria-label', `${name} x${slot.count}`);
  button.title = name;
  icon.classList.add('slot-icon--filled');
  icon.setAttribute('aria-hidden', 'false');
  icon.classList.remove('slot-icon--block', 'slot-icon--svg');

  const iconRenderSize = getIconRenderSize(button);
  icon.style.width = `${iconRenderSize}px`;
  icon.style.height = `${iconRenderSize}px`;

  if (visual.kind === 'block') {
    icon.classList.add('slot-icon--block');
    const rect = getTileSpriteRect(visual.texture);
    const atlasScale = iconRenderSize / rect.size;
    icon.style.backgroundImage = `url("${getBlockTextureAtlasDataUrl()}")`;
    icon.style.backgroundPosition = `-${rect.x * atlasScale}px -${rect.y * atlasScale}px`;
    icon.style.backgroundRepeat = 'no-repeat';
    icon.style.backgroundSize = `${BLOCK_TEXTURE_ATLAS_WIDTH * atlasScale}px ${BLOCK_TEXTURE_ATLAS_HEIGHT * atlasScale}px`;
  } else {
    icon.classList.add('slot-icon--svg');
    icon.style.backgroundImage = `url("${visual.dataUrl}")`;
    icon.style.backgroundPosition = 'center';
    icon.style.backgroundRepeat = 'no-repeat';
    icon.style.backgroundSize = '100% 100%';
  }

  count.textContent = slot.count > 1 ? String(slot.count) : '';

  if (label) {
    label.textContent = showLabel ? name : '';
  }
};
