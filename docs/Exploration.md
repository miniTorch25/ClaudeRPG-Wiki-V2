---
permalink: /Exploration
---

[🏠 Home](Home) · [📖 Systems / ระบบ](Systems) · [👾 Mobs / มอนสเตอร์](Mob-Evolution) · [🎒 Items / ไอเทม](Items) · [❓ FAQ](FAQ)

---

# Exploration · การสำรวจ

<table align="right" width="280">
<tr><th colspan="2" align="center">Exploration</th></tr>
<tr><td><b>Waypoint cost</b></td><td>Ender Pearl</td></tr>
<tr><td><b>Saved points</b></td><td>20</td></tr>
<tr><td><b>Biome XP</b></td><td>120</td></tr>
<tr><td><b>Structure XP</b></td><td>350</td></tr>
<tr><td><b>Dimension XP</b></td><td>800</td></tr>
</table>

**EN:** Waypoint Stones for travel and the Discovery Log for exploration rewards.

**TH:** หินวาร์ปสำหรับเดินทางและสมุดบันทึกการค้นพบ


<div class="material-strip material-strip--compact">
  <div class="material-card"><img src="{{ '/assets/images/blocks/waypoint_top.png' | relative_url }}" alt="Waypoint Stone top texture" width="64" height="64" loading="lazy"><span>Waypoint Stone</span><small>Named destination</small></div>
  <div class="material-card"><img src="{{ '/assets/images/blocks/waypoint_blank_top.png' | relative_url }}" alt="Blank Waypoint Stone top texture" width="64" height="64" loading="lazy"><span>Waypoint Stone (Blank)</span><small>Unnamed destination</small></div>
  <div class="material-card"><img src="{{ '/assets/images/items/waypoint_orb.png' | relative_url }}" alt="Waypoint Orb" width="64" height="64" loading="lazy"><span>Waypoint Orb</span><small>Portable waypoint menu</small></div>
</div>

## Waypoint Stones · หินวาร์ป

**EN:** Waypoint Stones are placeable blocks that let you **teleport** between named points. Teleporting costs **Ender Pearls** (1 pearl per 400 blocks of horizontal distance, min 1, max 8; crossing dimensions = 8). Cooldown 10s. You arrive on **top of the block**.

**TH:** หินวาร์ปคือบล็อกที่วางได้ ใช้ **วาร์ป** ระหว่างจุดที่ตั้งชื่อ ค่าวาร์ปเป็น **Ender Pearl** (1 เม็ดต่อ 400 บล็อกแนวราบ ต่ำสุด 1 สูงสุด 8 ข้ามมิติ = 8) คูลดาวน์ 10 วินาที ลงจอด **บนยอดบล็อก**


| Block / Item | How it works / การทำงาน |
|---|---|
| **Waypoint Stone** | On placing you must **name** it. The name and coordinates are saved to your list. Clicking a stone someone else placed asks whether to save it. Menu: Teleport · Edit (rename) · Manager (Player = remove players bound to this stone, Waystone = sort/delete). Only the owner and Admins can break it. · ตั้งชื่อทันทีที่วาง ชื่อและพิกัดถูกบันทึก คลิกหินของคนอื่นจะถามว่าจะบันทึกไหม เจ้าของและ Admin เท่านั้นที่ทุบได้ |
| **Waypoint Stone (Blank)** | Teleport-only stone with no name; anyone can break it; unlimited count. Menu: Teleport · Manager. · ไม่มีชื่อ วาร์ปอย่างเดียว ใครก็ทุบได้ ไม่จำกัดจำนวน |
| **Waypoint Orb** | Portable item. Menu: Teleport · Manager · Edit (add a **special point** at your standing spot, rename, remove). Special points are free, max 5, listed first, 30s cooldown. · ไอเทมพกพา เพิ่ม **จุดพิเศษ** ได้ ฟรี สูงสุด 5 จุด แสดงก่อนเสมอ คูลดาวน์ 30 วินาที |

- Saved waypoints per player: **20** · Stones you can place: **10** · World limit: **150** · Minimum spacing: **6** blocks · Name max **24** characters
- Renaming a stone updates the name in everyone's list. A destroyed stone keeps its entry, but teleport is blocked until you delete it. · เปลี่ยนชื่อหินแล้วชื่อในลิสต์ทุกคนเปลี่ยนตาม หินที่พังยังเหลือรายการแต่วาร์ปไม่ได้จนกว่าจะลบ

## Discovery Log · สมุดบันทึกการค้นพบ

**EN:** Exploring new places gives a **one-time Travel Mastery XP** reward: **120** per new biome, **350** per structure, **800** per dimension. Open it from the Status menu or Script Tool. Structures are detected by their signature blocks near you. A Toast pop-up appears on discovery.

**TH:** การสำรวจที่ใหม่ให้ **XP Travel Mastery ครั้งเดียว**: **120** ต่อไบโอมใหม่ **350** ต่อสิ่งก่อสร้าง **800** ต่อมิติ เปิดจากเมนู Status หรือ Script Tool ตรวจจับสิ่งก่อสร้างจากบล็อกเฉพาะตัวใกล้ตัว และมี Toast แจ้งเมื่อค้นพบ

- Biomes: Overworld 51, Nether 5, End 1 · Structures: 9 · Dimensions: 3

| Structure | Dimension | Detected by |
|---|---|---|
| Village | overworld | bell |
| Stronghold | overworld | end_portal_frame |
| Ocean Monument | overworld | sea_lantern, prismarine_bricks |
| Ancient City | overworld | reinforced_deepslate |
| Trial Chambers | overworld | trial_spawner, vault |
| Ruined Portal | overworld | crying_obsidian |
| Nether Fortress | nether | nether_brick_fence |
| Bastion Remnant | nether | gilded_blackstone |
| End City | the_end | purpur_pillar |


## Quick-start workflow · วิธีใช้งานแบบย่อ

### Set up a waypoint · ตั้งหินวาร์ป
1. Place a **Waypoint Stone** and enter a name when prompted. Keep in mind that named stones have per-player and world limits.
2. To use another player's named stone, interact with it and choose to save it to your own list if prompted.
3. Open the stone's menu and choose **Teleport**. Check the displayed destination and remember that travel costs Ender Pearls based on horizontal distance; cross-dimension travel costs 8.
4. If a destination is no longer usable because its stone was destroyed, remove the stale entry through the manager.
5. For a portable destination, use a **Waypoint Orb** and add a special point while standing at the desired location. Special points are free, but limited to five per player across the player's Waypoint Orb list.

### Find Discovery rewards · รับรางวัลการค้นพบ
1. Open **Discovery Log** from the Status menu or Script Tool.
2. Explore a biome, structure, or dimension that has not yet been recorded for the player.
3. Watch for the discovery Toast. Each eligible discovery grants Travel Mastery XP only once; revisiting the same recorded location does not repeat the reward.
4. If a structure is not detected, move close to its signature blocks listed in the table above. Detection is based on nearby blocks, so it may not identify every structure layout.

**Troubleshooting / แก้ปัญหาเบื้องต้น**
- **Teleport is unavailable:** confirm that the destination stone still exists, that you have enough Ender Pearls, and that the 10-second stone cooldown has elapsed.
- **Can't place or save another point:** check the 10 named stones per player, 150 named stones per world, 20 saved points per player, and six-block minimum spacing limits.
- **Discovery XP did not appear:** the location may already be recorded, or the structure's signature block may not be within detection range.

---
**See also / ดูเพิ่มเติม:** [Items](Items) · [Mastery (Travel)](Mastery) · [Quality of Life](Quality-of-Life)
