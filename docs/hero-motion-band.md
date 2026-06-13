# Hero motion band (`HeroMotionBand.tsx`)

Full-bleed **dark organic slate** strip with **gold** lattice, motion, and the **Mooring ERP** wordmark. **`App.tsx`** renders it **after** **`Workflow`** and **before** **`StatsSection`**.

## Visual ingredients

- **Base:** Warm **charcoal–gold** corner gradient (`#1a1612` → `organ-900` → `#2c261c`) plus a **stack of gold radials** (center bloom, top arc, right and left corners) and a **diagonal gold veil** so the whole strip sits in a gold atmosphere like the original band.
- **Texture:** SVG noise overlay (`mix-blend-overlay`, ~35% opacity) for a stone-like grain.
- **Grid:** **`HeroLattice`** — SVG diagonal lattice; `animate-grid-breathe` (see [hero-lattice.md](./hero-lattice.md)).
- **Light:** Large **gold** blur drifts on a slow loop; right-side drift blends **gold into organ** (`from-gold/18 to-organ-700/30`) when motion is allowed.
- **Scan:** A thin gold gradient line moves vertically when motion is allowed.
- **Word:** **Mooring ERP** — `Montserrat`, gold → ivory gradient fill, `bg-clip-text`, `animate-shimmer-slow`, uppercase tracking.
- **Caption:** Small mono **“Mortgage workspace”** (`text-gold/85`); supporting line **`text-slate-100/95`** with a light **text-shadow** for legibility on the gold wash — mortgage journey language (borrower touchpoints, lender conditions, clear-to-close).

## Motion safety

`useReducedMotion()` disables drifting blobs, the moving scan line, and the pulsing glow; the lattice grid and gradient **Mooring ERP** word remain readable.

## Tokens

Uses `organ-*`, `gold`, `slate`, and custom animations from `tailwind.config.js` (`grid-breathe`, `shimmer-slow`).
