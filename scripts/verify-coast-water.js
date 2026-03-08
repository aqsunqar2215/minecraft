import path from 'node:path';
import { chromium } from 'playwright';

const TARGET_URL = 'http://127.0.0.1:5173';
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';
const TARGET_X = -20.1;
const TARGET_Z = 27.4;
const NEAREST_WATER_X = -17;
const NEAREST_WATER_Z = 19;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const yawToward = (fromX, fromZ, toX, toZ) => Math.atan2(-(toX - fromX), -(toZ - fromZ));

const VIEWS = [
  { name: 'north', pitch: -0.18, yaw: 0 },
  { name: 'east', pitch: -0.18, yaw: Math.PI / 2 },
  { name: 'south', pitch: -0.18, yaw: Math.PI },
  { name: 'west', pitch: -0.18, yaw: -Math.PI / 2 },
  {
    name: 'waterline',
    pitch: -0.22,
    yaw: yawToward(TARGET_X, TARGET_Z, NEAREST_WATER_X, NEAREST_WATER_Z),
  },
];

async function main() {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader'],
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await sleep(1200);

  for (const view of VIEWS) {
    await page.evaluate(
      ({ pitch, yaw }) => {
        window.__webcraftDebug?.teleportTo(-20.1, 27.4, 64);
        window.__webcraftDebug?.setView(yaw, pitch);
      },
      view,
    );
    await sleep(300);
    await page.screenshot({
      fullPage: true,
      path: path.join(SHOTS_DIR, `coast-water-${view.name}.png`),
    });
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
