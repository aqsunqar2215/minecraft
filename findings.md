# Findings & Decisions

## Requirements
- The only user-provided artifact is [`minecraft_clone_plan.md.resolved`](C:\Users\Nitro\Desktop\minectraft\minecraft_clone_plan.md.resolved).
- The workspace currently contains no source code, only the resolved plan document.
- The plan specifies a browser-based Minecraft-like clone using Vite + TypeScript + Three.js and no game engine.
- The first milestone should include a fixed-timestep game loop, input, camera, chunk storage, block registry, and first-person control foundations.

## Research Findings
- The resolved plan already provides enough architecture, file-structure intent, and Phase 1 scope to start implementation.
- The environment behaves like `cmd`; PowerShell commands are not available.
- The repo instructions require persistent planning files for complex tasks.
- The game-development orchestrator routes this project toward web-games patterns and confirms Three.js is an appropriate 3D browser choice for a rendering-focused project.
- Vite scaffolding works in a temporary directory even when the root workspace is non-empty.
- The generated TS config uses `erasableSyntaxOnly`, which rejects enums and constructor parameter properties.
- The Playwright skill can be combined with `with_server.py` to validate the local Vite app and capture screenshots in one repeatable command.
- Browser automation confirmed the core loop: movement updates position, breaking changes the targeted block, placing restores a new block, and inventory opens with collected items visible.
- Browser automation now also confirms Minecraft-style slot logic plus working 2x2 and 3x3 recipe execution in the new inventory screens.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Implement vanilla Three.js rather than React-based tooling | Matches the plan and keeps frame-loop control straightforward. |
| Build a simple chunk mesh generator before greedy meshing | Faster path to a visible world and validates chunk/block data structures first. |
| Use DOM overlays later instead of immediately | UI is outside the minimum Phase 1 rendering and movement milestone. |
| Start with a procedural texture atlas instead of external image assets | Gives blocks real surface detail without introducing an asset pipeline or copied textures. |
| Keep water non-rendered for now | Transparent block rendering is a separate concern and not required for the first playable foundation. |
| Add a wrapper `run-dev.cmd` | Avoids argument parsing problems when passing `npm run dev -- ...` through the server helper. |
| Use screenshots as the final proof gate | Satisfies the ship-and-screenshot workflow and leaves visual evidence in the workspace. |
| Keep crafting outputs limited to currently placeable blocks | Delivers Minecraft-style crafting flow without first introducing a full non-block item registry. |
| Add deterministic UI debug hooks for browser validation | Headless pointer-lock aiming in the 3D scene is unstable, so table-screen verification needs a reliable fallback. |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| PowerShell-style shell commands failed in this environment | Switched to `cmd`-compatible commands. |
| Reading skill files with Python one-liners hit quoting issues | Used `type` and kept reads narrow. |
| `three` declarations were missing at build time | Installed `@types/three`. |
| Vite warned about a 507 kB production chunk | Acceptable for the first milestone; later phases should split UI/game systems or configure manual chunks. |
| Browser requested a missing favicon | Added `public/favicon.svg` and linked it in `index.html`. |
| Screenshot review exposed a bad initial spawn | Replaced the hardcoded spawn with a scored safe-spawn search plus spawn-facing selection. |
| Collision handling was overly coarse for edge contacts | Switched physics movement to collision-aware substeps instead of one large per-axis move. |
| Headless browser aiming could not reliably target a placed crafting table in-world | Added `window.__webcraftDebug` and `window.render_game_to_text` so the 3x3 crafting screen can still be verified deterministically in automation. |

## Resources
- Resolved implementation plan: `C:\Users\Nitro\Desktop\minectraft\minecraft_clone_plan.md.resolved`
- Planning skill templates: `C:\Users\Nitro\.codex\skills\planning-with-files\templates\`
- Game development skill: `C:\Users\Nitro\.codex\skills\game-development\SKILL.md`
- Web games skill: `C:\Users\Nitro\.codex\skills\game-development\web-games\SKILL.md`

## Visual/Browser Findings
- Earlier `01-home.png` exposed the player starting cramped against terrain with the target outline dominating the view.
- Refreshed `01-home.png` now shows an open starting area with visible ground and an immediate block target instead of camera clipping into nearby terrain.
- Refreshed screenshots now show textured sand, stone, and ore surfaces rather than flat face colors.
- `02-inventory-open.png` shows the inventory overlay and confirms mined sand was collected into storage.
- `03-core-action-success.png` shows the post-interaction world state after the break/place flow completed.
- Post-fix browser runs kept `Grounded: yes` during repeated movement, so the immediate screenshot-driven “falling into blocks” risk was not reproduced after the physics substep change.
- `07-player-crafting.png` shows the rebuilt survival inventory layout after executing 2x2 player crafting steps.
- `08-table-crafting.png` shows the dedicated 3x3 crafting-table screen after executing a furnace craft.

---
Update this file after every meaningful discovery or design adjustment.
