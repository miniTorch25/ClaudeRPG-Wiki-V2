<div data-lang="en" markdown="1">

[🏠 Home](Home) · [📖 Systems](Systems) · [👾 Mobs](Mob-Evolution) · [🎒 Items](Items) · [❓ FAQ](FAQ)

---

# Progression

<table align="right" width="280">
<tr><th colspan="2" align="center">Progression overview</th></tr>
<tr><td><b>Base max level</b></td><td>40</td></tr>
<tr><td><b>Levels per Prestige</b></td><td>+20</td></tr>
<tr><td><b>Points per level</b></td><td>4</td></tr>
<tr><td><b>Prestige item</b></td><td>Prestige Sigil</td></tr>
<tr><td><b>Ascension item</b></td><td>Ascension Relic</td></tr>
</table>

The long-term progression loop: Level → Prestige → Ascension.

## Level & XP

The level cap is **40 + 20 per Prestige**. Every level-up grants **4 Stat Points** (plus any Leveling Mastery bonus). At max level, XP stops accumulating, but Leveling Mastery continues to gain XP.

XP needed for the next level = `50 + 25 × level`. Above level 100, each extra level counts at ×0.6.

| Level | XP to next level |
|---|---:|
| 1 | 75 |
| 5 | 175 |
| 10 | 300 |
| 20 | 550 |
| 30 | 800 |
| 40 | 1,050 |
| 60 | 1,550 |
| 80 | 2,050 |
| 100 | 2,550 |
| 120 | 2,850 |

| Prestige | Max level | Total points |
|---|---:|---:|
| P0 | 40 | 160 |
| P1 | 60 | 240 |
| P2 | 80 | 320 |
| P3 | 100 | 400 |
| P4 | 120 | 480 |
| P5 | 140 | 560 |
| P6 | 160 | 640 |
| P7 | 180 | 720 |

## Feature unlocks

A system opens when **all** requirements are met. Level gates are remembered, so Prestige never re-locks them. Ascension is a world value.

| System | Prestige requirement | Ascension requirement |
|---|---|---|
| Augment | P1 | — |
| Chorus | P2 | — |
| Gem | P4 | A2 |
| Rune | P6 | A3 |
| Mastery | P1 | — |

The requirements above distinguish **system access** from **item availability**. The v1.39.0 feature-gate configuration requires **P4 + A2 for Gem** and **P6 + A3 for Rune**. Uncarved Gems begin dropping from bosses at A2, before the Gem system itself is unlocked; Geode mobs become another source at A4. Note: the Ascension confirmation notes in the addon describe Gem/Rune as unlockable at P2/P3, which conflicts with the central feature-gate configuration. This wiki follows the central gate used by `ProgressionManager.canUse`; the conflicting confirmation text should be corrected in a future addon update.

### Suggested progression route

1. **Level up:** earn XP and spend the 4 Stat Points gained per level in the Stats Book.
2. **Prepare for Prestige:** reach the current level cap and collect the required Prestige Sigils.
3. **Prestige:** raise your level cap by 20 and choose one available Perk. Your Level, XP, allocated Points, and invested stats are reset.
4. **Raise world Ascension carefully:** Ascension affects the entire world, not just the player who activates it. Higher levels increase enemy difficulty.
5. **Unlock systems by milestones:** Augment at P1, Chorus at P2, Gem at P4/A2, and Rune at P6/A3. Gem drops start earlier at A2, but drops alone do not unlock the system.

Before activating a higher Ascension in a shared world, make sure the players are prepared for the stronger mobs and bosses.

### Before you Prestige

Use this checklist when you reach the current level cap:

1. **Confirm the cap:** the base cap is 40, then increases by 20 per Prestige. Check your current Prestige before planning the next milestone.
2. **Collect the required Sigils:** the cost is based on your current Prestige, not the Prestige level you are about to reach. The formula is shown below.
3. **Plan for the reset:** Prestige resets Level, XP, allocated Points, and invested stats. Record your intended build or equipment requirements so you can reallocate after the reset.
4. **Choose your Perk deliberately:** you receive one Perk per Prestige. Check its unlock requirement and effect before selecting; the choice is part of the Prestige reward.
5. **Recheck equipment requirements afterward:** your previous stat allocation is not preserved, so items that require stats may no longer be usable until you spend points again.

