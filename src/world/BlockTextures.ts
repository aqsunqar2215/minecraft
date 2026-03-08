import {
  CanvasTexture,
  NearestFilter,
  RepeatWrapping,
  SRGBColorSpace,
  type Texture,
} from 'three';

import dirtTextureUrl from '../textures/block_dirt.png';
import stoneTextureUrl from '../textures/block_stone.png';
import woodTextureUrl from '../textures/block_grass.png';
import grassTextureUrl from '../textures/block_wood.png';
import coalOreTextureUrl from '../textures/coal.png';
import diamondOreTextureUrl from '../textures/diamond.png';
import grassTopTextureUrl from '../textures/grasstop.png';
import ironOreTextureUrl from '../textures/iron.png';
import sandTextureUrl from '../textures/sand.png';

export const BLOCK_TEXTURE_KEYS = [
  'grass_top',
  'grass_side',
  'dirt',
  'stone',
  'cobblestone',
  'oak_log_side',
  'oak_log_top',
  'oak_leaves',
  'oak_planks',
  'bedrock',
  'sand',
  'gravel',
  'coal_ore',
  'iron_ore',
  'gold_ore',
  'diamond_ore',
  'water',
  'glass',
  'crafting_top',
  'crafting_side',
  'crafting_front',
  'furnace_top',
  'furnace_side',
  'furnace_front',
  'chest_top',
  'chest_side',
  'chest_front',
] as const;

export type BlockTextureKey = (typeof BLOCK_TEXTURE_KEYS)[number];

const ATLAS_COLUMNS = 6;
const TILE_GAP = 1;
const TILE_SIZE = 16;
const ATLAS_ROWS = Math.ceil(BLOCK_TEXTURE_KEYS.length / ATLAS_COLUMNS);
const ATLAS_WIDTH = ATLAS_COLUMNS * TILE_SIZE + (ATLAS_COLUMNS - 1) * TILE_GAP;
const ATLAS_HEIGHT = ATLAS_ROWS * TILE_SIZE + (ATLAS_ROWS - 1) * TILE_GAP;

export const BLOCK_TEXTURE_TILE_SIZE = TILE_SIZE;
export const BLOCK_TEXTURE_ATLAS_WIDTH = ATLAS_WIDTH;
export const BLOCK_TEXTURE_ATLAS_HEIGHT = ATLAS_HEIGHT;

type TileUv = readonly [number, number, number, number];

type ImportedTextureDefinition = {
  src: string;
};

const importedTextureDefinitions: Partial<Record<BlockTextureKey, ImportedTextureDefinition>> = {
  coal_ore: { src: coalOreTextureUrl },
  diamond_ore: { src: diamondOreTextureUrl },
  dirt: { src: dirtTextureUrl },
  grass_top: { src: grassTopTextureUrl },
  grass_side: { src: grassTextureUrl },
  iron_ore: { src: ironOreTextureUrl },
  oak_log_side: { src: woodTextureUrl },
  oak_log_top: { src: woodTextureUrl },
  sand: { src: sandTextureUrl },
  stone: { src: stoneTextureUrl },
};

let atlasCanvas: HTMLCanvasElement | null = null;
let atlasDataUrl = '';
let importedTexturesPromise: Promise<void> | null = null;

const atlasTextureConsumers = new Set<Texture>();

const keyToIndex = new Map<BlockTextureKey, number>(
  BLOCK_TEXTURE_KEYS.map((key, index) => [key, index]),
);

