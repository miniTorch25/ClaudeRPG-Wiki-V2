---
permalink: /Mob-Evolution
---

[🏠 Home](Home) · [📖 Systems / ระบบ](Systems) · [👾 Mobs / มอนสเตอร์](Mob-Evolution) · [🎒 Items / ไอเทม](Items) · [❓ FAQ](FAQ)

---

# Mob Evolution · วิวัฒนาการมอนสเตอร์

<table align="right" width="280">
<tr><th colspan="2" align="center">Mob Evolution</th></tr>
<tr><td><b>Starts at</b></td><td>Ascension 1</td></tr>
<tr><td><b>Max chance</b></td><td>40%</td></tr>
<tr><td><b>Tiers</b></td><td>8</td></tr>
<tr><td><b>Area cap</b></td><td>10</td></tr>
</table>

**EN:** Higher Ascension makes hostile mobs evolve into stronger, special variants.

**TH:** Ascension ที่สูงขึ้นทำให้มอนสเตอร์วิวัฒนาการเป็นแบบที่แข็งแกร่งและพิเศษขึ้น


## How evolution works · หลักการ

**EN:** From **Ascension 1**, hostile mobs may **evolve** when they spawn. Chance = `min(40%, 10% + 4% × Ascension)`. A tier is picked by weight from those unlocked at the current Ascension. At most **10** evolved mobs within 48 blocks. Evolved mobs get a coloured name prefix, bonus HP / damage / XP and an extra damage factor of `+4%` per Ascension (cap x1.5). Evolved mobs far (80+ blocks) from every player are removed.

**TH:** ตั้งแต่ **Ascension 1** มอนสเตอร์อาจ **วิวัฒนาการ** ตอนเกิด โอกาส = `min(40%, 10% + 4% × Ascension)` เลือกระดับตามน้ำหนักจากที่ปลดล็อกแล้ว สูงสุด **10** ตัวในรัศมี 48 บล็อก ได้ชื่อมีคำนำหน้าสี โบนัส HP / ดาเมจ / XP และตัวคูณดาเมจเพิ่ม `+4%` ต่อ Ascension (สูงสุด x1.5) มอนที่อยู่ไกลผู้เล่นทุกคน (80+ บล็อก) จะถูกลบ

Excluded: Vex, Silverfish, Endermite, Slime, Magma Cube. · ยกเว้น

| Tier | Unlock | HP | Damage | XP | Weight | Special / พิเศษ |
|---|---|---|---|---|---|---|
| **Tough** | A1 | x1.5 | x1.25 | x1.5 | 1 | Plain stat boost.<br><i>แค่เพิ่มค่าพลัง</i> |
| **Elite** | A2 | x2 | x1.5 | x2 | 1 | Enrages below 35% HP (Speed II), calls 2 allies below 50% HP.<br><i>โกรธเมื่อ HP ต่ำกว่า 35% (Speed II) เรียกพวก 2 ตัวเมื่อ HP ต่ำกว่า 50%</i> |
| **Sculk** | A3 | x1.25 | x1.1 | x1.5 | 1 | Senses players by noise (24 blocks, 40 when you are noisy); +30% damage when hunting. Drops 1-3 Echo Shard.<br><i>รับรู้ผู้เล่นจากเสียง (24 บล็อก, 40 เมื่อคุณส่งเสียงดัง) ดาเมจ +30% ขณะล่า ดรอป Echo Shard 1-3</i> |
| **Geode** | A4 | x1.5 | x1 | x1.5 | 1 | 8% chance to drop an Uncarved Gem.<br><i>8% โอกาสดรอป Uncarved Gem</i> |
| **Inferno** | A5 | x1.25 | x1.25 | x1.5 | 1 | 25% chance to ignite you for 4s; stronger in the Nether.<br><i>25% โอกาสจุดไฟเผาคุณ 4 วินาที แรงขึ้นในเนเธอร์</i> |
| **Awakened** | A7 | x2 | x1.4 | x3 | 0.7 | Gets a type-specific ability set (below) and a random mutation: Swift, Brutal (+30% dmg) or Hardened (+30% HP). Rare drops: Uncarved Gem 6%, Gem Dust 20%.<br><i>ได้ชุดความสามารถตามชนิด (ด้านล่าง) และมิวเทชันสุ่ม: Swift, Brutal (+30% ดาเมจ), Hardened (+30% HP) ดรอปหายาก: Uncarved Gem 6%, Gem Dust 20%</i> |
| **Core** | A1 | x20 | x1 | x6 | 0.5 | Immobile, cannot be force-evolved, hit cap = 10% of its max HP per 5-tick window. 25% drop of 1 Augment Core **or** Stellar Core.<br><i>ขยับไม่ได้ บังคับวิวัฒนาการไม่ได้ ฮิตเดียวทำได้ไม่เกิน 10% ของ HP สูงสุดต่อช่วง 5 ติ๊ก ดรอป Augment Core **หรือ** Stellar Core 1 อัน (25%)</i> |
| **Nightmare** | A6 | x2 | x1.5 | x3 | event | Event-only. 35% chance to blind you for 3s.<br><i>เฉพาะอีเวนต์ 35% โอกาสทำให้ตาบอด 3 วินาที</i> |

