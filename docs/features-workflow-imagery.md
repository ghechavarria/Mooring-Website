# Features & Workflow section photos

Marketing stills in **`Features.tsx`** (leadership / boardroom) and **`Workflow.tsx`** (operations collaboration).

## Presentation

- **Corners:** Both frames use **`overflow-hidden rounded-xl`** on the wrapper (`<motion.figure>` / `<figure>`) with **`border`**, **`bg-white`**, and **`shadow-sm`** so the photo reads as a card aligned with **`PlatformFeatureCard`** (`rounded-xl`).
- **Media:** **`object-cover`** with fixed aspect (`4/3` in Features, `3/2` in Workflow); **`loading="lazy"`** / **`decoding="async"`**.
- **Copy:** There is **no visible caption** under either image — context comes from section headings and body copy. **`alt`** text remains for accessibility.

See [corporate-layout-and-images.md](./corporate-layout-and-images.md) for Unsplash URLs and replacement workflow.
