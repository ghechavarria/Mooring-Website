# Layout shell (wide rail)

## Purpose

The React mount (**`#root`**) is a **`flex` column** with **`min-h-dvh`**, **`w-full`**, and **`min-w-0`** so the page shell and **sticky header** share the **viewport width** with full-bleed sections (see [`src/index.css`](../src/index.css) `@layer base`).

Most page sections use **`.layout-shell`** (in [`src/index.css`](../src/index.css), `@layer components`) for shared horizontal padding. The sticky header uses **`.layout-header`** (same padding scale, full width).

## `.layout-shell` (body sections)

Full-width rail (`max-w-none`) with responsive horizontal padding:

`px-6` → `sm:px-10` → `lg:px-16` → `xl:px-24`

Used by Features, Memory, Pipeline, Assistant, Process, Motion band, Team, Contact CTA, Footer, and similar sections.

## `.layout-header` / `.layout-header-px`

| Class | Behavior |
| --- | --- |
| `.layout-header` | `max-w-none` + header padding scale (`px-4` → `sm:px-6` → … → `min-[1800px]:px-20`) |
| `.layout-header-px` | Same padding without `mx-auto` — for full-bleed rows that must align with the nav |

Applied in [`Header.tsx`](../src/components/Header.tsx) and [`HeroSessionPulse.tsx`](../src/components/HeroSessionPulse.tsx) so session strip and hero copy share the nav’s horizontal inset.
