# Current Wiki Status — 2026-10-29 (updated after PR #68)

This page is the concise current snapshot. `CONTENT-GAP-AUDIT.md` is a chronological work log and includes older unchecked checklist items that may have been superseded by later audits. Use this page to distinguish completed repository checks from work that still requires a real browser or Minecraft client.

## Completed in the repository

- **Bilingual language switching:** fixed standalone EN/TH markers so the full section, including headings, lists, and tables, switches together. Shared JavaScript syntax validation and the Pages build/link audit passed in [PR #61](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/61), workflow run [#40833474287](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/actions/runs/40833474287).
- **Download page:** added bilingual official-release instructions without a hard-coded version.
- **Toast Generator:** added the source-verified `toast:send` command builder, input checks, command copy/select controls, and a live preview using original Toast frame and achievement-icon textures. The Pages build and generated-site link/asset/anchor validation passed in [PR #62](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/62), workflow run [#40834051484](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/actions/runs/40834051484).
- **Item and block source audit:** all 40 custom item definitions, 4 custom block definitions, and 35 recipe definitions have been mapped in [ITEM-SOURCE-AUDIT.md](ITEM-SOURCE-AUDIT.md). This is source-level evidence, not live-game testing.
- **Boss source audit:** boss phase scanning, thresholds, intervals, retries, minion-cap scope, and cleanup behavior were checked against v1.39.0 scripts in [PR #21](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/21).
- **Recipe parity:** the Transcendent Ink note now matches the two v1.39.0 brewing recipes in both languages; see [PR #30](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/30).
- **Repository conventions:** added `.editorconfig`, [CONTRIBUTING.md](CONTRIBUTING.md), and README links to the new tools in [PR #63](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/63).
- **Final static-audit pass:** [PR #65](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/65) added the tool/audit pages to the table of contents, syntax-checks inline JavaScript across all repository HTML pages, and checks all ten Toast frame textures plus every configured icon preset before building. [PR #66](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/66) also made the site validator fail if an image omits its `alt` attribute; all checks passed in [workflow run #40835597056](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/actions/runs/40835597056).
- **Source organization:** [PR #68](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/pull/68) moved Toast Generator styles and behavior into `assets/toast-generator.css` and `assets/toast-generator.js`, documented the source layout, and added syntax validation for the standalone script. The Pages workflow passed in [run #40840521788](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/actions/runs/40840521788).

## Still outstanding

### Requires a rendered browser or real device

- Inspect language switching on the affected pages in desktop and narrow/mobile layouts.
- Check the Toast preview's proportions, frame textures, and icon sizing at desktop and mobile widths.
- Inspect the enlarged achievement, item, mob, and custom-block images on the published site. A successful build proves assets and links exist, not that every image looks balanced.

### Requires Minecraft Bedrock runtime testing

- Run generated Toast commands in a disposable v1.39.0 test world, including self-send, player-to-player cost/cooldown, Admin or command-block targets, sounds, Toast disabled fallback, and custom icon keys.
- Test multiplayer attribution and interaction edge cases in Achievement counters. Known source-level candidates include trade completion, animal-breeding credit, sheep shearing, honey collection, leash attachment, item-drop attribution, and cake interactions. These should remain marked as unverified until tested.
- Test Waypoint/block ownership and protection behavior in multiplayer.

### Requires an upstream add-on decision

- The add-on's Ascension confirmation text conflicts with the central feature gates for Gem and Rune. The wiki documents the central gates (Gem P4/A2; Rune P6/A3) and records the conflict; changing the add-on itself is a separate gameplay change.

## Validation boundaries

- The Pages workflows for the language-switch fix and tool pages passed JavaScript syntax checks (where applicable), image extraction, Jekyll build, generated local-link/asset/anchor validation, and artifact upload.
- The current wiki has **not** been visually inspected in a real browser/device in this pass, and the Toast generator has **not** been exercised in Minecraft. Do not treat CI success as proof of those runtime checks.
- The source-level item/block inventory is now recorded row-by-row in [ITEM-SOURCE-AUDIT.md](ITEM-SOURCE-AUDIT.md). Remaining source-level candidates are concentrated in Achievement event/counter edge cases; see the chronological audit for individual IDs and evidence.
