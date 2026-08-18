# Hero copy (`HeroCopy.tsx`)

Site-matched left column. Desktop support order: product name → AI badge → body → CTAs. One-column (`<1100px`): AI line, then a neu cluster (billboard, body, product name), then CTAs. The top billboard stage is hidden under 1100px.

## Headline

Desktop billboard is two nowrap lines (`Intelligent Mortgage Platform,` white / `Empowering Better Closings` `#0075ff`) with `--hc-h1: min(2.85rem, max(0.7rem, calc(100cqi / 26)))`. Under 1100px that title moves into the cluster as the same two nowrap lines and sizes to the cluster inner width (`min(3rem, calc(100cqi / 19))`) so the longer line spans the pad. Product name (`Less chasing paperwork` / `More time closing loans`) sits directly under it in Inter 500, both lines white: `clamp(0.9375rem, 0.82rem + 0.7vw, 1.05rem)` on phones, `clamp(1.125rem, 0.85rem + 1.1vw, 1.4rem)` from 640px.

## Badge

`inline-flex` + `width: fit-content` + `align-self: flex-start` so it stays pill-sized. In support mode on desktop it sits under the product headline (`--hc-space * 2.4`). Under 1100px it sits above `.hero-copy__cluster`, with no pill border or fill, at `clamp(0.8125rem, 0.76rem + 0.3vw, 0.9375rem)`.

## Platform line

Product name + tagline. Desktop: above the body, `#d6e9ff`. One-column: under the main title, Inter, white.

- **Name:** `Less chasing paperwork.` — Montserrat 700, title case, `#f4f7fb`, `font-size: min(1.2rem, max(1.02rem, calc(100cqi / 22)))`
- **Tag:** `More time closing loans.` — Inter 500, sentence case, `#8ea3c4`

## CTAs

Primary is the only filled button. Label is `white-space: nowrap` + `width: max-content` so **Get early access — first month free** stays one line. Extra space above the actions (`--hc-space * 1.75`); the ghost link sits close under it (`gap: 0.3rem`) with a trailing `↓`. Under 1100px the button and ghost link are centered.

`align` (`left` \| `center`) and `mode` (`full` \| `lead` \| `support`). Billboard uses **lead** for the centered headline (desktop) and **support** for the panel. See [hero-layout-variants.md](hero-layout-variants.md).

