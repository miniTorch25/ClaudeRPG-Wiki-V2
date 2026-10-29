---
permalink: /Ultimate-Enchanter
---

<div data-lang="en" markdown="1">

[🏠 Home](Home) · [📖 Systems](Systems) · [🎒 Items](Items) · [❓ FAQ](FAQ)

---

# Ultimate Enchanter

<div class="material-strip material-strip--compact">
  <div class="material-card"><img src="{{ '/assets/images/blocks/ultench_top.png' | relative_url }}" alt="Ultimate Enchanter block top texture" width="72" height="72" loading="lazy"><span>Ultimate Enchanter</span><small>Crafted workstation</small></div>
</div>

The **Ultimate Enchanter** is a crafted workstation that groups vanilla enchanting, Chorus operations, and Gem socket/ability operations. Right-click the block to open its menu. Available sections depend on your progression.

## Access and menu

| Menu | Unlock | What it does |
|---|---|---|
| **Vanilla Enchant** | Available from the main menu | Applies compatible vanilla enchantments using Enchant Essence. |
| **Chorus** | Prestige 2 | Opens the Chorus workflow for Echo, Resonance, Transcend, and related element actions. See [Chorus](Chorus). |
| **Gem** | Prestige 4 + World Ascension 2 | Opens socket engraving, Gem insertion/removal, Gem Transmute, and Gem Enchanting. See [Gem](Gem) and [Gem Abilities](Gem-Abilities). |
| **Rune** | Not in this workstation | Rune insertion, removal, and rerolls are handled at the anvil's Rune menu. See [Rune](Rune). |

The menu displays your current Gem Dust and Resonant Ink totals. These currencies are used by different actions and are not interchangeable.

## Vanilla Enchant

1. Open **Vanilla Enchant** and select a compatible item from your inventory or equipment.
2. Select an enchantment supported by that item.
3. Choose a level up to the enchantment's vanilla maximum and review the displayed cost.
4. Confirm to apply it. If the operation fails, no Enchant Essence is spent.

**Cost rule:** Enchant Essence cost for a target level is the enchantment's rarity base plus the target level (minimum 1). Rarity bases are Common 0, Uncommon 1, Rare 2, and Very Rare 3. When upgrading an enchantment already on the item, only the difference between the old and target-level costs is charged.

The system only lists enchantments compatible with the selected item. It does not allow levels above the vanilla maximum.

## Gem workflow

The Gem menu contains six actions:

- **Engrave Socket:** select an armor piece, then choose a locked socket. The base success chance is 33%; the displayed chance may include bonuses. Engraver durability is consumed even when engraving fails. Carry an Engraver or Eternal Engraver; an Eternal Engraver in your inventory makes the engraving durability cost free.
- **Insert Gem:** select armor, an empty socket, then a Gem. Your **Mag** must meet the tier requirement.
- **Remove Gem:** retrieve an installed Gem for **3 Gem Dust**.
- **Gem Transmute (Random):** reroll an installed Gem's tier using Gem Dust. Cost is **8 × the Gem's current tier number**.
- **Gem Transmute (Upgrade):** attempt to move an installed Gem up one tier. Cost is **18 × the Gem's current tier number**; the next tier must be unlocked by Gem Mastery.
- **Gem Enchanting:** choose an ability for an installed Gem. Cost is **12 × the Gem's tier number** in Gem Dust.

### Mag requirements

| Gem tier | Required Mag |
|---|---:|
| Common | 15 |
| Uncommon | 30 |
| Rare | 45 |
| Unique | 60 |
| Legend | 75 |
| Epic | 90 |
| Myth | 115 |

These values are the v1.39.0 configuration. Check the menu before spending materials, especially when transmuting or upgrading a Gem.

## Important distinctions

- **Socket engraving and Gem insertion are separate steps.** An armor piece needs an open socket before a Gem can be inserted.
- **Gem tier access and Gem system access are different checks.** The Gem system requires Prestige 4 + Ascension 2; higher Gem tiers are also gated by Gem Mastery.
- **Gem Dust and Resonant Ink serve different systems.** Gem actions use Gem Dust; Chorus actions use Resonant Ink according to their own rules.
- **Rune actions are handled elsewhere.** Use the anvil's Rune menu rather than looking for Rune options in the Ultimate Enchanter.
- **Preview the selected item and cost.** The interface chooses compatible equipment and displays material requirements; not every item supports every enchantment or Gem action.

