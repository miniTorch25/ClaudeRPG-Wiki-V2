[🏠 Home](Home) · [📖 Systems / ระบบ](Systems) · [👾 Mobs / มอนสเตอร์](Mob-Evolution) · [🎒 Items / ไอเทม](Items) · [❓ FAQ](FAQ)

---

# Quality of Life · ฟีเจอร์อำนวยความสะดวก

<table align="right" width="280">
<tr><th colspan="2" align="center">QoL</th></tr>
<tr><td><b>Settings</b></td><td>9</td></tr>
<tr><td><b>Stash radius</b></td><td>5</td></tr>
<tr><td><b>Toast frames</b></td><td>10</td></tr>
</table>

**EN:** Settings, Quick Stash, Re-Crops, Chorus Aura, HP display, damage numbers, Toast and mining rules.

**TH:** การตั้งค่า Quick Stash Re-Crops ออร่า การแสดง HP ตัวเลขดาเมจ Toast และกฎการขุด


## Settings Panel · แผงตั้งค่า
**EN:** Personal on/off switches in **Script Tool › Utilities › Settings**. They are never reset by Prestige. Server-wide Admin switches always win.

**TH:** สวิตช์เปิด/ปิดส่วนตัวใน **Script Tool › Utilities › Settings** ไม่ถูกรีเซ็ตโดย Prestige สวิตช์ของ Admin ทั้งเซิร์ฟเวอร์มีผลเหนือกว่า

| Setting | Default |
|---|---|
| Toast pop-ups | On |
| Achievement chat messages | On |
| Achievement action bar (Toast off only) | On |
| Discovery chat messages (Toast off only) | On |
| Discovery action bar (Toast off only) | On |
| Quick Stash includes hotbar | Off |
| Chorus Aura | On |
| Guide Quest notifications | On |
| Guide Quest in Thai | Off |

## Quick Stash · จัดของเข้าหีบ
**EN:** One tap (Script Tool, or `/scriptevent status:quick_stash`) moves inventory items into nearby containers (chest, trapped chest, barrel) within **5 blocks** that **already hold the same item type**. It never moves the held item, armor, offhand, or items with lore (runes, gems, augments). Up to 8 containers, 2s cooldown.

**TH:** แตะครั้งเดียว (Script Tool หรือ `/scriptevent status:quick_stash`) ย้ายของในกระเป๋าเข้าหีบ/ถัง ในรัศมี **5 บล็อก** ที่ **มีของชนิดเดียวกันอยู่แล้ว** ไม่ย้ายของที่ถืออยู่ เกราะ มือรอง และไอเทมที่มี Lore (รูน อัญมณี Augment) สูงสุด 8 ตู้ คูลดาวน์ 2 วินาที


## Re-Crops · ปลูกซ้ำอัตโนมัติ
**EN:** Auto-replanting is now the **Re-Crops** hoe rune (T3): harvested crops are replanted using the dropped seeds. Wheat, carrots, potatoes, beetroot and nether wart are supported.

**TH:** การปลูกซ้ำอัตโนมัติคือรูนจอบ **Re-Crops** (T3): เก็บเกี่ยวแล้วปลูกใหม่ด้วยเมล็ดที่ดรอป รองรับข้าวสาลี แครอท มันฝรั่ง บีทรูท และ Nether Wart


## Chorus Aura · ออร่า
Particle aura from 2+ matching Chorus sockets. See [Chorus](Chorus). · ดูหน้า [Chorus](Chorus)

## Health Display · แสดง HP
**EN:** Mobs and bosses show **HP numbers** above them when you aim at them (mobs within 32 blocks, bosses within 96). Evolved/Ascension mobs show their virtual HP. Numbers use a compact form from 10,000. World-wide toggle in the Admin Config Editor.

**TH:** มอนสเตอร์และบอสแสดง **ตัวเลข HP** เหนือหัวเมื่อเล็งไปที่มัน (มอนสเตอร์ในรัศมี 32 บล็อก บอสในรัศมี 96) มอนวิวัฒน์/Ascension แสดง HP เสมือน ตั้งแต่ 10,000 ขึ้นไปแสดงแบบย่อ เปิด/ปิดทั้งโลกที่ Admin Config Editor


## Damage Indicator · ตัวเลขดาเมจ
**EN:** Floating damage numbers appear for 2s (orange on a critical hit). Hits from one player on the same mob within 0.5s merge into one number. Max 8 per player, view radius 24.

**TH:** ตัวเลขดาเมจลอยขึ้น 2 วินาที (สีส้มเมื่อคริติคอล) ฮิตจากผู้เล่นคนเดียวกับม็อบตัวเดียวกันภายใน 0.5 วินาทีรวมเป็นตัวเลขเดียว สูงสุด 8 ตัวต่อผู้เล่น รัศมีมองเห็น 24


## Toast notifications · การแจ้งเตือนแบบ Toast
**EN:** Advancement-style pop-up cards for Achievements, Discoveries and Ascension, with 10 frame styles (colour by tier). Switch off in Settings to use chat/action bar. Players can send a toast to another player for **10 Common Gem** (self is free): `/scriptevent toast:send <target> | <frame> | <icon> | <header> | <body> [| <sound>]` or the **Toast Composer** in the Script Tool. Header must be English only (28 chars), body 22 chars. Based on the Toast system of the *AdvancementPack* by r4isen1920 (MIT).

**TH:** การ์ดแจ้งเตือนสไตล์ Advancement สำหรับ Achievement การค้นพบ และ Ascension มี 10 รูปแบบกรอบ (สีตามระดับ) ปิดได้ใน Settings เพื่อใช้แชต/แอคชันบาร์ ผู้เล่นส่ง Toast ให้คนอื่นได้ในราคา **10 Common Gem** (ส่งให้ตัวเองฟรี) ด้วยคำสั่ง `/scriptevent toast:send <เป้าหมาย> | <กรอบ> | <ไอคอน> | <หัวข้อ> | <ข้อความ> [| <เสียง>]` หรือ **Toast Composer** ใน Script Tool หัวข้อต้องเป็นอังกฤษ (28 ตัวอักษร) ข้อความ 22 ตัวอักษร สร้างจากระบบ Toast ของ *AdvancementPack* โดย r4isen1920 (MIT)


## Mining & drops · การขุดและดรอป
- **Vein** (Tool Augment): breaks connected same-type blocks one at a time; drops come from vanilla loot tables, so **Fortune** and **Silk Touch** work. 1 durability per block. Shears can Vein leaves. Hoe Vein covers all leaves. Rune *Earthsplitter* adds +24 (global cap 48). · ขุดบล็อกชนิดเดียวกันที่ติดกัน ใช้ loot table ของเกม จึงใช้ Fortune/Silk Touch ได้ เสียความทนทาน 1 ต่อบล็อก
- **Luck** (Pickaxe Augment): chance of a bonus ore drop.
- **Looting / Fortune** raise addon drops: +20% chance per level (max 95%) for evolved-mob drops (Gem, Core, Essence, Echo Shard) and Fortune's Favor. · Looting/Fortune เพิ่มโอกาสดรอปของแอดออน


---
**See also / ดูเพิ่มเติม:** [Exploration](Exploration) · [Items](Items)
