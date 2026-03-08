import { chromium } from 'playwright';

const TARGET_URL = 'http://127.0.0.1:5173';
const CENTER_X = -20.1;
const CENTER_Z = 27.4;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader'],
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await sleep(1000);

  const result = await page.evaluate(
    ({ centerX, centerZ }) => {
      const debug = window.__webcraftDebug;

      if (!debug) {
        throw new Error('Debug API unavailable.');
      }

      const samples = [];
      let nearestWater = null;

      for (let dz = -24; dz <= 24; dz += 4) {
        const row = [];

        for (let dx = -24; dx <= 24; dx += 4) {
          const x = Math.floor(centerX + dx);
          const z = Math.floor(centerZ + dz);
          const surface = debug.getSurfaceColumn(x, z);
          const distance = Math.hypot(dx, dz);

          if (surface.waterLevel !== null && (nearestWater === null || distance < nearestWater)) {
            nearestWater = distance;
          }

          row.push({
            x,
            z,
            height: surface.height,
            topBlock: surface.topBlock,
            waterLevel: surface.waterLevel,
          });
        }

        samples.push(row);
      }

      return {
        nearestWater,
        samples,
      };
    },
    { centerX: CENTER_X, centerZ: CENTER_Z },
  );

  console.log(JSON.stringify(result, null, 2));
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
