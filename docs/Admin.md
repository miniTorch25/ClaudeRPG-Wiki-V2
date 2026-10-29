---
permalink: /Admin
---

[🏠 Home](Home) · [📖 Systems / ระบบ](Systems) · [👾 Mobs / มอนสเตอร์](Mob-Evolution) · [🎒 Items / ไอเทม](Items) · [❓ FAQ](FAQ)

---

# Admin Tools · เครื่องมือ Admin

<table align="right" width="280">
<tr><th colspan="2" align="center">Admin</th></tr>
<tr><td><b>Tag</b></td><td>Admin</td></tr>
<tr><td><b>Config groups</b></td><td>19</td></tr>
</table>

**EN:** Admin panel, commands and the live Config Editor.

**TH:** แผง Admin คำสั่ง และ Config Editor แบบสด


## Becoming an Admin · การเป็น Admin
An operator runs `/tag <player> add Admin`. Admins get the **Admin Panel**, **Config Editor**, audit log and commands. · ผู้ดูแลรัน `/tag <ชื่อ> add Admin` จะได้ Admin Panel, Config Editor, บันทึกการแก้ไข และคำสั่งต่างๆ

## Commands · คำสั่ง
All commands start with `/scriptevent status:admin`. Quote names with spaces. · ขึ้นต้นด้วย `/scriptevent status:admin` ใส่เครื่องหมายคำพูดถ้าชื่อมีช่องว่าง

| Command | Effect / ผล |
|---|---|
| *(none)* | Open the Admin Panel · เปิดแผง Admin |
| `help` · `info [player]` · `log` | Help, player summary, audit log |
| `set level\|xp\|points\|prestige\|perks <n> [player]` | Set values · ตั้งค่า |
| `add level\|xp\|points\|perks <n> [player]` | Add values · เพิ่มค่า |
| `set stat <stat> <n> [player]` | Set a stat · ตั้งสเตตัส |
| `set insomnia <days> [player]` | Days without sleep (Nightmare) |
| `set mastery <line> <level> [player]` · `add mastery <line> <xp> [player]` | Mastery level / XP |
| `set ascension <n>` | World Ascension · ตั้ง Ascension ของโลก |
| `grant\|revoke <feature> [player]` | Feature unlock override |
| `heal` · `clearperks` · `resetstats [player]` | Utilities |
| `spawn <tier> <mob> [count]` · `purge [radius]` | Spawn evolved mobs / remove them |
| `ach info\|grant\|revoke\|reset\|set\|on\|off` | Achievements |
| `disc probe\|info\|clear\|give` | Discovery Log |
| `quest info\|skip\|set\|complete\|reset [player]` | Guide Quest |
| `toast test [player]` | Test the Toast UI · ทดสอบ Toast |
| `config list [group]` · `get <id>` · `set <id> <value>` · `reset <id>` · `resetall` | Config Editor |

## Config Editor groups · กลุ่มการตั้งค่า
Live-editable numbers (overrides are saved in the world; `*` marks changed values). · แก้ตัวเลขได้ทันที เก็บในโลก

- `level` Levels, XP & Gates
- `prestige` Prestige & Perks
- `ascension` Ascension & Mob Scaling
- `mastery` Mastery
- `evolution` Mob Evolution
- `nightmare` Nightmare Event
- `special` Special Mobs & Bosses
- `chorus` Chorus Costs
- `fusion` Chorus Fusion
- `synergy` Chorus Synergy (Gem / Rune)
- `gemrune` Gem Caps & Rune Levels
- `loot` Looting / Fortune Drops
- `achievement` Achievements
- `toast` Toast Notifications
- `guide` Guide Quest
- `explore` Exploration (Waypoint / Discovery)
- `qol` Quality of Life
- `health` Health Display
- `dmgnum` Damage Indicator


---
**See also / ดูเพิ่มเติม:** [Quality of Life](Quality-of-Life)


## Player features vs Admin tools · แยกฟีเจอร์ผู้เล่นกับเครื่องมือ Admin

**EN**
- **Player-facing features:** use the normal Status menu, Achievement menu, Guide Quest, Waypoint/Discovery menus, and personal settings through their documented entry points. These do not require giving a player the Admin tag merely to read the wiki or use ordinary supported menus.
- **Admin-only controls:** the status:admin Script Event commands, Admin Panel, Config Editor, audit log, world Ascension changes, progression/stat edits, feature overrides, and administrative spawn/purge tools are privileged operations.
- **Permission boundary:** an operator should grant the Admin tag intentionally with /tag <player> add Admin. Do not give the tag to a player just to help them open a normal player menu. Script events and commands may also depend on the world's command/cheat permissions.
- **Safe practice:** check the target player and argument values before running a command; use help/info to understand available operations and log to review recorded changes. World-wide Ascension and configuration changes can affect other players.
- This is a documentation distinction, not a security audit. Permission enforcement and every command's edge cases should still be verified against the v1.39.0 implementation and in-game behavior.

**TH**
- **ฟีเจอร์ผู้เล่นทั่วไป:** ใช้ Status menu, Achievement menu, Guide Quest, เมนู Waypoint/Discovery และการตั้งค่าส่วนตัวผ่านช่องทางที่ระบุไว้ ไม่จำเป็นต้องให้แท็ก Admin เพียงเพื่ออ่าน Wiki หรือใช้เมนูผู้เล่นทั่วไปที่รองรับ
- **เครื่องมือเฉพาะ Admin:** คำสั่ง Script Event status:admin, Admin Panel, Config Editor, audit log, การเปลี่ยน World Ascension, การแก้ค่าสถานะ/ความก้าวหน้า, การบังคับปลดล็อกฟีเจอร์ และเครื่องมือ spawn/purge เป็นการทำงานที่ต้องมีสิทธิ์
- **ขอบเขตสิทธิ์:** Operator ควรให้แท็ก Admin โดยตั้งใจผ่าน /tag <ชื่อผู้เล่น> add Admin อย่าให้แท็กนี้เพียงเพื่อเปิดเมนูผู้เล่นทั่วไป และ Script Event/คำสั่งอาจยังขึ้นกับสิทธิ์คำสั่งหรือการตั้งค่า cheats ของโลก
- **แนวทางปลอดภัย:** ตรวจผู้เล่นเป้าหมายและค่าพารามิเตอร์ก่อนใช้คำสั่ง ใช้ help/info เพื่อดูการทำงาน และ log เพื่อตรวจรายการเปลี่ยนแปลง การแก้ World Ascension หรือ Config อาจส่งผลต่อผู้เล่นคนอื่น
- เนื้อหานี้เป็นการแยกหมวดเอกสาร ไม่ใช่ผลตรวจสอบความปลอดภัยทั้งหมด ต้องตรวจการบังคับใช้สิทธิ์และกรณีพิเศษของแต่ละคำสั่งกับโค้ด v1.39.0 และทดสอบในเกมอีกครั้ง
