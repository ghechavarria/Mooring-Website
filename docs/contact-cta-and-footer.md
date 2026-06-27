# Contact CTA and footer contrast

## `ContactCTA.tsx`

The CTA card uses **`marble-slate`** (navy `#020617` family) with **`text-white`**. If that utility failed to paint as expected in some builds, copy could read as **white on a light wash** and disappear.

The card is now an explicit **light band**: **`bg-organ-50`**, **`border-organ-200`**, soft **silver radial** at very low alpha only. Typography uses **`font-mono`** eyebrow **`Ready when you are`** (`text-erp`), **`text-ink-950`** (headline), **`text-organ-800`** (body, `leading-relaxed`), **`text-organ-600`** (supporting line). Section padding: **`py-28 sm:py-40`** on **`bg-canvas`**. Primary action: **`btn-primary-silver`** opens the **Netlify contact modal** — label **Book a walkthrough** (see [contact-form-modal.md](./contact-form-modal.md)).

## `Footer.tsx`

The footer is a minimal dark band: top tagline strip, **Mooric ERP** logo, **social icons** (LinkedIn + YouTube), and copyright. **No navigation links** — section anchors live in the header only.

- **Tagline strip:** `py-4`, `text-slate-400`
- **Main row:** `py-14`, logo left, social icons center, copyright right on `sm+` (`justify-between`)
- **Social icons:** LinkedIn and YouTube as `aria-label`ed icon buttons (round, `border-white/10`, hover `text-sky-300`). No links wired yet (no `href`/`onClick`).
- **Copyright:** `text-slate-400` on **`bg-navy`**
