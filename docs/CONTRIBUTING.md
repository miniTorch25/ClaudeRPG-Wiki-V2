---
permalink: /CONTRIBUTING
---

# Contributing to ClaudeRPG Wiki V2

## Repository layout

- `addon/` contains the add-on source archive used by the build.
- `docs/` contains wiki pages, audits, navigation metadata, status, and contribution guidance.
- `tools/` contains the Toast Generator source page and generated-site validator.
- `assets/` contains shared styles, scripts, and image assets.

## Documentation rules

- Use the `ClaudeRPG_Prog_v1_39_0.mcaddon` package as the reference for this edition unless a page explicitly identifies another release.
- Do not present planned features as released features.
- Separate values confirmed in source files from behavior that still requires an in-game test.
- Keep English and Thai sections factually aligned.
- Prefer links to dedicated system pages instead of repeating long explanations.
- Do not claim a page was tested on mobile or in Minecraft unless that test was actually performed.

## Code and layout

- Keep shared navigation and language behavior in `assets/wiki.js` and `assets/wiki.css`.
- Keep Toast Generator styles and behavior in `assets/toast-generator.css` and `assets/toast-generator.js`.
- Preserve existing Jekyll permalinks when moving Markdown pages; public URLs should not depend on source-file location.
- Keep controls keyboard-accessible and layouts responsive.

## Validation checklist

1. Check Markdown links, page permalinks, and image references.
2. Run `node --check assets/wiki.js` and `node --check assets/toast-generator.js`.
3. Run the GitHub Pages workflow, including Jekyll build and generated-site link/anchor validation.
4. Preview at desktop and narrow/mobile widths when a browser is available.
5. Test generated commands in a disposable Minecraft world; do not confuse build validation with in-game testing.
