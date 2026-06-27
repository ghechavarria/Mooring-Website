# Silver-toned accent (Tailwind `accent` / `accent-light`)

The UI uses a **cool metallic** look to match the logo tile. In [`tailwind.config.js`](../tailwind.config.js) this is implemented as **`theme.extend.colors.accent`** (nested **`DEFAULT`** + **`light`**) so utilities are **`bg-accent`**, **`text-accent/90`**, **`from-accent-light/25`**, etc.

**Why not `silver`?** The literal token name **`silver`** clashes with how Tailwind / PostCSS resolve utilities (CSS named color / generation), which broke **`@apply bg-silver`** in [`src/index.css`](../src/index.css). **`accent`** avoids that while keeping a **bright, logo-adjacent** cool silver (`#BFD3E6` / `#F4F9FC`).

**`tide`** is set to the same hex as **`accent`** for legacy naming. Primary CTAs and light-section eyebrows use the **`erp`** brand blue (**`#0075FF`**; see [`tailwind.config.js`](../tailwind.config.js) and [button-primary-silver.md](./button-primary-silver.md)). Broader system notes: [theme-mooric-dashboard.md](./theme-mooric-dashboard.md).

On **light** sections, prefer **`text-erp`** / **`border-erp`** for eyebrows, dividers, and step badges. Reserve **`accent`** (silver-toned) for **dark** surfaces (hero pulse strip, motion band) where metallic highlights still read clearly.

Marble utilities in [`src/index.css`](../src/index.css) use **matching RGBA** in gradients for the same cool metallic feel.