const hexToCss = (value: number, alpha = 1): string => {
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const noise = (x: number, y: number, seed: number): number => {
  const value = Math.sin((x + seed * 13.17) * 12.9898 + (y - seed * 7.31) * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

const getTileOrigin = (key: BlockTextureKey): { x: number; y: number } => {
  const index = keyToIndex.get(key);

  if (index === undefined) {
    throw new Error(`Missing atlas entry for texture key "${key}".`);
  }

  const column = index % ATLAS_COLUMNS;
  const row = Math.floor(index / ATLAS_COLUMNS);

  return {
    x: column * (TILE_SIZE + TILE_GAP),
    y: row * (TILE_SIZE + TILE_GAP),
  };
};

const getAtlasContext = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('2D canvas context is required for the block texture atlas.');
  }

  return context;
};

const setPixel = (
  context: CanvasRenderingContext2D,
  key: BlockTextureKey,
  x: number,
  y: number,
  color: number,
  alpha = 1,
): void => {
  const origin = getTileOrigin(key);
  context.fillStyle = hexToCss(color, alpha);
  context.fillRect(origin.x + x, origin.y + y, 1, 1);
};

const fillTile = (context: CanvasRenderingContext2D, key: BlockTextureKey, color: number): void => {
  const origin = getTileOrigin(key);
  context.fillStyle = hexToCss(color);
  context.fillRect(origin.x, origin.y, TILE_SIZE, TILE_SIZE);
};

const clearTile = (context: CanvasRenderingContext2D, key: BlockTextureKey): void => {
  const origin = getTileOrigin(key);
  context.clearRect(origin.x, origin.y, TILE_SIZE, TILE_SIZE);
};

const clearPixel = (
  context: CanvasRenderingContext2D,
  key: BlockTextureKey,
  x: number,
  y: number,
): void => {
  const origin = getTileOrigin(key);
  context.clearRect(origin.x + x, origin.y + y, 1, 1);
};

const addNoise = (
  context: CanvasRenderingContext2D,
  key: BlockTextureKey,
  seed: number,
  darkColor: number,
  lightColor: number,
  threshold = 0.68,
): void => {
  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      const sample = noise(x, y, seed);

      if (sample > threshold) {
        setPixel(context, key, x, y, lightColor);
      } else if (sample < 1 - threshold) {
        setPixel(context, key, x, y, darkColor);
      }
    }
  }
};

const drawStoneBase = (
  context: CanvasRenderingContext2D,
  key: BlockTextureKey,
  baseColor: number,
  darkColor: number,
  lightColor: number,
  seed: number,
): void => {
  fillTile(context, key, baseColor);
  addNoise(context, key, seed, darkColor, lightColor, 0.7);
};

const drawDirt = (context: CanvasRenderingContext2D, key: BlockTextureKey): void => {
  fillTile(context, key, 0x71512f);
  addNoise(context, key, 11, 0x5a3d1f, 0x8b633d, 0.69);
};

const drawGrassTop = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'grass_top', 0x5fa44d);
  addNoise(context, 'grass_top', 21, 0x427d36, 0x79c660, 0.7);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      if (noise(x, y, 22) > 0.84) {
        setPixel(context, 'grass_top', x, y, 0x9fd770);
      }
    }
  }
};

const drawGrassSide = (context: CanvasRenderingContext2D): void => {
  drawDirt(context, 'grass_side');

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      const sample = noise(x, y, 31);
      const color = sample > 0.5 ? 0x6ab357 : 0x4d8a42;
      setPixel(context, 'grass_side', x, y, color);
    }
  }

  for (let x = 0; x < TILE_SIZE; x += 1) {
    if (noise(x, 0, 32) > 0.72) {
      setPixel(context, 'grass_side', x, 4, 0x5c9c49);
      setPixel(context, 'grass_side', x, 5, 0x4d8a42);
    }
  }
};

const drawCobblestone = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'cobblestone', 0x808080);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      if ((x + (y % 3)) % 5 === 0 || (y + (x % 2)) % 5 === 0) {
        setPixel(context, 'cobblestone', x, y, 0x5f5f5f);
      } else if (noise(x, y, 41) > 0.73) {
        setPixel(context, 'cobblestone', x, y, 0x9a9a9a);
      }
    }
  }
};

const drawLogSide = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'oak_log_side', 0x7a5530);

  for (let x = 0; x < TILE_SIZE; x += 1) {
    const stripe = x % 4;
    const color = stripe === 0 ? 0x654321 : stripe === 2 ? 0x94653a : 0x81582f;

    for (let y = 0; y < TILE_SIZE; y += 1) {
      setPixel(context, 'oak_log_side', x, y, color);

      if (noise(x, y, 51) > 0.86) {
        setPixel(context, 'oak_log_side', x, y, 0xb68048);
      }
    }
  }
};

