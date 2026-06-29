# Central Loan Memory section

Dedicated marketing section (`#memory`) in [CentralLoanMemorySection.tsx](../src/components/CentralLoanMemorySection.tsx). Rendered in [App.tsx](../src/App.tsx) after the hero and before **Features**.

## Purpose

Presents **Central Loan Memory** as Mooric ERP’s core differentiator — not buried in the feature grid. Copy explains how the system retains full borrower context as documents arrive, contrasts with step-by-step task tools, and highlights the practical outcome (~1 hr saved per file on loan structuring).

## Final layout

Uses the **A+B hybrid** concept: a section header above a split comparison card. The left panel shows the “Without memory” story with intro copy, a “Last document wins” callout, and a single fragmented diagram labeled **Disconnected steps** — each track node includes a concrete reset example (pay stub upload, conditions sheet, closing checklist), slight horizontal stagger, and a **Borrower context — lost** capstone. The right panel shows the “With Mooric” story with a connected living-record spine diagram and the Central Loan Memory core.

The full-width bottom strip contains the `~1 hr` payoff via `MemoryStatBlock compact`.

## Implementation notes

- `ConceptSplitLivingRecord` is the only rendered layout.
- `LivingRecordDiagram` supports `connected` and `fragmented` variants for the right and left panels.
- `id="memory-heading"` lives on the final section heading and is referenced by the `#memory` section’s `aria-labelledby`.

## Shared content

- **Eyebrow:** Core differentiator
- **Headline:** Central Loan Memory
- **Contrasts:** 3 steps (separate tasks → Central Loan Memory → full-file recommendations)
- **Tracks:** 1003, Conditions, Closing
- **Stat:** `~1 hr` saved per file on loan structuring

## Navigation

Header link: **Why Mooric** → `#memory`  
Hero CTA: **See why it's different** → `#memory`

## Content source

Copy direction from [Web 1.docx](./Web%201.docx) — “Core differentiator — Central Loan Memory.”
