# Team section (`TeamSection.tsx`)

Renders **`#team`**: seven people in a fixed order with a **photo slot**, **name**, and **role title**.

## Order, titles & image files

| Order | Name | Title | `public/images/team/` filename |
| --- | --- | --- | --- |
| 1 | Yeqiao Guo | Chief Executive Officer | `yeqiao-guo.png` |
| 2 | James Jones | Chief Operating Officer | `james-jones.png` |
| 3 | Zhen Wu | Chief Financial Officer | `zhen-wu.png` |
| 4 | Erik Ruiz | Chief Information Security Officer | `erik-ruiz.png` |
| 5 | Grace Hechavarria | Chief Information Officer | `grace-hechavarria.png` |
| 6 | Joanne Rossi | Chief Quality and Compliance Officer | `joanne-rossi.png` |
| 7 | Andrew | SVP Product Development | `andrew.png` |

Use **PNG** (path in code: `/images/team/{slug}.png`). Rough portrait **4:5** crop reads well in the frame (`aspect-[4/5]`, `object-cover`).

## Layout

- **Surface:** **`bg-organ-50`** with **`py-24 sm:py-32`** — faint tint alternates with the white **LO Personal Assistant** section above
- **Header:** Centered block with eyebrow `The people`, headline “Our team”, and intro line about mortgage technology veterans
- Container: **`flex flex-wrap justify-center`** with horizontal/vertical gaps — not a fixed grid.
- Cards: **`w-[calc(50%-0.75rem)]`** on mobile (two per row), **`sm:w-56`**, **`md:w-60`** on larger viewports.
- Odd member counts (e.g. seven) center the last row instead of leaving an orphaned card left-aligned in a 3-column grid.

## Fallback

If a file is missing or fails to load, the card shows **initials** on a navy–slate gradient (`from-ink-800 to-slate-800`, `text-accent-light`) so the roster never shows a broken image icon.

## Accessibility

- Each member is an **`article`** with an **`h3`** name.
- The title line under each name shows the member’s **role** — `text-balance`, subtle **top rule** (`border-organ-200/90`), and **`text-[0.8125rem]` / `sm:text-sm`** with **`font-medium`** / **`leading-snug`** (`sm:leading-relaxed`) on **`text-organ-700`** for readable multi-line titles.
- The photo uses **`alt=""`** because the name is repeated in the heading immediately below.

## Navigation

[`Header.tsx`](../src/components/Header.tsx) includes **Team** → `#team` (desktop nav and mobile drawer).

## Page order

[`App.tsx`](../src/App.tsx): **`HeroMotionBand`** → **`TeamSection`** → **`ContactCTA`**.
