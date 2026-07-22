# Central Loan Memory section

Dedicated marketing section (`#memory`) in [CentralLoanMemorySection.tsx](../src/components/CentralLoanMemorySection.tsx). Rendered in [App.tsx](../src/App.tsx) after **ProblemSection** and before **Features**.

## Purpose

Presents **Central Loan Memory** as Mooric ERP’s core differentiator — not buried in the feature grid. Copy explains how the system retains full borrower context as documents arrive, contrasts with step-by-step task tools, and highlights the practical outcome (~1 hr saved per file) plus compliance logging.

## Final layout

Uses the **A+B hybrid** concept: a section header above a split comparison card. The left panel shows the “Without memory” story with intro copy, a “Last document wins” callout, and a single fragmented diagram labeled **Disconnected steps** — each track node includes a concrete reset example (pay stub upload, conditions sheet, closing checklist), slight horizontal stagger, and a **Borrower context — lost** capstone. The right panel shows the “With Mooric” story with a connected living-record spine diagram and the Central Loan Memory core.

The full-width bottom strip is a two-column payoff: `~1 hr` time-saved via `MemoryStatBlock compact`, plus **Compliance-ready by design**.

## Look (standalone-aligned)

- Section surface: `#f4f6f9` with cool slate/silver washes + noise grain (matches standalone `#memory`)
- Cool slate type tokens (`#0f172a`, `#334155`, `#64748b` / slate) and blue accent `#2563eb`
- Tighter diagram spacing, 16px icons, 30–32px node rings
- Recommendation callout: blue-tinted border/fill (`#2563eb` at low opacity)

## Implementation notes

- `ConceptSplitLivingRecord` is the only rendered layout (structure unchanged).
- `LivingRecordDiagram` supports `connected` and `fragmented` variants for the right and left panels.
- `id="memory-heading"` lives on the final section heading and is referenced by the `#memory` section’s `aria-labelledby`.

## Shared content

- **Eyebrow:** `02 · Core differentiator`
- **Headline:** Central Loan Memory
- **Contrasts:** 3 steps (separate tasks → Central Loan Memory → full-file recommendations)
- **Tracks:** 1003, Conditions, Closing
- **Stat:** `~1 hr` saved per file on loan structuring
- **Compliance:** Every document / field / update logged against the file for auditor / investor / underwriter questions

## Navigation

Header link: **Why Mooric** → `#memory`  
Problem section CTA: **See how ↓** → `#memory`

## Content source

Standalone Mooric ERP landing (`#memory` / Core differentiator).
