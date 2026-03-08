const TARGET_URL = 'http://127.0.0.1:5173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

page.on('console', (message) => {
  console.log(`[browser:${message.type()}] ${message.text()}`);
});

await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
await page.locator('canvas').waitFor({ state: 'visible', timeout: 60000 });
await sleep(1200);

await page.click('canvas');
await sleep(350);
await page.mouse.move(960, 210, { steps: 24 });
await sleep(500);
await page.screenshot({ path: `${SHOTS_DIR}/15-sky-look.png`, fullPage: true });

await page.mouse.move(1140, 320, { steps: 18 });
await sleep(400);
await page.screenshot({ path: `${SHOTS_DIR}/16-sky-horizon.png`, fullPage: true });

console.log(`SCREENSHOT=${SHOTS_DIR}/15-sky-look.png`);
console.log(`SCREENSHOT=${SHOTS_DIR}/16-sky-horizon.png`);

await browser.close();
