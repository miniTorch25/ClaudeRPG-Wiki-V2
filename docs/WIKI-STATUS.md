---
permalink: /WIKI-STATUS
---

# Current Wiki Status — 2026-10-29

## Repository organization

- Moved wiki Markdown pages, audits, navigation metadata, and contributor documentation into `docs/`.
- Moved the ClaudeRPG source archive into `addon/`; the Pages workflow extracts textures from that new path.
- Moved the Toast Generator page and generated-site validator into `tools/`.
- Kept `index.md`, `README.md`, shared `assets/`, Jekyll layout/configuration, and the Pages workflow at their conventional paths.
- Preserved existing page permalinks through the global Jekyll `/:basename` permalink rule and the Toast Generator's explicit `/Toast-Generator/` permalink.

## Automated validation

The GitHub Pages workflow checks JavaScript syntax, inline scripts, source archive existence and texture extraction, Toast frame and icon presets, Jekyll build output, and generated local links/assets/anchors before deployment.

A successful CI run confirms static/build integrity. It does not prove visual correctness on every browser/device or runtime behavior inside Minecraft Bedrock; those require separate manual tests.
