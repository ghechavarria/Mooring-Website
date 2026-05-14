# BaseReality marketing site

Single-page React application for **BaseReality** — a fictional **AI-assisted mortgage origination** platform. Copy and structure emphasize a **governed workspace** for loan teams (intake through closing), with AI supporting officer and processor judgment rather than replacing it.

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
| `index.html` | HTML shell, fonts, page title and meta description |
| `src/main.tsx` | React bootstrapping |
| `src/App.tsx` | Page shell and section order |
| `src/index.css` | Tailwind layers, **`.btn-primary-gold`**, ECG drift and AI pulse utilities |
| `src/components/Header.tsx` | Sticky top navigation |
| `src/components/Hero.tsx` | Dark hero with **`HeroSessionPulse`** (`integrated`) and headline |
| `src/components/HeroSessionPulse.tsx` | Session pulse strip (integrated hero + optional panel variant) |
| `src/components/Features.tsx` | Platform pillars (`#platform`) and leadership imagery |
| `src/components/Workflow.tsx` | Four-step origination pipeline (`#workflow`) |
| `src/components/HeroMotionBand.tsx` | Full-bleed motion band between Workflow and stats |
| `src/components/HeroLattice.tsx` | Decorative gold lattice SVG inside the motion band |
| `src/components/StatsSection.tsx` | Animated metrics (`#results`) |
| `src/components/ContactCTA.tsx` | Contact band (`#contact`) |
| `src/components/Footer.tsx` | Footer links and branding |
| `src/components/LogoMark.tsx` | Shared mark (header + footer) |

## Design notes

- **Brand:** BaseReality — mortgage origination positioning; warm **organ** / **gold** palette on light sections, **slate** / **sky** on the hero instrument strip.
- **Motion:** Sections use `whileInView` for scroll-triggered motion; hero strip uses CSS-driven ECG drift and AI orb pulse (see `docs/hero-session-pulse.md`).
- **Accessibility:** Landmark sections include headings and `aria-labelledby` where appropriate; decorative layers use `aria-hidden`.

## Lint

```bash
npm run lint
```
