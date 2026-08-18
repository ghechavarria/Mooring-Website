# Mooric ERP marketing site

Single-page React application for **Mooric ERP** — mortgage origination software aimed at **independent loan officers and mortgage brokers**. Copy emphasizes day-to-day LO work: completing the 1003, matching programs, tracking conditions, managing pipeline without spreadsheets, and **Central Loan Memory** as the core differentiator.

## Stack

- **Vite** — dev server and production build
- **React 19** with **TypeScript**
- **Tailwind CSS** — layout, typography, and theme tokens (`tailwind.config.js`)
- **Framer Motion** — entrance animations, scroll reveals, floating gradients

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
| `index.html` | HTML shell, fonts, page title, meta description, **hidden Netlify form**, **PNG favicon** (`/images/square-logo-blue.png` — see [favicon.md](./favicon.md)) |
| `src/main.tsx` | React bootstrapping |
| `src/App.tsx` | Section order; **`ContactModalProvider`**; **`ContactFormModal`** at root |
| `src/context/ContactModalContext.tsx` | Shared `openContactModal` / `closeContactModal` state |
| `src/index.css` | Tailwind layers; **`#root`** flex column; **`.btn-primary-silver`**, **`.layout-shell`**, **`.layout-header`** / **`.layout-header-px`**, mixed light-section languages, ECG / ticker utilities |
| `src/components/Header.tsx` | Sticky top navigation; brand tile **`/images/square-logo-blue.svg`** beside wordmark |
| `src/components/Hero.tsx` | Two-column hero (`#top`) with embedded interactive demo (`#demo`) — [hero-section-background.md](./hero-section-background.md) |
| `src/components/HeroCopy.tsx` | Shared hero copy + CTAs — [hero-copy.md](./hero-copy.md) |
| `src/components/HeroSessionPulse.tsx` | Session pulse strip + ticker — [hero-session-pulse.md](./hero-session-pulse.md) |
| `src/components/BeforeAfterDemo.tsx` | `InteractiveDemoCard` — [before-after-demo.md](./before-after-demo.md) |
| `src/components/ZoomableProductView.tsx` | Click-to-zoom product frames — [zoomable-product-view.md](./zoomable-product-view.md) |
| `src/components/ProductionGlanceSection.tsx` | Production glance band — [ProductionGlanceSection.md](./ProductionGlanceSection.md) |
| `src/components/ProblemSection.tsx` | Pain section (`#problem`) — [problem-section.md](./problem-section.md) |
| `src/components/Features.tsx` | Broker-side process (`#features`) — [features-workflow-imagery.md](./features-workflow-imagery.md) |
| `src/components/PipelineSection.tsx` | Pipeline management (`#pipeline`) — [pipeline-section.md](./pipeline-section.md) |
| `src/components/CentralLoanMemorySection.tsx` | Central Loan Memory (`#memory`) — [central-loan-memory-section.md](./central-loan-memory-section.md) |
| `src/components/LOPersonalAssistantSection.tsx` | LO Personal Assistant (`#assistant`) — [lo-personal-assistant-section.md](./lo-personal-assistant-section.md) |
| `src/components/BrokerProcessFlowSection.tsx` | End-to-end process (`#process`) — [broker-process-flow-section.md](./broker-process-flow-section.md) |
| `src/components/LosCompatibilityStrip.tsx` | LOS compatibility (`#los`) — [los-compatibility-strip.md](./los-compatibility-strip.md) |
| `src/components/HeroMotionBand.tsx` | Full-bleed blueprint / Mooric ERP band — [hero-motion-band.md](./hero-motion-band.md) |
| `src/components/HeroLattice.tsx` | Decorative lattice SVG — [hero-lattice.md](./hero-lattice.md) |
| `src/components/TeamSection.tsx` | Team roster (`#team`) — [team-section.md](./team-section.md) |
| `src/components/ContactCTA.tsx` | Contact band (`#contact`); opens contact modal |
| `src/components/ContactFormModal.tsx` | Netlify contact form popup — [contact-form-modal.md](./contact-form-modal.md) |
| `src/components/Footer.tsx` | Footer branding + social |

## Section order (`App.tsx`)

1. Header
2. Hero (`#top`) — includes interactive Before/After demo (`#demo`)
3. Production Glance (`#production-glance`)
4. Problem (`#problem`)
5. Features (`#features`)
6. Pipeline (`#pipeline`)
7. Central Loan Memory (`#memory`)
8. LO Personal Assistant (`#assistant`)
9. Broker process / end to end (`#process`) — includes LOS copy (`#los`)
10. HeroMotionBand (decorative)
11. Team (`#team`)
12. Contact (`#contact`)
13. Footer

## Header navigation

| Label | Anchor | Section |
|-------|--------|---------|
| Why switch | `#problem` | 01 · The problem |
| Process | `#features` | 02 · Broker-side process |
| Loan Memory | `#memory` | Central Loan Memory |
| The Team | `#team` | Our team |

Sales path: pain → broker process → differentiator → trust. Logo links to `#top`. Hero secondary CTA **See why it's different** → `#features` (02). Pipeline, LO Assistant, and Contact have no dedicated nav item.

Footer is logo + social icons + copyright only (no link row). Header holds section navigation.

CTA: **Request a briefing** → opens contact modal (see [contact-form-modal.md](./contact-form-modal.md))

## Design notes

- **Brand:** Mooric ERP — **dark** signature bands (hero, problem, pipeline, memory, blueprint band) alternating with **mixed** light languages (neumorphism, glass, neo-brutalism, Swiss, print — see [section-glass.md](./section-glass.md)), **brand blue** `#0075FF`.
- **Audience:** Independent LOs and brokers; practitioner tone per [Web 1.docx](./Web%201.docx); interactive demo per [Web 2.docx](./Web%202.docx).
- **Motion:** Sections use `whileInView` for scroll-triggered motion; hero strip uses CSS-driven ECG drift and ticker marquee (see [hero-session-pulse.md](./hero-session-pulse.md)).
- **Accessibility:** Landmark sections include headings and `aria-labelledby` where appropriate; decorative layers use `aria-hidden`.

## Lint

```bash
npm run lint
```
