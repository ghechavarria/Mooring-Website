# Features & Workflow section

Marketing section in [`Features.tsx`](../src/components/Features.tsx): intro → Mooric loan example panel → four-quadrant process grid.

## Section header

- **Eyebrow:** `02 · Broker-side process` (mono, `text-erp`)
- **Headline:** “The work you do every day — without the manual overhead.”
- Supporting copy covers application → program fit → conditions → closing deadlines

## Feature grid

Staggered hanging-file sheets (`sm:grid-cols-2`) with generous gaps. Each file is unique:

- **Offset tabs** (left / inner-right / inner-left / right) like a real hanging-file drawer, Inter labels with a stage icon
- **Stacked sheets** behind a near-white body (`rgb(255 255 255 / 0.92)`) with an ERP-blue hairline
- **Stage marks** — document, search, checklist, calendar — on a stronger ERP wash
- Tabs are solid white with ERP tick and label

| Stage | Headline |
| --- | --- |
| Loan application | Complete loan application, faster |
| Program matching | Fit the borrower to the right program |
| Conditions | Condition tracking |
| Closing deadlines | TRID, Title, HOI, and Appraisal tracking |

Spacing: title → body `mt-5`. Extra room between intro, example panel, and file grid. Section padding `pb-40 sm:pb-48` on top of `.section-marketing` (`py-36 sm:py-44`). See [section-glass.md](./section-glass.md).

## Workspace scribble

Red marker note in the open space right of the intro body: **your future workspace**, Caveat handwriting, slight tilt, curved arrow pointing at the loan mock. Hidden below 900px so it does not crowd the copy. Decorative (`aria-hidden`). See [features-workspace-scribble.md](features-workspace-scribble.md).

## Example panel

Constrained mock UI under the intro; see [mooric-loan-example-panel.md](./mooric-loan-example-panel.md).
