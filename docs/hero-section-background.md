# Hero section background (`Hero.tsx`)

The marketing hero uses a **light** Copperlane-inspired **two-column** layout below the brand-blue session pulse strip: copy on the left, the interactive demo on the right, then stats spanning below.

## Surface

- **Section:** `bg-white` with `border-organ-200`. **`scroll-mt-24`** for in-page anchors below the sticky header. No fixed viewport height — the embedded demo sets natural height.
- **Radial wash (decorative):** Faint **`#0075FF`** ellipses at the top — subtle brand blue, not a heavy dark wash.
- **Copy block (inside `HeroSessionPulse` children):** Left column uses [HeroCopy.tsx](../src/components/HeroCopy.tsx). Right column hosts the **`#demo`** interactive Before/After card from [BeforeAfterDemo.tsx](../src/components/BeforeAfterDemo.tsx). Full-width **1003 / Conditions / Closing** stats ([HeroStats.tsx](../src/components/HeroCopy.tsx)) span both columns below.
- **Trust badge:** Pill above the eyebrow — “Built for independent loan officers” with brand-blue dot.

## Spacing

- Inner padding: `py-14 sm:py-16 lg:py-20 xl:py-24` (via `HeroSessionPulse`)
- Grid gaps: `gap-12 lg:gap-16 xl:gap-20`; stats use `lg:col-span-2`.

Related: [hero-session-pulse.md](./hero-session-pulse.md) for the pulse strip + tagline; [hero-product-preview.md](./hero-product-preview.md) for the embedded interactive demo.
