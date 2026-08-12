# Team section (`TeamSection.tsx`)

Renders **`#team`**: seven people in a wrapping grid with rounded photo frames.

## Layout

- Desktop content rail capped at **`max-w-5xl`** so the section doesn’t stretch edge-to-edge on wide screens
- Single `flex-wrap` row — no horizontal overflow/scroll containers
- Mobile: two columns (`calc(50% - 0.75rem)`)
- `sm+`: fixed card widths (`13rem` / `14rem`) that wrap and center
- Portraits use a **4:5** aspect ratio capped at 220px wide

## Order & images

| Order | Name | Title | File |
| --- | --- | --- | --- |
| 1 | Yeqiao Guo | Chief Executive Officer | `yeqiao-guo.png` |
| 2 | James Jones | Chief Operating Officer | `james-jones.png` |
| 3 | Zhen Wu | Chief Financial Officer | `zhen-wu.png` |
| 4 | Erik Ruiz | Chief Information Security Officer | `erik-ruiz.png` |
| 5 | Grace Hechavarria | Chief Information Officer | `grace-hechavarria.png` |
| 6 | Joanne Rossi | Chief Quality and Compliance Officer | `joanne-rossi.png` |
| 7 | Andrew Li | SVP Product Development | `andrew-li.png` |

Paths: `/images/team/{slug}.png`. Missing images fall back to initials.
