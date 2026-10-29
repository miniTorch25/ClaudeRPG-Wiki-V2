# Content Gap Audit — ClaudeRPG Wiki V2

> **Scope:** Initial editorial audit of the existing wiki repository.
> **Reference release stated by the wiki:** ClaudeRPG v1.39.0.
> **Status:** Initial pass; system-level facts still need verification against the addon package before publication as definitive mechanics.

## Purpose

This audit tracks missing explanations, shallow coverage, contradictions, and verification work. It is an editorial worklist, not a claim that every mechanic below is broken.

## Initial findings

### 1. Progression is detailed but needs consistency checks

- The page documents Level, Prestige, Ascension, XP, costs, perks, and unlocks; it should be retained and expanded rather than rewritten from scratch.
- **Source inconsistency confirmed:** `progression_config.js` and `ProgressionManager.canUse` enforce Gem at P4/A2 and Rune at P6/A3, but the Ascension confirmation notes say P2/P3. `Progression.md` now follows the central feature gate and explicitly documents the conflicting confirmation text; the addon UI text itself remains a potential upstream fix.
- Add a practical reset checklist explaining what is reset by Prestige, what persists, and what players should prepare before confirming it. Verify each persistence detail from code.
- Clarify that Ascension is shared world difficulty, including its effect on other players, before players increase it.
- Verify the high-level XP formula and the Stat Limit Break diminishing-return formula against implementation, including rounding and edge cases.

### 2. Stats needs a clearer player-facing explanation

- The nine-stat table is a useful reference, but it should explain how to inspect requirements in item Lore and what happens when a requirement is unmet.
- Add a short allocation guide based on equipment goals, clearly labelled as guidance rather than a mandatory build.
- Verify every listed stat cap, base value, item requirement, rounding rule, and the effect of enchanting on Psi against the addon.
- Consider a separate compact mobile-friendly table if the current table becomes difficult to read on narrow screens.

### 3. Mastery has broad coverage but needs usage context

- The page already lists 11 lines, XP formulas, caps, and many effects.
- Add a quick-start section: how to gain XP in each line, how exclusive paths work, what the 60-second switch cooldown means, and which effects can be toggled.
- Verify the meaning of random effect variance (±60%), whether it is rolled per level or per player, and how the stated max-level values should be interpreted.
- Cross-check XP totals against each formula. Mark any derived figures for recalculation before editing.

### 4. Equipment and item reference

- `Items.md` contains many entries, but its combined item/block/recipe layout needs a mobile usability pass.
- Audit item entries for consistent fields: display name, identifier where useful, acquisition/crafting method, usage, requirements, and relevant system page.
- Check every recipe and custom item count against the v1.39.0 package.
- Keep Gem, Rune, Chorus, Augment/Reforge, and item-category details on their dedicated pages; use the general item page as an index and quick reference.

### 5. System pages to review for completeness

- **Augment & Reforge:** explain the full player workflow, requirements, costs, failure/return behavior, Salvage, and any restrictions.
- **Chorus:** explain the relationship between armor sockets, elements, Echo, Resonance, Transcend, and Fusion; verify terminology and progression gates.
- **Gem:** document acquisition, carving, rarity progression, sockets/engraving, abilities, and salvage.
- **Rune:** explain applying runes, weapon/tool compatibility, tiers, cooldowns, curses, and how to identify a rune's effect.
- **Mob Evolution and Bosses:** distinguish world Ascension scaling from individual evolution tiers; document drops and special behavior only when verified.
- **Exploration and Quality of Life:** provide step-by-step usage instructions for Waypoints, Discovery, Settings, Stash, and display helpers.
- **Achievements and Guide Quest:** preserve the existing catalogues and add navigation/context where players need help finding a particular condition or step.
- **Admin:** clearly separate player features from admin-only commands and document permissions and safe usage.

## Work completed on the audit branch

- [x] Expanded `Progression.md` with a practical progression route in English and Thai.
- [x] Verified the Gem/Rune feature gates against `ClaudeBP/scripts/config/progression_config.js` and `ClaudeBP/scripts/managers/progression_manager.js`. The central gate requires Gem at P4/A2 and Rune at P6/A3. Corrected `Progression.md` accordingly and documented a genuine inconsistency in the addon: the Ascension confirmation notes say Gem can unlock with P2 and Rune with P3, while the central feature gate requires P4/P6. Boss Uncarved Gem drops still begin at A2, and Geode drops at A4; those drop milestones are not the same as unlocking the Gem system.
- [x] Expanded `Stats.md` with point-allocation planning and equipment-requirement troubleshooting in English and Thai.
- [x] Expanded `Mastery.md` with a practical guide to activity-based XP, exclusive paths, the switch cooldown, toggles, and XP beyond max level.
- [x] Expanded `Augment.md` with a reroll/lock/max/salvage workflow and material-cost considerations.
- [x] Expanded `Chorus.md` with a build-planning workflow covering sockets, tier rolling, locking, hybrid elements, thresholds, and cross-system Synergy.
- [x] Updated `assets/wiki.css` so regular reference tables fill the article width, remain horizontally scrollable when wide, and use tighter cell spacing on small screens. This is a CSS-level fix; visual verification on a real phone/browser is still outstanding.

## Additional source verification

The v1.39.0 addon package was retrieved from the Library and inspected directly. Relevant findings:
- `ClaudeBP/scripts/config/progression_config.js`: central feature gates list Augment P1, Chorus P2, Gem P4/A2, Rune P6/A3.
- `ClaudeBP/scripts/managers/progression_manager.js`: `canUse` checks each configured Prestige and Ascension requirement.
- `ClaudeBP/scripts/config/progression_config.js` also sets boss Uncarved Gem drops to Ascension 2; Ascension notes state Geode mobs can drop them at Ascension 4.
- The same config's `ASCENSION.UNLOCK_NOTES` describes Gem at P2 and Rune at P3, conflicting with the feature gates above. Wiki copy now follows the central feature gate and explicitly documents the mismatch rather than hiding it.
- The package contains **40 item JSON definitions, 4 block JSON definitions, and 35 recipe JSON definitions** under `ClaudeBP/items/`, `ClaudeBP/blocks/`, and `ClaudeBP/recipes/`; these match the inventory counts currently shown in `Items.md`. The line-by-line recipe comparison is recorded below.



### Recipe-by-recipe audit (v1.39.0)