This page is based on the v1.39.0 addon scripts, including `ultench_gui.js`, `vanilla_enchant.js`, `gem_manager.js`, `gem_ability_config.js`, `salvage_config.js`, and `progression_manager.js`. It documents configured behavior; live gameplay and multiplayer edge cases have not been independently tested.

**See also:** [Items](Items) · [Chorus](Chorus) · [Gem](Gem) · [Gem Abilities](Gem-Abilities) · [Rune](Rune)

</div>

<div data-lang="th" markdown="1">

[🏠 หน้าหลัก](Home) · [📖 ระบบ](Systems) · [🎒 ไอเทม](Items) · [❓ คำถามที่พบบ่อย](FAQ)

---

# Ultimate Enchanter

**Ultimate Enchanter** คือบล็อกสถานีทำงานที่รวมการเอนชานต์แบบปกติ ระบบ Chorus และการจัดการ Socket/ความสามารถของ Gem คลิกขวาที่บล็อกเพื่อเปิดเมนู หมวดที่ใช้ได้ขึ้นอยู่กับความก้าวหน้าของผู้เล่น

## เมนูและเงื่อนไขปลดล็อก

| เมนู | เงื่อนไข | การใช้งาน |
|---|---|---|
| **Vanilla Enchant** | ใช้ได้จากเมนูหลัก | ใส่เอนชานต์แบบปกติที่ไอเทมรองรับ โดยใช้ Enchant Essence |
| **Chorus** | Prestige 2 | จัดการ Echo, Resonance, Transcend และการทำงานที่เกี่ยวข้องกับธาตุ ดู [Chorus](Chorus) |
| **Gem** | Prestige 4 + World Ascension 2 | เจาะ Socket ใส่/ถอด Gem, Transmute และ Enchant ความสามารถของ Gem ดู [Gem](Gem) และ [ความสามารถ Gem](Gem-Abilities) |
| **Rune** | ไม่อยู่ในสถานีนี้ | การใส่ ถอด และสุ่ม Rune ใหม่ทำผ่านเมนู Rune ที่ทั่ง ดู [Rune](Rune) |

เมนูหลักแสดงจำนวน Gem Dust และ Resonant Ink ที่มีอยู่ วัตถุดิบทั้งสองใช้กับระบบคนละส่วนและใช้แทนกันไม่ได้

## Vanilla Enchant · เอนชานต์แบบปกติ

1. เปิด **Vanilla Enchant** แล้วเลือกไอเทมที่รองรับจากช่องเก็บของหรือช่องอุปกรณ์
2. เลือกเอนชานต์ที่ไอเทมนั้นสามารถใช้ได้
3. เลือกระดับไม่เกินระดับสูงสุดของเกมปกติ และตรวจสอบค่าใช้จ่ายที่แสดง
4. ยืนยันเพื่อใส่เอนชานต์ หากการดำเนินการไม่สำเร็จ ระบบจะไม่ใช้ Enchant Essence

**หลักการคิดค่าใช้จ่าย:** ค่า Enchant Essence ของระดับเป้าหมายคำนวณจากค่าพื้นฐานตามความหายากของเอนชานต์บวกกับระดับเป้าหมาย (อย่างน้อย 1) ค่าพื้นฐานคือ Common 0, Uncommon 1, Rare 2 และ Very Rare 3 หากอัปเกรดเอนชานต์ที่มีอยู่แล้ว จะจ่ายเฉพาะส่วนต่างระหว่างค่าใช้จ่ายของระดับเดิมกับระดับใหม่

ระบบจะแสดงเฉพาะเอนชานต์ที่ไอเทมรองรับ และไม่อนุญาตให้ใส่ระดับสูงกว่าค่าสูงสุดของเกมปกติ

## ขั้นตอนใช้งาน Gem

เมนู Gem มี 6 คำสั่ง:

