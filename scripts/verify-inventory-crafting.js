const TARGET_URL = 'http://127.0.0.1:5173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getHud = async (page) => page.locator('.hud-panel').innerHTML();

const interactSlot = async (
  page,
  ref,
  action = { button: 'left', shiftKey: false },
) => {
  await page.evaluate(
    ([slotRef, slotAction]) => {
      window.__webcraftDebug?.interactSlot(slotRef, slotAction);
    },
    [ref, action],
  );
  await sleep(90);
};

const isTableScreenOpen = async (page) =>
  (await page.locator('.inventory-screen--active[data-screen="crafting-table"]').count()) > 0;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

page.on('console', (message) => {
  console.log(`[browser:${message.type()}] ${message.text()}`);
});
page.on('pageerror', (error) => {
  console.log(`[pageerror] ${error.message}`);
});

await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
await page.locator('canvas').waitFor({ timeout: 30000 });
await sleep(1200);
await page.screenshot({ path: `${SHOTS_DIR}/06-home-inventory-pass.png`, fullPage: true });

await page.evaluate(() => {
  window.__webcraftDebug?.openInventory();
});
await page.locator('.inventory-screen--active[data-screen="survival-inventory"]').waitFor();
await sleep(200);

await interactSlot(page, { section: 'hotbar', index: 4 });
await interactSlot(page, { section: 'playerCraft', index: 0 }, { button: 'right', shiftKey: false });
await interactSlot(page, { section: 'playerCraft', index: 2 }, { button: 'right', shiftKey: false });
await interactSlot(page, { section: 'hotbar', index: 4 });
await interactSlot(page, { section: 'playerResult' });
await interactSlot(page, { section: 'main', index: 12 });

await sleep(220);
await page.screenshot({ path: `${SHOTS_DIR}/07-player-crafting.png`, fullPage: true });

await page.evaluate(() => {
  window.__webcraftDebug?.closeUi();
});
await sleep(320);

let tableOpenMode = 'debug';
await page.evaluate(() => {
  window.__webcraftDebug?.openCraftingTable();
});
await sleep(200);

console.log(`CRAFTING_TABLE_OPENED=${tableOpenMode}`);

if (await isTableScreenOpen(page)) {
  await interactSlot(page, { section: 'main', index: 6 });

  for (const index of [1, 4]) {
    await interactSlot(page, { section: 'tableCraft', index }, { button: 'right', shiftKey: false });
  }
  await interactSlot(page, { section: 'main', index: 6 });
  await interactSlot(page, { section: 'hotbar', index: 5 });
  await interactSlot(page, { section: 'tableCraft', index: 7 }, { button: 'right', shiftKey: false });
  await interactSlot(page, { section: 'hotbar', index: 5 });
  await interactSlot(page, { section: 'tableResult' });
  await interactSlot(page, { section: 'hotbar', index: 8 });

  await interactSlot(page, { section: 'main', index: 5 });
  for (const index of [0, 1, 2, 3, 5]) {
    await interactSlot(page, { section: 'tableCraft', index }, { button: 'right', shiftKey: false });
  }
  await interactSlot(page, { section: 'main', index: 5 });
  await interactSlot(page, { section: 'tableResult' });
  await interactSlot(page, { section: 'main', index: 14 });
  await sleep(220);
  await page.screenshot({ path: `${SHOTS_DIR}/08-table-crafting.png`, fullPage: true });
}

const hud = await getHud(page);
const textState = await page.evaluate(() => window.render_game_to_text?.() ?? '');
console.log(`HUD=${hud}`);
console.log(`TEXT_STATE=${textState}`);
console.log(`SCREENSHOT=${SHOTS_DIR}/06-home-inventory-pass.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/07-player-crafting.png`);
if (tableOpenMode !== 'failed') {
  console.log(`SCREENSHOT=${SHOTS_DIR}/08-table-crafting.png`);
}

await browser.close();