- [x] Parsed all 35 JSON recipes under `ClaudeBP/recipes/` and compared recipe inputs, crafting/brewing/smithing method, and output counts with the English and Thai `Items.md` summary.
- [x] The listed recipe summaries match the source for the documented items: Stats Book, Knowledge Book, Insight Lens, Reforge Hammers, Engraver, Eternal tools, Stellar Upgrade and its duplicate recipe, Ultimate Enchanter, Uncarved Gem/Gem Block, Uncarved Rune, ink tiers, Prestige Sigil, Ascension Relic, Sculk Potion, Waypoints, and Waypoint Orb.
- [x] Confirmed two separate brewing recipes create Transcendent Ink: Genesis Ink + Nether Star, and Genesis Ink + Stellar Core. The wiki's “or” wording accurately summarizes both recipes.
- [x] Confirmed the Uncarved Gem Block converts back to 9 Uncarved Gems, and 9 Uncarved Gems craft into 1 block. This is a storage conversion, not a net gain.
- [x] Confirmed the seven Gem-to-Uncarved-Gem recipes use one Gem of each listed rarity plus one Diorite; the Uncarved Rune recipe uses one Legend Gem plus one Amethyst Shard.
- [x] Confirmed Sculk Potion crafts 2 per recipe from Echo Shard + 2 Soul Soil + 2 Glass Bottles.
- [x] Verified key non-recipe acquisition claims and durability values against source, including Uncarved Gem, Core drops, and five tool durability values. Updated the item table in both languages for these mechanics and Sculk Potion's successful-use cost, conversion restrictions, and no-loot behavior.
- [ ] Remaining item verification: audit every remaining custom item's behavior and acquisition claim against its implementing script; this pass covers the key high-impact examples, not every item.



### Navigation and responsive-layout pass

- [x] Checked Markdown link targets across the pages listed in `SUMMARY.md` (including Home, Systems, item/system references, achievements, runes, exploration, FAQ, and admin pages). No links to missing wiki page targets were found in the checked pages.
- [x] Reviewed `assets/wiki.css`: the article grid uses `minmax(0,1fr)`, article containers set `min-width:0`, and tables are block-level with `max-width:100%` and `overflow-x:auto`; mobile breakpoints reduce horizontal padding and table cell spacing.
- [x] Ran the GitHub Actions Jekyll build for the draft PR commit; the build and artifact upload succeeded. The deploy job was correctly skipped for the pull-request event.
- [x] Inspected the generated Pages artifact: 37 HTML pages were produced. A static audit checked 2,278 local links/assets and 48 anchor fragments; no missing local targets or anchors were found.
- [ ] Still required: inspect rendered pages at narrow viewport widths in an actual browser/device. A successful build and static link check do not substitute for visual mobile testing.



### Non-recipe item drops and durability spot-check

- [x] Verified hammer and Engraver durability values against item JSON: Reforge Hammer 385, Diamond Reforge Hammer 762, Netherite Reforge Hammer 1252, Eternal Hammer 6192, Engraver 51.
- [x] Verified Uncarved Gem acquisition details against source: Wither/Warden/Ender Dragon drop 1–7 from Ascension 2; Geode has a base 8% chance for 1; Awakened mobs have a base 6% chance for 1–2. Looting and Gem Mastery can affect evolved-mob drop chances.
- [x] Clarified Core drop wording in both languages: a Core kill has a base 25% chance to drop exactly one of Augment Core or Stellar Core, chosen equally; Looting can increase the shared chance. This avoids implying each item separately has a 25% chance.
- [ ] Remaining item verification: check every custom item's acquisition/use claims against its implementing script, including recipe-independent salvage behavior and any admin/creative-only restrictions.

### Current navigation audit status

- [x] Checked page-link targets in the wiki pages referenced by `SUMMARY.md`; no missing wiki-page targets were found in the checked Markdown links.
- [x] Identified the build pipeline in `.github/workflows/pages.yml`: GitHub Actions extracts image assets from `ClaudeRPG_v1_39_0.zip`, then runs `actions/jekyll-build-pages@v1` to build the site into `_site`.
- [x] Generated HTML and anchor audit completed from the GitHub Pages artifact: 37 HTML pages, 2,278 local links/assets checked, 48 anchors checked, and no missing local targets found.
- [ ] Narrow-viewport/browser screenshots and real-device validation remain outstanding.
- [x] Added bilingual step-by-step workflows to `Exploration.md` for named/portable waypoints, Discovery Log rewards, and common teleport/discovery troubleshooting.
- [x] Added bilingual player-facing setup and troubleshooting guidance to `Quality-of-Life.md` for Settings, Quick Stash, Toast fallback, HP display, Re-Crops, and mining effects. This is a documentation pass, not a real-device UI test.



### Sculk Potion behavior check

- [x] Inspected `sculk_potion.js` and the evolution handler: the potion works at any Ascension, consumes one potion only after a successful conversion outside Creative, and the converted mob drops no loot. Bosses, Enchanted mobs, and some ineligible/locked mobs cannot be converted.
- [x] Updated the English and Thai `Items.md` entries to include the successful-use cost, restrictions, and no-loot behavior.



### Exploration and command-permission cross-check

- [x] Checked `exploration_config.js` and `waypoint_manager.js` against the documented Waypoint values: 1 Ender Pearl per 400 horizontal blocks (rounded up, min 1/max 8), 8 pearls across dimensions, 10-second stone cooldown, 30-second free special-point cooldown, 10 named stones per player, 150 named stones per world, 20 saved stones per player, 5 Orb special points, 6-block minimum spacing, and 24-character names. The values in `Exploration.md` match the source.
- [x] Confirmed the Script Tool is granted by the `status:get_script_tool` script event. Updated `Items.md` to avoid implying every player can execute the command without the world's command permissions.
- [x] Checked `script_tool_gui.js`: the Script Tool opens a Knowledge Book menu and can grant the Stats Book; it does not directly grant a Knowledge Book item. Corrected both language entries to distinguish menu access from item delivery.
- [x] Verified Sculk Potion's successful-conversion behavior and updated both language entries. A successful conversion consumes one potion outside Creative and the converted mob does not drop loot; bosses, Enchanted mobs, and certain ineligible/locked mobs are refused.
- [x] Clarified that Enchanted mobs guarantee 1–5 Enchant Essence and 1–5 Augment Crystals on player kill; updated the English and Thai item rows so the drop ranges are not mistaken for chance-based drops.