Prestige is a player progression action. Ascension is different: it changes the shared world's difficulty, so review the Ascension section before raising it.

## Prestige

Prestige resets **Level, XP, Points, and stats** in exchange for a higher level cap, higher stat caps (Stat Limit Break), a permanent XP bonus, and one **Perk**. There is no maximum Prestige. It costs **Prestige Sigils**.

- **XP bonus:** +3% per Prestige (maximum 60%).
- **Stat Limit Break:** each stat cap is multiplied by `1 + 0.25 × units`. P1–P3 grant full units; each Prestige after that contributes ×0.85 (minimum ×0.25).
- **Prestige Sigil cost:** `min(16, 2 + floor(0.75 × current Prestige))`.

| Prestige | Cap multiplier | Default cap (80 base) | Mag cap | Con cap |
|---|---:|---:|---:|---:|
| P0 | ×1.00 | 80 | 256 | 64 |
| P1 | ×1.25 | 100 | 320 | 80 |
| P2 | ×1.50 | 120 | 384 | 96 |
| P3 | ×1.75 | 140 | 448 | 112 |
| P4 | ×1.96 | 157 | 502 | 126 |
| P5 | ×2.14 | 171 | 549 | 137 |
| P6 | ×2.30 | 184 | 588 | 147 |
| P7 | ×2.43 | 194 | 621 | 155 |
| P8 | ×2.54 | 203 | 650 | 162 |
| P9 | ×2.63 | 211 | 674 | 168 |
| P10 | ×2.71 | 217 | 694 | 174 |

| Prestige step | Sigils required |
|---|---:|
| P0 → P1 | 2 |
| P2 → P3 | 3 |
| P4 → P5 | 5 |
| P6 → P7 | 6 |
| P8 → P9 | 8 |
| P10 → P11 | 9 |
| P12 → P13 | 11 |
| P14 → P15 | 12 |
| P16 → P17 | 14 |
| P18 → P19 | 15 |
| P20 → P21 | 16 |
| P22 → P23 | 16 |
| P24 → P25 | 16 |

### Perks

Pick **1 Perk per Prestige**. A perk keeps the strength it had when selected; perks from later Prestiges are weaker due to diminishing returns.

| Perk | Available from | Effect |
|---|---|---|
| Scholar | P1 | +5% EXP from all sources |
| Plunderer | P1 | +3% chance to roll a mob's loot one extra time |
| Vigor | P1 | +5 Max HP |
| Gemwright | P2 | +5% Gem socket Engrave success |
| Fleetfoot | P2 | +3% Movement Speed |
| Second Wind | P3 | +0.5 HP regeneration per second |
| Runebound | P3 | +5% Rune effect strength |
| Deep Well | P3 | +10 Max Mana |

## Ascension

Ascension is the **world difficulty**. One player activates it and the whole world shares the value. It only increases and has no maximum. The cost is **Ascension Relics**: `min(10, 1 + floor(0.5 × current Ascension))`. Ascension scales mob and boss HP/damage, grants bonus XP, and unlocks Mob Evolution tiers.

