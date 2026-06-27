# Hero interactive demo

The hero (`#top`) embeds the full **interactive Before/After demo** at **`#demo`** — no separate demo section below the fold.

## Layout (Option 2 — two-column)

Implemented in [Hero.tsx](../src/components/Hero.tsx):

1. Session pulse strip + bottom tagline ([HeroSessionPulse.tsx](../src/components/HeroSessionPulse.tsx))
2. Two-column grid on large screens: hero copy + CTAs left ([HeroCopy.tsx](../src/components/HeroCopy.tsx)), interactive demo right ([InteractiveDemoCard](../src/components/BeforeAfterDemo.tsx))
3. Three-up stats strip spanning both columns ([HeroStats.tsx](../src/components/HeroCopy.tsx))

## Components

| Export | Role |
| --- | --- |
| `InteractiveDemoCard` | Tab chrome + animated Before/After panels; accepts `idPrefix` for unique tab IDs |
| `DemoAppWindow` | Browser chrome (traffic lights, **Mooric ERP — Pipeline**, **Live** pill) |
| `AfterPanel` / `BeforePanel` | Panel content reused by the card |

## Navigation

- **How it works** (`#demo` in [Header.tsx](../src/components/Header.tsx)) scrolls to the demo block inside the hero.
- **See how it works** CTA in hero copy also links to `#demo`.

## Spacing

Hero content padding: `py-14 sm:py-16 lg:py-20 xl:py-24` inside `HeroSessionPulse`. Grid gaps: `gap-12 lg:gap-16 xl:gap-20`; stats span the grid with `lg:col-span-2`.

## Related

- [before-after-demo.md](./before-after-demo.md) — panel content and interaction details
- [hero-section-background.md](./hero-section-background.md) — hero surface and pulse strip
