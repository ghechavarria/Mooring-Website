# `LogoMark.tsx`

Single **mark** (three vertical bars + horizontal gold rule) — same geometry as **`public/images/mooring-logo-mark.svg`**. The live **header** and **footer** use the branded **PNG** lockups instead (`mooring-small-logo.png` and `mooring-logo.png`); keep **`LogoMark`** for reuse or places that need the vector bars only.

- **`surface="light"`** (default): bars `organ-950` / `gold` / `organ-600` on the gold rule, framed with **`border-organ-200`** and **`bg-organ-100`**.
- **`surface="dark"`**: same geometry as the footer reference — **`bg-slate-950/90`**, bars **`slate-100` / `gold` / `slate-400`**, inner shadow, **`ring-gold/30`**. Border is **`border-white/20`** by default (reads on **`bg-navy`**).
- **`navBorder`**: with **`surface="dark"`**, swap the outer border to **`border-organ-200`** so the dark mark matches the footer look but uses the **nav thin gray frame** on a white header.
- **`boxed`** (default `true`): when **`false`**, only the three bars + gold rule (no panel, border, ring, or shadow).

Import: `import { LogoMark } from "./LogoMark"`.

## Site chrome (raster)

- **Header:** `<img src="/images/mooring-small-logo.png" alt="" … />` plus **Mooring ERP** as **Mooring** (organ) + **ERP** (**`#1e70d6`**) in one line (`Header.tsx`).
- **Footer:** `<img src="/images/mooring-logo.png" alt="Mooring ERP" … />` inside a **`rounded-[10px]`** + **`overflow-hidden`** frame (same corner radius as the header mark), on **`bg-navy`** (`Footer.tsx`). Copyright line uses **Mooring ERP**.

## Static asset (SVG mark)

**File:** `public/images/mooring-logo-mark.svg` — **36×36** `viewBox`, same bar layout and colors as **`LogoMark`** with **`surface="dark"`** + **`navBorder`** (flat fill/stroke; no CSS ring or inner shadow). Use for **favicons**, **Open Graph** art, **email** templates, or anywhere a single static file is easier than React.

Example: `<img src="/images/mooring-logo-mark.svg" width="36" height="36" alt="" />`