const drawLogTop = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'oak_log_top', 0xc79b63);

  for (let ring = 0; ring < 4; ring += 1) {
    const min = ring * 2;
    const max = TILE_SIZE - 1 - ring * 2;
    const ringColor = ring % 2 === 0 ? 0x9b7345 : 0xb98c58;

    for (let i = min; i <= max; i += 1) {
      setPixel(context, 'oak_log_top', i, min, ringColor);
      setPixel(context, 'oak_log_top', i, max, ringColor);
      setPixel(context, 'oak_log_top', min, i, ringColor);
      setPixel(context, 'oak_log_top', max, i, ringColor);
    }
  }

  setPixel(context, 'oak_log_top', 7, 7, 0x75512f);
  setPixel(context, 'oak_log_top', 8, 7, 0x75512f);
  setPixel(context, 'oak_log_top', 7, 8, 0x75512f);
  setPixel(context, 'oak_log_top', 8, 8, 0x75512f);
};

const drawLeaves = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'oak_leaves', 0x000000);
  const base = 0x3d7f34;

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      const sample = noise(x, y, 61);

      if (sample > 0.18) {
        const color = sample > 0.76 ? 0x5ca94b : sample < 0.34 ? 0x2e6128 : base;
        setPixel(context, 'oak_leaves', x, y, color);
      } else {
        clearPixel(context, 'oak_leaves', x, y);
      }
    }
  }
};

const drawPlanks = (context: CanvasRenderingContext2D, key: BlockTextureKey): void => {
  fillTile(context, key, 0xb18049);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      if (y % 4 === 0) {
        setPixel(context, key, x, y, 0x8e6337);
      } else if (x % 7 === 0 && y % 4 !== 1) {
        setPixel(context, key, x, y, 0x94683a);
      } else if (noise(x, y, 71) > 0.85) {
        setPixel(context, key, x, y, 0xc9955b);
      }
    }
  }
};

const drawSand = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'sand', 0xd9c98a);
  addNoise(context, 'sand', 81, 0xc4b26c, 0xecdd9f, 0.72);
};

const drawGravel = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'gravel', 0x848484);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      const sample = noise(x, y, 91);
      const color = sample > 0.75 ? 0xa0a0a0 : sample < 0.24 ? 0x666666 : 0x888888;
      setPixel(context, 'gravel', x, y, color);
    }
  }
};

const drawOre = (
  context: CanvasRenderingContext2D,
  key: BlockTextureKey,
  seed: number,
  veinColor: number,
): void => {
  drawStoneBase(context, key, 0x7d7d7d, 0x646464, 0x989898, seed);

  for (let y = 1; y < TILE_SIZE - 1; y += 1) {
    for (let x = 1; x < TILE_SIZE - 1; x += 1) {
      if (noise(x, y, seed + 1) > 0.85) {
        setPixel(context, key, x, y, veinColor);

        if (noise(x, y, seed + 2) > 0.6) {
          setPixel(context, key, x + 1, y, veinColor);
        }

        if (noise(x, y, seed + 3) > 0.6) {
          setPixel(context, key, x, y + 1, veinColor);
        }
      }
    }
  }
};

const drawGlass = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'glass', 0x000000);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      clearPixel(context, 'glass', x, y);
    }
  }

  for (let i = 0; i < TILE_SIZE; i += 1) {
    setPixel(context, 'glass', i, 0, 0xdff8ff, 0.9);
    setPixel(context, 'glass', i, TILE_SIZE - 1, 0xdff8ff, 0.9);
    setPixel(context, 'glass', 0, i, 0xdff8ff, 0.9);
    setPixel(context, 'glass', TILE_SIZE - 1, i, 0xdff8ff, 0.9);
  }

  for (let i = 2; i < TILE_SIZE - 2; i += 1) {
    if (i % 4 === 0) {
      setPixel(context, 'glass', i, i - 1, 0xb6e5f2, 0.75);
      setPixel(context, 'glass', i + 1, i, 0xb6e5f2, 0.75);
    }
  }
};

