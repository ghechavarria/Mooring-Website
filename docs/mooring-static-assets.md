# Mooring ERP static assets

## Logo lockups (SVG)

| File | Use |
| --- | --- |
| [public/images/square-logo-blue.svg](../public/images/square-logo-blue.svg) | **Header** sticky bar — logo tile beside **Mooring ERP** text lockup (`Header.tsx`). |
| [public/images/square-logo-color-bkgrnd.png](../public/images/square-logo-color-bkgrnd.png) | **Favicon** / tab icon via `index.html` (PNG only — see [favicon.md](./favicon.md)). |
| [public/images/full-logo-no-background.svg](../public/images/full-logo-no-background.svg) | **Footer** — full lockup on navy; **`alt="Mooring ERP"`**; copyright **Mooring ERP** (`Footer.tsx`). |

Sources are **1024×1024** viewBoxes where noted in the SVGs; header and footer use fixed square tiles with **`object-cover`** so the mark fills the tile — the footer tile is larger (**`h-20 w-20`**, **`sm:h-28 sm:w-28`**) than the header mark (**`h-10 w-10`**, **`sm:h-[2.75rem] sm:w-[2.75rem]`**). Main sections use **`.layout-shell`**; the sticky header uses fluid **`.layout-header`** — see [layout-shell.md](./layout-shell.md).

## Favicon

**Path:** [public/images/square-logo-color-bkgrnd.png](../public/images/square-logo-color-bkgrnd.png) — tab icon (PNG only). [`index.html`](../index.html) sets `<link rel="icon" type="image/png" href="/images/square-logo-color-bkgrnd.png" />`. Details: [favicon.md](./favicon.md). The **header** nav tile uses [square-logo-blue.svg](../public/images/square-logo-blue.svg) (see `Header.tsx`).

## Theme reference

**Path:** [theme-mooring-dashboard.md](./theme-mooring-dashboard.md)

Describes Tailwind tokens, typography, and marble utilities for the Mooring ERP marketing surface.
