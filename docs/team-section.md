# Team section (`TeamSection.tsx`)

Renders **`#team`** directly under the [Mooric ERP blueprint band](./hero-motion-band.md). Seven people on a **clay / neumorphic** band (same language as Production Glance).

## Layout

- Surface: `.section-neu` clay; portraits in `.neu-pad` frames; padding `py-36 sm:pb-48 sm:pt-40`
- Desktop content rail capped at **`max-w-5xl`**
- Single `flex-wrap` row — no horizontal overflow
- Mobile: two columns (`calc(50% - 0.75rem)`)
- `sm+`: fixed card widths (`13rem` / `14rem`)
- Portraits **4:5**, capped at 220px wide, `object-cover object-center`, 5px ERP bar along the bottom edge
- Name/title plate: same `.neu-pad` clay extrusion as Production Glance (no white fill); `0.9rem` corners; type unchanged (ink name, ERP title)

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
