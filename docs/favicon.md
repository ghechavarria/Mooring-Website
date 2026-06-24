# Favicon (PNG only)

## Asset and HTML

The tab favicon is **[public/images/square-logo-color-bkgrnd.png](../public/images/square-logo-color-bkgrnd.png)** only (no SVG `rel="icon"` entry).

[`index.html`](../index.html) loads it with:

`<link rel="icon" type="image/png" href="/images/square-logo-color-bkgrnd.png" />`

Vite serves files under `public/` at the site root, so `/images/…` resolves to `public/images/…`.

## Caching

Browsers cache favicons aggressively. After replacing the PNG or changing the `href`, use a **hard refresh** or clear **cached images / site data** for the origin if the tab icon does not update.

## Related

- [mooric-static-assets.md](./mooric-static-assets.md) — other logo files and header/footer usage.