| Ascension | Required Prestige | Relics | Mob HP | Mob damage | Boss HP | Boss damage | Player damage | XP bonus |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| A1 | P1 | 1 | ×1.50 | ×1.25 | ×1.80 | ×1.08 | ×1.06 | +5% |
| A2 | P2 | 1 | ×2.00 | ×1.50 | ×2.60 | ×1.16 | ×1.12 | +10% |
| A3 | P3 | 2 | ×2.50 | ×1.75 | ×3.40 | ×1.24 | ×1.18 | +15% |
| A4 | P3 | 2 | ×3.00 | ×2.00 | ×4.20 | ×1.32 | ×1.24 | +20% |
| A5 | P3 | 3 | ×3.50 | ×2.25 | ×5.00 | ×1.40 | ×1.30 | +25% |
| A6 | P3 | 3 | ×4.00 | ×2.50 | ×5.80 | ×1.48 | ×1.36 | +30% |
| A7 | P3 | 4 | ×4.50 | ×2.65 | ×6.60 | ×1.56 | ×1.42 | +35% |
| A8 | P3 | 4 | ×5.00 | ×2.80 | ×7.40 | ×1.64 | ×1.48 | +40% |
| A9 | P3 | 5 | ×5.00 | ×2.95 | ×8.20 | ×1.72 | ×1.54 | +45% |
| A10 | P3 | 5 | ×5.00 | ×3.10 | ×9.00 | ×1.80 | ×1.60 | +50% |
| A11 | P3 | 6 | ×5.00 | ×3.25 | ×9.00 | ×1.80 | ×1.60 | +55% |
| A12 | P3 | 6 | ×5.00 | ×3.40 | ×9.00 | ×1.80 | ×1.60 | +60% |

- Mob HP uses a **virtual HP pool**. A single scaled hit can never take more than **50%** of a player's Max HP; combined hostile damage is capped at ×6.

| Ascension | Evolution unlocked |
|---|---|
| A1 | Tough |
| A2 | Elite |
| A3 | Sculk |
| A4 | Geode |
| A5 | Inferno |
| A6 | Nightmare |
| A7 | Awaken |

- **A2:** Bosses start dropping Uncarved Gems; the Gem system can unlock with Prestige 2.
- **A3:** The Rune system can unlock with Prestige 3.
- **A4:** Geode mobs can drop Uncarved Gems.

---

**See also:** [Stats](Stats) · [Mastery](Mastery) · [Mob Evolution](Mob-Evolution) · [Prestige Sigil / Ascension Relic](Items)

</div>

<div data-lang="th" markdown="1">

[🏠 หน้าหลัก](Home) · [📖 สารบัญระบบ](Systems) · [👾 มอนสเตอร์](Mob-Evolution) · [🎒 ไอเทม](Items) · [❓ คำถามที่พบบ่อย](FAQ)

---

# ความก้าวหน้า

<table align="right" width="280">
<tr><th colspan="2" align="center">ภาพรวมความก้าวหน้า</th></tr>
<tr><td><b>เลเวลสูงสุดเริ่มต้น</b></td><td>40</td></tr>
<tr><td><b>เลเวลที่เพิ่มต่อ Prestige</b></td><td>+20</td></tr>
<tr><td><b>แต้มต่อเลเวล</b></td><td>4</td></tr>
<tr><td><b>ไอเทม Prestige</b></td><td>Prestige Sigil</td></tr>
<tr><td><b>ไอเทม Ascension</b></td><td>Ascension Relic</td></tr>
</table>

วงจรความก้าวหน้าระยะยาวของผู้เล่น: เลเวล → Prestige → Ascension

## เลเวลและ XP

เลเวลสูงสุดคำนวณจาก **40 + 20 ต่อ Prestige** เมื่อเลเวลเพิ่มจะได้รับ **Stat Points 4 แต้ม** (และอาจได้โบนัสจาก Leveling Mastery) เมื่อถึงเลเวลสูงสุด XP จะหยุดสะสม แต่ Leveling Mastery ยังได้รับ XP ต่อไป

XP ที่ต้องใช้เพื่อขึ้นเลเวลถัดไป = `50 + 25 × เลเวล` หากเลเวลเกิน 100 จะนับ XP ของเลเวลส่วนที่เกินด้วยตัวคูณ ×0.6

| เลเวล | XP ที่ต้องใช้เพื่อเลเวลถัดไป |
|---|---:|
| 1 | 75 |
| 5 | 175 |
| 10 | 300 |
| 20 | 550 |
| 30 | 800 |
| 40 | 1,050 |
| 60 | 1,550 |
| 80 | 2,050 |
| 100 | 2,550 |
| 120 | 2,850 |

