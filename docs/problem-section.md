# Problem section (`ProblemSection.tsx`)

Dark “The problem” slab that sits between the hero and Central Loan Memory. Ported from the standalone Mooric ERP landing page (`#problem`).

## Purpose

One job: name the overhead that eats an independent LO’s day, then point into **Central Loan Memory** as the answer.

## Placement

Wired in [`src/App.tsx`](../src/App.tsx):

`Hero` → **`ProblemSection`** → `CentralLoanMemorySection` → …

## Content

- **Eyebrow:** `01 · The problem` (mono, `text-erp`)
- **Headline:** Where does your day actually go? (`font-serif`, `text-ink-950`)
- **Support:** Overhead between borrowers / guidelines / deals; same file handled five ways in five places
- **Four metric cards** (silver-gray tabular stats, `text-slate-500`):
  - **3×** — The same data, re-typed
  - **17** — Emails to clear one condition
  - **5+** — Tools that don't talk
  - **9 PM** — When you find out something slipped
- **CTA bar:** “None of this is loan officer work…” + **See how ↓** → `#memory`

## Surface

- Section: light cool base `#ebf0f9` with a mixed darker blue-gray gradient (`#d8e0ef` / `#c9d4e8`), `border-organ-200/90`, `py-28 sm:py-40`, `scroll-mt-8`
- Cards: `bg-white/80 border-organ-200/90`; hover `border-erp/50`, blue glow shadow, and a soft `from-erp/15 via-sky-400/10` gradient wash
- CTA panel: `bg-white/75 border-organ-200/90`
- Layout: `.layout-shell`; cards/CTA capped at `max-w-[1160px]`
- Motion: Framer `whileInView` / card `whileHover` lift (same pattern as Features)

## Files

- [`src/components/ProblemSection.tsx`](../src/components/ProblemSection.tsx)
- [`src/App.tsx`](../src/App.tsx)