## Recipe audit outcome

No ingredient, crafting-method, or output-count mismatch was found in the 35 recipe definitions against the recipe summaries currently in `Items.md`. This conclusion is limited to the recipe JSON definitions; it does not validate every drop source, durability value, or in-game interaction described on the item page.



### Stats and bilingual progression cross-check

- [x] Checked `stats_manager.js`: nine tracked stats; default cap 80, with Mag 256, Wis 48, Con 64, and Vit 8; cap increases are rounded with `Math.round(base × capMultiplier)`.
- [x] Checked `req_config.js` against the Stats reference table for listed melee/ranged weapons, armor, and tools. The documented base requirements match the config values, including multi-stat requirements for spears, bows, crossbows, tridents, mace, turtle helmet, and elytra.
- [x] Confirmed the Stats manager's “refund all” operation returns invested stat values to the Points pool without changing Level or XP; the separate full reset also clears Level/XP/Points and resets Mana to 50. Player-facing text should distinguish these actions if describing both.
- [x] Found and corrected a bilingual mismatch in `Progression.md`: the English section used the central feature gates (Gem P4/A2, Rune P6/A3), while the Thai section still said P2/A2 and P3/A3. The Thai gate table, route, and Ascension notes now match the central gate and disclose the addon confirmation-text conflict.
- [x] Inspected `item_restriction.js`: melee damage is blocked when requirements fail; ranged use is cancelled; the mainhand warns for melee/ranged/tools; armor and offhand equipment are automatically removed when stats fail. Armor with installed Gems also requires its Gem equip level (the code comment identifies this as Lv.75+ / requirement 8). This is source inspection, not a live in-game test.

## Recommended execution order

1. Resolve factual contradictions and verify core progression rules.
2. Expand Progression and Stats into player-facing guides, preserving their current reference tables.
3. Expand Mastery and Augment/Reforge workflows.
4. Expand Chorus, Gem, and Rune workflows and cross-link their subpages.
5. Audit Items, recipes, and mobile table layout.
6. Review Mob Evolution, bosses, exploration, QoL, achievements, quests, FAQ, and admin.
7. Run a final pass for broken links, inconsistent unlock requirements, terminology, bilingual parity, and version labels.

## Verification labels

Use these labels in editorial notes while drafting:
- **Verified:** confirmed from the v1.39.0 addon source or a reproducible in-game test.
- **Needs test:** code alone does not establish the user-visible behavior.
- **Editorial:** wording, navigation, or layout improvement that does not change a mechanic.
- **Conflict:** different wiki sections currently state incompatible rules; do not silently choose one without checking the source.

## Completion checklist

- [x] Resolve the Gem/Rune unlock contradiction in the wiki using the central feature gate; the conflicting addon confirmation text remains an upstream issue.
- [x] Verified progression formulas against v1.39.0 source: XP thresholds use the normal +25 step through Level 100 and 60% of that step afterward; awarded XP is rounded to a whole number (minimum 1); Prestige/Ascension costs use `floor` before applying caps; stat caps use `Math.round(base × capMultiplier)`; Perk values are rounded to two decimals and each pick keeps its pick-time strength.
- [x] Added a bilingual pre-Prestige checklist to `Progression.md`, covering cap verification, Sigil preparation, reset expectations, Perk selection, and post-reset equipment requirements.
- [ ] Expand remaining key pages with step-by-step player workflows.
- [x] Added player workflows to Exploration and Quality of Life; remaining high-priority gaps include deeper Mob Evolution/Bosses guidance, Achievements/Guide Quest navigation, Admin permission guidance, and the remaining custom-item behavior audit.
- [x] Added bilingual step-by-step workflows to the Chorus Echo, Resonance, Transcend, and Fusion pages; broader player workflow coverage remains incomplete.
- [ ] Keep English and Thai explanations aligned wherever both are provided.
- [x] Compared all 35 recipe JSON definitions with the English and Thai item tables. Found and corrected one recipe-count mismatch: Stats Book requires 4 Sticks (not 1). Remaining recipe summaries matched the JSON ingredient/method/output definitions.
- [x] Verify generated HTML cross-links and navigation targets with a static artifact audit (2,278 local links/assets and 48 anchors; no missing targets found).
- [x] Added a defensive responsive-table CSS pass: content tables are constrained to the article width, use horizontal scrolling on overflow, and receive tighter cell padding on narrow screens.
- [ ] Check tables and item lists at mobile width in a rendered browser or on a real device; CSS source changes alone do not prove the rendered result.
- [ ] Confirm every factual claim is tied to the documented v1.39.0 release or explicitly marked as unverified.
- [x] Corrected the bilingual `Items.md` Stats Book recipe summary to 4 Sticks after checking `ClaudeBP/recipes/stats_book.json` (shapeless recipe contains four Stick ingredients).


### Follow-up pass: Mob Evolution, Achievements, Guide Quest, and Admin

- [x] Added bilingual terminology guidance separating shared World Ascension from an individual mob's evolution tier and from boss/special-mob behavior.
- [x] Added bilingual navigation steps for finding Achievement conditions through category pages, pagination, icon state, and hidden entries.
- [x] Added bilingual Guide Quest ordering guidance: follow numbered steps and chapters, consult each step's action, and check the current step when progress stalls.
- [x] Added bilingual player-feature vs Admin-tool guidance, including the Admin tag boundary and caution around world-wide changes. This is documentation guidance, not a full permission/security test.
- [ ] Verify detailed Bosses/phase behavior against the v1.39.0 scripts and ensure boss-specific rules are not inferred from regular evolution tiers.
- [x] Source-audited key utility-item paths in v1.39.0: Insight Lens self/other-player behavior, Script Tool Creative/Admin category filtering, Waypoint Orb enablement/cost/cooldown/special-point limits, Stellar Core force-evolution eligibility and cost, Ultimate Picker blacklist/Waypoint ownership checks, and Sculk Potion success-only consumption/refusal cases. Added bilingual notes to `Items.md`.
- [x] Source-audited Gem carving/crushing, Rune carving and tier/compatibility gates, Rune Anvil costs, Salvage eligibility/rewards, and Augment Crystal/Core costs against the v1.39.0 implementation; added bilingual notes to `Items.md`.
- [x] Cross-checked key scripted acquisition/drop rules against `evolution_config.js`, `progression_config.js`, and `evolution_manager.js`: corrected Geode/Awakened Gem-drop Ascension gates, added the separate Awakened Gem Dust drop, and clarified player-kill attribution, Core shared chance, and Enchanted-mob reward bonus behavior.
- [x] Audited additional recipe-independent acquisition and access paths for Stats/Knowledge Books, progression tokens, Core/Essence materials, Ink chains, Waypoint Stone (Blank), and Script Tool Creative/Admin gates against v1.39.0 recipes and source paths. The item-family notes are now bilingual; this is a targeted pass, not a claim that every item has been live-tested.
- [ ] Finish a strict row-by-row reconciliation of all 40 item definitions and 4 block definitions against every recipe, drop, command/menu grant, and use restriction. Live gameplay edge cases remain untested.
- [ ] Run rendered narrow-screen/mobile checks; source CSS and successful build alone are not visual validation.
- [ ] Re-run build, generated HTML/link/anchor audit, and bilingual parity review after this pass.


