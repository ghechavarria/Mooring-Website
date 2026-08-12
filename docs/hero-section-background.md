# Hero section

Site-matched dark hero: session pulse → copy + live workspace → blue ticker.

## Layout

- Section uses **`min-height`** (viewport minus header), not a locked height — the middle band grows with content so nothing clips or scrolls between pulse and ticker
- Grid from 1100px: original `0.75fr / 1.25fr` with `minmax(0, …)`
- Copy: [hero-copy.md](./hero-copy.md)
- Demo: `InteractiveDemoCard`
- Chrome: [hero-session-pulse.md](./hero-session-pulse.md)

## Stacked (&lt;1100px)

- No horizontal rule between copy and live workspace
- Tighter copy bottom padding + demo `pt-6` so the workspace sits closer under the CTAs
- **Live workspace** eyebrow left-aligned to the demo card’s left edge (same centered `max-w-4xl` frame as Before/After); stats `text-center` below 1100px
- `.hero-stack-band__wash`: same radial layout as the desktop hero overlay, stepped brighter + soft ERP fill — smoother shift at the one-column breakpoint
