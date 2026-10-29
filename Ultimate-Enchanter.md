[🏠 Home](Home) · [📖 Systems / ระบบ](Systems) · [🎒 Items / ไอเทม](Items) · [❓ FAQ](FAQ)

---

# Ultimate Enchanter · คู่มือ Ultimate Enchanter

**EN:** The Ultimate Enchanter is a crafted workstation that groups vanilla enchanting, Chorus operations, and Gem socket/ability operations. Right-click the block to open its menu. Available sections depend on your progression.

**TH:** Ultimate Enchanter คือบล็อกสถานีทำงานที่รวมการเอนชานต์แบบปกติ ระบบ Chorus และการจัดการ Socket/ความสามารถของ Gem คลิกขวาที่บล็อกเพื่อเปิดเมนู หมวดที่ใช้ได้ขึ้นอยู่กับความก้าวหน้าของผู้เล่น

## Access and menu · การเข้าใช้งานและเมนู

| Menu | Access | What it does |
|---|---|---|
| **Vanilla Enchant** | Available from the main menu | Applies compatible vanilla enchantments using Enchant Essence. |
| **Chorus** | Prestige 2 | Opens the Chorus workflow for Echo, Resonance, Transcend, and related element actions. See [Chorus](Chorus). |
| **Gem** | Prestige 4 + World Ascension 2 | Opens socket engraving, Gem insertion/removal, Gem Transmute, and Gem Enchanting. See [Gem](Gem) and [Gem Abilities](Gem-Abilities). |
| **Rune** | Not in this workstation | Rune insertion, removal, and rerolls are handled at the anvil's Rune menu. See [Rune](Rune). |

The menu displays your current Gem Dust and Resonant Ink totals. These currencies are used by different actions and are not interchangeable.

## Vanilla Enchant · เอนชานต์แบบปกติ

1. Open **Vanilla Enchant** and select a compatible item from your inventory or equipment.
2. Select an enchantment supported by that item.
3. Choose a level up to the enchantment's vanilla maximum and review the displayed cost.
4. Confirm to apply it. If the operation fails, the source code reports that no Essence was spent.

**Cost rule:** Enchant Essence cost for a target level is the enchantment's rarity base plus the target level (minimum 1). Rarity bases are Common 0, Uncommon 1, Rare 2, and Very Rare 3. When upgrading an enchantment already on the item, only the difference between the old and target-level costs is charged.

The system only lists enchantments compatible with the selected item. It does not allow levels above the vanilla maximum.

## Gem workflow · ขั้นตอนใช้งาน Gem

The Gem menu contains six actions:

- **Engrave Socket:** select an armor piece, then choose a locked socket. The base success chance is 33%; the displayed chance may include bonuses. Engraver durability is consumed even when engraving fails. Carry an Engraver or Eternal Engraver; an Eternal Engraver in your inventory makes the engraving durability cost free.
- **Insert Gem:** select armor, an empty socket, then a Gem. Your **Mag** must meet the tier requirement.
- **Remove Gem:** retrieve an installed Gem for **3 Gem Dust**.
- **Gem Transmute (Random):** reroll an installed Gem's tier using Gem Dust. Cost is **8 × the Gem's current tier number**.
- **Gem Transmute (Upgrade):** attempt to move an installed Gem up one tier. Cost is **18 × the Gem's current tier number**; the next tier must be unlocked by Gem Mastery.
- **Gem Enchanting:** choose an ability for an installed Gem. Cost is **12 × the Gem's tier number** in Gem Dust.

### Mag requirements · เงื่อนไข Mag

| Gem tier | Required Mag |
|---|---:|
| Common | 15 |
| Uncommon | 30 |
| Rare | 45 |
| Unique | 60 |
| Legend | 75 |
| Epic | 90 |
| Myth | 115 |

These values are the current v1.39.0 configuration. Check the menu before spending materials, especially when transmuting or upgrading a Gem.

## Important distinctions · ข้อควรแยกให้ออก

- **Socket engraving and Gem insertion are separate steps.** An armor piece needs an open socket before a Gem can be inserted.
- **Gem tier access and Gem system access are different checks.** The Gem system requires Prestige 4 + Ascension 2; higher Gem tiers are also gated by Gem Mastery.
- **Gem Dust and Resonant Ink serve different systems.** Gem actions use Gem Dust; Chorus actions use Resonant Ink according to their own rules.
- **Rune actions are handled elsewhere.** Use the anvil's Rune menu rather than looking for Rune options in the Ultimate Enchanter.
- **Preview the selected item and cost.** The interface chooses compatible equipment and displays material requirements; do not assume every item supports every enchantment or every Gem action.

## Source note · หมายเหตุแหล่งข้อมูล

This page is based on the v1.39.0 addon scripts, including `ultench_gui.js`, `vanilla_enchant.js`, `gem_manager.js`, `gem_ability_config.js`, `salvage_config.js`, and `progression_manager.js`. It documents configured behavior; live gameplay and multiplayer edge cases have not been independently tested.

หน้านี้อ้างอิงจากสคริปต์แอดออน v1.39.0 ได้แก่ `ultench_gui.js`, `vanilla_enchant.js`, `gem_manager.js`, `gem_ability_config.js`, `salvage_config.js` และ `progression_manager.js` เนื้อหาอธิบายพฤติกรรมตามที่กำหนดในซอร์ส แต่ยังไม่ได้ทดสอบการเล่นจริงหรือกรณีพิเศษใน Multiplayer

---

**See also / ดูเพิ่มเติม:** [Items](Items) · [Chorus](Chorus) · [Gem](Gem) · [Gem Abilities](Gem-Abilities) · [Rune](Rune)