### Follow-up pass: Boss mechanics and custom-item usability

- [x] Expanded `Bosses-and-Special-Mobs.md` to distinguish HP thresholds from minimum World Ascension requirements and to separate boss effects from mob Evolution Tier.
- [x] Documented uncertainty around the scope of the 10-minion cap instead of claiming it is shared globally or per boss without source verification.
- [x] Added an item-family guide in both languages explaining grouped rows, major item categories, and key eligibility/restriction caveats.
- [x] Verified boss phase trigger conditions, 20-tick scan cadence, aura/tremor intervals, phase-message and summon retry tags, enrage condition, and minion-cap scope against `ClaudeBP/scripts/config/special_config.js`, `ClaudeBP/scripts/managers/special_mob_manager.js`, and `ClaudeBP/scripts/core/event_router.js` in the v1.39.0 package. The cap is 10 minions within 64 blocks per boss; cleanup removes evolved mobs/minions more than 80 blocks from every player in that dimension. Live multiplayer behavior remains untested.
- [ ] Compare all 40 item definitions, 4 block definitions, and 35 recipes against the package implementation for item-by-item acquisition, usage, and Creative/Admin restrictions. Existing recipe-count checks do not replace this behavior audit.
- [x] Run the repository's configured build and inspect its result for the boss/item documentation follow-up: GitHub Actions run [#54](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/actions/runs/40795873824) completed successfully, including the image-extraction step, Jekyll build, and artifact upload. The deploy job was skipped for the pull-request event, as configured; this confirms build success, not visual mobile validation.
- [ ] Check rendered pages at narrow/mobile widths in an actual browser/device; source-level table/CSS inspection is not equivalent to visual testing.


### Follow-up pass: Recipe-to-definition reconciliation (v1.39.0)

- [x] Parsed all 35 recipe JSON files and reconciled their outputs against the 40 custom item definitions and 4 custom block definitions in the v1.39.0 package. Every recipe output resolves to a defined custom item/block; no recipe output is missing a definition.
- [x] Checked every `crpg:` item/block reference used as a recipe ingredient, input, or reagent against the package definitions. No unresolved custom references were found.
- [x] Confirmed that the 35 recipe files produce 25 distinct custom outputs; repeated outputs are intentional recipe families, including the multiple routes to Uncarved Gem, Stellar Upgrade, and Transcendent Ink.
- [ ] This structural reconciliation does **not** prove every recipe's player-facing description, recipe unlock behavior, item use restrictions, command/menu grant path, or live in-game behavior. Continue the separate row-by-row source audit and gameplay checks.


### Follow-up pass: Bilingual item-source parity

- [x] Rechecked the English and Thai Transcendent Ink descriptions against both v1.39.0 brewing recipe JSON files. Corrected the Thai audit note: both recipes use Genesis Ink as input, with Nether Star or Stellar Core as the separate reagent; neither recipe uses Resonant Ink + Genesis Ink nor Stellar Upgrade as the Transcendent Ink reagent.
- [ ] Continue row-by-row source reconciliation for the remaining item/block use restrictions and acquisition paths; this wording fix does not complete the full item audit or live gameplay checks.


### Follow-up pass: Waypoint block interaction and protection (v1.39.0)

- [x] Checked the four custom block definitions and the event-router/WaypointManager paths. Interacting with `ultimate_enchanter` opens its GUI; interacting with either Waypoint Stone opens the appropriate waypoint menu, with a sneak-and-hold-item exception for ordinary block placement.
- [x] Clarified in both English and Thai item tables that registered named Waypoint Stones are protected by owner/Admin checks for breaking and Ultimate Picker pickup, while `Waypoint Stone (Blank)` has no owner/name protection and can be broken by anyone.
- [x] Confirmed that the block-definition files themselves do not encode these ownership rules; those behaviors are implemented in scripts. This remains a source audit, not a live multiplayer test.
- [ ] Continue checking remaining item/block access restrictions and acquisition paths, then rerun the generated-page/link and bilingual parity checks.


### Follow-up pass: Eternal Engraver and Ultimate Picker restrictions (v1.39.0)

- [x] Checked `gem_manager.js` and `ultench_gui.js`: carrying an Eternal Engraver anywhere in inventory makes all Engraver-related durability costs free, including normal Engraver use and armor socket engraving; it also satisfies the socket-engraving inventory requirement by itself.
- [x] Checked `ultimate_picker_blacklist.js` and `event_router.js`: the Survival restriction is an explicit configured blacklist (command/structure and related protected blocks), not a blanket Creative-only rule for all custom blocks. Named Waypoint Stones use a separate owner/Admin permission check. Updated both language rows to reflect this distinction.
- [x] Kept the wording bounded to source-confirmed behavior and supported block data; no live gameplay test was performed.
- [ ] Continue strict row-by-row checks for remaining custom items and blocks, then rerun generated-page/link and English/Thai parity checks.


### Follow-up pass: missing item icon assets

- [x] Rechecked the image pipeline against `.github/workflows/pages.yml`: the site build extracts PNG/JPG/WEBP assets from `ClaudeRPG_v1_39_0.zip` into `assets/images/items` and `assets/images/blocks` before Jekyll runs. The original icon references correspond to texture filenames in the v1.39.0 add-on archive, so the absence of generated image files from the Git tree alone did not establish broken published images.
- [x] Restored the 58 inline item/block image tags in `Items.md` (English and Thai tables), using the existing texture filenames from the add-on archive and the build's extraction destinations.
- [x] Confirmed the main-branch Pages workflow completed successfully after the prior changes. This verifies the build/deploy workflow, but does not by itself visually verify every image in a browser or mobile layout.
- [ ] Inspect the published page and confirm all restored icons render correctly on desktop and mobile.


