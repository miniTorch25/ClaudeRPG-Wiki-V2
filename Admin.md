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
