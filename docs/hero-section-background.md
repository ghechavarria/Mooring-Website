# Hero section background (`Hero.tsx`)

The marketing hero uses a **light** Copperlane-inspired **two-column** layout below the brand-blue session pulse strip: copy on the left, the interactive demo on the right. The brand-blue tagline strip is the bottom edge of the viewport on load.

## Surface

- **Section:** `bg-white` with `border-organ-200`. The pinned hero block is **`min-h-[calc(100svh-4.25rem)]`** on all viewports and **`md:h-[calc(100svh-4.25rem)] md:overflow-hidden`** on `md+`, so from the `md` breakpoint the hero is exactly one viewport tall and the brand-blue tagline strip at the bottom of `HeroSessionPulse` is the visible end of the hero. **`flex flex-col`** with the middle region (`flex-1 justify-center`) vertically centering copy and demo. The flex-1 ancestors carry **`min-h-0`** so the content can shrink to the pinned height and the demo's internal `overflow-y-auto` absorbs any overflow (without this, flexbox `min-height:auto` lets the content overflow and the strip is clipped below the fold). **`scroll-mt-24`** for in-page anchors. Below `md` (mobile), content stacks single-column and may grow past the fold naturally.
- **Radial wash (decorative):** Faint **`#0075FF`** ellipses at the top — subtle brand blue, not a heavy dark wash.
- **Copy block (inside `HeroSessionPulse` children):** Left column uses [HeroCopy.tsx](../src/components/HeroCopy.tsx). Right column hosts the **`#demo`** interactive Before/After card from [BeforeAfterDemo.tsx](../src/components/BeforeAfterDemo.tsx).
- **Trust badge:** Pill above the eyebrow — “Built for independent loan officers” with brand-blue dot.

## Spacing

- Inner padding: `py-8 sm:py-10 lg:py-6 xl:py-8` (via `HeroSessionPulse`) — tightened on `lg+` so the pinned hero gives the demo more height
- Grid gaps: `gap-14 lg:gap-x-20 xl:gap-x-24` (copy + demo, vertically centered)

The **1003 / Conditions / Closing** track panel is in [Central Loan Memory](../src/components/CentralLoanMemorySection.tsx) (`#memory`) — see [central-loan-memory-section.md](./central-loan-memory-section.md).

Related: [hero-session-pulse.md](./hero-session-pulse.md) for the pulse strip + tagline; [hero-product-preview.md](./hero-product-preview.md) for the embedded interactive demo.