### Follow-up pass: Getting Started recipe consistency

- [x] Compared the Stats Book crafting note in `Getting-Started.md` against the recipe verification already recorded for `Items.md` and `Guide-Quest.md`. Corrected both English and Thai instructions from 1 Stick to 4 Sticks (shapeless).
- [x] Confirmed this was a documentation inconsistency; no addon recipe or gameplay behavior was changed.
- [ ] Continue the cross-page consistency pass for other repeated recipes, unlock requirements, and item-use instructions.


### Follow-up pass: Guide Quest hammer recipe consistency

- [x] Found a mismatch in `Guide-Quest.md` step 3.1: it listed one Iron Block and one Dark Oak Log for the Reforge Hammer, while `Items.md` and the verified v1.39.0 recipe summary specify 2 Iron Blocks and 3 Dark Oak Logs.
- [x] Corrected the Guide Quest instruction to match the documented recipe.
- [ ] Continue cross-page checks for repeated crafting costs, progression gates, and item-use descriptions.


### Follow-up pass: Guide Quest Gem unlock clarity

- [x] Cross-checked Guide Quest steps 5.5 and 6.1 against `Progression.md` and `Gem.md`. Clarified that Ascension 2 enables boss Uncarved Gem drops, but Gem system access requires both Prestige 4 and Ascension 2.
- [x] Kept the distinction between world Ascension eligibility (a Prestige 2 player can raise it to A2) and the separate Gem feature gate (P4/A2).
- [ ] Continue checking other progression steps for cases where an item/drop milestone could be mistaken for system unlock access.


### Follow-up pass: Guide Quest Rune unlock clarity

- [x] Clarified Guide Quest step 7.2: a Prestige 3 player can raise the shared world to Ascension 3, but Rune system access still requires Prestige 6 + Ascension 3 according to the v1.39.0 central feature gate.
- [x] Kept world-Ascension eligibility separate from the player's Prestige requirement for Rune access; no addon behavior changed.
- [ ] Continue checking progression steps where world milestones may be mistaken for feature unlocks.


### Follow-up pass: Guide Quest Awakened Gem drop gate

- [x] Clarified Guide Quest step 6.2 that Awakened mobs become an Uncarved Gem source at Ascension 7+, matching the v1.39.0 acquisition audit; Geode mobs begin at Ascension 4+ and boss drops at Ascension 2+.
- [x] Kept drop-source availability separate from the Gem system access gate (Prestige 4 + Ascension 2).
- [ ] Continue checking progression steps where world milestones or drop sources may be mistaken for system unlock access.


### Follow-up pass: keep repeated Gem-source lists aligned

- [x] Updated Guide Quest step 4.2 to include Awakened mobs as an Uncarved Gem source from Ascension 7+, matching step 6.2 and the v1.39.0 acquisition audit.
- [x] Preserved the separate source thresholds: bosses at Ascension 2+, Geode mobs at Ascension 4+, and Awakened mobs at Ascension 7+.
- [ ] Continue checking repeated acquisition summaries for omissions or inconsistent gates.


### Follow-up pass: Chorus Fusion requirements and permanence (v1.39.0)

- [x] Cross-checked the Fusion table, Guide Quest steps 8.5–8.7, Chorus overview, and Chorus Mastery unlock table against `chorus_config.js`, `chorus_manager.js`, `chorus_gui.js`, and `mastery_config.js` in the v1.39.0 package.
- [x] Confirmed the documented gates and costs: Awaken = Prestige 3 + Chorus Mastery 15 + 3 Stellar Cores; Melodious = Prestige 6 + Chorus Mastery 20 + 6 Stellar Cores; Genesis = Prestige 10 + Chorus Mastery 25 + 12 Stellar Cores.
- [x] Confirmed source behavior: Awaken fuses the exact two Transcend elements on one armor piece; Melodious and Genesis fuse two eligible source pieces, and both pieces become the result. Stellar Core cost is charged once per Fusion operation, not per source piece.
- [x] Confirmed Fusion is permanent: fused pieces cannot be rolled or locked. No factual mismatch was found in the reviewed Fusion requirements.
- [ ] Continue the strict item-by-item audit for remaining item/block acquisition paths, use restrictions, and Creative/Admin boundaries. Source review does not replace live gameplay or narrow-screen validation.


### Follow-up pass: Stellar Upgrade recipe-use coverage (v1.39.0)

- [x] Cross-checked all recipe references to `crpg:stellar_upgrade`: Eternal Hammer, Eternal Engraver, Insight Lens, Ultimate Picker, and the duplicate recipe that yields two Stellar Upgrades.
- [x] Corrected the English and Thai `Items.md` use descriptions so Stellar Upgrade is not described as serving only as a Smithing template for Eternal items.
- [ ] Continue the remaining item-by-item audit for acquisition routes and use restrictions; this source check does not establish live gameplay behavior.


### Follow-up pass: Waypoint Orb special-point limit consistency (v1.39.0)

- [x] Compared the Exploration quick-start wording with the Waypoint Orb behavior notes and the v1.39.0 scripts.
- [x] Corrected the quick-start phrase “five per Orb list” to “five per player across the player's Waypoint Orb list,” matching the player-level limit and avoiding the implication that each Orb grants a separate allowance.
- [ ] Continue checking repeated Waypoint limits and permissions across the Wiki; no live multiplayer test was performed.


### Follow-up pass: Discovery Log summary completeness

- [x] Added the already-documented one-time 800 Travel Mastery XP reward per new dimension to the Exploration summary table, alongside biome and structure rewards.
- [x] Kept the summary aligned with the detailed Discovery Log section; no reward logic changed.
- [ ] Continue checking page summaries for omitted documented values.


### Follow-up pass: Achievement catalogue/source parity (v1.39.0)

