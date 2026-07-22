# Hero copy (`HeroCopy.tsx`)

Shared hero headline block used by [Hero.tsx](../src/components/Hero.tsx) on the dark hero surface.

## `HeroCopy`

- **Props:** `align` (`left` | `center`, default `left`), `headingId` (default `hero-heading`)
- **Content:** Badge (“AI-powered · built for independent loan officers”), eyebrow (“Intelligent Mortgage Platform — Empowering Better Closings”), serif `h1` (second line blue gradient text), Central Loan Memory body, CTAs, micro-stats (`~1 hr` / `1003` / `0` spreadsheets)
- **Colors:** Light-on-dark for contrast on the navy hero (badge glass, `#a9b8d0` body, white/gradient headline)
- **CTAs:** **Get early access — first month free** (gated by `SHOW_CONTACT_ACTIONS`) + **See why it's different** → `#memory`
- **Headline sizing:** container query + `whitespace-nowrap` per sentence so each full sentence stays on one line
- **Centered mode:** `mx-auto max-w-3xl text-center` with centered badge, eyebrow, and CTA row

## Related

- [hero-section-background.md](./hero-section-background.md) — dark two-column hero layout
- [hero-product-preview.md](./hero-product-preview.md) — interactive demo beside copy
- [central-loan-memory-section.md](./central-loan-memory-section.md) — 1003 / Conditions / Closing track panel lives in `#memory`
