# Mooring ERP + enterprise dashboard theme

This document describes the visual system: **Mooring ERP brand** (navy, ivory, **metallic silver** accent to match the logo tile) with an **enterprise** marketing presentation (light surfaces, restrained shadow, serif headlines for editorial tone).

## Layout

- **Primary navigation:** Sticky **top header** (not a sidebar). See [corporate-layout-and-images.md](./corporate-layout-and-images.md) for structure, breakpoints, and imagery sources.

## Color tokens (Tailwind)

See [silver-accent-palette.md](./silver-accent-palette.md) for the **`accent`** / **`accent-light`** tokens (silver-toned; avoid a Tailwind color literally named `silver`), the **`erp`** token (**`#1e70d6`**, wordmark + CTAs), and the **`.btn-primary-silver`** CTA class.

| Token | Hex / role |
| --- | --- |
| `mist` | `#0F172A` — dark callouts, CTA panels |
| `navy` / `ink-950` | `#0A0E14` — footer, primary buttons |
| `accent` / `tide` | `#BFD3E6` — luminous brand silver, eyebrows, primary CTA fill (`bg-accent`, `text-accent`, …) |
| `accent-light` | `#F4F9FC` — bright ice highlights, gradients, button hover (`bg-accent-light`, …) |
| `canvas` | `#F8FAFC` — legacy cool field (optional) |
| `ivory` | `#F2F2F2` — alternating section wash |
| `organ` (50–950) | Warm organic slate — page field (`organ-50`), borders, type on light UI |

## Typography

- **UI body:** Inter.
- **Display lockup:** Montserrat in the header wordmark.
- **Editorial headings:** Source Serif 4 (`font-serif`) on major section titles and hero headline.
- **Labels / meta:** JetBrains Mono or small caps sans where noted in components.

## Marble surfaces (CSS utilities)

Defined in `src/index.css` under `@layer utilities`:

- **`marble-slate`** — **`#020617`** navy base (same family as hero / motion band) with vertical blue depth, **slate-900** veils instead of pure black, **ERP / sky** radial hints, **silver-tinted** highlights, and a grain overlay (`::before`). Use for high-contrast bands (e.g. stats, CTA card, embedded metric tiles).
- **`marble-organ-light`** — Warm light marble wash on `organ-100`; use for full-width sections that should feel stone-like without going dark.

Keep **`accent`** (silver-toned) primarily on **dark marble** or **navy** surfaces; on white or `organ-50`, prefer **`organ-800`** body/eyebrow copy plus a **short accent rule** (horizontal bar) for brand color without low-contrast metallic body text.

## Asset reference

Brand palette aligns with warm **organ** slate, **`accent`** / **`accent-light`** (silver-toned), and marble utilities used across the marketing surface.
