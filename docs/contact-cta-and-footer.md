# Contact CTA and footer contrast

## `ContactCTA.tsx`

The CTA card uses **`marble-slate`** (navy `#020617` family) with **`text-white`**. If that utility failed to paint as expected in some builds, copy could read as **white on a light wash** and disappear.

The card is now an explicit **light band**: **`bg-organ-50`**, **`border-organ-200`**, soft **silver radial** at very low alpha only. Typography uses **`font-mono`** eyebrow **`Let's talk`** (`text-erp`), **`text-ink-950`** (headline: **Get early access — first month free.**), **`text-organ-800`** (body), **`text-organ-600`** (supporting line). Primary action: **`btn-primary-silver`** opens the **Netlify contact modal** — label **Get early access** (see [contact-form-modal.md](./contact-form-modal.md)).

## `Footer.tsx`

The footer is a minimal dark band: top tagline strip, **Mooric ERP** logo, **social icons** (LinkedIn + YouTube), and copyright. **No navigation links** — section anchors live in the header only.

- **Tagline strip:** `py-4`, `text-slate-400`
- **Main row:** `py-14`, logo left, social icons center, copyright right on `sm+` (`justify-between`)
- **Social icons:** LinkedIn and YouTube as external links (`target="_blank"` `rel="noopener noreferrer"`), round, `border-white/10`, hover `text-sky-300`:
  - LinkedIn: https://www.linkedin.com/company/mooricerp
  - YouTube: https://www.youtube.com/@MooricCorporation
- **Copyright:** `text-slate-400` on **`bg-navy`**
