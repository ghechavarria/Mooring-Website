# Before/After demo (`BeforeAfterDemo.tsx`)

Interactive toggle demo per [Web 2.docx](./Web%202.docx). **Embedded in the hero** at `#demo` — not a standalone section.

## Purpose

Shows the transformation from how Loan Officers and processors work today versus with Mooric ERP. The visual is the message — same four borrowers (Johnson, Martinez, Kim, Williams) appear in both views.

## Exports

| Export | Use |
| --- | --- |
| `InteractiveDemoCard` | Full interactive card (tabs + panels); used in [Hero.tsx](../src/components/Hero.tsx) |
| `DemoAppWindow` | Optional browser chrome wrapper around the card |
| `AfterPanel` / `BeforePanel` | Panel content |
| `BeforeAfterDemo` | Legacy section wrapper (unused in [App.tsx](../src/App.tsx); kept for reference) |

## Layout

- **Window chrome bar:** segmented toggle (Before / After) only — no “Click to compare” hint
- **Card:** `rounded-xl border border-organ-200/90 bg-white shadow-card-md`
- Default view in hero: **After Mooric** (`defaultView="after"` on `InteractiveDemoCard`)
- **Capped height on `md+`:** tab panel uses `md:h-[30rem] lg:h-[36rem] xl:h-[42rem]` with `md:overflow-y-auto` so the demo scrolls internally and the pinned hero (two-column from `md`) keeps the blue tagline strip at the viewport bottom

## Responsiveness (container queries)

The card root (`InteractiveDemoCard`) is a **`@container`**, so the panels adapt to the **card's own width**, not the viewport. This matters because the demo sits in the hero's two-column grid on `lg+`, where it is only ~half the viewport wide. Uses the `@tailwindcss/container-queries` plugin (registered in [tailwind.config.js](../tailwind.config.js)).

- **Chrome:** tab labels shrink padding below `@sm`.
- **Before folders:** `grid` → `@md:grid-cols-2` → `@xl:grid-cols-3` (stack when the card is narrow).
- **Before tracker table:** `min-w-[36rem]` with `overflow-x-auto` — scrolls horizontally on narrow cards.
- **After panel:** uses viewport breakpoints — single column, becomes `md:grid-cols-[0.85fr_1.15fr]` at the `md` viewport. The animated panel wrapper and After panel both use `h-full`, so the dashboard stretches into the fixed demo height instead of clustering at the top:
  - Outer wrapper: `flex h-full flex-col gap-3 p-3 sm:p-4`
  - Search bar: `py-2`, placeholder `text-xs`
  - Column grid: `flex-1 gap-3`; right column uses `grid gap-3 md:grid-rows-[0.9fr_1.1fr]`
  - Sub-cards (Pipeline, Key dates, Documents): `flex flex-col`, uniform `p-3`, section titles `text-[13px]`, inner lists `mt-3 flex-1 space-y-2`
  - Pipeline loan items: `py-2`, loan names `text-[13px]`

## Interaction

- Toggle: **Before Mooric** | **After Mooric** (folder / sparkle icons in chrome bar)
- Panel swaps with short fade (`framer-motion`); respects `prefers-reduced-motion`
- Accessible: `role="tablist"` / `role="tabpanel"`, `aria-selected` on tabs; `idPrefix` prop keeps tab IDs unique per instance

## Before panel

- **Before panel:** uses container-query variants so it fits the card width at any viewport. The card root carries **`min-w-0`** (and the hero demo wrapper too) so the wide tracker table's `overflow-x-auto` is contained instead of forcing the layout wider than the screen.
  - Caption: files scattered across folders; dates in a separate Excel sheet.
- **Three folder cards** (amber folder icon, file count badge): Johnson docs, Martinez - refi, Kim Purchase NEW — each lists messy filenames from the brief.
- **Excel tracker:** green title bar `Pipeline tracker v3 FINAL (2).xlsx`, table with Borrower / App date / LE sent / CTC target / HOA due / Status and color-coded cells (`TBD`, `OVERDUE`, `??`, etc.). Horizontal scroll on narrow viewports.

## After panel

- **Search bar:** “Search any loan, document, or date…” (`text-xs`, compact `py-2` padding)
- **Two columns** (stack on mobile; denser spacing than Before panel):
  - **Pipeline** (4 active): loan cards with status pills; Johnson selected (`border-erp bg-erp/5`).
  - **Loan detail:** Key dates for Johnson, Michael (Done / Overdue / days remaining pills) + Documents (4 files · AI classified, Verified / Review).

## Entry point

[Hero.tsx](../src/components/Hero.tsx) hosts `#demo` inside the hero. The demo is shown inline, so there is no nav link to it; the hero's **See why it's different** CTA points to `#memory`.

## Content source

[Web 2.docx](./Web%202.docx) — Interactive Before/After Demo brief.
