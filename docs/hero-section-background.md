# Hero section background (`Hero.tsx`)

The marketing hero uses a **light** Copperlane-inspired **two-column** layout below the brand-blue session pulse strip: copy on the left, the interactive demo on the right, then stats spanning below.

## Surface

- **Section:** `bg-white` with `border-organ-200`. **`min-h-[calc(100svh-4.25rem)]`** so the hero fills the viewport below the sticky header (`4.25rem`) on load; **`flex flex-col`** with the `HeroSessionPulse` middle region (`flex-1 justify-center`) vertically centering the content. **`scroll-mt-24`** for in-page anchors. Content taller than the viewport (small laptops / mobile) grows naturally beyond the fold.
- **Radial wash (decorative):** Faint **`#0075FF`** ellipses at the top — subtle brand blue, not a heavy dark wash.
- **Copy block (inside `HeroSessionPulse` children):** Left column uses [HeroCopy.tsx](../src/components/HeroCopy.tsx). Right column hosts the **`#demo`** interactive Before/After card from [BeforeAfterDemo.tsx](../src/components/BeforeAfterDemo.tsx). Full-width **1003 / Conditions / Closing** stats ([HeroStats.tsx](../src/components/HeroCopy.tsx)) span both columns below.
- **Trust badge:** Pill above the eyebrow — “Built for independent loan officers” with brand-blue dot.

## Spacing

- Inner padding: `py-8 sm:py-10 lg:py-12` (via `HeroSessionPulse`) — kept modest because the `flex-1` middle region centers content within the full-viewport hero
- Grid gaps: `gap-14 lg:gap-20 xl:gap-24`; stats use `lg:col-span-2`.

Related: [hero-session-pulse.md](./hero-session-pulse.md) for the pulse strip + tagline; [hero-product-preview.md](./hero-product-preview.md) for the embedded interactive demo.
