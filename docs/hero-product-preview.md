# Hero interactive demo

The hero (`#top`) embeds the full **interactive Before/After demo** at **`#demo`** — no separate demo section below the fold.

## Layout

Implemented in [Hero.tsx](../src/components/Hero.tsx):

1. Session pulse strip + bottom tagline ([HeroSessionPulse.tsx](../src/components/HeroSessionPulse.tsx))
2. Two-column grid from **`min-[1100px]`**: hero copy + CTAs left ([HeroCopy.tsx](../src/components/HeroCopy.tsx)), interactive demo right ([InteractiveDemoCard](../src/components/BeforeAfterDemo.tsx), **After** default). Below 1100px: stacked copy then live workspace (scaled/centered). Soft ERP-blue stack wash behind the band on one-column only — see [hero-section-background.md](./hero-section-background.md).
3. Silver/light-gray session pulse strip at top; brand-blue tagline strip at the bottom of the hero

The **1003 / Conditions / Closing** track panel lives in [Central Loan Memory](../src/components/CentralLoanMemorySection.tsx) (`#memory`) — see [central-loan-memory-section.md](./central-loan-memory-section.md).

## Components

| Export | Role |
| --- | --- |
| `InteractiveDemoCard` | Tab chrome + equal-height Before/After panels; accepts `idPrefix`; wrapped in `ZoomableProductView` |

## Navigation

- **See why it's different** CTA in hero copy links to `#features` (02 · Broker-side process).

## Related

- [before-after-demo.md](./before-after-demo.md) — panel content and interaction details
- [hero-section-background.md](./hero-section-background.md) — hero surface and pulse strip
- [zoomable-product-view.md](./zoomable-product-view.md) — click-to-zoom wrapper
