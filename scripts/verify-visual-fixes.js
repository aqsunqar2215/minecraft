const TARGET_URL = 'http://127.0.0.1:5173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getHud = async (page) => page.locator('.hud-panel').innerHTML();

const reacquireTarget = async (page) => {
  let hud = await getHud(page);

  if (!hud.includes('Target: none')) {
    return hud;
  }

  const aimPoints = [
    [720, 660],
    [720, 740],
    [640, 740],
    [800, 740],
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
await page.screenshot({ path: `${SHOTS_DIR}/04-fix-home.png`, fullPage: true });

await page.click('canvas');
await sleep(350);
await page.mouse.move(960, 450);
await sleep(250);

const hudAfterLook = await reacquireTarget(page);

await page.keyboard.down('w');
await sleep(900);
await page.keyboard.up('w');
await sleep(250);

const hudAfterMove = await reacquireTarget(page);
await page.screenshot({ path: `${SHOTS_DIR}/05-fix-inworld.png`, fullPage: true });

console.log(`HUD_AFTER_LOOK=${hudAfterLook}`);
console.log(`HUD_AFTER_MOVE=${hudAfterMove}`);
console.log(`SCREENSHOT=${SHOTS_DIR}/04-fix-home.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/05-fix-inworld.png`);

await browser.close();
