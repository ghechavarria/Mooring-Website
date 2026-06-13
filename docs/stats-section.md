# Stats section (`StatsSection.tsx`)

Illustrative **metrics** on **`marble-slate`** (`#results`). The band shares the hero **navy base `#020617`** (Tailwind `slate-950` family) with blue-slate veils and **ERP / sky** radials so it reads like the lattice strip and logo tile, not flat charcoal. Typography and chrome use the same **bright `accent` / `accent-light`** system as the logo and [`HeroMotionBand`](./hero-motion-band.md) (`#BFD3E6` / `#F4F9FC` in [`tailwind.config.js`](../tailwind.config.js)).

- **Section frame:** `border-y border-slate-800/50` (cool edge on the navy field).
- **Headline:** **`text-white`** with a stronger **silver RGBA text-shadow** (`rgba(191,211,230,…)`) so the serif title pops like the logo mark on navy.
- **Subcopy:** **`text-accent-light/95`** for an icy secondary line.
- **Figures:** [`AnimatedNumber`](../src/components/StatsSection.tsx) uses **`bg-gradient-to-b from-accent-light via-white to-accent`** + **`bg-clip-text text-transparent`** so counts read **bright**, not flat gray.
- **Card labels:** **`text-accent-light/90`**.
- **Cards:** **`border-accent/50`**, **`border-t-white`** (crisp top highlight), **`ring-accent-light/35`**, and a brighter **silver** hairline in the box shadow.
