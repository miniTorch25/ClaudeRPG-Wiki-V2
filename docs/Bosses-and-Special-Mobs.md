[🏠 Home](Home) · [📖 Systems / ระบบ](Systems) · [👾 Mobs / มอนสเตอร์](Mob-Evolution) · [🎒 Items / ไอเทม](Items) · [❓ FAQ](FAQ)

---

# Bosses & Special Mobs · บอสและมอนสเตอร์พิเศษ

<table align="right" width="280">
<tr><th colspan="2" align="center">Bosses</th></tr>
<tr><td><b>Bosses</b></td><td>4</td></tr>
<tr><td><b>Special mobs</b></td><td>9</td></tr>
</table>

**EN:** Special abilities of regular mobs and phase mechanics of the four bosses.

**TH:** ความสามารถของมอนสเตอร์ทั่วไปและกลไกเฟสของบอส 4 ตัว


## Special mob abilities · ความสามารถพิเศษของมอนสเตอร์
**EN:** Several regular hostile mobs have special abilities (always on, no evolution needed).

**TH:** มอนสเตอร์ทั่วไปหลายชนิดมีความสามารถพิเศษ (ทำงานตลอด ไม่ต้องวิวัฒนาการ)

| Mob | Ability |
|---|---|
| Creeper | **Pounce** toward you (8s CD); **Death blast** radius 2 after 1s |
| Enderman | **Blink** behind you (10s CD) |
| Witch | **Hex** slows and weakens (12s CD); **Heal** 35% below 40% HP |
| Blaze | **Volley** of 3 fireballs (8s CD) |
| Pillager | **Volley** arrow burst (7s CD) |
| Vindicator / Piglin Brute | **Rage** below 40% HP: Speed II, +50% damage |
| Evoker | **Fangs** line of 6 (10s CD) |
| Guardian | **Pull** you in (10s CD), 2 damage |
| Breeze | **Gust** knockback (8s CD), 2 damage |

## Boss phases · เฟสของบอส
**EN:** Four bosses gain phases as their HP drops. Phases unlock at higher Ascension; minions are capped at 10. Boss HP scaling and damage are in [Progression](Progression).

**TH:** บอส 4 ตัวมีเฟสเพิ่มเมื่อ HP ลดลง เฟสปลดล็อกตาม Ascension ลูกสมุนสูงสุด 10 ตัว ค่าคูณ HP/ดาเมจบอสอยู่ที่ [Progression](Progression)

| Boss | Phases |
|---|---|
| **Wither** | below 75% HP (A2+): aura r10: wither 1<br>below 50% HP (A4+): summons 2 Wither Skeleton<br>below 25% HP (A6+): aura r18: wither 2 |
| **Warden** | below 70% HP (A2+): tremor r7, 6 dmg + darkness<br>below 40% HP (A4+): enrage Speed II, +30% damage |
| **Ender Dragon** | below 75% HP (A2+): aura r40: blindness 1<br>below 50% HP (A4+): summons 3 Enderman<br>below 25% HP (A6+): aura r64: slowness 1; summons 3 Enderman |
| **Elder Guardian** | below 100% HP (A2+): aura r20: slowness 1, weakness 1<br>below 50% HP (A4+): summons 2 Guardian |

## Mob classes · กลุ่มมอนสเตอร์
**EN:** Rune conditions such as "vs undead", "vs giant" or "vs boss" use these groups.

**TH:** เงื่อนไขของรูน เช่น "ต่ออันเดด" "ต่อยักษ์" "ต่อบอส" ใช้กลุ่มเหล่านี้

- **Undead / อันเดด:** Zombie, Husk, Drowned, Skeleton, Stray, Bogged, Wither Skeleton, Phantom, Zombified Piglin, Zoglin
- **Giant / ยักษ์:** Iron Golem, Ravager, Elder Guardian
- **Boss / บอส:** Elder Guardian, Warden, Ender Dragon, Wither




## How to read boss thresholds · วิธีอ่านเงื่อนไขเฟสบอส

