# ClaudeRPG Wiki

**A bilingual English / Thai reference for ClaudeRPG**, a Minecraft Bedrock RPG addon by miniTorch25 and Claude Ai.

> **Documented release:** v1.39.0  
> **Minimum Minecraft Bedrock version:** 1.26.30  
> **Languages:** English and Thai

ClaudeRPG adds character progression, equipment customization, elemental armor, Gems, Runes, evolving mobs, achievements, exploration tools, and administration utilities.

## Start here

- **[Wiki Home](docs/Home.md)** — overview of the addon and the main topics.
- **[Getting Started](docs/Getting-Started.md)** — installation, first steps, and the progression roadmap.
- **[Guide Quest](docs/Guide-Quest.md)** — an in-game guided tour.
- **[FAQ](docs/FAQ.md)** — quick answers to common questions.
- **[Systems Index](docs/Systems.md)** — a map of the documented gameplay systems.
- **[Download ClaudeRPG](docs/Download.md)** — official release link and safe installation checklist.
- **[Toast Generator](https://miniTorch25.github.io/ClaudeRPG-Wiki-V2/Toast-Generator/)** — build, preview, and copy a source-verified Toast command.

## Repository layout

- `addon/` — source add-on archive used to extract textures during the site build.
- `docs/` — Markdown wiki pages, audits, status notes, contribution guide, and navigation metadata.
- `tools/` — the Toast Generator page and the generated-site validation script.
- `assets/` — shared website styles/scripts and image assets.
- `.github/workflows/pages.yml` — GitHub Pages build, validation, and deployment workflow.

The wiki keeps its existing public page permalinks. Moving source Markdown into `docs/` therefore does not change the published URLs. Jekyll and the workflow use the new source paths explicitly.

See [docs/SUMMARY.md](docs/SUMMARY.md) for the navigation tree. Current completed work and remaining validation are tracked in [docs/WIKI-STATUS.md](docs/WIKI-STATUS.md). Contribution and validation standards are in [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md).

## Version and accuracy

This edition documents **ClaudeRPG v1.39.0**. Gameplay values, unlock requirements, recipes, commands, and item behavior should be checked against the matching addon package before being treated as definitive. When a later addon release changes behavior, update the affected pages and the changelog together.

## Credits

ClaudeRPG by **miniTorch25** and **Claude Ai**. The Toast notification UI is adapted from AdvancementPack by r4isen1920 under the MIT License.
