# ClearLedger marketing site

Single-page React application for a fictional mortgage loan file processing company that positions AI-powered intake, validation, and investor-ready packaging.

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
| `index.html` | HTML shell, fonts, page title |
| `src/main.tsx` | React bootstrapping |
| `src/App.tsx` | Page shell and section order |
| `src/index.css` | Tailwind layers and base styles |
| `src/components/Header.tsx` | Fixed nav and primary actions |
| `src/components/Hero.tsx` | Hero copy and animated “loan file” preview |
| `src/components/Features.tsx` | Platform pillars (`#platform`) |
| `src/components/Workflow.tsx` | Four-step pipeline (`#workflow`) |
| `src/components/StatsSection.tsx` | Animated metrics (`#results`) |
| `src/components/ContactCTA.tsx` | Contact band (`#contact`) |
| `src/components/Footer.tsx` | Footer links and branding |

## Design notes

- **Brand**: “ClearLedger” is a placeholder name; replace copy and `mailto:` as needed.
- **Motion**: Sections use `whileInView` for scroll-triggered motion; the hero uses staggered children and ambient gradient orbs.
- **Accessibility**: Landmark sections include headings and `aria-labelledby` where appropriate; decorative layers use `aria-hidden`.

## Lint

```bash
npm run lint
```
