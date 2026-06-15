# Team section (`TeamSection.tsx`)

Renders **`#team`**: six people in a fixed order with a **photo slot**, **name**, and **role title** (chief-officer line-up).

## Order, titles & image files

| Order | Name | Title | `public/images/team/` filename |
| --- | --- | --- | --- |
| 1 | Yegiao Guo | Chief Executive Officer | `yegiao-guo.png` |
| 2 | James Jones | Chief Operating Officer | `james-jones.png` |
| 3 | Zhen Wu | Chief Financial Officer | `zhen-wu.png` |
| 4 | Erik Ruiz | Chief Information Security Officer | `erik-ruiz.png` |
| 5 | Grace Hechavarria | Chief Information Officer | `grace-hechavarria.png` |
| 6 | Joanne Rossi | Chief Quality and Compliance Officer | `joanne-rossi.png` |

Use **PNG** (path in code: `/images/team/{slug}.png`). Rough portrait **4:5** crop reads well in the frame (`aspect-[4/5]`, `object-cover`).

## Fallback

If a file is missing or fails to load, the card shows **initials** on a navy–slate gradient (`from-ink-800 to-slate-800`, `text-accent-light`) so the grid never shows a broken image icon.

## Accessibility

- Each member is an **`article`** with an **`h3`** name.
- The title line under each name shows the member’s **role** — `text-balance`, subtle **top rule** (`border-organ-200/90`), and **`text-[0.8125rem]` / `sm:text-sm`** with **`font-medium`** / **`leading-snug`** (`sm:leading-relaxed`) on **`text-organ-700`** for readable multi-line titles.
- The photo uses **`alt=""`** because the name is repeated in the heading immediately below.

## Navigation

[`Header.tsx`](../src/components/Header.tsx) includes **Team** → `#team` (desktop nav and mobile drawer).

## Page order

[`App.tsx`](../src/App.tsx): **`StatsSection`** → **`TeamSection`** → **`ContactCTA`**.