- [x] Parsed the source catalogue in `ClaudeBP/scripts/config/achievement_data.js`: the add-on defines exactly 248 achievements across Combat (76), Work & Support (92), and Misc & Silly (80), matching the Wiki category table.
- [x] Recomputed the tier totals from the source definitions: Bronze 88, Silver 85, Gold 52, Platinum 14, and Mythic 9. These sum to 248 and match the Wiki.
- [x] Verified the 20 hidden achievements are all in the Misc & Silly category, matching the Wiki's hidden-count summary.
- [x] Checked `achievement_config.js` and `achievement_gui.js`: category pages show 10 entries per page, with 8 Combat pages, 10 Work & Support pages, and 8 Misc & Silly pages. The GUI's completion display uses no-reward wording, and hidden entries show as “???” until unlocked.
- [x] Checked the configured countable game modes: Survival and Adventure are included; Creative and Spectator are excluded. This matches the player-facing overview.
- [ ] Continue reviewing individual achievement conditions and counter hooks against the catalogue, including whether historical progress is backfilled or starts tracking only after an event. Count/tier parity alone does not verify every condition's implementation or live behavior.


### Follow-up pass: hidden Achievement listing wording

- [x] Compared the Misc & Silly page intro with `achievement_gui.js` and the category table. Hidden achievements do occupy catalogue entries; their names/details are masked as “???” until unlocked, rather than being omitted from the list entirely.
- [x] Corrected the English and Thai intro wording to describe the in-game display accurately. No achievement behavior changed.


### Follow-up pass: Achievement progress backfill vs event tracking (v1.39.0)

- [x] Verified `AchievementManager.syncState()` runs on the periodic flush cycle and applies registered state providers using max counters, so current-state values can backfill progress for existing players.
- [x] Verified state providers derive current Level / max-level status, Prestige, Ascension, selected perks, Mastery levels and paths, Chorus equipment state, plus a baseline `joined` flag. Equipment checks also inspect current Gem sets, Rune arsenal, Augment completion, inventory fullness, and armor variety.
- [x] Verified action counters (for example melee/ranged hits, mob kills, mining, fishing and many item interactions) are driven by event hooks and are not reconstructed from world history. Their progress therefore depends on events observed by the Achievement system, rather than a universal historical scan.
- [x] Documented this distinction in the audit to avoid claiming that all Achievement progress is backfilled. Existing stored counters/unlocks remain in the per-player `crpg:ach` dynamic property and are not reset by Prestige according to the manager comments.
- [ ] Continue a targeted review of individual hooks for edge cases where the implemented event does not fully match the human-readable condition; no gameplay behavior was changed in this audit.


### Follow-up pass: individual combat Achievement hooks (v1.39.0)

- [x] Compared the catalogue conditions for Long Shot, Untouchable, Four Horsemen, By a Thread, and Second Wind with the implementation in `ClaudeBP/scripts/systems/achievement_hooks.js` and `ClaudeBP/scripts/config/mob_config.js`.
- [x] Long Shot records the maximum floored 3D distance between a player and a non-player target when a damaging projectile hit is observed; this supports the documented 50+ block condition, with distance measured in 3D rather than horizontal blocks only.
- [x] Untouchable increments the hit streak for successful player damage to non-player targets and resets it when the player receives applied damage. The counter is event-based and is not reconstructed from prior combat history.
- [x] Four Horsemen counts distinct configured boss type IDs. The v1.39.0 boss tags cover Elder Guardian, Warden, Ender Dragon, and Wither, matching the catalogue's four-boss description.
- [x] By a Thread increments when a player survives resolved damage with exactly 1 HP remaining. Second Wind records a below-10%-HP state after resolved non-lethal damage and awards the event when the player later returns to full HP; the low-HP state is cleared on death or leaving the world.
- [x] No definite mismatch was found in these five reviewed conditions. This is a source-code comparison, not a live gameplay test; other achievement hooks and edge cases remain unreviewed.
- [ ] Continue checking the remaining condition/counter pairs, especially multi-step interactions and counters whose wording implies a particular item, target, or game state.


### Follow-up pass: Augment, Gem, mana, and synergy Achievement hooks (v1.39.0)

- [x] Compared selected catalogue counters with their implementation call sites: Augment reroll/lock/core use, Gem carving/enchant/salvage, Stellar Upgrade creation, mana depletion, and combat synergy.
- [x] Augment rerolls and locks increment the crystal-use counter and add the corresponding crystal cost; using the max-upgrade path records Augment Core use. These counters represent actions recorded by the add-on, not a scan of prior inventory history.
- [x] Gem carving increments the carved-Gem counter; the salvage path increments general item salvage and separately increments Gem salvage when the salvaged item contains Gems. Gem enchantment is recorded by the enchant flow.
- [x] Stellar Upgrade creation increments its Achievement counter in the Stellar Core system. Mana Drain is recorded when a successful mana consumption leaves the player's mana at zero; a failed consume does not count. The synergy Achievement increments when the combat pipeline receives a positive synergy damage bonus.
- [x] No definite mismatch was found in these selected call sites. One wording nuance is that the synergy counter specifically observes a positive damage bonus, so this check does not prove it tracks every possible non-damage synergy effect.
- [ ] Continue the remaining Achievement condition/counter audit and, where possible, validate edge cases in-game; this pass is source inspection only.


### Follow-up pass: Misc Achievement interaction-counter mismatch (v1.39.0)

- [x] Compared selected Misc & Silly catalogue conditions with `achievement_hooks.js` event subscriptions.
- [x] **Confirmed implementation mismatch — Haggler (MC56):** the catalogue condition says “Trade with villagers 100 times,” but the `trades` counter is incremented by `beforeEvents.playerInteractWithEntity` when the player interacts with a non-baby villager, with a 60-tick cooldown. The hook does not observe a completed trade or a trade transaction; opening/interacting with a villager can therefore advance the counter without completing a trade.
- [x] Kept the published catalogue wording unchanged because it mirrors the in-game achievement text. This audit records the discrepancy rather than rewriting the condition to conceal it.
- [ ] Upstream gameplay fix candidate: increment `trades` from a reliable completed-trade signal, if supported by the target Bedrock Script API, or revise the in-game condition text to describe what the implementation can actually observe. Verify API availability and multiplayer behavior before changing gameplay code.
- [ ] Continue the remaining Work & Support and Misc & Silly condition/counter comparisons. This finding comes from source inspection; it has not been reproduced in-game.


### Follow-up pass: Work & Support Achievement counters (v1.39.0)

