# Hero session pulse (`HeroSessionPulse.tsx`)

Decorative **session pulse** for the marketing hero: a **live-styled** monitor strip (not connected to real tenant telemetry).

## Theme

Uses Tailwind **`slate` / `sky` / `blue`** utilities on the strip for contrast (near-black chart well `#030712`, readable `text-sky-400` status). The **`integrated`** outer wrapper uses a solid **`#020617`** fill (same ink as the hero section) so there is no vertical gradient seam at the top edge under the header. **`accent` / `accent-light`** (silver-toned) appear on the main hero when copy is passed as **`children`** (see `Hero.tsx`). Optional **`pulse.*`** tokens in `tailwind.config.js` remain for other surfaces.

## Variants

- **`variant="integrated"`** (used in `Hero.tsx`) — **Full-bleed** slab: tight session bar, then **`bg-slate-900`** grid (`min-w-0`) with **`sm:grid-cols-[minmax(0,24rem)_1fr]`**. **AI row:** **`max-sm:`** — **`h-auto`**, **`min-h-0`**, **`items-start`**, **`gap-2.5`**, **`py-2`** (extra breathing room above/below the AI block; **`sm+`** still **`sm:py-0`**), **`2.25rem`** orb (**`h-9 w-9`**), **`AI`** at **`text-[9px]`**, title **`text-xs`** (**`line-clamp-2`**); text column **`justify-start`**, **`pt-0`**. Status slot **`h-auto`** / **`min-h-0`** with status copy **`max-sm:truncate`** (single line + ellipsis so rotating lines do not change row height), **`text-[11px]`** / **`leading-[1.2rem]`** on **`max-sm`**; **`sm+`** **`line-clamp-4`** in fixed-height slot. **`sm+`:** **`items-center`**, **`5rem`** orb, **`text-sm`** / **`sm:text-base`** title, **`line-clamp-4`** status, slightly tighter row heights **`sm:h-[8rem]`** … **`2xl:h-[10.25rem]`** (tablet/desktop only; **`max-sm`** unchanged), status slot **`sm:h-[4.75rem]`**. **ECG** + **`.integrated-ecg-path`**: [integrated-ecg-path.md](./integrated-ecg-path.md). Optional **`children`**, preview tagline. Instrument chrome is **`aria-hidden`**. **`.layout-header-px`** aligns with the sticky header rail.

- **`variant="panel"`** — Standalone card with the same strip vocabulary; **`children` are ignored**. Includes an **`sr-only`** heading for screen readers.

## Behavior

- **Header:** “Session pulse” + **Live** pill (ice text, blue border / glow).
- **Heartbeat:** Center **AI** orb uses **`.hero-ai-pulse-swell`** in **`src/index.css`**: `@keyframes hero-ai-pulse-swell` samples a **sin half-wave** (24 steps + ends, **linear** tween between stops) so the pulse reads as one continuous breath, not stepped Framer keyframes. **`--ai-pulse-beat`** on the orb matches **`beatMs`** (`60000 / 40` ≈ **1.5 s**), same as **ECG** **`--ecg-beat`**, so one swell aligns with one **100px** drift cycle. Disabled when `prefers-reduced-motion` is on.
- **ECG strip:** Tiled **P–PR–QRS–T** rhythm (**100px** per beat, baseline **y = 28**, vertical center of the **56**-tall viewBox) as a **sharp polyline** only (`M` / `H` / `L`): no Bézier or quadratic curves; **`stroke-linecap="butt"`** and **`stroke-linejoin="miter"`** so corners read like a classic **B&W monitor trace**, not a smoothed illustration. **Horizontal scroll** uses **`.hero-ecg-drift`** in **`src/index.css`** (`translate3d` by **`calc(-1 * var(--ecg-beat-width))`** over **`--ecg-beat`**; set **`--ecg-beat-width: 100px`** on the drifting `<g>`). Because the viewport is finite, steep segments were clipping at the left/right edges and could read as a diagonal “coming from the corner”; the strip `<g>` uses an **SVG mask** (wide horizontal gradient, ~0%–30% and ~70%–100% ramp with intermediate stops) so the trace **soft-fades at the sides**, plus a matching **`#030712` CSS vignette** over the chart cell for a stronger edge falloff. **`vector-effect: non-scaling-stroke`** (panel: on the `<path>`; integrated: via **`.integrated-ecg-path`** in **`src/index.css`**), **`shapeRendering="geometricPrecision"`**, and **`backface-visibility: hidden`** on the drift group stay as before. Reduced motion disables drift via the same class’s media query.
- **Status lines:** Mortgage-operations teaser copy rotates on the **same timer** as the pulse BPM. **Integrated:** **`max-sm:truncate`** on the status line (one line, ellipsis; stable mobile height), **`line-clamp-4`** from **`sm`** up inside a fixed-height slot so the **tablet/desktop** AI row stays stable when copy changes.
- **Footer:** Closing line under the strip (integrated: dark bar; panel: light bar) — benefit-forward copy, e.g. **“Mooring ERP — give your loan team this clarity on every file.”** The pulse above remains **decorative** (`aria-hidden`); this line nudges interest without claiming live tenant data.

## Ethics / UX

The **pulse chrome** (session bar, AI row, ECG) is decorative and **`aria-hidden`**. The hero **`children`** carry the real message; an **`sr-only`** line in `Hero.tsx` notes that the strip above is illustrative.