| Prestige | เลเวลสูงสุด | แต้มรวม |
|---|---:|---:|
| P0 | 40 | 160 |
| P1 | 60 | 240 |
| P2 | 80 | 320 |
| P3 | 100 | 400 |
| P4 | 120 | 480 |
| P5 | 140 | 560 |
| P6 | 160 | 640 |
| P7 | 180 | 720 |

## เงื่อนไขปลดล็อกระบบ

ระบบจะเปิดใช้งานเมื่อผ่าน **เงื่อนไขทั้งหมด** ที่กำหนดไว้ เงื่อนไขเลเวลที่เคยผ่านแล้วจะถูกจดจำ ดังนั้น Prestige จะไม่ทำให้เงื่อนไขเหล่านั้นกลับมาล็อกอีก ส่วน Ascension เป็นค่าระดับของโลก

| ระบบ | Prestige ที่ต้องมี | Ascension ที่ต้องมี |
|---|---|---|
| Augment | P1 | — |
| Chorus | P2 | — |
| Gem | P4 | A2 |
| Rune | P6 | A3 |
| Mastery | P1 | — |

เงื่อนไขข้างต้นแยก **การปลดล็อกระบบ** ออกจาก **การหาไอเทม** ตัวอย่างเช่น ระบบ Gem ต้องถึง P4/A2 และ Rune ต้องถึง P6/A3 ตาม feature gate หลัก แม้ข้อความยืนยัน Ascension ในแอดออนจะระบุ P2/P3 ซึ่งขัดแย้งกับเงื่อนไขจริง บอสเริ่มดรอป Uncarved Gem ที่ A2 และมอนสเตอร์ Geode เป็นแหล่งดรอปเพิ่มเติมเมื่อถึง A4

### เส้นทางความก้าวหน้าที่แนะนำ

1. **เพิ่มเลเวล:** รับ XP และใช้ Stat Points 4 แต้มต่อเลเวลใน Stats Book
2. **เตรียม Prestige:** ไปให้ถึงเลเวลสูงสุดปัจจุบันและรวบรวม Prestige Sigil ให้ครบ
3. **ทำ Prestige:** เพิ่มเพดานเลเวลอีก 20 และเลือก Perk ที่มีให้ โดย Level, XP, แต้มที่จัดสรร และค่าสเตตัสที่ลงทุนไว้จะถูกรีเซ็ต
4. **เพิ่ม Ascension อย่างระมัดระวัง:** Ascension มีผลกับทั้งโลก ไม่ใช่แค่ผู้เล่นที่กดเพิ่ม ระดับที่สูงขึ้นทำให้ศัตรูแข็งแกร่งขึ้น
5. **ปลดล็อกระบบตามความก้าวหน้า:** Augment ที่ P1, Chorus ที่ P2, Gem ที่ P4/A2 และ Rune ที่ P6/A3

ก่อนเพิ่ม Ascension ในโลกที่เล่นร่วมกัน ควรตรวจสอบให้แน่ใจว่าผู้เล่นพร้อมรับมือกับมอนสเตอร์และบอสที่แข็งแกร่งขึ้น

### เช็กลิสต์ก่อนทำ Prestige

เมื่อถึงเลเวลสูงสุดปัจจุบัน ให้ตรวจสอบตามรายการนี้:

1. **ตรวจสอบเพดานเลเวล:** เริ่มต้นที่ 40 และเพิ่มอีก 20 ต่อ Prestige ตรวจระดับปัจจุบันก่อนวางแผนเป้าหมายถัดไป
2. **เตรียม Sigil ให้พอ:** ค่าใช้จ่ายคำนวณจากระดับ Prestige ปัจจุบัน ไม่ใช่ระดับที่จะได้รับหลังทำสำเร็จ ดูสูตรได้ในหัวข้อด้านล่าง
3. **เตรียมรับการรีเซ็ต:** Prestige จะรีเซ็ต Level, XP, Points และค่าสเตตัสที่ลงทุนไว้ จดบิลด์หรือเงื่อนไขอุปกรณ์ที่ต้องการไว้เพื่อจัดแต้มใหม่หลังรีเซ็ต
4. **เลือก Perk อย่างตั้งใจ:** ได้ Perk หนึ่งอย่างต่อ Prestige ควรตรวจเงื่อนไขปลดล็อกและผลของ Perk ก่อนเลือก
5. **ตรวจเงื่อนไขอุปกรณ์อีกครั้ง:** แต้มสเตตัสเดิมจะไม่คงอยู่หลังรีเซ็ต อุปกรณ์ที่ต้องใช้ค่าสเตตัสบางอย่างอาจใช้งานไม่ได้จนกว่าจะจัดแต้มใหม่