- **Engrave Socket:** เลือกเกราะแล้วเลือก Socket ที่ยังปิดอยู่ โอกาสสำเร็จพื้นฐานคือ 33% แต่อัตราที่แสดงอาจรวมโบนัสแล้ว ความทนทานของ Engraver ถูกใช้แม้เจาะไม่สำเร็จ ต้องพก Engraver หรือ Eternal Engraver ไว้ในช่องเก็บของ โดย Eternal Engraver จะทำให้การเจาะ Socket ไม่เสียความทนทาน
- **Insert Gem:** เลือกเกราะ ช่อง Socket ว่าง และ Gem ค่า **Mag** ต้องถึงเกณฑ์ของระดับ Gem
- **Remove Gem:** ถอด Gem ที่ติดตั้งอยู่ โดยใช้ **Gem Dust 3 ชิ้น**
- **Gem Transmute (Random):** สุ่มเปลี่ยนระดับ Gem ที่ติดตั้งอยู่ ค่าใช้จ่ายคือ **8 × ระดับปัจจุบันของ Gem** เป็น Gem Dust
- **Gem Transmute (Upgrade):** พยายามเลื่อน Gem ขึ้นหนึ่งระดับ ค่าใช้จ่ายคือ **18 × ระดับปัจจุบันของ Gem** และต้องปลดล็อกระดับถัดไปผ่าน Gem Mastery แล้ว
- **Gem Enchanting:** เลือกความสามารถให้ Gem ที่ติดตั้งอยู่ ค่าใช้จ่ายคือ **12 × ระดับของ Gem** เป็น Gem Dust

### ค่า Mag ที่ต้องใช้

| ระดับ Gem | Mag ขั้นต่ำ |
|---|---:|
| Common | 15 |
| Uncommon | 30 |
| Rare | 45 |
| Unique | 60 |
| Legend | 75 |
| Epic | 90 |
| Myth | 115 |

ตัวเลขเหล่านี้อ้างอิงค่าที่ตั้งไว้ใน v1.39.0 ควรตรวจสอบเมนูและค่าใช้จ่ายก่อนใช้วัตถุดิบ โดยเฉพาะเมื่อต้อง Transmute หรือ Upgrade Gem

## ข้อควรแยกให้ออก

- **การเจาะ Socket กับการใส่ Gem เป็นคนละขั้นตอน** ต้องเปิด Socket ของเกราะก่อนจึงจะใส่ Gem ได้
- **การปลดล็อกระบบ Gem กับการปลดล็อกระดับ Gem เป็นคนละเงื่อนไข** ระบบ Gem ต้องใช้ Prestige 4 + Ascension 2 ส่วนระดับ Gem ที่สูงขึ้นยังขึ้นอยู่กับ Gem Mastery
- **Gem Dust กับ Resonant Ink ใช้คนละระบบ** คำสั่ง Gem ใช้ Gem Dust ส่วนคำสั่ง Chorus ใช้ Resonant Ink ตามกฎของระบบนั้น
- **คำสั่ง Rune อยู่ที่อื่น** ให้ใช้เมนู Rune ที่ทั่ง ไม่ใช่ค้นหาคำสั่ง Rune ใน Ultimate Enchanter
- **ตรวจสอบไอเทมและค่าใช้จ่ายก่อนยืนยัน** ระบบจะแสดงอุปกรณ์และเอนชานต์ที่รองรับ แต่ไม่ใช่ทุกไอเทมจะใช้เอนชานต์หรือคำสั่ง Gem ได้ทั้งหมด

หน้านี้อ้างอิงจากสคริปต์แอดออน v1.39.0 ได้แก่ `ultench_gui.js`, `vanilla_enchant.js`, `gem_manager.js`, `gem_ability_config.js`, `salvage_config.js` และ `progression_manager.js` เนื้อหาอธิบายพฤติกรรมตามที่กำหนดในซอร์ส แต่ยังไม่ได้ทดสอบการเล่นจริงหรือกรณีพิเศษใน Multiplayer

**ดูเพิ่มเติม:** [ไอเทม](Items) · [Chorus](Chorus) · [Gem](Gem) · [ความสามารถ Gem](Gem-Abilities) · [Rune](Rune)

</div>
