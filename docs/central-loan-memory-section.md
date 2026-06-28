# Central Loan Memory section

Dedicated marketing section (`#memory`) in [CentralLoanMemorySection.tsx](../src/components/CentralLoanMemorySection.tsx). Rendered in [App.tsx](../src/App.tsx) after the hero and before **Features**.

## Purpose

Presents **Central Loan Memory** as Mooric ERP’s core differentiator — not buried in the feature grid. Copy explains how the system retains full borrower context as documents arrive, contrasts with step-by-step task tools, and highlights the practical outcome (~1 hour saved per file on loan structuring).

## Layout

1. **Intro** — centered headline + body on the **marble-organ-light** band (`text-erp` eyebrow, serif `h2`). Bridge line: *“From application through closing — one living record.”*
2. **`MemoryTrackPanel`** — white divided panel (`shadow-card-md`) on the marble texture, between intro and contrast cards:
   - Header eyebrow: **What memory keeps on track**
   - Three cells: **1003**, **Conditions**, **Closing** — icon tile + bold `text-erp` label + supporting caption
   - `sm:grid-cols-3` with hairline dividers; `py-10 sm:py-12` cell padding
3. **Contrast cards** — three white cards with **`border-t-erp`** accent explaining why memory is different
4. **~1 hr callout** — light card with blue border for per-file savings on loan structuring

## Navigation

Header link: **Why Mooric** → `#memory`  
Hero CTA: **See why it's different** → `#memory`

## Content source

Copy direction from [Web 1.docx](./Web%201.docx) — “Core differentiator — Central Loan Memory.”
