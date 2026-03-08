const TARGET_URL = 'http://127.0.0.1:5173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';

const BLOCK_ID_STONE = 3;
const BLOCK_ID_COAL_ORE = 11;
const HAND_SLOT_INDEX = 8;
const WOODEN_PICKAXE_SLOT_INDEX = 0;
const COBBLESTONE_SLOT_INDEX = 6;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readState = async (page) =>
  page.evaluate(() => JSON.parse(window.render_game_to_text?.() ?? '{}'));

const getHud = async (page) => page.locator('.hud-panel').innerText();

const placeDebugTarget = async (page, blockId) => {
  await page.evaluate((targetBlockId) => {
    window.__webcraftDebug?.placeDebugTarget(targetBlockId);
  }, blockId);
  await sleep(250);
};

const selectHotbar = async (page, index) => {
  await page.evaluate((selectedIndex) => {
    window.__webcraftDebug?.setSelectedHotbar(selectedIndex);
  }, index);
  await sleep(120);
};

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

page.on('console', (message) => {
  console.log(`[browser:${message.type()}] ${message.text()}`);
});

await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
await sleep(1200);
await page.click('canvas');
await sleep(350);

await selectHotbar(page, HAND_SLOT_INDEX);
await placeDebugTarget(page, BLOCK_ID_STONE);
const stateBeforeHand = await readState(page);

if (stateBeforeHand.target?.item !== 'Stone') {
  throw new Error(`Expected debug stone target before hand-mining.\nSTATE=${JSON.stringify(stateBeforeHand)}`);
}

await page.screenshot({ path: `${SHOTS_DIR}/12-hand-stone-before.png`, fullPage: true });

await page.mouse.down({ button: 'left' });
await sleep(2200);
const stateDuringHand = await readState(page);
const hudDuringHand = await getHud(page);

if (stateDuringHand.target?.item !== 'Stone') {
  throw new Error(`Stone broke too early by hand.\nSTATE=${JSON.stringify(stateDuringHand)}\nHUD=${hudDuringHand}`);
}

if (stateDuringHand.hotbar?.[COBBLESTONE_SLOT_INDEX]?.count !== 32) {
  throw new Error(`Stone should not drop cobblestone during slow hand-mining.\nSTATE=${JSON.stringify(stateDuringHand)}`);
}

await page.screenshot({ path: `${SHOTS_DIR}/13-hand-stone-slow.png`, fullPage: true });

let stateAfterHand = stateDuringHand;

for (let attempt = 0; attempt < 40; attempt += 1) {
  await sleep(180);
  stateAfterHand = await readState(page);

  if (stateAfterHand.target?.item !== 'Stone') {
    break;
  }
}

await page.mouse.up({ button: 'left' });
await sleep(400);
stateAfterHand = await readState(page);

if (stateAfterHand.target?.item === 'Stone') {
  throw new Error(`Stone should eventually break by hand, just slowly.\nSTATE=${JSON.stringify(stateAfterHand)}`);
}

if (stateAfterHand.hotbar?.[COBBLESTONE_SLOT_INDEX]?.count !== 32) {
  throw new Error(`Stone broken by hand should not add cobblestone.\nSTATE=${JSON.stringify(stateAfterHand)}`);
}

await selectHotbar(page, WOODEN_PICKAXE_SLOT_INDEX);
await placeDebugTarget(page, BLOCK_ID_COAL_ORE);
const stateBeforeCoal = await readState(page);

if (stateBeforeCoal.target?.item !== 'Coal Ore') {
  throw new Error(`Expected debug coal ore target before wooden-pick mining.\nSTATE=${JSON.stringify(stateBeforeCoal)}`);
}

await page.mouse.down({ button: 'left' });
await sleep(2900);
await page.mouse.up({ button: 'left' });
await sleep(500);

const stateAfterCoal = await readState(page);
const hudAfterCoal = await getHud(page);

if (stateAfterCoal.hotbar?.[HAND_SLOT_INDEX]?.item !== 'Coal') {
  await page.keyboard.down('w');
  await sleep(1200);
  await page.keyboard.up('w');
  await sleep(400);
}

const stateAfterPickup = await readState(page);
const hudAfterPickup = await getHud(page);

if (stateAfterPickup.hotbar?.[HAND_SLOT_INDEX]?.item !== 'Coal') {
  throw new Error(`Coal ore mined with wooden pickaxe should add Coal after pickup.\nSTATE_AFTER_BREAK=${JSON.stringify(stateAfterCoal)}\nHUD_AFTER_BREAK=${hudAfterCoal}\nSTATE_AFTER_PICKUP=${JSON.stringify(stateAfterPickup)}\nHUD_AFTER_PICKUP=${hudAfterPickup}`);
}

await page.screenshot({ path: `${SHOTS_DIR}/14-coal-wooden-pickaxe.png`, fullPage: true });

console.log(`STATE_BEFORE_HAND=${JSON.stringify(stateBeforeHand)}`);
console.log(`STATE_DURING_HAND=${JSON.stringify(stateDuringHand)}`);
console.log(`STATE_AFTER_HAND=${JSON.stringify(stateAfterHand)}`);
console.log(`STATE_AFTER_COAL=${JSON.stringify(stateAfterCoal)}`);
console.log(`STATE_AFTER_PICKUP=${JSON.stringify(stateAfterPickup)}`);
console.log(`SCREENSHOT=${SHOTS_DIR}/12-hand-stone-before.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/13-hand-stone-slow.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/14-coal-wooden-pickaxe.png`);

await browser.close();
