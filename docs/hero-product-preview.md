# Hero interactive demo

The hero (`#top`) embeds the full **interactive Before/After demo** at **`#demo`** — no separate demo section below the fold.

## Layout (Option 2 — two-column)

Implemented in [Hero.tsx](../src/components/Hero.tsx):

1. Session pulse strip + bottom tagline ([HeroSessionPulse.tsx](../src/components/HeroSessionPulse.tsx))
2. Two-column grid from **`min-[1100px]`** (1100px): hero copy + CTAs left ([HeroCopy.tsx](../src/components/HeroCopy.tsx), compact sizing from 1100px), interactive demo right ([InteractiveDemoCard](../src/components/BeforeAfterDemo.tsx), **After** default, equal-height panels, capped height + internal scroll from 1100px+). Below 1100px: single column, **Option B** stacked layout — left copy, seam divider + **Live preview** eyebrow, full-width demo; panel height matches the taller view (natural page scroll)
3. Silver/light-gray session pulse strip at top; brand-blue tagline strip = bottom edge of the viewport

The **1003 / Conditions / Closing** track panel lives in [Central Loan Memory](../src/components/CentralLoanMemorySection.tsx) (`#memory`) — see [central-loan-memory-section.md](./central-loan-memory-section.md).

## Components

| Export | Role |
| --- | --- |
| `InteractiveDemoCard` | Tab chrome + equal-height Before/After panels (grid overlap); accepts `idPrefix` for unique tab IDs |
| `DemoAppWindow` | Browser chrome (traffic lights, **Mooric ERP — Pipeline**, **Live** pill) |
| `AfterPanel` / `BeforePanel` | Panel content reused by the card |

## Navigation

- **How it works** is no longer a nav link (the demo is inline in the hero).
- **See why it's different** CTA in hero copy links to `#memory`.

## Spacing

Hero content padding: `py-8 sm:py-10 lg:py-6 xl:py-8` inside `HeroSessionPulse`. On `min-[1100px]+`, the hero block is pinned to `100svh - 4.25rem` with the blue tagline strip as the bottom edge. Grid gaps: `gap-12` stacked, `max-[1099px]:gap-[4.8rem]` between copy and demo; `min-[1100px]:gap-x-8 xl:gap-x-24` when two-column.

## Related

- [before-after-demo.md](./before-after-demo.md) — panel content and interaction details
- [hero-section-background.md](./hero-section-background.md) — hero surface and pulse strip
