# Before/After demo (`BeforeAfterDemo.tsx`)

Interactive toggle demo per [Web 2.docx](./Web%202.docx). **Embedded in the hero** at `#demo` — not a standalone section.

## Purpose

Shows the transformation from how LOs and processors work today versus with Mooric ERP. The visual is the message — same four borrowers (Johnson, Martinez, Kim, Williams) appear in both views.

## Exports

| Export | Use |
| --- | --- |
| `InteractiveDemoCard` | Full interactive card (tabs + panels); used in [Hero.tsx](../src/components/Hero.tsx) |
| `DemoAppWindow` | Optional browser chrome wrapper around the card |
| `AfterPanel` / `BeforePanel` | Panel content |
| `BeforeAfterDemo` | Legacy section wrapper (unused in [App.tsx](../src/App.tsx); kept for reference) |

## Layout

- **Window chrome bar:** segmented toggle (Before / After), “Click to compare” hint
- **Card:** `rounded-xl border border-organ-200/90 bg-white shadow-card-md`
- Default view: **Before Mooric**
- In hero: wrapped in `DemoAppWindow` for app-window framing

## Interaction

- Toggle: **Before Mooric** | **After Mooric** (folder / sparkle icons in chrome bar)
- Panel swaps with short fade (`framer-motion`); respects `prefers-reduced-motion`
- Accessible: `role="tablist"` / `role="tabpanel"`, `aria-selected` on tabs; `idPrefix` prop keeps tab IDs unique per instance

## Before panel

- Caption: files scattered across folders; dates in a separate Excel sheet.
- **Three folder cards** (amber folder icon, file count badge): Johnson docs, Martinez - refi, Kim Purchase NEW — each lists messy filenames from the brief.
- **Excel tracker:** green title bar `Pipeline tracker v3 FINAL (2).xlsx`, table with Borrower / App date / LE sent / CTC target / HOA due / Status and color-coded cells (`TBD`, `OVERDUE`, `??`, etc.). Horizontal scroll on narrow viewports.

## After panel

- **Search bar:** “Search any loan, document, or date…”
- **Two columns** (stack on mobile):
  - **Pipeline** (4 active): loan cards with status pills; Johnson selected (`border-erp bg-erp/5`).
  - **Loan detail:** Key dates for Johnson, Michael (Done / Overdue / days remaining pills) + Documents (4 files · AI classified, Verified / Review).

## Entry point

[Hero.tsx](../src/components/Hero.tsx) hosts `#demo`. **See how it works** and nav **How it works** scroll to the interactive card.

## Content source

[Web 2.docx](./Web%202.docx) — Interactive Before/After Demo brief.
