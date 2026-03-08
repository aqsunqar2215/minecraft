import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const DIST_DIR = path.resolve('dist');
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';
const SCREENSHOT_PATH = path.join(SHOTS_DIR, '20-ocean-shore.png');
const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ensureDir = (directory) => {
  fs.mkdirSync(directory, { recursive: true });
};

const readManualView = () => {
  const x = Number(process.env.WEBCRAFT_TELEPORT_X);
  const z = Number(process.env.WEBCRAFT_TELEPORT_Z);
  const y = Number(process.env.WEBCRAFT_TELEPORT_Y);
  const yaw = Number(process.env.WEBCRAFT_TELEPORT_YAW ?? 0);
  const pitch = Number(process.env.WEBCRAFT_TELEPORT_PITCH ?? -0.18);

  if (!Number.isFinite(x) || !Number.isFinite(z)) {
    return null;
  }

  return {
    camera: {
      x,
      y: Number.isFinite(y) ? y : undefined,
      z,
    },
    pitch,
    source: 'manual',
    yaw,
  };
};

const startStaticServer = async () => {
  const sockets = new Set();
  const server = http.createServer(async (request, response) => {
    const rawPath = (request.url ?? '/').split('?')[0];
    const relativePath = rawPath === '/' ? '/index.html' : rawPath;
    const filePath = path.resolve(DIST_DIR, `.${relativePath}`);

    if (!filePath.startsWith(DIST_DIR)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    try {
      const stats = await fsp.stat(filePath);
      const finalPath = stats.isDirectory() ? path.join(filePath, 'index.html') : filePath;
      const extension = path.extname(finalPath).toLowerCase();
      response.writeHead(200, {
        Connection: 'close',
        'Content-Type': MIME_TYPES[extension] ?? 'application/octet-stream',
      });
      fs.createReadStream(finalPath).pipe(response);
    } catch {
      response.writeHead(404);
      response.end('Not found');
    }
  });

  server.keepAliveTimeout = 0;
  server.on('connection', (socket) => {
    sockets.add(socket);
    socket.on('close', () => {
      sockets.delete(socket);
    });
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });

  const address = server.address();

  if (!address || typeof address === 'string') {
    throw new Error('Failed to determine static server address.');
  }

  return {
    close: () =>
      new Promise((resolve, reject) => {
        server.closeIdleConnections?.();
        server.closeAllConnections?.();
        for (const socket of sockets) {
          socket.destroy();
        }
        server.close((error) => (error ? reject(error) : resolve()));
      }),
    url: `http://127.0.0.1:${address.port}`,
  };
};

const findNaturalOceanView = async (page) =>
  page.evaluate(() => {
    const debug = window.__webcraftDebug;

    if (!debug) {
      return null;
    }

    const directions = [
      { dx: 1, dz: 0, yaw: Math.PI / 2 },
      { dx: -1, dz: 0, yaw: -Math.PI / 2 },
      { dx: 0, dz: 1, yaw: Math.PI },
      { dx: 0, dz: -1, yaw: 0 },
    ];

    let bestView = null;

    for (let z = -128; z <= 128; z += 2) {
      for (let x = -128; x <= 128; x += 2) {
        const column = debug.getSurfaceColumn(x, z);

        if (column.waterLevel === null) {
          continue;
        }

        const depth = column.waterLevel - column.height;

        if (depth < 3) {
          continue;
        }

        for (const direction of directions) {
          let waterRun = 0;

          for (let step = 0; step <= 14; step += 1) {
            const ahead = debug.getSurfaceColumn(x + direction.dx * step, z + direction.dz * step);

            if (ahead.waterLevel === null || ahead.waterLevel - ahead.height < 2) {
              break;
            }

            waterRun += 1;
          }

          if (waterRun < 8) {
            continue;
          }

          let shore = null;

          for (let step = 1; step <= 8; step += 1) {
            const behindX = x - direction.dx * step;
            const behindZ = z - direction.dz * step;
            const behind = debug.getSurfaceColumn(behindX, behindZ);

            if (behind.waterLevel !== null && behind.waterLevel - behind.height >= 1) {
              continue;
            }

            shore = {
              x: behindX,
              z: behindZ,
              height: behind.height,
            };
            break;
          }

          if (!shore) {
            continue;
          }

          const distance = Math.hypot(shore.x, shore.z);
          const score = waterRun * 9 + depth * 6 - distance * 0.04;

          if (!bestView || score > bestView.score) {
            bestView = {
              score,
              water: {
                depth,
                height: column.height,
                waterLevel: column.waterLevel,
                x,
                z,
              },
              camera: {
                x: shore.x + 0.5,
                y: shore.height + 1.05,
                z: shore.z + 0.5,
              },
              yaw: -direction.yaw,
            };
          }
        }
      }
    }

    return bestView;
  });

async function main() {
  ensureDir(SHOTS_DIR);
  const managedServer = await startStaticServer();
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader'],
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1600, height: 900 },
  });

  try {
    await page.goto(managedServer.url, { timeout: 30000, waitUntil: 'networkidle' });
    await sleep(1200);

    const manualView = readManualView();
    const oceanView =
      manualView ??
      (await findNaturalOceanView(page));

    if (!oceanView) {
      throw new Error('Failed to find a natural ocean shoreline view.');
    }

    await page.evaluate((view) => {
      window.__webcraftDebug?.teleportTo(view.camera.x, view.camera.z, view.camera.y);
      window.__webcraftDebug?.setView(view.yaw, view.pitch ?? -0.18);
    }, oceanView);
    await sleep(900);

    const state = await page.evaluate(() =>
      window.__webcraftDebug?.renderGameToText?.() ?? window.render_game_to_text?.() ?? null,
    );

    await page.screenshot({ path: SCREENSHOT_PATH, fullPage: true });

    console.log(`TARGET_URL=${managedServer.url}`);
    console.log(`OCEAN_VIEW=${JSON.stringify(oceanView)}`);
    console.log(`STATE=${state}`);
    console.log(`SCREENSHOT=${SCREENSHOT_PATH}`);
  } finally {
    await browser.close();
    await managedServer.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
