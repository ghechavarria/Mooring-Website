# Features & Workflow section

Marketing section in [`Features.tsx`](../src/components/Features.tsx): intro → Mooric loan example panel → four-quadrant process grid.

## Section header

- **Eyebrow:** `02 · Broker-side process` (mono, `text-erp`)
- **Headline:** “The work you do every day — without the manual overhead.”
- Supporting copy covers application → program fit → conditions → closing deadlines

## Feature grid

2×2 cells (`sm:grid-cols-2`) with `border-organ-200` dividers. Each cell has a unique stage eyebrow (not shared duplicates):

| Stage | Headline |
| --- | --- |
| Loan application | Complete loan application, faster |
| Program matching | Fit the borrower to the right program |
| Conditions | Condition tracking |
| Closing deadlines | TRID, Title, HOI, and Appraisal tracking |

Spacing: stage → title `mt-5`, title → body `mt-4`. Section uses `pb-0` so the 2×2 grid borders meet `#pipeline` with no empty white band below the cells.

## Example panel

Constrained mock UI under the intro; see [mooric-loan-example-panel.md](./mooric-loan-example-panel.md).
