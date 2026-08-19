# Mooric ERP static assets

## Logo lockups (SVG)

| File | Use |
| --- | --- |
| [public/images/square-logo-blue.svg](../public/images/square-logo-blue.svg) | **Header** sticky bar — logo tile beside **Mooric ERP** text lockup (`Header.tsx`). |
| [public/images/square-logo-blue.png](../public/images/square-logo-blue.png) | **Favicon** / tab icon via `index.html` (PNG only — see [favicon.md](./favicon.md)). |
| [public/images/full-logo-no-background.svg](../public/images/full-logo-no-background.svg) | **Footer** — full lockup on navy; **`alt="Mooric ERP"`**; copyright **Mooric ERP** (`Footer.tsx`). ViewBox is cropped tight to the artwork (no empty 1024 canvas padding). |

Header uses **`square-logo-blue`** in a square tile with **`object-cover`**. Footer uses the cropped full lockup at **`h-[4.7rem]`** with **`w-auto`** at all breakpoints. Main sections use **`.layout-shell`**; the sticky header uses fluid **`.layout-header`** — see [layout-shell.md](./layout-shell.md).

## Favicon

**Path:** [public/images/square-logo-blue.png](../public/images/square-logo-blue.png) — tab icon (PNG only). [`index.html`](../index.html) sets `<link rel="icon" type="image/png" href="/images/square-logo-blue.png" />`. Details: [favicon.md](./favicon.md). The **header** nav tile uses [square-logo-blue.svg](../public/images/square-logo-blue.svg) (see `Header.tsx`).

## Theme reference

- [silver-accent-palette.md](./silver-accent-palette.md) — `accent` / `accent-light` silver tokens
- [button-primary-silver.md](./button-primary-silver.md) — primary CTA class (`erp` blue)
- [favicon.md](./favicon.md) — tab icon
