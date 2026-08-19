# Features workspace scribble

Hand-drawn callout on the Features band (`#features`) in [`Features.tsx`](../src/components/Features.tsx).

Sits off the top edge of the loan mock (`.features-scribble-anchor`): `top: 0` with `translateY(-100%)`. Extra `mt-24 sm:mt-28` on the mock rail keeps the label clear of the intro paragraph on phone/tablet; desktop uses `lg:mt-10`. Positioned at `left: 66%` on phone, `left: 76%` from `640px` up. Copy is two lines — **your future** / **workspace** — Caveat, accent blue `#0075ff`, rotated `-8deg`. Arrow uses [SVG Repo Arrow 06](https://www.svgrepo.com/show/408502/arrow-06.svg) (CC0), saved at [`public/images/features-scribble-arrow.svg`](../../public/images/features-scribble-arrow.svg). Rotated to point from the label down toward the mock; tinted via `currentColor`.

Decorative only (`aria-hidden`).
