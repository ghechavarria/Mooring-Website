# Mooric ERP + enterprise dashboard theme

This document describes the visual system: **Mooric ERP brand** (navy, white, **brand blue** `#0075FF`, **metallic silver** accent on dark surfaces) with an **enterprise** marketing presentation (predominantly light surfaces, restrained shadow, serif headlines for editorial tone).

## Core brand colors

| Hex | Role |
| --- | --- |
| `#0075FF` | Brand blue — CTAs, light-section eyebrows, step badges (`erp` token) |
| `#020618` | Deep navy — hero pulse strip, motion band, footer (`#020617` family) |
| `#FFFFFF` | Page field and hero copy block |
| `#000000` | Primary text on light UI (`ink-950` family) |

## Layout

- **Primary navigation:** Sticky **top header** (not a sidebar). See [corporate-layout-and-images.md](./corporate-layout-and-images.md) for structure, breakpoints, and imagery sources.

## Color tokens (Tailwind)

See [silver-accent-palette.md](./silver-accent-palette.md) for the **`accent`** / **`accent-light`** tokens (silver-toned; dark surfaces only), the **`erp`** token (**`#0075FF`**, wordmark + CTAs + light accents), and the **`.btn-primary-silver`** CTA class.

| Token | Hex / role |
| --- | --- |
| `mist` | `#0F172A` — dark callouts (footer-adjacent) |
| `navy` / `ink-950` | `#0A0E14` — footer, primary buttons |
| `erp` | `#0075FF` — brand blue; CTAs, eyebrows, step badges on light UI |
| `accent` / `tide` | `#BFD3E6` — luminous brand silver on **dark** bands (pulse strip, motion band) |
| `accent-light` | `#F4F9FC` — bright ice highlights on dark surfaces |
| `canvas` | `#F8FAFC` — legacy cool field (optional) |
| `ivory` | `#F2F2F2` — alternating section wash |
| `organ` (50–200) | Cool light neutrals — page field (`organ-50` ≈ white), borders |
| `organ` (600–950) | Warm body text on light UI |

## Typography

- **UI body:** Inter.
- **Display lockup:** Montserrat in the header wordmark.
- **Editorial headings:** Source Serif 4 (`font-serif`) on major section titles and hero headline.
- **Labels / meta:** JetBrains Mono or small caps sans where noted in components.

## Marble surfaces (CSS utilities)

Defined in `src/index.css` under `@layer utilities`:

- **`marble-slate`** — **`#020617`** navy base (same family as hero pulse strip / motion band) with vertical blue depth, **slate-900** veils instead of pure black, **ERP / sky** radial hints, **silver-tinted** highlights, and a grain overlay (`::before`). Retained on **HeroMotionBand** and the pulse monitor; most product sections now use light surfaces instead.
- **`marble-organ-light`** — Cool light marble wash on `organ-100`; use for full-width sections that should feel stone-like without going dark (e.g. **Central Loan Memory**).

Keep **`accent`** (silver-toned) primarily on **dark marble** or **navy** surfaces. On white or `organ-50`, use **`text-erp`** eyebrows and **`organ-800`** body copy.

## Section header pattern (Copperlane rhythm)

Every major section leads with the same three-part intro:

1. **Eyebrow** — `font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-erp`
2. **Headline** — `mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl`
3. **Intro** — `mt-4 text-lg leading-relaxed text-organ-800`

Eyebrow labels by section: **Core differentiator** (Central Loan Memory), **The daily workflow** (Features), **Pipeline**, **LO Personal Assistant**, **The people** (Team), **Ready when you are** (Contact).

## Surface alternation

Sections alternate between plain white and a faint **`organ-50`** tint for vertical rhythm (Copperlane-style), with special surfaces kept as-is:

| Section | Surface |
| --- | --- |
| Hero (demo embedded) | `bg-white` |
| Central Loan Memory | `marble-organ-light` |
| Features | `bg-white` |
| Pipeline | `bg-organ-50` |
| LO Personal Assistant | `bg-white` |
| Team | `bg-organ-50` |
| Contact CTA | `bg-canvas` |

All product sections use **`py-28 sm:py-40`** and **`border-t border-organ-200`** seams between bands. Hero inner padding uses **`py-16 sm:py-20 lg:py-24 xl:py-28`** via `HeroSessionPulse`.

## Unified feature cards

**Features** (`PlatformFeatureCard`) and **LO Personal Assistant** capability cards share one style:

`rounded-xl border border-organ-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-md sm:p-8`

White cards read clearly on both white sections and the faint `organ-50` tint in Pipeline.

## Asset reference

Brand palette aligns with warm **organ** slate, **`accent`** / **`accent-light`** (silver-toned), and marble utilities used across the marketing surface.
