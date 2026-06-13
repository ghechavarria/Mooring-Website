# Hero motion band (`HeroMotionBand.tsx`)

Full-bleed **ink–navy** strip with **silver** lattice, motion, and the **Mooring ERP** wordmark. **`App.tsx`** renders it **after** **`Workflow`** and **before** **`StatsSection`**.

## Visual ingredients

- **Base:** Deep **blue-black** gradient (`#020617` → `#05101c` → `#0a1624`, Tailwind `slate-950` family) so the band reads like the logo tile, not a flat warm gray.
- **Wash:** Radials mix **sky** (`rgba(56,189,248,…)`) and **ERP blue** (`rgba(30,112,214,…)`) with **accent** silver mist and a **slate-900** corner anchor for depth.
- **Texture:** SVG noise overlay (`mix-blend-overlay`, ~35% opacity) for a stone-like grain.
- **Grid:** **`HeroLattice`** — SVG diagonal lattice; `animate-grid-breathe` (see [hero-lattice.md](./hero-lattice.md)).
- **Light:** Large **silver-toned** blur drifts on a slow loop; right-side drift blends **accent into `blue-950`** when motion is allowed.
- **Scan:** A thin silver gradient line moves vertically when motion is allowed.
- **Word:** **Mooring ERP** — `Montserrat`, **`accent` → white → `accent`** horizontal gradient, `bg-clip-text`, `animate-shimmer-slow`, uppercase tracking.
- **Caption:** Small mono **“Mortgage workspace”** (`text-accent-light/90`); supporting line **`text-slate-200/95`** with a light **text-shadow** for legibility on the metallic wash — mortgage journey language (borrower touchpoints, lender conditions, clear-to-close).

## Motion safety

`useReducedMotion()` disables drifting blobs, the moving scan line, and the pulsing glow; the lattice grid and gradient **Mooring ERP** word remain readable.

## Tokens

Uses **`accent`** (silver-toned), **`blue-950`**, **`slate`**, and custom animations from `tailwind.config.js` (`grid-breathe`, `shimmer-slow`).
