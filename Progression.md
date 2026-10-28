[🏠 Home](Home) · [📖 Systems / ระบบ](Systems) · [👾 Mobs / มอนสเตอร์](Mob-Evolution) · [🎒 Items / ไอเทม](Items) · [❓ FAQ](FAQ)

---

# Progression · ความก้าวหน้า

<table align="right" width="280">
<tr><th colspan="2" align="center">Progression</th></tr>
<tr><td><b>Base max level / เลเวลเริ่มต้น</b></td><td>40</td></tr>
<tr><td><b>Per Prestige / ต่อ Prestige</b></td><td>+20</td></tr>
<tr><td><b>Points per level / แต้มต่อเลเวล</b></td><td>4</td></tr>
<tr><td><b>Prestige item</b></td><td>Prestige Sigil</td></tr>
<tr><td><b>Ascension item</b></td><td>Ascension Relic</td></tr>
</table>

**EN:** The long-term progression loop: Level → Prestige → Ascension.

**TH:** วงจรความก้าวหน้าระยะยาว: เลเวล → Prestige → Ascension


## Level & XP · เลเวลและ XP

**EN:** Level cap is **40 + 20 per Prestige**. Every level-up gives **4 Stat Points** (plus Leveling Mastery bonus). At max level XP stops accumulating, but Leveling Mastery keeps learning.

**TH:** เลเวลสูงสุด = **40 + 20 ต่อ Prestige** ทุกเลเวลได้ **4 แต้มสเตตัส** (บวกโบนัสจาก Leveling Mastery) เมื่อถึงเลเวลสูงสุด XP จะไม่สะสม แต่ Leveling Mastery ยังได้ XP

XP needed for the next level = `50 + 25 × level` (above level 100, each extra level counts only ×0.6).
XP ที่ต้องใช้เลเวลถัดไป = `50 + 25 × เลเวล` (เกินเลเวล 100 นับแค่ ×0.6)

| Level / เลเวล | XP to next / XP ถึงเลเวลถัดไป |
|---|---|
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

| Prestige | Max Level / เลเวลสูงสุด | Total points / แต้มรวม |
|---|---|---|
| P0 | 40 | 160 |
| P1 | 60 | 240 |
| P2 | 80 | 320 |
| P3 | 100 | 400 |
| P4 | 120 | 480 |
| P5 | 140 | 560 |
| P6 | 160 | 640 |
| P7 | 180 | 720 |

## Feature unlocks · เงื่อนไขปลดล็อกระบบ

**EN:** A system opens when **all** requirements are met. Level gates are remembered, so Prestige never re-locks them. Ascension is a world value.

**TH:** ระบบจะเปิดเมื่อผ่าน **ทุกเงื่อนไข** เลเวลที่เคยถึงจะจำไว้ตลอด Prestige จึงไม่ล็อกซ้ำ ส่วน Ascension เป็นค่าของโลก

| System / ระบบ | Prestige | Ascension |
|---|---|---|
| Augment | P1 | — |
| Chorus | P2 | — |
| Gem | P4 | A2 |
| Rune | P6 | A3 |
| Mastery | P1 | — |

## Prestige · เพรสทีจ

**EN:** Prestige resets **Level, XP, Points and stats** in exchange for a higher level cap, higher stat caps (Stat Limit Break), a permanent XP bonus and one **Perk**. There is no maximum. It costs **Prestige Sigils** (see below).

**TH:** Prestige รีเซ็ต **เลเวล XP แต้ม และสเตตัส** แลกกับเลเวลสูงสุดที่เพิ่ม เพดานสเตตัสที่สูงขึ้น (Stat Limit Break) โบนัส XP ถาวร และ **Perk** 1 อย่าง ไม่มีขีดจำกัดสูงสุด ต้องจ่าย **Prestige Sigil**

- **XP bonus / โบนัส XP:** +3% per Prestige (max 60%) · ต่อ Prestige (สูงสุด 60%)
- **Stat Limit Break:** every stat cap × (1 + 0.25 × units). P1–P3 give full units; after that each Prestige is ×0.85 (min ×0.25).
- **Prestige Sigil cost:** `min(16, 2 + floor(0.75 × current Prestige))`

| Prestige | Cap multiplier / ตัวคูณเพดาน | Default cap 80 | Mag cap | Con cap |
|---|---|---|---|---|
| P0 | x1.00 | 80 | 256 | 64 |
| P1 | x1.25 | 100 | 320 | 80 |
| P2 | x1.50 | 120 | 384 | 96 |
| P3 | x1.75 | 140 | 448 | 112 |
| P4 | x1.96 | 157 | 502 | 126 |
| P5 | x2.14 | 171 | 549 | 137 |
| P6 | x2.30 | 184 | 588 | 147 |
| P7 | x2.43 | 194 | 621 | 155 |
| P8 | x2.54 | 203 | 650 | 162 |
| P9 | x2.63 | 211 | 674 | 168 |
| P10 | x2.71 | 217 | 694 | 174 |