Prestige เป็นความก้าวหน้าของผู้เล่น ส่วน Ascension แตกต่างกันตรงที่เปลี่ยนความยากของโลกที่ใช้ร่วมกัน โปรดอ่านหัวข้อ Ascension ก่อนเพิ่มระดับโลก

## Prestige

Prestige จะรีเซ็ต **Level, XP, Points และค่าสเตตัส** เพื่อแลกกับเลเวลสูงสุดที่เพิ่มขึ้น เพดานค่าสเตตัสที่สูงขึ้น (Stat Limit Break) โบนัส XP ถาวร และ **Perk** 1 อย่าง ไม่มีระดับ Prestige สูงสุด และต้องใช้ **Prestige Sigil**

- **โบนัส XP:** เพิ่ม 3% ต่อ Prestige สูงสุด 60%
- **Stat Limit Break:** ค่าสเตตัสสูงสุดแต่ละค่าใช้ตัวคูณ `1 + 0.25 × units` โดย P1–P3 ได้ units เต็ม หลังจากนั้น Prestige แต่ละครั้งให้ผล ×0.85 (ขั้นต่ำ ×0.25)
- **ค่า Prestige Sigil:** `min(16, 2 + floor(0.75 × Prestige ปัจจุบัน))`

| Prestige | ตัวคูณเพดาน | เพดานพื้นฐาน (ฐาน 80) | เพดาน Mag | เพดาน Con |
|---|---:|---:|---:|---:|
| P0 | ×1.00 | 80 | 256 | 64 |
| P1 | ×1.25 | 100 | 320 | 80 |
| P2 | ×1.50 | 120 | 384 | 96 |
| P3 | ×1.75 | 140 | 448 | 112 |
| P4 | ×1.96 | 157 | 502 | 126 |
| P5 | ×2.14 | 171 | 549 | 137 |
| P6 | ×2.30 | 184 | 588 | 147 |
| P7 | ×2.43 | 194 | 621 | 155 |
| P8 | ×2.54 | 203 | 650 | 162 |
| P9 | ×2.63 | 211 | 674 | 168 |
| P10 | ×2.71 | 217 | 694 | 174 |

| ขั้น Prestige | Sigil ที่ต้องใช้ |
|---|---:|
| P0 → P1 | 2 |
| P2 → P3 | 3 |
| P4 → P5 | 5 |
| P6 → P7 | 6 |
| P8 → P9 | 8 |
| P10 → P11 | 9 |
| P12 → P13 | 11 |
| P14 → P15 | 12 |
| P16 → P17 | 14 |
| P18 → P19 | 15 |
| P20 → P21 | 16 |
| P22 → P23 | 16 |
| P24 → P25 | 16 |

### Perk (พลังพิเศษ)

เลือก **Perk 1 อย่างต่อ Prestige** โดยพลังของ Perk จะคงตามระดับที่ได้รับตอนเลือก ส่วน Prestige ที่สูงขึ้นจะมีผลลดลงตาม diminishing returns

| Perk | เริ่มปลดล็อก | ผล |
|---|---|---|
| Scholar | P1 | ได้ EXP เพิ่ม 5% จากทุกแหล่ง |
| Plunderer | P1 | โอกาส 3% ที่จะสุ่มของดรอปจากมอนสเตอร์เพิ่มอีกหนึ่งครั้ง |
| Vigor | P1 | เพิ่ม Max HP 5 |
| Gemwright | P2 | เพิ่มโอกาสสำเร็จในการ Engrave ช่อง Gem 5% |
| Fleetfoot | P2 | เพิ่มความเร็วเคลื่อนที่ 3% |
| Second Wind | P3 | ฟื้นฟู HP 0.5 ต่อวินาที |
| Runebound | P3 | เพิ่มความแรงของเอฟเฟกต์ Rune 5% |
| Deep Well | P3 | เพิ่ม Max Mana 10 |

