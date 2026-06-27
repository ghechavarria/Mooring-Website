# Contact CTA and footer contrast

## `ContactCTA.tsx`

The CTA card uses **`marble-slate`** (navy `#020617` family) with **`text-white`**. If that utility failed to paint as expected in some builds, copy could read as **white on a light wash** and disappear.

The card is now an explicit **light band**: **`bg-organ-50`**, **`border-organ-200`**, soft **silver radial** at very low alpha only. Typography uses **`font-mono`** eyebrow **`Ready when you are`** (`text-erp`), **`text-ink-950`** (headline), **`text-organ-800`** (body, `leading-relaxed`), **`text-organ-600`** (supporting line). Section padding: **`py-24 sm:py-32`** on **`bg-canvas`**. Primary action: **`btn-primary-silver`** opens the **Netlify contact modal** — label **Book a walkthrough** (see [contact-form-modal.md](./contact-form-modal.md)).

## `Footer.tsx`

Footer links used **`text-organ-300`**, but the Tailwind theme **does not define `organ-300`** (only 50, 100, 200, 600, …). That utility may not emit a color rule, so links could inherit **near-black body text** on **`bg-navy`** and vanish.

Links and copyright now use the **slate** scale on dark navy: **`text-slate-300`** (nav, with **`hover:text-sky-300`**), **`text-slate-400`** (tagline strip and copyright). These shades are always generated and meet dark-background contrast expectations.
