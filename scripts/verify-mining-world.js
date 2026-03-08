const TARGET_URL = 'http://127.0.0.1:5173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getHud = async (page) => page.locator('.hud-panel').innerText();

const reacquireTarget = async (page) => {
  let hud = await getHud(page);

  if (!hud.includes('Target: none')) {
    return hud;
  }

  const aimPoints = [
    [800, 560],
    [800, 640],
    [800, 720],
    [700, 700],
    [900, 700],
    [640, 760],
    [960, 760],
  ];

  for (const [x, y] of aimPoints) {
    await page.mouse.move(x, y);
    await sleep(180);
    hud = await getHud(page);

    if (!hud.includes('Target: none')) {
      return hud;
    }
  }

  return hud;
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
await page.mouse.move(800, 620);
await sleep(250);

let hudBeforeMining = await reacquireTarget(page);

if (hudBeforeMining.includes('Target: none')) {
  await page.keyboard.down('w');
  await sleep(650);
  await page.keyboard.up('w');
  await sleep(220);
  hudBeforeMining = await reacquireTarget(page);
}

if (hudBeforeMining.includes('Target: none')) {
  throw new Error(`Could not acquire a target block before mining.\nHUD=${hudBeforeMining}`);
}

await page.screenshot({ path: `${SHOTS_DIR}/06-mining-before.png`, fullPage: true });

await page.mouse.down({ button: 'left' });
await sleep(400);
const hudDuringMining = await getHud(page);
await page.screenshot({ path: `${SHOTS_DIR}/07-mining-progress.png`, fullPage: true });

await sleep(1100);
await page.mouse.up({ button: 'left' });
await sleep(220);

const hudAfterMining = await reacquireTarget(page);

await page.keyboard.down('w');
await sleep(900);
await page.keyboard.up('w');
await sleep(250);
const hudAfterMove = await reacquireTarget(page);
await page.screenshot({ path: `${SHOTS_DIR}/08-world-after-move.png`, fullPage: true });

if (hudDuringMining.includes('Mining: idle')) {
  throw new Error(`Mining never started.\nHUD_DURING=${hudDuringMining}`);
}

console.log(`HUD_BEFORE_MINING=${hudBeforeMining}`);
console.log(`HUD_DURING_MINING=${hudDuringMining}`);
console.log(`HUD_AFTER_MINING=${hudAfterMining}`);
console.log(`HUD_AFTER_MOVE=${hudAfterMove}`);
console.log(`SCREENSHOT=${SHOTS_DIR}/06-mining-before.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/07-mining-progress.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/08-world-after-move.png`);

await browser.close();