## Ascension

Ascension คือ **ระดับความยากของโลก** ผู้เล่นคนหนึ่งเพิ่มระดับแล้วผู้เล่นทั้งโลกจะใช้ค่าเดียวกัน ระดับเพิ่มขึ้นได้อย่างเดียวและไม่มีค่าสูงสุด ต้องใช้ **Ascension Relic** ตามสูตร `min(10, 1 + floor(0.5 × Ascension ปัจจุบัน))` โดยจะเพิ่ม HP และความเสียหายของมอนสเตอร์/บอส มอบโบนัส XP และปลดล็อกระดับ Mob Evolution

| Ascension | Prestige ที่ผู้กดต้องมี | Relic | HP มอนสเตอร์ | ดาเมจมอนสเตอร์ | HP บอส | ดาเมจบอส | ดาเมจผู้เล่น | โบนัส XP |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| A1 | P1 | 1 | ×1.50 | ×1.25 | ×1.80 | ×1.08 | ×1.06 | +5% |
| A2 | P2 | 1 | ×2.00 | ×1.50 | ×2.60 | ×1.16 | ×1.12 | +10% |
| A3 | P3 | 2 | ×2.50 | ×1.75 | ×3.40 | ×1.24 | ×1.18 | +15% |
| A4 | P3 | 2 | ×3.00 | ×2.00 | ×4.20 | ×1.32 | ×1.24 | +20% |
| A5 | P3 | 3 | ×3.50 | ×2.25 | ×5.00 | ×1.40 | ×1.30 | +25% |
| A6 | P3 | 3 | ×4.00 | ×2.50 | ×5.80 | ×1.48 | ×1.36 | +30% |
| A7 | P3 | 4 | ×4.50 | ×2.65 | ×6.60 | ×1.56 | ×1.42 | +35% |
| A8 | P3 | 4 | ×5.00 | ×2.80 | ×7.40 | ×1.64 | ×1.48 | +40% |
| A9 | P3 | 5 | ×5.00 | ×2.95 | ×8.20 | ×1.72 | ×1.54 | +45% |
| A10 | P3 | 5 | ×5.00 | ×3.10 | ×9.00 | ×1.80 | ×1.60 | +50% |
| A11 | P3 | 6 | ×5.00 | ×3.25 | ×9.00 | ×1.80 | ×1.60 | +55% |
| A12 | P3 | 6 | ×5.00 | ×3.40 | ×9.00 | ×1.80 | ×1.60 | +60% |

- HP ของมอนสเตอร์ใช้ **virtual HP pool** การโจมตีที่ถูกคูณความแรงหนึ่งครั้งจะสร้างความเสียหายได้ไม่เกิน **50% ของ Max HP ผู้เล่น** และความเสียหายจากศัตรูรวมถูกจำกัดที่ ×6

| Ascension | วิวัฒนาการที่ปลดล็อก |
|---|---|
| A1 | Tough |
| A2 | Elite |
| A3 | Sculk |
| A4 | Geode |
| A5 | Inferno |
| A6 | Nightmare |
| A7 | Awaken |

- **A2:** บอสเริ่มดรอป Uncarved Gem; ระบบ Gem ต้องมี P4/A2 ตาม feature gate หลัก (แม้ข้อความยืนยันในแอดออนจะระบุ P2)
- **A3:** ระบบ Rune ต้องมี P6/A3 ตาม feature gate หลัก (แม้ข้อความยืนยันในแอดออนจะระบุ P3)
- **A4:** มอนสเตอร์ Geode สามารถดรอป Uncarved Gem ได้

---

**ดูเพิ่มเติม:** [ค่าสเตตัส](Stats) · [สายทักษะ](Mastery) · [วิวัฒนาการมอนสเตอร์](Mob-Evolution) · [Prestige Sigil / Ascension Relic](Items)

</div>