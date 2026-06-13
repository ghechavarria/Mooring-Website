# Contact CTA and footer contrast

## `ContactCTA.tsx`

The CTA card previously used **`marble-slate`** (charcoal panel) with **`text-white`**. If that utility failed to paint as expected in some builds, copy could read as **white on a light wash** and disappear.

The card is now an explicit **light band**: **`bg-organ-50`**, **`border-organ-200`**, soft **gold radial** at very low alpha only. Typography uses **`text-organ-800`** (kicker), **`text-ink-950`** (headline), **`text-organ-800`** (body), **`text-organ-600`** (supporting line). Primary action: **`btn-primary-gold`** (see `docs/button-primary-gold.md`) for the mail CTA — label **Email our solutions team** (Mooring ERP builds software *for* lenders, not a consumer lending desk).

## `Footer.tsx`

Footer links used **`text-organ-300`**, but the Tailwind theme **does not define `organ-300`** (only 50, 100, 200, 600, …). That utility may not emit a color rule, so links could inherit **near-black body text** on **`bg-navy`** and vanish.

Links and copyright now use the **slate** scale on dark navy: **`text-slate-300`** (nav, with **`hover:text-sky-300`**), **`text-slate-400`** (tagline strip and copyright). These shades are always generated and meet dark-background contrast expectations.
