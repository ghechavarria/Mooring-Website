# Hero section background (`Hero.tsx`)

The marketing hero uses a **light** field below the dark session pulse strip, aligned with a cleaner Copperlane-style marketing surface while keeping the signature ECG monitor.

## Surface

- **Section:** `bg-white` with `border-organ-200`. **`min-h-[calc(100svh-4.25rem)]`** fills the first viewport below the sticky header (`4.25rem`); **`flex flex-col`** so the tagline strip sits on the bottom edge on load. **`pt-0`** so the session strip meets the site header with no extra padding band; **`scroll-mt-24`** for in-page anchors below the sticky header.
- **Radial wash (decorative):** Faint **`#0075FF`** ellipses at the top — subtle brand blue, not a heavy dark wash.
- **Copy block (inside `HeroSessionPulse` children):** White background with a soft blue radial at the top; dark ink text (`text-ink-950`, `text-organ-800`). Grows with **`flex-1`** and vertically centers copy so the brand-blue tagline rests at the viewport bottom.

Related: [hero-session-pulse.md](./hero-session-pulse.md) for the **`integrated`** pulse slab (dark monitor strip + light copy block).
