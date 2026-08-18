# Hero copy (`HeroCopy.tsx`)

Site-matched left column. Order: AI badge → display headline → body → platform line → CTAs.

## Headline

Each of the two display lines is `white-space: nowrap`. Size uses `--hc-h1: min(2.35rem, max(1.05rem, calc(100cqi / 17.5)))` so both lines stay one row on mobile.

## Badge

`inline-flex` + `width: fit-content` + `align-self: flex-start` so it stays pill-sized.

## Platform line

Tablet and desktop: one nowrap silver line. Size is `font-size: min(0.8125rem, calc(100cqi / 44))`.

Phone (`<768px`): two lines at the comma (`Intelligent Mortgage Platform,` / `Empowering Better Closings`). The leading rule stays vertically centered on the pair (`align-items: center`). Type uses `min(0.8125rem, calc(100cqi / 26))`.

## CTAs

Always stacked. Full width under `1099px`; content-width on desktop.

Micro-stats sit under the live workspace in [`Hero.tsx`](../src/components/Hero.tsx).
