# Mooric ERP marketing site

Single-page React application for **Mooric ERP** — a fictional **AI-assisted mortgage origination** platform. Copy and structure emphasize a **governed workspace** for loan teams (intake through closing), with AI supporting officer and processor judgment rather than replacing it.

## Stack

- **Vite** — dev server and production build
- **React 19** with **TypeScript**
- **Tailwind CSS** — layout, typography, and theme tokens (`tailwind.config.js`)
- **Framer Motion** — entrance animations, scroll reveals, floating gradients, and spring-based stat counters

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

`preview` serves the production build for a quick smoke test.

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | HTML shell, fonts, page title, meta description, **PNG favicon** (`/images/square-logo-color-bkgrnd.png` — see [favicon.md](./favicon.md)) |
| `src/main.tsx` | React bootstrapping |
| `src/App.tsx` | Section order; outer shell uses **`flex-1 min-h-0 w-full`** so it fills **`#root`** |
| `src/index.css` | Tailwind layers; **`#root`** flex column + **`html`/`body`** `w-full`; **`.btn-primary-silver`**, **`.layout-shell`**, **`.layout-header`** / **`.layout-header-px`**, ECG / AI utilities |
| `src/components/Header.tsx` | Sticky top navigation; brand tile **`/images/square-logo-blue.svg`** beside wordmark |
| `src/components/Hero.tsx` | Dark hero (`#020617` + cool radials; see [hero-section-background.md](./hero-section-background.md)) with **`HeroSessionPulse`** (`integrated`) and headline |
| `src/components/HeroSessionPulse.tsx` | Session pulse strip (integrated hero + optional panel variant) |
| `src/components/Features.tsx` | Platform pillars (`#platform`) and leadership imagery ([features-workflow-imagery.md](./features-workflow-imagery.md)) |
| `src/components/Workflow.tsx` | Four-step origination pipeline (`#workflow`); operations photo ([features-workflow-imagery.md](./features-workflow-imagery.md)) |
| `src/components/HeroMotionBand.tsx` | Full-bleed motion band between Workflow and stats |
| `src/components/HeroLattice.tsx` | Decorative silver lattice SVG inside the motion band |
| `src/components/StatsSection.tsx` | Animated metrics (`#results`); **white** headline + silver **glow**, **`accent-light`** subcopy, **bright** figure gradient (`accent-light` → **white** → `accent`), **`border-t-white`** + **`accent`** chrome on `marble-slate` |
| `src/components/TeamSection.tsx` | Team roster (`#team`); portraits + role titles — [team-section.md](./team-section.md) |
| `src/components/ContactCTA.tsx` | Contact band (`#contact`) |
| `src/components/Footer.tsx` | Footer links and branding |

## Design notes

- **Brand:** Mooric ERP — mortgage origination positioning; warm **organ** / silver-toned **`accent`** on light sections, **slate** / **sky** on the hero instrument strip.
- **Motion:** Sections use `whileInView` for scroll-triggered motion; hero strip uses CSS-driven ECG drift and AI orb pulse (see `docs/hero-session-pulse.md`).
- **Accessibility:** Landmark sections include headings and `aria-labelledby` where appropriate; decorative layers use `aria-hidden`.

## Lint

```bash
npm run lint
```
