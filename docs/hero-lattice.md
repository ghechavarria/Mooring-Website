# Hero lattice (`HeroLattice.tsx`)

Reusable **diagonal lattice** SVG used **inside** `HeroMotionBand.tsx` (gold grid, `animate-grid-breathe`).

## Behavior

- Renders a **full-bleed** SVG (`absolute inset-0`, `h-full w-full`) inside the band’s **`position: relative`** container.
- **Pattern:** 48×48 user-space units, two stroked paths forming an **X** in each cell; stroke uses `currentColor` at **`text-gold/38`** on the SVG.
- **Breathing opacity:** `animate-grid-breathe` from `tailwind.config.js`.
- **IDs:** `useId()` scopes the `<pattern>` / `fill="url(#…)"` pair so multiple instances never collide.

## Usage

Rendered by **`HeroMotionBand`**; reuse inside any **`relative`** parent with height and a **dark** background so the gold strokes read clearly.
