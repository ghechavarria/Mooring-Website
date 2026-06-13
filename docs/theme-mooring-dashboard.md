# Mooring ERP + enterprise dashboard theme

This document describes the visual system: **Mooring ERP brand** (navy, ivory, muted gold) with an **enterprise** marketing presentation (light surfaces, restrained shadow, serif headlines for editorial tone).

## Layout

- **Primary navigation:** Sticky **top header** (not a sidebar). See [corporate-layout-and-images.md](./corporate-layout-and-images.md) for structure, breakpoints, and imagery sources.

## Color tokens (Tailwind)

| Token | Hex / role |
| --- | --- |
| `mist` | `#0F172A` — dark callouts, CTA panels |
| `navy` / `ink-950` | `#0A0E14` — footer, primary buttons |
| `gold` / `tide` | `#B59A6D` — brand accent, eyebrows |
| `glow` | `#E8DCC8` — soft gold tints in gradients |
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

- **`marble-slate`** — Deep organic slate with soft veining, subtle gold-tinted highlights, and a grain overlay (`::before`). Use for high-contrast bands (e.g. stats, CTA card, embedded metric tiles).
- **`marble-organ-light`** — Warm light marble wash on `organ-100`; use for full-width sections that should feel stone-like without going dark.

Keep **gold** accents primarily on **dark marble** or **navy** surfaces; on white or `organ-50`, prefer **`organ-800`** body/eyebrow copy plus a **short gold rule** (horizontal bar) for brand color without low-contrast gold text.

## Asset reference

Brand palette aligns with warm slate, gold, and marble utilities used across the marketing surface.
