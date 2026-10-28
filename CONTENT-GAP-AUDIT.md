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
- The package contains **40 item JSON definitions, 4 block JSON definitions, and 35 recipe JSON definitions** under `ClaudeBP/items/`, `ClaudeBP/blocks/`, and `ClaudeBP/recipes/`; these match the inventory counts currently shown in `Items.md`. The recipe count is verified, but each recipe's ingredients and result still need a line-by-line comparison with the wiki table.



### Recipe-by-recipe audit (v1.39.0)

- [x] Parsed all 35 JSON recipes under `ClaudeBP/recipes/` and compared recipe inputs, crafting/brewing/smithing method, and output counts with the English and Thai `Items.md` summary.
- [x] The listed recipe summaries match the source for the documented items: Stats Book, Knowledge Book, Insight Lens, Reforge Hammers, Engraver, Eternal tools, Stellar Upgrade and its duplicate recipe, Ultimate Enchanter, Uncarved Gem/Gem Block, Uncarved Rune, ink tiers, Prestige Sigil, Ascension Relic, Sculk Potion, Waypoints, and Waypoint Orb.
- [x] Confirmed two separate brewing recipes create Transcendent Ink: Genesis Ink + Nether Star, and Genesis Ink + Stellar Core. The wiki's “or” wording accurately summarizes both recipes.
- [x] Confirmed the Uncarved Gem Block converts back to 9 Uncarved Gems, and 9 Uncarved Gems craft into 1 block. This is a storage conversion, not a net gain.
- [x] Confirmed the seven Gem-to-Uncarved-Gem recipes use one Gem of each listed rarity plus one Diorite; the Uncarved Rune recipe uses one Legend Gem plus one Amethyst Shard.
- [x] Confirmed Sculk Potion crafts 2 per recipe from Echo Shard + 2 Soul Soil + 2 Glass Bottles.
- [ ] Remaining item-page verification: check non-recipe acquisition claims, item behavior, durability values, and drop rates against their implementation; JSON recipe matching alone does not verify these mechanics.

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
- [ ] Confirm formulas, costs, caps, and rounding rules. Initial source checks now confirm the stat caps and cap-rounding method; the full progression/XP and perk edge cases still need a dedicated pass.
- [ ] Expand key pages with step-by-step player workflows.
- [ ] Keep English and Thai explanations aligned wherever both are provided.
- [x] Compare all 35 recipe JSON definitions with the English and Thai item tables; no recipe ingredient/method/output mismatch found.
- [ ] Verify cross-links and navigation targets.
- [ ] Check tables and item lists at mobile width.
- [ ] Confirm every factual claim is tied to the documented v1.39.0 release or explicitly marked as unverified.
