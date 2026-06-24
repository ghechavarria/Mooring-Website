# Contact CTA and footer contrast

## `ContactCTA.tsx`

The CTA card uses **`marble-slate`** (navy `#020617` family) with **`text-white`**. If that utility failed to paint as expected in some builds, copy could read as **white on a light wash** and disappear.

The card is now an explicit **light band**: **`bg-organ-50`**, **`border-organ-200`**, soft **silver radial** at very low alpha only. Typography uses **`text-organ-800`** (kicker), **`text-ink-950`** (headline), **`text-organ-800`** (body), **`text-organ-600`** (supporting line). Primary action: **`btn-primary-silver`** — **ERP** brand blue (**`erp`** / **`#1e70d6`**, white label; see [button-primary-silver.md](./button-primary-silver.md)) for the mail CTA — label **Email our solutions team** (Mooric ERP builds software *for* lenders, not a consumer lending desk).

## `Footer.tsx`

Footer links used **`text-organ-300`**, but the Tailwind theme **does not define `organ-300`** (only 50, 100, 200, 600, …). That utility may not emit a color rule, so links could inherit **near-black body text** on **`bg-navy`** and vanish.

Links and copyright now use the **slate** scale on dark navy: **`text-slate-300`** (nav, with **`hover:text-sky-300`**), **`text-slate-400`** (tagline strip and copyright). These shades are always generated and meet dark-background contrast expectations.
