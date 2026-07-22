# Mobile navigation and layout

## Header (`Header.tsx`)

- **Breakpoint:** Primary nav and desktop CTAs use **`min-[1440px]`**; the menu control and overlay are **`min-[1440px]:hidden`** below that. Mid-width laptops (1280–1439) use the drawer so the bar does not cram logo + four links + CTA.
- **Density when desktop nav is visible:**
  - **1440–1799:** compact — nav `px-2 py-1.5 text-[13px]`, tighter gaps, CTA `px-3 py-2 text-[13px]`, slightly smaller wordmark, `ml-6` on the nav cluster
  - **`min-[1800px]`:** roomier — `px-3 py-2 text-sm`, larger logo tile, `ml-14` / wider gaps
- **Viewport growth:** A **`matchMedia("(min-width: 1440px)")`** listener closes the drawer when the window crosses into desktop width so the sheet does not stay open after resize.
- **Control:** Icon button (hamburger / close) with `aria-expanded`, `aria-controls="mobile-nav-panel"`, and `aria-label` for open vs close.
- **Panel:** `role="dialog"` with `aria-modal="true"` and `aria-label="Site navigation"`. A full-area **dimmed backdrop** (`bg-organ-950/45`) sits under the sheet; clicking it closes the menu.
- **Mounting:** Menu is rendered with **`createPortal(..., document.body)`** so it sits above the sticky header and the rest of the page (`z-[200]`). The overlay is **`fixed inset-0`** (full viewport), not only below the header bar.
- **Sheet:** Right drawer, `w-[min(100%,20rem)]`, scrollable nav, **safe area** padding via `env(safe-area-inset-right)`, `env(safe-area-inset-top)`, and `env(safe-area-inset-bottom)`.
- **Drawer chrome:** Top row labels **Menu** and includes an in-drawer **Close** control (header toggle is covered while open).
- **Keyboard:** **Escape** closes the menu (`keydown` listener while open).
- **Scroll lock:** `document.body.style.overflow = "hidden"` while the menu is open.
- **Primary links (desktop + mobile):** **Why Mooric** (`#memory`), **Features** (`#features`), **Pipeline** (`#pipeline`), **Team** (`#team`). The interactive demo is inline in the hero, so there is no "How it works" link; LO Personal Assistant and Contact have no separate nav item. Logo links to `#top`.
- **Mobile links:** Same anchors as desktop, plus **Get early access — first month free** (opens the contact modal).

## Site shell

- **`App.tsx`:** Horizontal clipping uses **`overflow-x-hidden` on `<main>` only** (not the outer flex wrapper that contains **`Header`**). Putting `overflow-x-hidden` on that parent breaks **`position: sticky`** for the header in common browser behavior, so the nav would scroll off-screen on mobile.
- **`index.html`:** Viewport includes `viewport-fit=cover` so safe-area env vars apply on notched devices.

## Section tweaks

- **Hero:** CTA row stacks full-width buttons on small screens (`flex-col` → `sm:flex-row`).
- **Workflow:** “Pipeline snapshot” stats card is **visible on all breakpoints** (previously `hidden` until `lg`).
- **HeroMotionBand:** “Mooric ERP” headline scales down on small viewports with tighter letter-spacing to avoid overflow.
- **Features / Workflow:** Replaced invalid **`organ-300`** utilities (not in `tailwind.config.js`) with defined steps such as **`organ-200`** where needed. On **`marble-slate`**, avoid **`organ-400`**–**`500`** (also undefined) so text does not inherit an unreadable default color — see [workflow-pipeline-snapshot.md](./workflow-pipeline-snapshot.md).
