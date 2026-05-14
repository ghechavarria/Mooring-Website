# `LogoMark.tsx`

Single **mark** (three vertical bars + horizontal gold rule) used in **`Header`** and **`Footer`** so the graphic is consistent site-wide.

- **`surface="light"`** (default): bars `organ-950` / `gold` / `organ-600` on the gold rule, framed with **`border-organ-200`** and **`bg-organ-100`**.
- **`surface="dark"`**: same geometry as the footer reference — **`bg-slate-950/90`**, bars **`slate-100` / `gold` / `slate-400`**, inner shadow, **`ring-gold/30`**. Border is **`border-white/20`** by default (reads on **`bg-navy`**).
- **`navBorder`**: with **`surface="dark"`**, swap the outer border to **`border-organ-200`** so the dark mark matches the footer look but uses the **nav thin gray frame** on a white header.
- **`boxed`** (default `true`): when **`false`**, only the three bars + gold rule (no panel, border, ring, or shadow).

Import: `import { LogoMark } from "./LogoMark"`.

- **Header:** `<LogoMark surface="dark" navBorder />` — footer-style dark mark, **`border-organ-200`** frame.
- **Footer:** `<LogoMark surface="dark" />` — same mark, **`border-white/20`** on **`bg-navy`**.

## Static asset (header mark)

**File:** `public/images/basereality-logo-mark.svg` — **36×36** `viewBox`, same bar layout and colors as **`LogoMark`** with **`surface="dark"`** + **`navBorder`** (flat fill/stroke; no CSS ring or inner shadow). Use for **favicons**, **Open Graph** art, **email** templates, or anywhere a single file is easier than React.

Example: `<img src="/images/basereality-logo-mark.svg" width="36" height="36" alt="" />`