const drawWater = (context: CanvasRenderingContext2D): void => {
  clearTile(context, 'water');

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      const ripple = noise(x * 0.75, y * 1.1, 161);
      const band = noise(x * 0.35, y * 2.2, 162);
      const color =
        ripple > 0.82 ? 0x8fdcff : ripple < 0.18 ? 0x1f4f87 : band > 0.72 ? 0x3d92cc : 0x296ea8;
      const alpha = y < 3 ? 0.82 : band > 0.76 ? 0.9 : 0.86;
      setPixel(context, 'water', x, y, color, alpha);
    }
  }

  for (let x = 0; x < TILE_SIZE; x += 1) {
    if (noise(x, 0, 163) > 0.48) {
      setPixel(context, 'water', x, 3, 0xd7f1ff, 0.93);
    }

    if (noise(x, 0, 164) > 0.58) {
      setPixel(context, 'water', x, 9, 0x7fcfff, 0.82);
    }
  }
};

const drawCraftingTop = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'crafting_top', 0x8b6337);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      if (x % 4 === 0 || y % 4 === 0) {
        setPixel(context, 'crafting_top', x, y, 0x4d2f18);
      } else if (noise(x, y, 101) > 0.82) {
        setPixel(context, 'crafting_top', x, y, 0xb4834a);
      }
    }
  }
};

const drawCraftingSide = (context: CanvasRenderingContext2D): void => {
  drawPlanks(context, 'crafting_side');

  for (let y = 4; y < 12; y += 1) {
    for (let x = 4; x < 12; x += 1) {
      const color = (x + y) % 2 === 0 ? 0x5b3c22 : 0x7a522d;
      setPixel(context, 'crafting_side', x, y, color);
    }
  }
};

const drawCraftingFront = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'crafting_front', 0x7d5832);

  for (let y = 2; y < 14; y += 1) {
    for (let x = 2; x < 14; x += 1) {
      if (x === 2 || x === 13 || y === 2 || y === 13) {
        setPixel(context, 'crafting_front', x, y, 0x55351d);
      } else if (y < 8 && x % 3 === 0) {
        setPixel(context, 'crafting_front', x, y, 0xb1854f);
      } else if (y >= 8 && noise(x, y, 111) > 0.7) {
        setPixel(context, 'crafting_front', x, y, 0x604029);
      }
    }
  }
};

const drawFurnaceTop = (context: CanvasRenderingContext2D): void => {
  drawStoneBase(context, 'furnace_top', 0x747474, 0x585858, 0x8d8d8d, 121);

  for (let i = 2; i < TILE_SIZE - 2; i += 1) {
    setPixel(context, 'furnace_top', i, 2, 0x545454);
    setPixel(context, 'furnace_top', i, TILE_SIZE - 3, 0x545454);
    setPixel(context, 'furnace_top', 2, i, 0x545454);
    setPixel(context, 'furnace_top', TILE_SIZE - 3, i, 0x545454);
  }
};

const drawFurnaceSide = (context: CanvasRenderingContext2D, key: BlockTextureKey): void => {
  drawStoneBase(context, key, 0x737373, 0x5b5b5b, 0x8e8e8e, 131);

  for (let y = 0; y < TILE_SIZE; y += 4) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      setPixel(context, key, x, y, 0x545454);
    }
  }
};

const drawFurnaceFront = (context: CanvasRenderingContext2D): void => {
  drawFurnaceSide(context, 'furnace_front');

  for (let y = 3; y < 6; y += 1) {
    for (let x = 4; x < 12; x += 1) {
      setPixel(context, 'furnace_front', x, y, 0x2f2f2f);
    }
  }

  for (let y = 8; y < 14; y += 1) {
    for (let x = 3; x < 13; x += 1) {
      const color = x === 3 || x === 12 || y === 8 || y === 13 ? 0x1d1d1d : 0x4b4b4b;
      setPixel(context, 'furnace_front', x, y, color);
    }
  }
};

