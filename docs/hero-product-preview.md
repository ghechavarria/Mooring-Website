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

- **How it works** is no longer a nav link (the demo is inline in the hero).
- **See why it's different** CTA in hero copy links to `#memory`.

## Spacing

Hero content padding: `py-8 sm:py-10 lg:py-12` inside `HeroSessionPulse` (the hero fills `100svh - 4.25rem` and centers content). Grid gaps: `gap-14 lg:gap-20 xl:gap-24`; stats span the grid with `lg:col-span-2`.

## Related

- [before-after-demo.md](./before-after-demo.md) — panel content and interaction details
- [hero-section-background.md](./hero-section-background.md) — hero surface and pulse strip
