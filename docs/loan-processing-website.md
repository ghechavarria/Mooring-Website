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
| `index.html` | HTML shell, fonts, page title, meta description, **hidden Netlify form**, **PNG favicon** (`/images/square-logo-color-bkgrnd.png` — see [favicon.md](./favicon.md)) |
| `src/main.tsx` | React bootstrapping |
| `src/App.tsx` | Section order; wrapped in **`ContactModalProvider`**; **`ContactFormModal`** at root |
| `src/context/ContactModalContext.tsx` | Shared `openContactModal` / `closeContactModal` state |
| `src/index.css` | Tailwind layers; **`#root`** flex column + **`html`/`body`** `w-full`; **`.btn-primary-silver`**, **`.layout-shell`**, **`.layout-header`** / **`.layout-header-px`**, ECG / AI utilities |
| `src/components/Header.tsx` | Sticky top navigation; brand tile **`/images/square-logo-blue.svg`** beside wordmark |
| `src/components/Hero.tsx` | Light hero (`#top`) with dark **`HeroSessionPulse`** monitor strip + LO-focused headline on white |
| `src/components/HeroSessionPulse.tsx` | Session pulse strip (integrated hero + optional panel variant) |
| `src/components/BeforeAfterDemo.tsx` | Interactive before/after toggle (`#demo`) — [before-after-demo.md](./before-after-demo.md) |
| `src/components/Features.tsx` | Core value props (`#features`) — [features-workflow-imagery.md](./features-workflow-imagery.md) |
| `src/components/CentralLoanMemorySection.tsx` | Central Loan Memory differentiator (`#memory`) — [central-loan-memory-section.md](./central-loan-memory-section.md) |
| `src/components/PipelineSection.tsx` | Pipeline management (`#pipeline`) — [pipeline-section.md](./pipeline-section.md) |
| `src/components/LOPersonalAssistantSection.tsx` | LO Personal Assistant (`#assistant`) — [lo-personal-assistant-section.md](./lo-personal-assistant-section.md) |
| `src/components/HeroMotionBand.tsx` | Full-bleed motion band between product sections and Team |
| `src/components/HeroLattice.tsx` | Decorative silver lattice SVG inside the motion band |
| `src/components/TeamSection.tsx` | Team roster (`#team`); portraits + role titles — [team-section.md](./team-section.md) |
| `src/components/ContactCTA.tsx` | Contact band (`#contact`); opens contact modal |
| `src/components/ContactFormModal.tsx` | Netlify contact form popup — [contact-form-modal.md](./contact-form-modal.md) |
| `src/components/Footer.tsx` | Footer links and branding |

## Section order (`App.tsx`)

1. Header
2. Hero (`#top`)
3. Before/After demo (`#demo`)
4. Central Loan Memory (`#memory`)
5. Features (`#features`)
6. Pipeline (`#pipeline`)
7. LO Personal Assistant (`#assistant`)
8. HeroMotionBand (decorative)
9. Team (`#team`)
10. Contact (`#contact`)
11. Footer

## Header navigation

| Label | Anchor |
|-------|--------|
| How it works | `#demo` |
| Why Mooric | `#memory` |
| Features | `#features` |
| Team | `#team` |

The nav matches scroll order: proof (demo) → differentiator (memory) → product capabilities (features, then pipeline and assistant by scrolling) → company (team). Logo links to `#top`. Pipeline and Assistant have no dedicated nav item.

Footer mirrors the same four section anchors; Security / Privacy / Status remain placeholder `#` links.

CTA: **Request a briefing** → opens contact modal (see [contact-form-modal.md](./contact-form-modal.md))

## Design notes

- **Brand:** Mooric ERP — predominantly **light** marketing surface (white / cool `organ` neutrals), **brand blue** `#0075FF` on light sections, **dark** signature bands for the hero pulse strip and **HeroMotionBand** lattice.
- **Audience:** Independent LOs and brokers; practitioner tone per [Web 1.docx](./Web%201.docx); interactive demo per [Web 2.docx](./Web%202.docx).
- **Motion:** Sections use `whileInView` for scroll-triggered motion; hero strip uses CSS-driven ECG drift and AI orb pulse (see [hero-session-pulse.md](./hero-session-pulse.md)).
- **Accessibility:** Landmark sections include headings and `aria-labelledby` where appropriate; decorative layers use `aria-hidden`.

## Lint

```bash
npm run lint
```