## Enchanted · เอนชานต์
**EN:** A rare **modifier** that can pair with other evolutions (not Core): spawn chance `min(5%, 0.5% + 0.25% × Ascension)` (so it can appear at Ascension 0). x1.5 XP, x1.2 damage, a **full-immunity shield every 10s**. Drops **1–5 Enchant Essence** and **1–5 Augment Crystal**.

**TH:** **ตัวปรับแต่ง** หายากที่ใช้ร่วมกับวิวัฒนาการอื่นได้ (ยกเว้น Core): โอกาสเกิด `min(5%, 0.5% + 0.25% × Ascension)` (เกิดที่ Ascension 0 ได้) XP x1.5 ดาเมจ x1.2 มี **โล่อมตะเต็มทุก 10 วินาที** ดรอป **Enchant Essence 1–5** และ **Augment Crystal 1–5**


## Nightmare event · อีเวนต์ Nightmare
**EN:** From **Ascension 6**, if you stay awake for several days, nightmares spawn at night. Checked every 10s between ticks 13000–23000; max 4 alive nearby.

**TH:** ตั้งแต่ **Ascension 6** ถ้าคุณไม่นอนหลายวัน ฝันร้ายจะเกิดตอนกลางคืน ตรวจทุก 10 วินาที ช่วงเวลา 13000–23000 อยู่ใกล้ได้สูงสุด 4 ตัว

| Days awake / วันที่ไม่นอน | Chance / โอกาส | Wave / จำนวน | Spawn |
|---|---|---|---|
| 5+ | 25% | 2–3 | close / ใกล้ตัว |
| 4+ | 10% | 1–2 | far / ไกล |
| 3+ | 4% | 1–1 | far / ไกล |
Types: Zombie, Skeleton, Spider.

## Sculk Potion & Stellar Core · ลัดวิวัฒนาการ

<div class="material-strip material-strip--compact">
  <div class="material-card"><img src="{{ '/assets/images/items/sculk_potion.png' | relative_url }}" alt="" width="64" height="64" loading="lazy"><span>Sculk Potion</span><small>Instant Sculk evolution</small></div>
  <div class="material-card"><img src="{{ '/assets/images/items/stellar_core.png' | relative_url }}" alt="" width="64" height="64" loading="lazy"><span>Stellar Core</span><small>Force mob evolution</small></div>
