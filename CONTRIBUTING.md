# Contributing to ClaudeRPG Wiki V2

Thank you for helping improve the bilingual English–Thai reference.

## Documentation rules

- Use the `ClaudeRPG_Prog_v1_39_0.mcaddon` package as the reference for this edition unless the page explicitly identifies another release.
- Do not present planned features as released features.
- Separate values confirmed in source files from behavior that still requires an in-game test.
- Keep English and Thai sections factually aligned. If one language changes, review the matching section in the other language.
- Prefer links to dedicated system pages instead of repeating long explanations across several pages.
- For recipes, drops, costs, permissions, identifiers, and item behavior, cite or name the relevant source file in the audit notes.
- Do not claim a page was tested on mobile or in Minecraft unless that test was actually performed.

## Images

- Prefer original textures extracted by the Pages workflow from the matching add-on archive.
- Use the repository's established image directories, such as `assets/images/items`, `assets/images/blocks`, `assets/images/achievements`, and `assets/images/ui/toast`.
- Keep pixel-art textures crisp with `image-rendering: pixelated` where appropriate.
- Check that every referenced image exists in the generated site; build-time extraction means some image files are generated rather than committed.
- Provide useful alternative text for meaningful images; use empty alt text for purely decorative textures.

## Code and layout

- Keep JavaScript progressive and defensive: a missing optional element should not break unrelated wiki functionality.
- Keep controls keyboard-accessible and give buttons descriptive labels.
- Preserve responsive table behavior and avoid fixed-width article content that overflows on phones.
- Use the shared layout and stylesheet for common navigation and design rather than duplicating the site shell in individual pages.
- Run `node --check assets/wiki.js` and the GitHub Pages workflow before merging JavaScript or layout changes.

## Validation checklist

1. Check Markdown links, page permalinks, and image references.
2. Review the corresponding English and Thai content side by side.
3. Run the GitHub Pages build and generated-site link/anchor validator.
4. Preview the page at desktop and narrow/mobile widths when a browser or device is available.
5. For command generators, verify the command syntax against the matching add-on source and mark in-game testing separately.
6. Update `CONTENT-GAP-AUDIT.md` when a verification item is completed or when new limitations are found.

## Pull requests

Use a focused title, describe the source evidence and the files changed, and distinguish build validation from visual or live-game testing. Avoid mixing unrelated content and layout changes unless they must be coordinated.
