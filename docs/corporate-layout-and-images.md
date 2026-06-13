# Corporate top navigation and imagery

## Layout

- **Global header:** Sticky top bar (`Header.tsx`) — **opaque `bg-white`**, full width (`w-full min-w-0`), soft **double shadow** so it stays readable over **dark hero / slate strips** without translucent blur. **Brand:** **`mooring-small-logo.png`** plus **Mooring ERP** wordmark (**Mooring** in organ, **ERP** in **`#1e70d6`**) beside it, nav **`font-medium text-organ-800`**, **`.btn-primary-gold`** for briefing. The inner row uses **`.layout-header`** (fluid full width, no `max-w` cap — see [layout-shell.md](./layout-shell.md)) with **`justify-between`** and **`xl:gap-x-6`**: brand stays **left**, **nav + briefing** stay **right** from **`xl`** up with **`xl:ml-10` / `2xl:ml-14` / `min-[1800px]:ml-20`** on the link cluster (below **`xl`**, the **drawer** pattern is used — see [mobile-nav-and-layout.md](./mobile-nav-and-layout.md)). The integrated hero uses **`.layout-header-px`** on full-bleed rows so **session chrome** lines up with this rail.
- **Breakpoints:** Primary navigation shows from **`xl`** up; narrower viewports use the **drawer** pattern (see [mobile-nav-and-layout.md](./mobile-nav-and-layout.md)).
- **Page shell:** Single-column `App` — `Header`, then `main` (`Hero` → `Features` → `Workflow` → **`HeroMotionBand`** (full motion band) → `StatsSection` → `ContactCTA`), then `Footer`. No sidebar rail.

## Typography (corporate)

- **Editorial headings:** `font-serif` — **Source Serif 4** (loaded in `index.html`, extended in `tailwind.config.js`).
- **Navigation and UI:** Inter; header brand lockup is **Mooring ERP** (`mooring-small-logo.png` + styled text in `Header.tsx`).

## Imagery & hero visuals

| Location | Source | Notes |
| --- | --- | --- |
| Hero (instrument) | `HeroSessionPulse` `variant="integrated"` + **`children`** | One full-bleed dark slab: session bar, AI + ECG, then **hero copy** (gold accents, slate type) in the same column, then shimmers + tagline. |
| Hero (motion band) | `HeroMotionBand.tsx` (in **`App.tsx`** after `Workflow`) | Full strip: `HeroLattice` grid, noise, blobs, scan line, **Mooring ERP** wordmark, mortgage caption; extra **gold** radials in the slate base. Honors `prefers-reduced-motion`. |
| Features (leadership) | Unsplash (boardroom) | Remote URL in `Features.tsx`; **`alt`** on the image describes the scene (no visible caption). |
| Workflow (operations) | Unsplash (team collaboration) | Remote URL in `Workflow.tsx`; caption in `figcaption`. |

To replace stock photography, drop files under `public/images/` and update the `src` (and `alt` / caption) in the corresponding component.

## Files

- `src/components/Header.tsx` — corporate top navigation.
- `src/components/Hero.tsx` — dark hero; top **`pt-5 md:pt-7`** + **`scroll-mt-24`** so content clears the sticky header; **`HeroSessionPulse`** + copy only (no motion band).
- `src/components/HeroSessionPulse.tsx` — session pulse (`integrated` in hero).
- `src/components/HeroLattice.tsx` — gold diagonal lattice SVG (used inside **`HeroMotionBand`**).
- `src/components/HeroMotionBand.tsx` — full lattice / motion / **Mooring ERP** block.
- `src/App.tsx` — page shell; **`HeroMotionBand`** after **`Workflow`**, before **`StatsSection`**.
- `src/components/Features.tsx` — platform pillars (`#platform`); full-width **footer band** below the four cards (organ wash + **single gold gradient hairline**, generous vertical padding) before **`Workflow`**.
- `src/components/Workflow.tsx` — workflow steps (`#workflow`) with figure caption.