</div>
- **Sculk Potion:** hitting a monster turns it into a **Sculk Evolve** at once, ignoring Ascension. Mobs made this way drop no guaranteed Echo Shard (anti-farm). · ตีมอนสเตอร์ให้เป็น Sculk Evolve ทันที ไม่สนระดับ Ascension ไม่ดรอป Echo Shard ที่การันตี
- **Stellar Core:** right-click a mob to force-evolve it (options depend on Ascension; no Core option; not on bosses). · คลิกขวาที่มอนเพื่อบังคับวิวัฒนาการ (ตัวเลือกตาม Ascension ไม่มี Core ใช้กับบอสไม่ได้)
- Sculk Evolves and the vanilla **Warden** drop **1–3 Echo Shards** when killed by a player. · Sculk Evolve และ Warden ดรอป Echo Shard 1–3 เมื่อผู้เล่นฆ่า

## Awakened abilities · ความสามารถของ Awakened
| Type | Abilities |
|---|---|
| Zombie / Husk / Drowned | **Dash** (8s CD), **Berserk** below 40% HP (+50% damage), **Call** 2 allies below 60% HP |
| Skeleton family | **Volley** arrow burst (6s CD) |
| Spider / Cave Spider | **Web** trap (12s CD), **Leap** (5s CD) |
| Others | Creeper, Enderman, Witch, Blaze, Pillager, Vindicator, Piglin Brute, Evoker, Guardian and Breeze can also awaken and use their [special abilities](Bosses-and-Special-Mobs). |


---
**See also / ดูเพิ่มเติม:** [Progression (Ascension)](Progression) · [Bosses & special mobs](Bosses-and-Special-Mobs) · [Items](Items)


## Reading Ascension, evolution tiers, and bosses correctly · แยก Ascension ระดับวิวัฒนาการ และบอส

**EN**
These terms describe different layers of difficulty and should not be used interchangeably:

- **World Ascension** is the shared world-progression setting. It affects the evolution system's unlocks and scaling; changing it is not the same as upgrading one mob.
- **Evolution tier** is the individual variant assigned to an eligible hostile mob. The tier table above lists its unlock Ascension, stat multipliers, weight, and special behavior. Use the tier name when describing a mob's variant.
- **Bosses and special mobs** have their own behaviors and should be documented on [Bosses & Special Mobs](Bosses-and-Special-Mobs). Do not assume every evolved-mob rule or tier ability applies to a boss.

When documenting a combat encounter, record the world's Ascension, the mob's displayed evolution tier, and any boss/special-mob phase or ability as separate details. The values above describe configured mechanics; in-game testing is still needed to confirm presentation and edge cases.

**TH**
คำเหล่านี้เป็นความยากคนละระดับ ไม่ควรใช้แทนกัน:

- **World Ascension** คือระดับความก้าวหน้าของโลกที่ใช้ร่วมกัน มีผลต่อการปลดล็อกและการปรับสเกลของระบบวิวัฒนาการ การเปลี่ยนค่านี้ไม่ใช่การอัปเกรดมอนสเตอร์ตัวใดตัวหนึ่ง
- **Evolution tier** คือระดับของมอนสเตอร์วิวัฒนาการแต่ละตัว ตารางด้านบนระบุ Ascension ที่ปลดล็อก ตัวคูณค่าสถานะ น้ำหนักการสุ่ม และความสามารถพิเศษ ให้ใช้ชื่อ Tier เพื่ออธิบายรูปแบบของมอนสเตอร์
- **บอสและมอนสเตอร์พิเศษ** มีกลไกเฉพาะ ให้อ้างอิงหน้า [Bosses & Special Mobs](Bosses-and-Special-Mobs) และอย่าสมมติว่ากฎหรือความสามารถของมอนสเตอร์วิวัฒนาการทุกข้อใช้กับบอสด้วย

เมื่อบันทึกรายละเอียดการต่อสู้ ให้แยก World Ascension, Tier ที่แสดงบนมอนสเตอร์ และ Phase/ความสามารถของบอสหรือมอนสเตอร์พิเศษออกจากกัน ข้อมูลในตารางอ้างอิงค่าที่ตั้งไว้ แต่ยังต้องทดสอบในเกมเพื่อยืนยันการแสดงผลและกรณีพิเศษ