| Step / ขั้น | Sigils needed / Sigil ที่ใช้ |
|---|---|
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

### Perks · พลังพิเศษ

**EN:** Pick **1 Perk per Prestige**. A perk keeps the strength it had when picked (later Prestiges are weaker, see diminishing returns).

**TH:** เลือก **1 Perk ต่อ Prestige** พลังจะคงที่ตามตอนที่เลือก (Prestige ที่สูงมากๆ จะอ่อนลงตามค่า diminishing returns)

| Perk | From / เริ่มที่ | Effect / ผล |
|---|---|---|
| Scholar | P1 | +5% EXP from all sources |
| Plunderer | P1 | +3% chance to roll a mob's loot one extra time |
| Vigor | P1 | +5 Max HP |
| Gemwright | P2 | +5% Gem socket Engrave success |
| Fleetfoot | P2 | +3% Movement Speed |
| Second Wind | P3 | +0.5 HP regen per second |
| Runebound | P3 | +5% Rune effect strength |
| Deep Well | P3 | +10 Max Mana |

## Ascension · แอสเซนชัน

**EN:** Ascension is the **world difficulty**. One player presses it and the whole world shares it. It only goes up and has no maximum. It costs **Ascension Relics**: `min(10, 1 + floor(0.5 × current Ascension))`. It scales mob/boss HP and damage, gives bonus XP, and unlocks Mob Evolution tiers.

**TH:** Ascension คือ **ความยากของโลก** ผู้เล่นคนเดียวกดแล้วทุกคนในโลกได้ผลเหมือนกัน เพิ่มขึ้นอย่างเดียว ไม่มีขีดสูงสุด ต้องจ่าย **Ascension Relic**: `min(10, 1 + floor(0.5 × Ascension ปัจจุบัน))` เพิ่ม HP/ดาเมจมอนสเตอร์และบอส ให้ XP โบนัส และปลดล็อก Mob Evolution


| Ascension | Presser needs / ผู้กดต้องมี | Relics | Mob HP | Mob DMG | Boss HP | Boss DMG | Your DMG / ดาเมจเรา | XP bonus |
|---|---|---|---|---|---|---|---|---|
| A1 | P1 | 1 | x1.50 | x1.25 | x1.80 | x1.08 | x1.06 | +5% |
| A2 | P2 | 1 | x2.00 | x1.50 | x2.60 | x1.16 | x1.12 | +10% |
| A3 | P3 | 2 | x2.50 | x1.75 | x3.40 | x1.24 | x1.18 | +15% |
| A4 | P3 | 2 | x3.00 | x2.00 | x4.20 | x1.32 | x1.24 | +20% |
| A5 | P3 | 3 | x3.50 | x2.25 | x5.00 | x1.40 | x1.30 | +25% |
| A6 | P3 | 3 | x4.00 | x2.50 | x5.80 | x1.48 | x1.36 | +30% |
| A7 | P3 | 4 | x4.50 | x2.65 | x6.60 | x1.56 | x1.42 | +35% |
| A8 | P3 | 4 | x5.00 | x2.80 | x7.40 | x1.64 | x1.48 | +40% |
| A9 | P3 | 5 | x5.00 | x2.95 | x8.20 | x1.72 | x1.54 | +45% |
| A10 | P3 | 5 | x5.00 | x3.10 | x9.00 | x1.80 | x1.60 | +50% |
| A11 | P3 | 6 | x5.00 | x3.25 | x9.00 | x1.80 | x1.60 | +55% |
| A12 | P3 | 6 | x5.00 | x3.40 | x9.00 | x1.80 | x1.60 | +60% |

- Mob HP uses a **virtual HP pool**; a single scaled hit can never take more than **50%** of the player's Max HP; combined hostile damage cap ×6.
- มอนสเตอร์ใช้ **พูล HP เสมือน** ฮิตเดียวจะไม่ทำเกิน **50%** ของ Max HP ผู้เล่น และดาเมจรวมสูงสุด ×6

| Ascension | Opens / ปลดล็อก |
|---|---|
| A1 | Evolution: Tough |
| A2 | Evolution: Elite |
| A3 | Evolution: Sculk |
| A4 | Evolution: Geode |
| A5 | Evolution: Inferno |
| A6 | Evolution: Nightmare |
| A7 | Evolution: Awaken |
- **A2:** Bosses start dropping Uncarved Gems; Gem system can be unlocked (with Prestige 2).
- **A3:** Rune system can be unlocked (with Prestige 3).
- **A4:** Geode mobs can drop Uncarved Gems.


---
**See also / ดูเพิ่มเติม:** [Stats](Stats) · [Mastery](Mastery) · [Mob Evolution](Mob-Evolution) · [Prestige Sigil / Ascension Relic](Items)