const drawChestTop = (context: CanvasRenderingContext2D): void => {
  fillTile(context, 'chest_top', 0xb07435);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      if (y === 3 || y === 12) {
        setPixel(context, 'chest_top', x, y, 0x7a4b1e);
      } else if (noise(x, y, 141) > 0.82) {
        setPixel(context, 'chest_top', x, y, 0xc88b48);
      }
    }
  }
};

const drawChestSide = (context: CanvasRenderingContext2D, key: BlockTextureKey): void => {
  fillTile(context, key, 0xad6f31);

  for (let y = 0; y < TILE_SIZE; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 1) {
      if (x === 1 || x === TILE_SIZE - 2 || y === 2 || y === TILE_SIZE - 3) {
        setPixel(context, key, x, y, 0x7a4b1e);
      } else if (noise(x, y, 151) > 0.8) {
        setPixel(context, key, x, y, 0xc88946);
      }
    }
  }
};

const drawChestFront = (context: CanvasRenderingContext2D): void => {
  drawChestSide(context, 'chest_front');

  for (let y = 5; y < 11; y += 1) {
    for (let x = 7; x < 9; x += 1) {
      setPixel(context, 'chest_front', x, y, 0xe4d26d);
    }
  }

  setPixel(context, 'chest_front', 6, 7, 0x7c6326);
  setPixel(context, 'chest_front', 9, 7, 0x7c6326);
};

const drawProceduralBlockTextureAtlas = (context: CanvasRenderingContext2D): void => {
  context.clearRect(0, 0, ATLAS_WIDTH, ATLAS_HEIGHT);
  drawGrassTop(context);
  drawGrassSide(context);
  drawDirt(context, 'dirt');
  drawStoneBase(context, 'stone', 0x7d7d7d, 0x656565, 0x999999, 1);
  drawCobblestone(context);
  drawLogSide(context);
  drawLogTop(context);
  drawLeaves(context);
  drawPlanks(context, 'oak_planks');
  drawStoneBase(context, 'bedrock', 0x404040, 0x1f1f1f, 0x5b5b5b, 2);
  drawSand(context);
  drawGravel(context);
  drawOre(context, 'coal_ore', 3, 0x2a2a2a);
  drawOre(context, 'iron_ore', 4, 0xb1876f);
  drawOre(context, 'gold_ore', 5, 0xd7bc44);
  drawOre(context, 'diamond_ore', 6, 0x47cadf);
  drawWater(context);
  drawGlass(context);
  drawCraftingTop(context);
  drawCraftingSide(context);
  drawCraftingFront(context);
  drawFurnaceTop(context);
  drawFurnaceSide(context, 'furnace_side');
  drawFurnaceFront(context);
  drawChestTop(context);
  drawChestSide(context, 'chest_side');
  drawChestFront(context);
};

const createAtlasCanvas = (): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = ATLAS_WIDTH;
  canvas.height = ATLAS_HEIGHT;
  drawProceduralBlockTextureAtlas(getAtlasContext(canvas));
  atlasDataUrl = canvas.toDataURL();
  return canvas;
};

const getAtlasCanvas = (): HTMLCanvasElement => {
  if (!atlasCanvas) {
    atlasCanvas = createAtlasCanvas();
  }

  return atlasCanvas;
};

