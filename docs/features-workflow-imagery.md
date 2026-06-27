# Features & Workflow section photos

Marketing stills in **`Features.tsx`** (leadership / boardroom) and **`Workflow.tsx`** (operations collaboration).

## Section header

- **Eyebrow:** `The daily workflow`
- **Headline:** “The work you do every day — without the manual overhead.”
- Uses the shared section-header pattern (see [theme-mooric-dashboard.md](./theme-mooric-dashboard.md)).

## Presentation

- **Surface:** `bg-white` with **`py-24 sm:py-32`** — no trailing gradient divider band; separation comes from the next section’s **`border-t`**.
- **Corners:** Both frames use **`overflow-hidden rounded-xl`** on the wrapper (`<motion.figure>` / `<figure>`) with **`border`**, **`bg-white`**, and **`shadow-sm`** so the photo reads as a card aligned with **`PlatformFeatureCard`** (`rounded-xl`).
- **Feature cards:** Unified white card style — `border-organ-200`, `shadow-card`, hover lift (`hover:-translate-y-0.5 hover:shadow-card-md`). Numbered step eyebrow and corner glow retained.
- **Media:** **`object-cover`** with fixed aspect (`4/3` in Features, `3/2` in Workflow); **`loading="lazy"`** / **`decoding="async"`**.
- **Copy:** There is **no visible caption** under either image — context comes from section headings and body copy. **`alt`** text remains for accessibility.

See [corporate-layout-and-images.md](./corporate-layout-and-images.md) for Unsplash URLs and replacement workflow.
