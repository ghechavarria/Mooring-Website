# Hero section

Site-matched dark hero: session pulse → copy + live workspace → blue ticker.

## Layout

- Section uses **`min-height`** (viewport minus header), not a locked height — the middle band grows with content so nothing clips or scrolls between pulse and ticker
- Grid from 1100px: original `0.75fr / 1.25fr` with `minmax(0, …)`
- Copy: [hero-copy.md](./hero-copy.md)
- Demo: `InteractiveDemoCard`
- Chrome: [hero-session-pulse.md](./hero-session-pulse.md)

## Stacked (&lt;1100px)

One column, same 880px rail as the live workspace: billboard, supporting copy, then the demo. Copy and the window share a left edge (no leftover full-bleed text vs centered mock). Extra space between the product headline and the proof block; the AI badge is no longer pulled into the paragraph. Background matches desktop.