- [x] Compared selected mining, woodcutting, farming, and travel counters with the hooks in `ClaudeBP/scripts/systems/achievement_hooks.js`.
- [x] Mining counters are incremented through the add-on's player-attributed block-break helper; Vein breaks are added separately because they do not emit normal block-break events. The general mined-block counter also includes blocks tracked by that helper, not only ores.
- [x] Crop harvest counters distinguish mature growth-state crops from unripe crops; the gourd path is counted separately. Sapling/seed counters are based on successfully observed block-placement events, and bone-meal use is based on the after-interaction event.
- [x] Travel distance counters use horizontal X/Z displacement, accumulate whole blocks over time, and discard very small movements and large jumps/teleports. Nether distance is tracked separately; boat, mount, foot, sprint, and Elytra counters use different movement categories.
- [ ] **Needs test / attribution edge case:** animal-breeding credit is assigned to the nearest player within 12 blocks when a newborn entity spawns, rather than from a direct breeder-to-birth attribution. In multiplayer, the nearest player may not be the player who bred the animal.
- [ ] **Needs test / interaction edge cases:** sheep-shearing and honey-collection counters are scheduled from pre-interaction checks (eligible adult unsheared sheep with shears; honey-level-5 hive/nest with bottle or shears). The hook does not verify the resulting entity/block state after the interaction, so cancelled or otherwise unsuccessful interactions should be tested before treating these counters as exact successful-action counts.
- [x] No definite mismatch was confirmed in the sampled mining/travel counters. The multiplayer attribution and pre-interaction cases are recorded as test candidates, not proven defects. No gameplay code changed.


### Follow-up pass: remaining Misc & Silly interaction hooks (v1.39.0)

- [x] Compared additional Misc & Silly catalogue counters with the event subscriptions in `ClaudeBP/scripts/systems/achievement_hooks.js`.
- [x] **Verified tracking distinction:** rotten flesh, pufferfish, and chorus fruit use `itemCompleteUse`; fireworks use `itemUse`; spyglass use increments on `itemStartUse`. These event choices are not all equivalent to a confirmed completed effect, so the wiki catalogue should continue to preserve the in-game condition text rather than claim stronger guarantees than the source establishes.
- [ ] **Needs test — Leash Enthusiast (MC60):** the counter increments after an interaction when the player is holding a lead and the target is leashable and currently un-leashed. The hook does not verify afterward that the lead was successfully attached, so test failed/cancelled interactions before describing it as an exact count of successfully leashed animals.
- [ ] **Needs test — Butterfingers (MC37):** the counter infers a drop when an item entity spawns with cause `Spawned` near a player's head height (vertical offset 0.9–1.8 blocks and horizontal distance at most 1.2 blocks), then credits the first matching player. This is a proximity heuristic, not a direct player-drop event; test multiplayer and other nearby item spawns before treating attribution as exact.
- [ ] **Needs test — Cake Day (MC52):** the counter is scheduled from a pre-interaction event when the player interacts with a cake block. The hook does not inspect the cake's post-interaction bite state, so verify whether unsuccessful/cancelled interactions can count.
- [x] **Source-confirmed distinction — Spyglass Peeper (MC59):** the counter increments when spyglass use starts, not when a minimum viewing duration or a completed use is confirmed. This may match the broad wording “use a spyglass”; it is recorded as a definition detail, not a confirmed defect.
- [x] No gameplay code was changed. These edge cases are source-inspection findings and test candidates; they have not been reproduced in-game. Keep the public achievement catalogue aligned with its in-game text until testing justifies a documentation clarification.


### Follow-up pass: larger source-texture images and Reforge/Salvage preflight

- [x] Confirmed that the Pages workflow extracts original item, block, mob, achievement, toast, and rarity textures from `ClaudeRPG_v1_39_0.zip` during the build; generated image folders are build artifacts and are not expected to be committed into the source tree.
- [x] Expanded the Augment/Reforge material strip with the Reforge Hammer and Eternal Hammer, and increased material art from 48px to 64px for easier inspection.
- [x] Added a six-item visual reference strip to `Item-Categories.md`, using original texture filenames already used by the existing item documentation/build extraction workflow.
- [x] Increased the inline item icons in `Items.md` from 28px to 40px and updated the shared CSS sizing so they render consistently.
- [x] Added a bilingual preflight checklist to `Augment.md`: review target stats/material/durability, distinguish Reroll/Max/Remove, and choose Salvage vs Perfect Salvage deliberately.
- [ ] Run the Pages build and generated-link/image audit after this change; rendered mobile/device visual validation remains outstanding and must not be inferred from a successful build.
- [ ] Continue the remaining row-by-row source audit for all custom items and blocks; this pass improves presentation and decision guidance but does not claim that every item has been live-tested.


### Follow-up pass: Achievement icon readability

- [x] Increased all 248 catalogue icon images across Combat (76), Work & Support (92), and Misc & Silly (80) from 28px to 40px while preserving the original source textures and catalogue rows.
- [ ] Verify the rendered achievement tables on desktop and narrow/mobile screens; the successful Pages build checks asset extraction and compilation, not visual readability on a real device.


### Follow-up pass: evolution-page artwork and guide status reconciliation

- [x] Increased the Sculk Potion and Stellar Core artwork in `Mob-Evolution.md` from 48px to 64px so the item illustrations are easier to distinguish.
- [x] Rechecked the current `Mastery.md` page and confirmed that it already contains a bilingual practical guide covering unlock, activity-based XP, exclusive paths, the 60-second switching cooldown, effect toggles, per-level variance, and XP after max level. The older gap note about adding this quick-start guide is therefore satisfied by the current page.
- [ ] Remaining visual validation: inspect the published item and achievement artwork at narrow/mobile widths in an actual browser or device.
- [ ] Remaining source audit: finish the row-by-row custom item/block acquisition and restriction review where source details are available; do not mark untested in-game interactions as verified.


### Follow-up pass: category and waypoint visuals from original Resource Pack

- [x] Added original category icons (`cat_combat.png`, `cat_work.png`, `cat_misc.png`) to the Achievements overview, paired with the current category counts.
- [x] Added original Waypoint Stone, Blank Waypoint Stone, and Waypoint Orb textures to the Exploration guide.
- [x] Added the Ultimate Enchanter block texture to its dedicated guide so players can recognize the workstation.
- [x] Confirmed each referenced texture path exists in the v1.39.0 image manifest and is covered by the Pages workflow's extraction routes.
- [ ] Verify these galleries visually on desktop and narrow/mobile screens; a successful extraction/build only confirms the assets are present in the generated site.


### Follow-up pass: Gem, Rune, and Chorus texture readability

