# Mooring ERP static assets

## Logo lockups (PNG)

| File | Use |
| --- | --- |
| [public/images/mooring-small-logo.png](../public/images/mooring-small-logo.png) | **Header** sticky bar — logo tile beside **Mooring ERP** text lockup (`Header.tsx`). |
| [public/images/mooring-logo.png](../public/images/mooring-logo.png) | **Footer** — full lockup on navy; **`alt="Mooring ERP"`**; copyright **Mooring ERP** (`Footer.tsx`). |

Square **1024×1024** sources; layout uses fixed **height** + **`w-auto`** + **`object-contain`** so aspect ratio stays correct.

## Logo mark (SVG)

**Path:** [public/images/mooring-logo-mark.svg](../public/images/mooring-logo-mark.svg)

Flat 36×36 SVG aligned with the React **`LogoMark`** component (same bar layout and palette when `surface="dark"` and `navBorder` are used). Use for favicons, Open Graph images, email templates, or anywhere a single static file is simpler than rendering the component.

**Further detail:** [logo-mark.md](./logo-mark.md) (usage examples and design parity notes).

## Theme reference

**Path:** [theme-mooring-dashboard.md](./theme-mooring-dashboard.md)

Describes Tailwind tokens, typography, and marble utilities for the Mooring ERP marketing surface.
