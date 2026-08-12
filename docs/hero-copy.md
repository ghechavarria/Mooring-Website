# Hero copy (`HeroCopy.tsx`)

Site-matched left column. Order: AI badge → display headline → body → platform line → CTAs.

## Headline

Each of the two display lines is `white-space: nowrap`. Size uses `--hc-h1: min(2.35rem, max(1.05rem, calc(100cqi / 17.5)))` so both lines stay one row on mobile.

## Badge

`inline-flex` + `width: fit-content` + `align-self: flex-start` so it stays pill-sized.

## Platform line

One nowrap silver line. Size is pure CSS via the slot container:

`font-size: min(0.8125rem, calc(100cqi / 44))`

## CTAs

Always stacked. Full width under `1099px`; content-width on desktop.

Micro-stats sit under the live workspace in [`Hero.tsx`](../src/components/Hero.tsx).
