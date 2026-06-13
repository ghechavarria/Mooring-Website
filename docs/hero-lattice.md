# Hero lattice (`HeroLattice.tsx`)

Reusable **diagonal lattice** SVG used **inside** `HeroMotionBand.tsx` (silver grid, `animate-grid-breathe`).

## Behavior

- Renders a **full-bleed** SVG (`absolute inset-0`, `h-full w-full`) inside the band’s **`position: relative`** container.
- **Pattern:** 48×48 user-space units, two stroked paths forming an **X** in each cell; stroke **`0.65`** at **`text-accent/70`** on the SVG (secondary diagonal **`opacity="0.78"`** in pattern space so both legs read on deep navy).
- **Breathing opacity:** `animate-grid-breathe` in `tailwind.config.js` — SVG **`opacity` ~0.32 ↔ ~0.58** so the grid stays visible through the breathe cycle, not near-invisible at the low end.
- **IDs:** `useId()` scopes the `<pattern>` / `fill="url(#…)"` pair so multiple instances never collide.

## Usage

Rendered by **`HeroMotionBand`**; reuse inside any **`relative`** parent with height and a **dark** background so the silver strokes read clearly.
