# Hero motion band (`HeroMotionBand.tsx`)

Full-bleed **dark navy** strip with **silver** lattice, scan line, and the **Mooric ERP** wordmark. **`App.tsx`** renders it after LO Assistant and before **Team**.

## Visual ingredients

- **Base:** Near-black navy (`#050A14`).
- **Corner glow:** Soft-bright **teal/cyan** at **top-right**; soft-bright **royal blue** at **bottom-left** (mid intensity — readable without overpowering). Soft dark center wash. Lattice and scan line sit above.
- **Border:** `border-accent/50` top/bottom to frame the strip.
- **Grid:** **`HeroLattice`** — SVG diagonal lattice; `animate-grid-breathe` (see [hero-lattice.md](./hero-lattice.md)).
- **Scan:** A thin silver gradient line moves vertically when motion is allowed; static mid-line when reduced motion is preferred.
- **Word:** **Mooric ERP** — `Montserrat`, **`accent` → white → `accent`** horizontal gradient, `bg-clip-text`, `animate-shimmer-slow`, uppercase tracking. Soft title glow behind the wordmark (toned down so it doesn’t fight the corner washes).
- **Caption:** Small mono **“Mortgage pipeline”** (`text-accent-light`); supporting line **`text-slate-200/95`** with a light **text-shadow**.

## Motion safety

`useReducedMotion()` disables the moving scan line and the pulsing title glow; lattice and corner gradient remain.

## Tokens

Uses **`accent`** (silver-toned), custom navy/teal/blue radials, and animations from `tailwind.config.js` (`grid-breathe`, `shimmer-slow`).
