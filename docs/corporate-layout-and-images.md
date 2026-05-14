# Corporate top navigation and imagery

## Layout

- **Global header:** Sticky top bar (`Header.tsx`) — **opaque `bg-white`**, soft **double shadow** so it stays readable over **dark hero / slate strips** without translucent blur. **`LogoMark`** with **`surface="dark"`** and **`navBorder`** (footer-style slate panel + bars, **thin `border-organ-200`** frame), nav **`font-medium text-organ-800`**, **`.btn-primary-gold`** for briefing.
- **Breakpoints:** Primary navigation and utilities show from `md` and up; smaller viewports use a **Menu** toggle that opens a full-screen overlay panel (body scroll locked while open).
- **Page shell:** Single-column `App` — `Header`, then `main` (`Hero` → `Features` → `Workflow` → **`HeroMotionBand`** (full motion band) → `StatsSection` → `ContactCTA`), then `Footer`. No sidebar rail.

## Typography (corporate)

- **Editorial headings:** `font-serif` — **Source Serif 4** (loaded in `index.html`, extended in `tailwind.config.js`).
- **Navigation and UI:** Inter; wordmark continues to use Montserrat in the header lockup.

## Imagery & hero visuals

| Location | Source | Notes |
| --- | --- | --- |
| Hero (instrument) | `HeroSessionPulse` `variant="integrated"` + **`children`** | One full-bleed dark slab: session bar, AI + ECG, then **hero copy** (gold accents, slate type) in the same column, then shimmers + tagline. |
| Hero (motion band) | `HeroMotionBand.tsx` (in **`App.tsx`** after `Workflow`) | Full strip: `HeroLattice` grid, noise, blobs, scan line, **BaseReality** wordmark, mortgage caption; extra **gold** radials in the slate base. Honors `prefers-reduced-motion`. |
| Features (leadership) | Unsplash (boardroom) | Remote URL in `Features.tsx`; caption in `figcaption` beside the heading column. |
| Workflow (operations) | Unsplash (team collaboration) | Remote URL in `Workflow.tsx`; caption in `figcaption`. |

To replace stock photography, drop files under `public/images/` and update the `src` (and `alt` / caption) in the corresponding component.

## Files

- `src/components/Header.tsx` — corporate top navigation.
- `src/components/Hero.tsx` — dark hero; **`HeroSessionPulse`** + copy only (no motion band).
- `src/components/HeroSessionPulse.tsx` — session pulse (`integrated` in hero).
- `src/components/HeroLattice.tsx` — gold diagonal lattice SVG (used inside **`HeroMotionBand`**).
- `src/components/HeroMotionBand.tsx` — full lattice / motion / **BaseReality** block.
- `src/App.tsx` — page shell; **`HeroMotionBand`** after **`Workflow`**, before **`StatsSection`**.
- `src/components/Features.tsx` — platform pillars (`#platform`); full-width **footer band** below the four cards (organ wash + **single gold gradient hairline**, generous vertical padding) before **`Workflow`**.
- `src/components/Workflow.tsx` — workflow steps (`#workflow`) with figure caption.
