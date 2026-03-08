import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const DIST_DIR = path.resolve('dist');
const SHOTS_DIR = 'C:/Users/Nitro/Desktop/minectraft/screenshots';
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
      const mimeType = MIME_TYPES[extension] ?? 'application/octet-stream';
      response.writeHead(200, {
        'Connection': 'close',
        'Content-Type': mimeType,
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

const readState = async (page) =>
  page.evaluate(() => {
    if (typeof window.render_game_to_text !== 'function') {
      return null;
    }

    return JSON.parse(window.render_game_to_text());
  });

const readWaterAnimationState = async (page) =>
  page.evaluate(() => window.__webcraftDebug?.getWaterAnimationState?.() ?? null);

const readWaterTextureState = async (page) =>
  page.evaluate(() => window.__webcraftDebug?.getWaterTextureState?.() ?? null);

const findNaturalWaterSpot = async (page) =>
  page.evaluate(() => {
    const debug = window.__webcraftDebug;

    if (!debug) {
      return null;
    }

    let bestSpot = null;

    for (let z = -96; z <= 96; z += 2) {
      for (let x = -96; x <= 96; x += 2) {
        const column = debug.getSurfaceColumn(x, z);

        if (column.waterLevel === null) {
          continue;
        }

        const depth = column.waterLevel - column.height;

        if (depth < 2) {
          continue;
        }

        const distance = Math.hypot(x, z);
        const score = depth * 8 - distance * 0.05;

        if (!bestSpot || score > bestSpot.score) {
          bestSpot = {
            score,
            x,
            z,
            height: column.height,
            waterLevel: column.waterLevel,
          };
        }
      }
    }

    if (!bestSpot) {
      return null;
    }

    const directions = [
      { dx: 1, dz: 0, yaw: Math.PI / 2 },
      { dx: -1, dz: 0, yaw: -Math.PI / 2 },
      { dx: 0, dz: 1, yaw: Math.PI },
      { dx: 0, dz: -1, yaw: 0 },
    ];
    let bestDirection = directions[0];
    let bestWaterRun = -1;

    for (const direction of directions) {
      let waterRun = 0;

      for (let step = 1; step <= 12; step += 1) {
        const column = debug.getSurfaceColumn(
          bestSpot.x + direction.dx * step,
          bestSpot.z + direction.dz * step,
        );

        if (column.waterLevel === null || column.waterLevel - column.height < 2) {
          break;
        }

        waterRun += 1;
      }

      if (waterRun > bestWaterRun) {
        bestWaterRun = waterRun;
        bestDirection = direction;
      }
    }

    return {
      ...bestSpot,
      yaw: bestDirection.yaw,
    };
  });

const buildWaterTestPool = async (page) =>
  page.evaluate(() => {
    const debug = window.__webcraftDebug;

    if (!debug) {
      return null;
    }

    const baseX = 12;
    const baseZ = -18;
    const floorY = 60;
    const waterStartY = 61;

    for (let x = baseX - 3; x <= baseX + 3; x += 1) {
      for (let z = baseZ - 3; z <= baseZ + 3; z += 1) {
        debug.setBlockAt(x, floorY, z, 3);

        for (let y = waterStartY; y <= waterStartY + 7; y += 1) {
          debug.setBlockAt(x, y, z, 0);
        }
      }
    }

    for (let x = baseX - 3; x <= baseX + 3; x += 1) {
      for (let z = baseZ - 3; z <= baseZ + 3; z += 1) {
        if (x === baseX + 2 && z >= baseZ - 1 && z <= baseZ + 1) {
          debug.setBlockAt(x, floorY, z, 0);
          continue;
        }

        const isWall = x === baseX - 3 || x === baseX + 3 || z === baseZ - 3 || z === baseZ + 3;

        if (!isWall) {
          continue;
        }

        for (let y = waterStartY; y <= waterStartY + 2; y += 1) {
          debug.setBlockAt(x, y, z, 3);
        }
      }
    }

    for (let x = baseX - 1; x <= baseX + 1; x += 1) {
      for (let z = baseZ - 1; z <= baseZ + 1; z += 1) {
        for (let y = waterStartY; y <= waterStartY + 2; y += 1) {
          debug.setBlockAt(x, y, z, 15);
        }
      }
    }

    const position = debug.teleportTo(baseX + 0.8, baseZ + 0.5, waterStartY + 1.2);
    debug.setView(Math.PI / 2, -0.12);

    return {
      baseX,
      baseZ,
      floorY,
      position,
      waterStartY,
    };
  });

const buildWaterMobilityCourse = async (page) =>
  page.evaluate(() => {
    const debug = window.__webcraftDebug;

    if (!debug) {
      return null;
    }

    const basin = {
      floorY: 60,
      maxX: 34,
      maxZ: 10,
      minX: 28,
      minZ: 6,
      waterMaxX: 32,
      waterMaxZ: 9,
      waterMinX: 30,
      waterMinZ: 7,
    };
    const spread = {
      dividerX: 41,
      maxX: 47,
      maxZ: 10,
      minX: 37,
      minZ: 6,
      probeX: 44.5,
      probeY: 61.2,
      probeZ: 8.5,
      trenchFloorY: 58,
      trenchMaxX: 46,
      trenchMinX: 42,
      waterFloorY: 60,
      waterMaxX: 40,
      waterMinX: 38,
    };

    for (let x = basin.minX; x <= spread.maxX; x += 1) {
      for (let z = basin.minZ; z <= spread.maxZ; z += 1) {
        for (let y = 58; y <= 64; y += 1) {
          debug.setBlockAt(x, y, z, 0);
        }
      }
    }

    for (let x = basin.minX; x <= basin.maxX; x += 1) {
      for (let z = basin.minZ; z <= basin.maxZ; z += 1) {
        debug.setBlockAt(x, basin.floorY, z, 3);
      }
    }

    for (let x = basin.waterMinX; x <= basin.waterMaxX; x += 1) {
      for (let z = basin.waterMinZ; z <= basin.waterMaxZ; z += 1) {
        for (let y = basin.floorY + 1; y <= basin.floorY + 3; y += 1) {
          debug.setBlockAt(x, y, z, 15);
        }
      }
    }

    for (let x = basin.waterMaxX + 1; x <= basin.waterMaxX + 2; x += 1) {
      for (let z = basin.waterMinZ; z <= basin.waterMaxZ; z += 1) {
        debug.setBlockAt(x, basin.floorY + 1, z, 9);
      }
    }

    for (let x = spread.minX; x <= spread.maxX; x += 1) {
      for (let z = spread.minZ + 1; z <= spread.maxZ - 1; z += 1) {
        const floorY =
          x <= spread.waterMaxX ? spread.waterFloorY : spread.trenchFloorY;
        debug.setBlockAt(x, floorY, z, 3);
      }
    }

    for (let x = spread.minX; x <= spread.maxX; x += 1) {
      for (let y = spread.trenchFloorY + 1; y <= spread.waterFloorY + 3; y += 1) {
        debug.setBlockAt(x, y, spread.minZ, 3);
        debug.setBlockAt(x, y, spread.maxZ, 3);
      }
    }

    for (let z = spread.minZ; z <= spread.maxZ; z += 1) {
      for (let y = spread.trenchFloorY + 1; y <= spread.waterFloorY + 3; y += 1) {
        debug.setBlockAt(spread.minX, y, z, 3);
        debug.setBlockAt(spread.maxX, y, z, 3);
        debug.setBlockAt(spread.dividerX, y, z, 3);
      }
    }

    for (let x = spread.waterMinX; x <= spread.waterMaxX; x += 1) {
      for (let z = spread.minZ + 1; z <= spread.maxZ - 1; z += 1) {
        for (let y = spread.waterFloorY + 1; y <= spread.waterFloorY + 3; y += 1) {
          debug.setBlockAt(x, y, z, 15);
        }
      }
    }

    return {
      diveStart: {
        x: 31.5,
        y: 63.05,
        z: 8.5,
      },
      exitStart: {
        x: 32.2,
        y: 61.25,
        z: 8.5,
      },
      exitTargetY: basin.floorY + 2,
      spread,
    };
  });

async function main() {
  ensureDir(SHOTS_DIR);
  const managedServer = process.env.WEBCRAFT_URL ? null : await startStaticServer();
  const targetUrl = process.env.WEBCRAFT_URL ?? managedServer.url;

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader'],
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { height: 900, width: 1600 },
  });

  page.on('console', (message) => {
    console.log(`[browser:${message.type()}] ${message.text()}`);
  });

  try {
    await page.goto(targetUrl, { timeout: 30000, waitUntil: 'networkidle' });
    await sleep(1200);

    const naturalWater = await findNaturalWaterSpot(page);

    if (naturalWater) {
      await page.evaluate((spot) => {
        window.__webcraftDebug?.teleportTo(spot.x + 0.5, spot.z + 0.5, spot.waterLevel + 1.8);
        window.__webcraftDebug?.setView(spot.yaw, -0.26);
      }, naturalWater);
      await sleep(900);
      await page.screenshot({ path: path.join(SHOTS_DIR, '19-natural-pond.png'), fullPage: true });
    }

    const pool = await buildWaterTestPool(page);

    if (!pool) {
      throw new Error('Debug API is not available.');
    }

    const waterAnimationBefore = await readWaterAnimationState(page);
    const waterTextureState = await readWaterTextureState(page);
    await sleep(700);
    const waterAnimationAfter = await readWaterAnimationState(page);

    await sleep(400);
    await page.evaluate(() => {
      window.__webcraftDebug?.teleportTo(12.5, -17.5, 66.6);
      window.__webcraftDebug?.setView(0, -1.52);
    });
    await sleep(400);
    const stateBefore = await readState(page);
    await page.screenshot({ path: path.join(SHOTS_DIR, '15-water-pool.png'), fullPage: true });

    await page.evaluate((spot) => {
      window.__webcraftDebug?.teleportTo(spot.x, spot.z, spot.y);
      window.__webcraftDebug?.setView(Math.PI / 2, -0.12);
    }, pool.position);
    await sleep(200);

    await page.keyboard.down('Space');
    await sleep(900);
    await page.keyboard.up('Space');
    await sleep(200);

    const stateAfterSwim = await readState(page);
    await page.screenshot({ path: path.join(SHOTS_DIR, '16-water-swim-up.png'), fullPage: true });

    await page.evaluate(() => {
      window.__webcraftDebug?.teleportTo(13.18, -17.95, 61.22);
    });
    await sleep(300);
    await sleep(1200);
    const stateAfterCurrent = await readState(page);
    await page.screenshot({ path: path.join(SHOTS_DIR, '17-water-current.png'), fullPage: true });

    await page.keyboard.down('Space');
    await sleep(900);
    await page.keyboard.up('Space');
    await sleep(250);
    const stateAfterResurface = await readState(page);
    await page.screenshot({ path: path.join(SHOTS_DIR, '18-water-resurface.png'), fullPage: true });

    const mobilityCourse = await buildWaterMobilityCourse(page);

    if (!mobilityCourse) {
      throw new Error('Failed to build the water mobility verification course.');
    }

    await page.evaluate((course) => {
      window.__webcraftDebug?.teleportTo(course.diveStart.x, course.diveStart.z, course.diveStart.y);
      window.__webcraftDebug?.setView(0, -0.12);
    }, mobilityCourse);
    await sleep(250);
    const stateBeforeDive = await readState(page);
    await page.keyboard.down('Shift');
    await sleep(900);
    await page.keyboard.up('Shift');
    await sleep(250);
    const stateAfterDive = await readState(page);
    await page.screenshot({ path: path.join(SHOTS_DIR, '21-water-dive.png'), fullPage: true });

    await page.evaluate((course) => {
      window.__webcraftDebug?.teleportTo(course.exitStart.x, course.exitStart.z, course.exitStart.y);
      window.__webcraftDebug?.setView(-Math.PI / 2, -0.06);
    }, mobilityCourse);
    await sleep(250);
    await page.keyboard.down('KeyW');
    await sleep(1200);
    await page.keyboard.up('KeyW');
    await sleep(250);
    const stateAfterLedgeExit = await readState(page);
    await page.screenshot({ path: path.join(SHOTS_DIR, '22-water-ledge-exit.png'), fullPage: true });

    await page.evaluate((course) => {
      window.__webcraftDebug?.teleportTo(
        course.spread.probeX,
        course.spread.probeZ,
        course.spread.probeY,
      );
      window.__webcraftDebug?.setView(-Math.PI / 2, -0.2);
    }, mobilityCourse);
    await sleep(250);
    const stateBeforeSpread = await readState(page);
    await page.evaluate((course) => {
      for (let z = course.spread.minZ + 1; z <= course.spread.maxZ - 1; z += 1) {
        for (let y = course.spread.trenchFloorY + 1; y <= course.spread.waterFloorY + 3; y += 1) {
          window.__webcraftDebug?.setBlockAt(course.spread.dividerX, y, z, 0);
        }
      }
    }, mobilityCourse);
    await sleep(500);
    const stateAfterSpread = await readState(page);
    await page.screenshot({ path: path.join(SHOTS_DIR, '23-water-spread.png'), fullPage: true });

    const flowMagnitude =
      Math.hypot(
        stateAfterCurrent?.water?.current?.x ?? 0,
        stateAfterCurrent?.water?.current?.z ?? 0,
      );
    const resurfaceSubmersion = stateAfterResurface?.player?.submersion ?? 1;
    const diveStartY = stateBeforeDive?.player?.y ?? Number.POSITIVE_INFINITY;
    const diveEndY = stateAfterDive?.player?.y ?? Number.POSITIVE_INFINITY;
    const ledgeExitY = stateAfterLedgeExit?.player?.y ?? Number.NEGATIVE_INFINITY;
    const waterAnimationDrift = waterAnimationBefore && waterAnimationAfter
      ? Math.abs(waterAnimationAfter.primary.u - waterAnimationBefore.primary.u) +
        Math.abs(waterAnimationAfter.primary.v - waterAnimationBefore.primary.v)
      : 0;

    if (!waterAnimationBefore || !waterAnimationAfter) {
      throw new Error('Water animation state is unavailable through the debug API.');
    }

    if (!waterTextureState) {
      throw new Error('Water texture state is unavailable through the debug API.');
    }

    if (!waterTextureState.isPowerOfTwo) {
      throw new Error(
        `Water texture must be power-of-two for repeat wrapping. Got ${waterTextureState.width}x${waterTextureState.height}`,
      );
    }

    if (waterAnimationDrift < 0.01) {
      throw new Error(
        `Water animation did not advance enough. Drift=${waterAnimationDrift.toFixed(4)}`,
      );
    }

    if (stateAfterResurface?.player?.headInWater) {
      throw new Error('Player head should be above water after resurfacing.');
    }

    if (!stateAfterResurface?.player?.isInWater) {
      throw new Error('Player should remain in water while surface-swimming.');
    }

    if (resurfaceSubmersion > 0.5) {
      throw new Error(
        `Player should float close to the surface after swimming up. Submersion=${resurfaceSubmersion.toFixed(3)}`,
      );
    }

    if (!Number.isFinite(diveStartY) || !Number.isFinite(diveEndY) || diveEndY >= diveStartY - 0.35) {
      throw new Error(
        `Holding Shift in water should sink the player. Before=${diveStartY}, after=${diveEndY}`,
      );
    }

    if (
      ledgeExitY < mobilityCourse.exitTargetY - 0.02 ||
      stateAfterLedgeExit?.player?.headInWater
    ) {
      throw new Error(
        `Player should climb out of water onto the 1-block ledge. Y=${ledgeExitY}, state=${JSON.stringify(stateAfterLedgeExit?.player ?? null)}`,
      );
    }

    if (stateBeforeSpread?.player?.isInWater) {
      throw new Error('Spread trench was already filled before opening the divider.');
    }

    if (!stateAfterSpread?.player?.isInWater || (stateAfterSpread?.player?.submersion ?? 0) < 0.2) {
      throw new Error(
        `Opening the divider should flood the trench. State=${JSON.stringify(stateAfterSpread?.player ?? null)}`,
      );
    }

    console.log(`TARGET_URL=${targetUrl}`);
    console.log(`NATURAL_WATER=${JSON.stringify(naturalWater)}`);
    console.log(`POOL=${JSON.stringify(pool)}`);
    console.log(`MOBILITY_COURSE=${JSON.stringify(mobilityCourse)}`);
    console.log(`WATER_TEXTURE_STATE=${JSON.stringify(waterTextureState)}`);
    console.log(`WATER_ANIMATION_BEFORE=${JSON.stringify(waterAnimationBefore)}`);
    console.log(`WATER_ANIMATION_AFTER=${JSON.stringify(waterAnimationAfter)}`);
    console.log(`STATE_BEFORE=${JSON.stringify(stateBefore)}`);
    console.log(`STATE_AFTER_SWIM=${JSON.stringify(stateAfterSwim)}`);
    console.log(`STATE_AFTER_CURRENT=${JSON.stringify(stateAfterCurrent)}`);
    console.log(`FLOW_MAGNITUDE=${flowMagnitude.toFixed(3)}`);
    console.log(`STATE_AFTER_RESURFACE=${JSON.stringify(stateAfterResurface)}`);
    console.log(`STATE_BEFORE_DIVE=${JSON.stringify(stateBeforeDive)}`);
    console.log(`STATE_AFTER_DIVE=${JSON.stringify(stateAfterDive)}`);
    console.log(`STATE_AFTER_LEDGE_EXIT=${JSON.stringify(stateAfterLedgeExit)}`);
    console.log(`STATE_BEFORE_SPREAD=${JSON.stringify(stateBeforeSpread)}`);
    console.log(`STATE_AFTER_SPREAD=${JSON.stringify(stateAfterSpread)}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '15-water-pool.png')}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '16-water-swim-up.png')}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '17-water-current.png')}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '18-water-resurface.png')}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '19-natural-pond.png')}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '21-water-dive.png')}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '22-water-ledge-exit.png')}`);
    console.log(`SCREENSHOT=${path.join(SHOTS_DIR, '23-water-spread.png')}`);
  } finally {
    await browser.close();

    if (managedServer) {
      await managedServer.close();
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
