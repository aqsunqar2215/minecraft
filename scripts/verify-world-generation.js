import { chromium } from 'playwright';

const TARGET_URL = process.env.WEBCRAFT_URL ?? 'http://127.0.0.1:4173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getHud = async (page) => page.locator('.hud-panel').innerHTML();

const sampleLoadedChunks = async (page) =>
  page.evaluate(() => window.__webcraftDebug?.getLoadedChunkSummary() ?? null);

const sampleWorldMetrics = async (page) =>
  page.evaluate(() => window.__webcraftDebug?.getWorldMetrics(64) ?? null);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

page.on('console', (message) => {
  console.log(`[browser:${message.type()}] ${message.text()}`);
});

await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
await sleep(1200);

const metrics = await sampleWorldMetrics(page);
const loadedChunksBefore = await sampleLoadedChunks(page);
const hudBeforeMove = await getHud(page);
await page.screenshot({ path: `${SHOTS_DIR}/12-worldgen-home.png`, fullPage: true });

const waterShowcase = await page.evaluate(() => {
  const debugApi = window.__webcraftDebug;

  if (!debugApi) {
    return null;
  }

  debugApi.teleportTo(8.5, -7.5, 62);
  debugApi.setView(0, -0.12);

  for (let y = 62; y <= 65; y += 1) {
    debugApi.setBlockAt(8, y, -16, 0);
    debugApi.setBlockAt(9, y, -16, 0);
  }

  const blocks = [
    [8, 63, -16],
    [9, 63, -16],
    [8, 64, -16],
    [9, 64, -16],
  ];

  for (const [x, y, z] of blocks) {
    debugApi.setBlockAt(x, y, z, 15);
  }

  return blocks;
});
await sleep(350);
const waterHud = await getHud(page);
await page.screenshot({ path: `${SHOTS_DIR}/13-worldgen-water.png`, fullPage: true });

const teleportedPosition = await page.evaluate(() => {
  const position = window.__webcraftDebug?.teleportTo(144.5, 16.5, 120);
  window.__webcraftDebug?.setView(0, -0.5);
  return position ?? null;
});
await sleep(450);
const loadedChunksAfter = await sampleLoadedChunks(page);
const hudAfterTeleport = await getHud(page);
await page.screenshot({ path: `${SHOTS_DIR}/14-worldgen-far.png`, fullPage: true });

console.log(`WORLD_METRICS=${JSON.stringify(metrics)}`);
console.log(`LOADED_CHUNKS_BEFORE=${JSON.stringify(loadedChunksBefore)}`);
console.log(`LOADED_CHUNKS_AFTER=${JSON.stringify(loadedChunksAfter)}`);
console.log(`HUD_BEFORE_MOVE=${hudBeforeMove}`);
console.log(`WATER_SHOWCASE=${JSON.stringify(waterShowcase)}`);
console.log(`HUD_WATER=${waterHud}`);
console.log(`TELEPORTED_POSITION=${JSON.stringify(teleportedPosition)}`);
console.log(`HUD_AFTER_TELEPORT=${hudAfterTeleport}`);
console.log(`SCREENSHOT=${SHOTS_DIR}/12-worldgen-home.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/13-worldgen-water.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/14-worldgen-far.png`);

await browser.close();