**EN**
- The listed percentages are **HP thresholds**, while A2/A4/A6 are **minimum World Ascension requirements**. Both conditions must be met for the listed effect to be available.
- The thresholds describe effects that trigger as a boss loses health; they are not the mob's Evolution Tier. Ascension changes world difficulty/unlocks, while the boss's current HP determines when an available phase effect can trigger.
- **Aura** effects apply within the listed radius; **summon** entries state how many minions are created by that trigger. The general minion cap is 10, but this page does not establish whether the cap is shared across every boss encounter or scoped to an individual boss—verify that detail in-game before documenting it more precisely.
- Special abilities listed in the first table are separate from boss phases and do not imply that the mob has evolved.
- **Verified against the v1.39.0 scripts:** boss phases are scanned every 20 ticks (about once per second) while players are in the same dimension and within 64 blocks of the boss. The scan uses the boss's current HP fraction and the world's Ascension.
- Aura effects repeat on their configured intervals (3s for both Wither auras, 20s for the Dragon's first aura, 6s for its late aura, and 8s for the Elder Guardian aura). The Warden tremor repeats every 10s. Effect durations are configured separately and may be shorter than the interval.
- Phase messages are tagged as sent once per boss. Summon phases are also marked complete only after at least one minion successfully spawns; if the local cap is full or spawning fails, the manager can try again on a later scan. Enrage remains active while its phase conditions are met.
- **Minion cap scope is now confirmed from code:** the cap is 10 tagged boss minions within 64 blocks of each boss, not one global cap for all bosses. Minions are also removed by cleanup when farther than 80 blocks from every player in their dimension. These are source-code findings; live multiplayer behavior has not been tested.

**TH**
- เปอร์เซ็นต์ที่ระบุคือ **เกณฑ์ HP** ส่วน A2/A4/A6 คือ **ระดับ World Ascension ขั้นต่ำ** โดยต้องผ่านเงื่อนไขทั้งสองอย่างจึงจะใช้เอฟเฟกต์นั้นได้
- เกณฑ์เหล่านี้อธิบายเอฟเฟกต์ที่ทำงานเมื่อ HP ของบอสลดลง ไม่ใช่ Evolution Tier ของมอนสเตอร์ Ascension ใช้กำหนดความยาก/การปลดล็อกของโลก ส่วน HP ปัจจุบันของบอสเป็นตัวกำหนดว่าเอฟเฟกต์เฟสที่ปลดล็อกแล้วจะทำงานเมื่อใด
- เอฟเฟกต์ **Aura** มีผลในรัศมีที่ระบุ ส่วนรายการ **summon** ระบุจำนวนลูกสมุนที่เกิดจากการทำงานนั้น มีเพดานลูกสมุนทั่วไป 10 ตัว แต่หน้านี้ยังไม่ได้ยืนยันว่าเพดานดังกล่าวใช้ร่วมกันระหว่างบอสทุกตัวหรือแยกตามบอส จึงควรตรวจสอบในเกมก่อนระบุให้ละเอียดกว่านี้
- ความสามารถพิเศษในตารางแรกแยกจากเฟสบอส และไม่ได้หมายความว่ามอนสเตอร์ตัวนั้นวิวัฒนาการแล้ว
- **ยืนยันจาก Script v1.39.0 แล้ว:** ระบบตรวจเฟสบอสทุก 20 ticks (ประมาณวินาทีละครั้ง) เมื่อมีผู้เล่นอยู่ในมิติเดียวกันและอยู่ห่างจากบอสไม่เกิน 64 บล็อก โดยใช้สัดส่วน HP ปัจจุบันของบอสและค่า Ascension ของโลก
- เอฟเฟกต์ Aura ทำงานซ้ำตามช่วงเวลาที่ตั้งค่าไว้ (Aura ของ Wither ทั้งสองแบบทุก 3 วินาที, Aura แรกของ Dragon ทุก 20 วินาที, Aura ระยะท้ายทุก 6 วินาที และ Aura ของ Elder Guardian ทุก 8 วินาที) ส่วน Tremor ของ Warden ทำงานทุก 10 วินาที ระยะเวลาของเอฟเฟกต์ถูกตั้งแยกจากช่วงเวลาที่เรียกใช้
- ข้อความแจ้งเฟสจะถูกทำเครื่องหมายว่าแสดงแล้วหนึ่งครั้งต่อบอส ส่วนเฟสเรียกลูกสมุนจะถูกทำเครื่องหมายว่าสำเร็จเมื่อมีลูกสมุนเกิดอย่างน้อยหนึ่งตัวเท่านั้น หากเต็มเพดานหรือเรียกเกิดไม่สำเร็จ ระบบจะลองใหม่ในการตรวจรอบถัดไป Enrage จะทำงานต่อขณะที่เงื่อนไขของเฟสนั้นยังผ่านอยู่
- **ยืนยันขอบเขตเพดานลูกสมุนจากโค้ดแล้ว:** จำกัดลูกสมุนที่ติดแท็กไว้ 10 ตัวภายในรัศมี 64 บล็อกของบอสแต่ละตัว ไม่ใช่เพดานรวมของบอสทั้งหมด ลูกสมุนยังถูกลบโดยระบบ Cleanup เมื่ออยู่ไกลจากผู้เล่นทุกคนเกิน 80 บล็อกในมิตินั้น ข้อมูลนี้ตรวจจากซอร์สโค้ดแล้ว แต่ยังไม่ได้ทดสอบพฤติกรรมจริงใน Multiplayer

---
**See also / ดูเพิ่มเติม:** [Mob Evolution](Mob-Evolution) · [Progression](Progression)
