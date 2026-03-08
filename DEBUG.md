# DEBUG

## 2026-03-06 End-to-End Ship Pass

| Command | Observed Output | Result |
|---------|-----------------|--------|
| `python --version` | `Python 3.10.11` | PASS |
| `dir C:\Users\Nitro\.codex\skills\webapp-testing\scripts` | `with_server.py` present | PASS |
| `dir C:\Users\Nitro\.codex\skills\playwright-skill` | `package.json`, `run.js`, `lib/` present | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --help` | Usage printed with `--server`, `--port`, and command passthrough | PASS |
| `npm run setup` in `C:\Users\Nitro\.codex\skills\playwright-skill` | Playwright dependencies installed and Chromium provisioned | PASS |
| `npm run build` | TypeScript compile passed and Vite emitted production files in `dist/` | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --server C:\Users\Nitro\Desktop\minectraft\run-dev.cmd --port 5173 -- node C:\Users\Nitro\.codex\skills\playwright-skill\run.js C:\Users\Nitro\AppData\Local\Temp\playwright-webcraft-e2e.js` | Dev server started, movement changed HUD position from `8.5 57.0 8.5` to `12.6 54.0 10.7`, break/place changed target from `Sand` to `Grass`, inventory opened, screenshots saved | PASS |
| `dir C:\Users\Nitro\Desktop\minectraft\screenshots` | `01-home.png`, `02-inventory-open.png`, and `03-core-action-success.png` exist and are non-empty | PASS |

## 2026-03-06 Screenshot-Driven Spawn And Collision Pass

| Command | Observed Output | Result |
|---------|-----------------|--------|
| `npm run build` | TypeScript compile passed and Vite emitted production files after spawn/collision changes | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --server C:\Users\Nitro\Desktop\minectraft\run-dev.cmd --port 5173 -- node C:\Users\Nitro\.codex\skills\playwright-skill\run.js C:\Users\Nitro\AppData\Local\Temp\playwright-webcraft-e2e.js` | HUD showed grounded movement around `XYZ: 9.5 41.0 -7.5` → `9.5 41.0 -13.1`; refreshed screenshots no longer showed spawn clipped into nearby terrain | PASS |
| Screenshot review of `screenshots\01-home.png` | Starting frame shows open ground, nearby terrain, and a block target under the crosshair instead of a boxed-in spawn | PASS |

## 2026-03-06 Procedural Texture Pass

| Command | Observed Output | Result |
|---------|-----------------|--------|
| `npm run build` | TypeScript compile passed and Vite emitted production files after atlas/UV changes | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --server C:\Users\Nitro\Desktop\minectraft\run-dev.cmd --port 5173 -- node C:\Users\Nitro\.codex\skills\playwright-skill\run.js C:\Users\Nitro\AppData\Local\Temp\playwright-webcraft-e2e.js` | Browser flow stayed functional; HUD reported valid targets before/after movement and screenshots were refreshed | PASS |
| Screenshot review of `screenshots\01-home.png` and `screenshots\03-core-action-success.png` | Sand, stone, and ore now render with visible pixel textures instead of flat face tints | PASS |

## 2026-03-06 Camera, Face Culling, And World Scale Fix Pass

| Command | Observed Output | Result |
|---------|-----------------|--------|
| `npm run build` | TypeScript compile passed and Vite emitted production files after input, winding, and render-distance changes | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --server C:\Users\Nitro\Desktop\minectraft\run-dev.cmd --port 5173 -- node C:\Users\Nitro\.codex\skills\playwright-skill\run.js C:\Users\Nitro\Desktop\minectraft\scripts\verify-visual-fixes.js` | Dev server started, Playwright runner opened the game, HUD stayed grounded after movement, and fresh screenshots `04-fix-home.png` and `05-fix-inworld.png` were saved | PASS |
| Screenshot review of `screenshots\05-fix-inworld.png` | Sand surface and side faces render as outward-facing solid geometry instead of an inside-out cave shell | PASS |

## 2026-03-06 Minecraft-Style Inventory And Crafting Pass

| Command | Observed Output | Result |
|---------|-----------------|--------|
| `npm run build` | TypeScript compile passed and Vite emitted production files after the inventory/crafting refactor | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --server C:\Users\Nitro\Desktop\minectraft\run-dev.cmd --port 5173 -- node C:\Users\Nitro\.codex\skills\playwright-skill\run.js C:\Users\Nitro\Desktop\minectraft\scripts\verify-inventory-crafting.js` | Player inventory opened, 2x2 crafting completed, 3x3 crafting-table UI completed via deterministic debug-open fallback, and screenshots `06-home-inventory-pass.png`, `07-player-crafting.png`, `08-table-crafting.png` were saved | PASS |
| Screenshot review of `screenshots\07-player-crafting.png` | Survival inventory shows Minecraft-style panel, hotbar row, and 2x2 crafting area with block-texture icons | PASS |
| Screenshot review of `screenshots\08-table-crafting.png` | Dedicated 3x3 crafting-table screen is visible and the crafted furnace appears in inventory after recipe execution | PASS |

## 2026-03-06 Control Direction Root Cause Fix Pass

| Command | Observed Output | Result |
|---------|-----------------|--------|
| `npm run build` | TypeScript compile passed and Vite emitted production files after yaw/movement convention fix | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --server C:\Users\Nitro\Desktop\minectraft\run-dev.cmd --port 5173 -- node C:\Users\Nitro\.codex\skills\playwright-skill\run.js C:\Users\Nitro\Desktop\minectraft\scripts\verify-visual-fixes.js` | After moving mouse right, HUD target shifted to `Sand @ 10,40,-11`; after pressing `W`, player moved to `XYZ: 10.8 41.0 -11.1` and target shifted further to `Sand @ 12,40,-15` | PASS |

## 2026-03-06 Minecraft-Style Sky Decor Pass

| Command | Observed Output | Result |
|---------|-----------------|--------|
| `npm run build` | TypeScript compile passed and Vite emitted production files after the sky rig was added | PASS |
| `python C:\Users\Nitro\.codex\skills\webapp-testing\scripts\with_server.py --server C:\Users\Nitro\Desktop\minectraft\run-dev.cmd --port 5173 -- node C:\Users\Nitro\.codex\skills\playwright-skill\run.js C:\Users\Nitro\Desktop\minectraft\scripts\verify-sky-decor.js` | Dedicated sky verification saved `15-sky-look.png` and `16-sky-horizon.png` | PASS |
| Screenshot review of `screenshots\15-sky-look.png` | View shows the square sun and two distant block clouds against the blue sky | PASS |
| Screenshot review of `screenshots\16-sky-horizon.png` | Horizon view keeps the sun readable and leaves a cloud visible without washing out the frame | PASS |
