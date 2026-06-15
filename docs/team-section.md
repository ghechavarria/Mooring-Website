# Team section (`TeamSection.tsx`)

Renders **`#team`**: six people in a fixed order with a **photo slot**, **name**, and a **dashed-underlined** line showing the literal placeholder copy **`Placeholder Title`** until real roles replace it.

## Order & image files

| Order | Name | `public/images/team/` filename |
| --- | --- | --- |
| 1 | Yegiao Guo | `yegiao-guo.png` |
| 2 | James Jones | `james.png` |
| 3 | Zhen Wu | `zhen-wu.png` |
| 4 | Erik Ruiz | `erik-ruiz.png` |
| 5 | Grace Hechavarria | `grace-hechavarria.png` |
| 6 | Joanne Rossi | `joanne.png` |

Use **PNG** (path in code: `/images/team/{slug}.png`). Rough portrait **4:5** crop reads well in the frame (`aspect-[4/5]`, `object-cover`).

## Fallback

If a file is missing or fails to load, the card shows **initials** on a navy–slate gradient (`from-ink-800 to-slate-800`, `text-accent-light`) so the grid never shows a broken image icon.

## Accessibility

- Each member is an **`article`** with an **`h3`** name.
- The title line is a visible **`Placeholder Title`** (`text-sm italic text-organ-500`) with a dashed bottom border; swap this string per member when roles are ready.
- The photo uses **`alt=""`** because the name is repeated in the heading immediately below.

## Navigation

[`Header.tsx`](../src/components/Header.tsx) includes **Team** → `#team` (desktop nav and mobile drawer).

## Page order

[`App.tsx`](../src/App.tsx): **`StatsSection`** → **`TeamSection`** → **`ContactCTA`**.