const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load texture asset: ${src}`));
    image.src = src;
  });

const drawImportedImageToTile = (
  context: CanvasRenderingContext2D,
  origin: { x: number; y: number },
  image: HTMLImageElement,
): void => {
  const previousSmoothing = context.imageSmoothingEnabled;

  context.imageSmoothingEnabled = false;
  context.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    origin.x,
    origin.y,
    TILE_SIZE,
    TILE_SIZE,
  );
  context.imageSmoothingEnabled = previousSmoothing;
};

const drawImportedTile = (
  context: CanvasRenderingContext2D,
  key: BlockTextureKey,
  definition: ImportedTextureDefinition,
  loadedImages: ReadonlyMap<string, HTMLImageElement>,
): void => {
  const origin = getTileOrigin(key);
  const image = loadedImages.get(definition.src);

  if (!image) {
    throw new Error(`Missing loaded texture image for ${definition.src}.`);
  }

  context.clearRect(origin.x, origin.y, TILE_SIZE, TILE_SIZE);
  drawImportedImageToTile(context, origin, image);
};

const ensureImportedTextures = (): Promise<void> => {
  if (importedTexturesPromise) {
    return importedTexturesPromise;
  }

  const canvas = getAtlasCanvas();
  const context = getAtlasContext(canvas);
  const textureEntries = Object.entries(importedTextureDefinitions) as [
    BlockTextureKey,
    ImportedTextureDefinition,
  ][];

  importedTexturesPromise = (async () => {
    const uniqueSources = [...new Set(textureEntries.map(([, definition]) => definition.src))];
    const loadedImages = new Map(
      await Promise.all(uniqueSources.map(async (src) => [src, await loadImage(src)] as const)),
    );

    for (const [key, definition] of textureEntries) {
      drawImportedTile(context, key, definition, loadedImages);
    }

    atlasDataUrl = canvas.toDataURL();

    for (const texture of atlasTextureConsumers) {
      texture.needsUpdate = true;
    }
  })().catch((error) => {
    console.error('Failed to apply imported block textures.', error);
  });

  return importedTexturesPromise;
};

export const createBlockTextureAtlasCanvas = (): HTMLCanvasElement => {
  const canvas = getAtlasCanvas();
  void ensureImportedTextures();
  return canvas;
};

export const createBlockTextureAtlas = (): Texture => {
  const canvas = createBlockTextureAtlasCanvas();
  const texture = new CanvasTexture(canvas);
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  atlasTextureConsumers.add(texture);

  return texture;
};

export const createWaterSurfaceTexture = (): Texture => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const context = getAtlasContext(canvas);

  for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const ripple = noise(x * 0.72, y * 1.08, 211);
      const band = noise(x * 0.25, y * 1.85, 212);
      const shimmer = noise(x * 1.1, y * 0.48, 213);
      const color =
        shimmer > 0.88
          ? '#f1fdff'
          : ripple > 0.79
            ? '#61bcff'
            : ripple < 0.16
              ? '#072f57'
              : band > 0.66
                ? '#116db8'
                : '#0b5494';
      context.fillStyle = color;
      context.fillRect(x, y, 1, 1);
    }
  }

  context.fillStyle = '#f6feff';
  for (let x = 0; x < canvas.width; x += 1) {
    const crestY = (x * 3) % canvas.height;
    context.fillRect(x, crestY, 1, 1);
    if (x % 5 === 0) {
      context.fillStyle = '#8fd8ff';
      context.fillRect(x, (crestY + 9) % canvas.height, 1, 1);
      context.fillStyle = '#f6feff';
    }
  }

  const texture = new CanvasTexture(canvas);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
};

export const getBlockTextureAtlasDataUrl = (): string => {
  createBlockTextureAtlasCanvas();
  return atlasDataUrl;
};

export const getTileUv = (key: BlockTextureKey): TileUv => {
  const origin = getTileOrigin(key);
  const inset = 0.5;
  const u0 = (origin.x + inset) / ATLAS_WIDTH;
  const u1 = (origin.x + TILE_SIZE - inset) / ATLAS_WIDTH;
  const v0 = 1 - (origin.y + TILE_SIZE - inset) / ATLAS_HEIGHT;
  const v1 = 1 - (origin.y + inset) / ATLAS_HEIGHT;

  return [u0, v0, u1, v1];
};

export const getTileSpriteRect = (key: BlockTextureKey): {
  size: number;
  x: number;
  y: number;
} => {
  const origin = getTileOrigin(key);

  return {
    x: origin.x,
    y: origin.y,
    size: TILE_SIZE,
  };
};