- [x] Standardized the inline Gem-tier and Rune-grade icons to 40px attributes to match the shared CSS presentation.
- [x] Added original Resonant Ink, Genesis Ink, and Transcendent Ink textures to the Chorus overview, using filenames verified in the v1.39.0 image manifest and supported by the Pages extraction workflow.
- [ ] Confirm visual balance and image readability on narrow/mobile screens in an actual browser/device.


### Follow-up pass: custom block visual reference

- [x] Added a visual reference gallery for all four custom block families in both English and Thai sections of `Items.md`: Waypoint Stone, Blank Waypoint Stone, Ultimate Enchanter, and Uncarved Gem Block.
- [x] Checked the four texture filenames against the v1.39.0 image manifest; the existing Pages build extracts them from the add-on archive into `assets/images/blocks`.
- [ ] Confirm the rendered block images and card layout at desktop and mobile widths; source manifest/build checks do not replace visual inspection.


### Final validation snapshot — 2026-10-29

This snapshot separates completed source/repository checks from work that requires a real Minecraft client or a rendered browser/device.

#### Verified in the repository / CI

- [x] Before PR #58 was opened, the repository's open-PR query returned no pending PRs.
- [x] The latest main-branch Pages workflow observed for this snapshot completed successfully: image extraction, Jekyll build, artifact upload, and deployment. Run: https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/actions/runs/40821325530
- [x] The image pipeline is configured to extract original item, block, achievement, mob, toast, and rarity textures from `ClaudeRPG_v1_39_0.zip` at build time. Generated image folders are build artifacts, not missing committed assets.
- [x] The previous generated-site audit checked 2,278 local links/assets and 48 anchor fragments across 37 generated HTML pages with no missing targets at that point. This result predates the latest image-only changes, so it is not represented as a fresh post-change scan.
- [x] Recent documentation-only changes enlarged inline art, added original category/waypoint/block/item textures, and clarified Augment/Reforge/Salvage guidance. No add-on gameplay code was changed.

#### Still not verifiable from source/CI alone

- [x] Completed a row-by-row source reconciliation for all 40 item definitions and 4 block definitions, mapping recipe/drop/grant routes and major scripted use/permission rules in `ITEM-SOURCE-AUDIT.md`. This is source-level verification only; live gameplay edge cases remain untested.
- [x] Added and ran `scripts/validate_site.py` in the Pages workflow after Jekyll builds. Run [#40822508001](https://github.com/miniTorch25/ClaudeRPG-Wiki-V2/actions/runs/40822508001) scanned 39 HTML pages, 2,421 local links/assets, and 50 fragment targets; no missing local targets or anchors were found. This verifies path/anchor existence, not visual correctness.
- [ ] Desktop and narrow/mobile visual inspection in an actual browser or device. CSS review and CI success are not substitutes for visual testing.
- [ ] Live in-game and multiplayer checks for event-driven Achievement edge cases and Waypoint/block ownership behavior. Source inspection identifies candidates but cannot establish actual runtime behavior.
- [ ] Resolve the Gem/Rune unlock confirmation-text inconsistency in the add-on itself. The Wiki documents the central feature gates (Gem P4/A2; Rune P6/A3) and notes the conflict; changing the add-on requires separate authorization.

#### Completion rule

Do not mark the remaining items above as complete based solely on Markdown edits, source inspection of a subset, or a successful Pages workflow. The documentation work is complete only to the extent explicitly marked `[x]`; the remaining items require the missing source reconciliation or real-client validation described above.


### Follow-up pass: full item/block source reconciliation (v1.39.0)

- [x] Inspected the supplied `ClaudeRPG_Prog_v1_39_0.mcaddon` archive and mapped all 40 `ClaudeBP/items/*.json` definitions and all 4 `ClaudeBP/blocks/*.json` definitions to their recipes, scripted acquisition/grant paths, and principal use restrictions.
- [x] Reconciled the 35 recipe JSON definitions with the custom item/block inventory and existing English/Thai `Items.md` summaries; no unresolved custom recipe ingredient or output references were found in the structural audit.
- [x] Added `ITEM-SOURCE-AUDIT.md` with a definition-by-definition evidence table and explicit boundaries between source review and live testing.
- [x] Corrected `Items.md` in both languages to describe both Gem Fusion modes: standard Fusion uses 5 same-tier Gems; Core Fusion uses 2 same-tier Gems + 1 Augment Core. Both produce one Gem of the next tier and require a Reforge Hammer/durability.
- [x] Added and ran `scripts/validate_site.py` after the Jekyll build: 39 HTML pages, 2,421 local links/assets, and 50 fragment targets passed with no missing targets. This updates the earlier 2,278-link/48-anchor one-time audit.
- [ ] Render and inspect desktop/mobile layouts in a real browser/device.
- [ ] Test gameplay edge cases and multiplayer attribution/Waypoint protection in Minecraft. Source inspection does not establish live runtime behavior.


### Follow-up: language switch and wiki tools (2026-10-29)

- [x] Fixed the shared EN/TH switch so standalone language markers govern the full following section, including headings, tables, lists, and paragraphs, rather than stopping at the first heading. Updated the JavaScript cache version in the shared layout.
- [x] Added `node --check assets/wiki.js` to the Pages workflow so future syntax errors in the shared script fail CI.
- [x] Pages PR validation passed after the language-switch fix: JavaScript syntax check, image extraction, Jekyll build, generated-site local-link/asset/anchor validation, and artifact upload all succeeded (workflow run #40833474287). Browser-level visual testing remains outstanding.
- [x] Added bilingual Download instructions linking to the official ClaudeRPG Releases page without hard-coding a version.
- [x] Added a Toast Generator based on the v1.39.0 source-confirmed `toast:send` command. The preview uses the add-on's extracted frame textures and achievement icon textures; the tool validates the frame, icon key, header, sound, target and pipe-delimited command format.
- [x] Pages PR validation passed for the new tools: image extraction, Jekyll build, generated-site local-link/asset/anchor validation, and artifact upload all succeeded (workflow run #40834051484).
- [ ] Still required: inspect the published language toggle and Toast preview in a real browser at desktop and narrow/mobile widths.
- [ ] Still required: test generated Toast commands and visual behavior inside Minecraft Bedrock. The command format and constraints were checked against `toast_command.js`, `toast_send.js`, `toast_manager.js`, and `toast_config.js` in the v1.39.0 add-on, but live runtime behavior has not been tested in this pass.
- [x] Added repository contribution and formatting guidance in `CONTRIBUTING.md` and `.editorconfig`.
