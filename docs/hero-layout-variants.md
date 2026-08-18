# Hero layout

[`Hero.tsx`](../src/components/Hero.tsx) uses the **Billboard** composition:

1. Oversized centered headline (*Intelligent Mortgage Platform, / Empowering Better Closings*)
2. Supporting copy left (vertically centered on desktop) and live workspace right (kicker + demo centered in the column, `max-w-[880px]`). The kicker stays left-aligned to the window.
3. Full-width stats row (~1 hr · 1003 · 0). Numbers are white, `clamp(1.85rem, 1.35rem + 1.5vw, 2.85rem)`; labels `clamp(0.9375rem, 0.85rem + 0.4vw, 1.125rem)`. Extra space above (`mt-16` / `mt-24`) and below (`pb-12` / `pb-16`). Under 1100px the number is centered over its label; desktop stays left-aligned.

On viewports below 1100px the top billboard is hidden. Copy stacks in one column on a shared `max-w-[880px]` rail: AI line, then an outline cluster with *Intelligent Mortgage Platform, / Empowering Better Closings* (white / `#0075ff`, two large nowrap lines), *Less chasing paperwork / More time closing loans* (Inter, white) under that title, then the body, then CTAs outside the cluster. See [hero-panel-surface.md](hero-panel-surface.md).
