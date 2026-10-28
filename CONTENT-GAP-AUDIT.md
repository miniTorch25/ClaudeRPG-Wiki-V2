# Content Gap Audit — ClaudeRPG Wiki V2

> **Scope:** Initial editorial audit of the existing wiki repository.
> **Reference release stated by the wiki:** ClaudeRPG v1.39.0.
> **Status:** Initial pass; system-level facts still need verification against the addon package before publication as definitive mechanics.

## Purpose

This audit tracks missing explanations, shallow coverage, contradictions, and verification work. It is an editorial worklist, not a claim that every mechanic below is broken.

## Initial findings

### 1. Progression is detailed but needs consistency checks

- The page documents Level, Prestige, Ascension, XP, costs, perks, and unlocks; it should be retained and expanded rather than rewritten from scratch.
- **Potential contradiction to resolve:** the unlock table says Gem requires Prestige 4 + Ascension 2 and Rune requires Prestige 6 + Ascension 3, while the Ascension notes say A2/A3 can unlock the systems at Prestige 2/3. Verify the actual unlock predicates in v1.39.0 and make the table, explanatory text, FAQ, and item guidance agree.
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
- [x] Aligned the feature-unlock table with the same page's Ascension notes: Gem at P2/A2 and Rune at P3/A3. This is an internal consistency correction; it still needs direct code verification against the v1.39.0 package before being treated as source-verified.
- [x] Expanded `Stats.md` with point-allocation planning and equipment-requirement troubleshooting in English and Thai.
- [x] Updated `assets/wiki.css` so regular reference tables fill the article width, remain horizontally scrollable when wide, and use tighter cell spacing on small screens. This is a CSS-level fix; visual verification on a real phone/browser is still outstanding.

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

- [ ] Resolve the Gem/Rune unlock contradiction against the addon source.
- [ ] Confirm formulas, costs, caps, and rounding rules.
- [ ] Expand key pages with step-by-step player workflows.
- [ ] Keep English and Thai explanations aligned wherever both are provided.
- [ ] Verify cross-links and navigation targets.
- [ ] Check tables and item lists at mobile width.
- [ ] Confirm every factual claim is tied to the documented v1.39.0 release or explicitly marked as unverified.
