# Hero session pulse (`HeroSessionPulse.tsx`)

Decorative **session pulse** for the marketing hero: a **live-styled** monitor strip (not connected to real tenant telemetry).

## Theme

Uses Tailwind **`slate` / `sky` / `blue`** utilities on the strip for contrast (near-black chart well `#030712`, readable `text-sky-400` status). The **`integrated`** outer wrapper uses **`#020617`** (slate-950 family) vertical gradient so the slab matches the **logo ink** field, not a warm gray. **`accent` / `accent-light`** (silver-toned) appear on the main hero when copy is passed as **`children`** (see `Hero.tsx`). Optional **`pulse.*`** tokens in `tailwind.config.js` remain for other surfaces.

## Variants

- **`variant="integrated"`** (used in `Hero.tsx`) — **Full-bleed** slab: session bar, AI + status, **ECG** strip, then optional **`children`** (headline, body, CTAs, `dl`), then the preview tagline bar. Only the **instrument rows** (session bar, AI/ECG grid) are wrapped in **`aria-hidden`**; **`children` are real content** and stay in the accessibility tree. **Horizontal alignment:** session bar, AI row, hero **`children`**, and footer tagline use **`.layout-header-px`** / **`.layout-header`** (see [layout-shell.md](./layout-shell.md)) so **“Live”**, nav, and CTAs share the **same left/right inset** as the sticky header on large / full-screen viewports.

- **`variant="panel"`** — Standalone card with the same strip vocabulary; **`children` are ignored**. Includes an **`sr-only`** heading for screen readers.

## Behavior

- **Header:** “Session pulse” + **Live** pill (ice text, blue border / glow).
- **Heartbeat:** Center **AI** orb uses **`.hero-ai-pulse-swell`** in **`src/index.css`**: `@keyframes hero-ai-pulse-swell` samples a **sin half-wave** (24 steps + ends, **linear** tween between stops) so the pulse reads as one continuous breath, not stepped Framer keyframes. **`--ai-pulse-beat`** on the orb matches **`beatMs`** (`60000 / 40` ≈ **1.5 s**), same as **ECG** **`--ecg-beat`**, so one swell aligns with one **100px** drift cycle. Disabled when `prefers-reduced-motion` is on.
- **ECG strip:** Tiled **P–PR–QRS–T** rhythm (**100px** per beat, baseline **y = 28**, vertical center of the **56**-tall viewBox) as a **sharp polyline** only (`M` / `H` / `L`): no Bézier or quadratic curves; **`stroke-linecap="butt"`** and **`stroke-linejoin="miter"`** so corners read like a classic **B&W monitor trace**, not a smoothed illustration. **Horizontal scroll** uses **`.hero-ecg-drift`** in **`src/index.css`** (`translate3d` by **`calc(-1 * var(--ecg-beat-width))`** over **`--ecg-beat`**; set **`--ecg-beat-width: 100px`** on the drifting `<g>`). Because the viewport is finite, steep segments were clipping at the left/right edges and could read as a diagonal “coming from the corner”; the strip `<g>` uses an **SVG mask** (wide horizontal gradient, ~0%–30% and ~70%–100% ramp with intermediate stops) so the trace **soft-fades at the sides**, plus a matching **`#030712` CSS vignette** over the chart cell for a stronger edge falloff. **`vector-effect: non-scaling-stroke`**, **`shapeRendering="geometricPrecision"`**, and **`backface-visibility: hidden`** on the drift group stay as before. Reduced motion disables drift via the same class’s media query.
- **Status lines:** Mortgage-operations teaser copy rotates on the **same timer** as the pulse BPM.
- **Footer:** “Mooring ERP — illustrative session for this visit” (integrated: dark bar with top border; panel: light bar). Clarifies the pulse strip is **marketing chrome**, not tenant telemetry.

## Ethics / UX

The **pulse chrome** (session bar, AI row, ECG) is decorative and **`aria-hidden`**. The hero **`children`** carry the real message; an **`sr-only`** line in `Hero.tsx` notes that the strip above is illustrative.
