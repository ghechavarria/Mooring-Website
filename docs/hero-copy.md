# Hero copy and stats (`HeroCopy.tsx`)

Shared hero headline block and stats strip used by [Hero.tsx](../src/components/Hero.tsx).

## `HeroCopy`

- **Props:** `align` (`left` | `center`, default `left`), `headingId` (default `hero-heading`)
- **Content:** Trust badge, eyebrow (“Intelligent Automation. Real Results.”), serif `h1`, body paragraph, CTAs
- **CTAs:** Request a briefing (gated by `SHOW_CONTACT_ACTIONS`) + **See how it works** → `#demo`
- **Centered mode:** `mx-auto max-w-3xl text-center` with centered badge, eyebrow, and CTA row

## `HeroStats`

- Three-up grid: **1003**, **Conditions**, **Closing** with `text-erp` labels and `text-organ-800` descriptions
- Top border + padding: `border-t border-organ-200 pt-10 lg:pt-12`

## Related

- [hero-section-background.md](./hero-section-background.md) — two-column hero layout
- [hero-product-preview.md](./hero-product-preview.md) — interactive demo below copy
