# Hero motion band (`HeroMotionBand.tsx`)

Full-bleed **dark navy** strip with a **blueprint** ground and the **Mooric ERP** wordmark. **`App.tsx`** renders it after End to end and before **Team**.

## Visual ingredients

- **Base:** Near-black navy (`#050A14`)
- **Corner glow:** Teal top-right, royal blue bottom-left, soft dark center wash
- **Ground:** Dashed orbits around the wordmark, crosshair, corner ticks (`text-accent/40`)
- **Scan:** Thin silver gradient line moves vertically when motion is allowed; static mid-line when reduced motion is preferred
- **Word:** **Mooric ERP** — shimmering `accent` → white gradient, uppercase
- **Caption:** **Mortgage pipeline** + supporting line

## Motion safety

`useReducedMotion()` disables the scan line and title glow.

## Tokens

Uses **`accent`**, navy/teal/blue radials, `shimmer-slow`.
