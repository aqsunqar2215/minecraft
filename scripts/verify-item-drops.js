const TARGET_URL = 'http://127.0.0.1:5173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readGameState = async (page) =>
  page.evaluate(() => {
    const raw = window.render_game_to_text?.() ?? '{}';
    return JSON.parse(raw);
  });

const reacquireTarget = async (page) => {
  const aimPoints = [
    [800, 600],
    [800, 680],
    [720, 720],
    [880, 720],
    [640, 760],
    [960, 760],
  ];

  for (const [x, y] of aimPoints) {
    await page.mouse.move(x, y);
    await sleep(180);
    const state = await readGameState(page);

    if (state.target) {
      return state;
    }
  }

  return readGameState(page);
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

let state = await reacquireTarget(page);

if (!state.target) {
  await page.keyboard.down('w');
  await sleep(700);
  await page.keyboard.up('w');
  await sleep(250);
  state = await reacquireTarget(page);
}

if (!state.target) {
  throw new Error(`Could not target a block before testing drops.\nSTATE=${JSON.stringify(state)}`);
}

await page.screenshot({ path: `${SHOTS_DIR}/09-drop-before-break.png`, fullPage: true });

await page.mouse.down({ button: 'left' });
await sleep(1450);
await page.mouse.up({ button: 'left' });
await sleep(250);

const stateAfterBreak = await readGameState(page);
await page.screenshot({ path: `${SHOTS_DIR}/10-drop-spawned.png`, fullPage: true });

if ((stateAfterBreak.drops ?? 0) < 1) {
  throw new Error(`No dropped item spawned after breaking block.\nSTATE=${JSON.stringify(stateAfterBreak)}`);
}

await page.keyboard.down('w');
await sleep(1400);
await page.keyboard.up('w');
await sleep(500);

const stateAfterPickup = await readGameState(page);
await page.screenshot({ path: `${SHOTS_DIR}/11-drop-picked-up.png`, fullPage: true });

if ((stateAfterPickup.drops ?? 0) !== 0) {
  throw new Error(
    `Dropped item was not picked up after approaching it.\nSTATE=${JSON.stringify(stateAfterPickup)}`,
  );
}

console.log(`STATE_AFTER_BREAK=${JSON.stringify(stateAfterBreak)}`);
console.log(`STATE_AFTER_PICKUP=${JSON.stringify(stateAfterPickup)}`);
console.log(`SCREENSHOT=${SHOTS_DIR}/09-drop-before-break.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/10-drop-spawned.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/11-drop-picked-up.png`);

await browser.close();
