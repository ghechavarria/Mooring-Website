# Hero section background (`Hero.tsx`)

The marketing hero uses a **dark** navy surface inspired by the team standalone mock: silver session pulse strip at top (unchanged), copy on the left and interactive demo on the right from **1100px** up. A smooth dark ticker strip is the bottom edge of the viewport on load.

## Surface

- **Section:** `bg-[linear-gradient(to_bottom_right,#050910,#081120,#0a1626)]` with `border-white/[0.06]`. The pinned hero block is **`min-h-[calc(100svh-4.25rem)]`** on all viewports and **`min-[1100px]:h-[calc(100svh-4.25rem)] min-[1100px]:overflow-hidden`** from 1100px up. **`flex flex-col`** with the middle region (`flex-1 justify-center`) vertically centering copy and demo. **`scroll-mt-24`** for in-page anchors. Below **1100px**, content stacks single-column with **Option B** layout: left-aligned copy, seam divider + **Live preview** eyebrow, full-width demo; equal-height Before/After panels with natural page scroll.
- **Radial wash:** Three blue ellipses — `rgba(37,99,235,0.22)` at 72%/20%, `rgba(30,64,175,0.18)` at 12%/85%, `rgba(96,165,250,0.14)` at 50%/-10%.
- **Copy block (inside `HeroSessionPulse` children):** Transparent over the dark section so the gradient shows through. Left column uses [HeroCopy.tsx](../src/components/HeroCopy.tsx) (light-on-dark copy, early-access CTA, micro-stats). Right column hosts the **`#demo`** interactive Before/After card from [BeforeAfterDemo.tsx](../src/components/BeforeAfterDemo.tsx) with a blue glow halo.
- **Trust badge:** Pill — “AI-powered · built for independent loan officers”.

## Spacing

- Inner padding: `py-8 sm:py-10 lg:py-6 xl:py-8` (via `HeroSessionPulse`) — tightened on `lg+` so the pinned hero gives the demo more height
- Grid gaps: `gap-12` / `max-[1099px]:gap-[4.8rem]` stacked; `min-[1100px]:gap-x-8 xl:gap-x-24` two-column (copy + demo, vertically centered)

The **1003 / Conditions / Closing** track panel is in [Central Loan Memory](../src/components/CentralLoanMemorySection.tsx) (`#memory`) — see [central-loan-memory-section.md](./central-loan-memory-section.md).

Related: [hero-session-pulse.md](./hero-session-pulse.md) for the pulse strip + ticker; [hero-product-preview.md](./hero-product-preview.md) for the embedded interactive demo.
