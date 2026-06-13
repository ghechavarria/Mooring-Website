# Mooring ERP static assets

## Logo lockups (PNG)

| File | Use |
| --- | --- |
| [public/images/mooring-small-logo.png](../public/images/mooring-small-logo.png) | **Header** sticky bar — logo tile beside **Mooring ERP** text lockup (`Header.tsx`); also **favicon** via `index.html`. |
| [public/images/mooring-logo.png](../public/images/mooring-logo.png) | **Footer** — full lockup on navy; **`alt="Mooring ERP"`**; copyright **Mooring ERP** (`Footer.tsx`). |

Square **1024×1024** sources; layout uses fixed **height** + **`w-auto`** + **`object-contain`** so aspect ratio stays correct. Main sections use **`.layout-shell`**; the sticky header uses fluid **`.layout-header`** — see [layout-shell.md](./layout-shell.md).

## Favicon

**Path:** same as the header small lockup — [public/images/mooring-small-logo.png](../public/images/mooring-small-logo.png). [`index.html`](../index.html) sets `<link rel="icon" type="image/png" href="/images/mooring-small-logo.png" />` so the tab icon matches the nav logo tile.

## Theme reference

**Path:** [theme-mooring-dashboard.md](./theme-mooring-dashboard.md)

Describes Tailwind tokens, typography, and marble utilities for the Mooring ERP marketing surface.
