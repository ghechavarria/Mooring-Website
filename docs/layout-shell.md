# Layout shell (wide rail)

## Purpose

The React mount (**`#root`**) is a **`flex` column** with **`min-h-dvh`**, **`w-full`**, and **`min-w-0`** so the page shell and **sticky header** share the **viewport width** with full-bleed sections (see [`src/index.css`](../src/index.css) `@layer base`).

Most page sections use **`.layout-shell`** (in [`src/index.css`](../src/index.css), `@layer components`) so **footer** and main **section** innards share one **capped** horizontal rail that still **widens** on large monitors.

The **sticky header** does **not** use that cap: it uses **`.layout-header`** instead — **full width** with only **responsive horizontal padding**, so on ultrawide / full-screen the **logo and nav** reach toward the viewport edges the same way **full-bleed hero** bands (e.g. session pulse) read as edge-to-edge, instead of sitting in a narrower centered column.

## `.layout-shell` (body sections)

| Range | Approx. behavior |
| --- | --- |
| Default | `max-w-6xl`, `px-4` |
| `sm` | `px-6` |
| `lg` | `px-8` |
| `xl` | `max-w-7xl`, `px-10` |
| `2xl` | `max-w-[90rem]`, `px-12` |
| `min-width: 1800px` | `max-w-[100rem]` |

Used by [`Features.tsx`](../src/components/Features.tsx), [`Workflow.tsx`](../src/components/Workflow.tsx), [`HeroMotionBand.tsx`](../src/components/HeroMotionBand.tsx), [`StatsSection.tsx`](../src/components/StatsSection.tsx), [`ContactCTA.tsx`](../src/components/ContactCTA.tsx), [`Footer.tsx`](../src/components/Footer.tsx).

## `.layout-header` (nav only)

| Range | Approx. behavior |
| --- | --- |
| All | **`max-w-none`** — no inner max-width |
| Default | `px-4` |
| `sm` | `px-6` |
| `lg` | `px-8` |
| `xl` | `px-12` |
| `2xl` | `px-16` |
| `min-width: 1800px` | `px-20` |

Applied in [`Header.tsx`](../src/components/Header.tsx) on the inner flex row (with `justify-between` and the existing brand / nav spacing).

## `.layout-header-px` (horizontal inset only)

Same **`px-*`** scale as **`.layout-header`**, without **`mx-auto` / `max-w-*`**. Use on **full-bleed** rows (e.g. session pulse bar, AI row) so **left/right edges line up** with the sticky nav and the hero copy rail — avoiding a strip that looks **wider** than the white header bar on large screens.

Used in [`HeroSessionPulse.tsx`](../src/components/HeroSessionPulse.tsx) (`variant="integrated"`). The integrated hero **body** uses the full **`.layout-header`** wrapper so headline and CTAs share the same horizontal rail as the nav.

## Hero strip

Integrated **[`HeroSessionPulse`](../src/components/HeroSessionPulse.tsx)** keeps **dark backgrounds** edge-to-edge; **content** in the session row, AI row, preview footer, and main hero block uses **`.layout-header-px`** or **`.layout-header`** so nothing sits **outside** the nav’s horizontal alignment.
