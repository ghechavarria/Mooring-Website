# Before/After demo (`BeforeAfterDemo.tsx`)

Interactive toggle section (`#demo`) per [Web 2.docx](./Web%202.docx). Rendered in [App.tsx](../src/App.tsx) immediately after **Hero** and before **Central Loan Memory**.

## Purpose

Shows the transformation from how LOs and processors work today versus with Mooric ERP. The visual is the message — same four borrowers (Johnson, Martinez, Kim, Williams) appear in both views.

## Layout

- **Window chrome bar** at top of the mock app: segmented toggle (Before / After), “Click to compare” hint, decorative dots.
- **Panel width:** `max-w-4xl` app-window card with border and shadow.
- Default view: **Before Mooric**.

## Interaction

- Toggle: **Before Mooric** | **After Mooric** (folder / sparkle icons in chrome bar)
- Panel swaps with short fade (`framer-motion`); respects `prefers-reduced-motion`
- Accessible: `role="tablist"` / `role="tabpanel"`, `aria-selected` on tabs

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

[Hero.tsx](../src/components/Hero.tsx) **See how it works** CTA scrolls to `#demo`.

## Content source

[Web 2.docx](./Web%202.docx) — Interactive Before/After Demo brief.
