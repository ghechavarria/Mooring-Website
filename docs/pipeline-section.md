# Pipeline section

Pipeline management section (`#pipeline`) in [PipelineSection.tsx](../src/components/PipelineSection.tsx). Replaces the former **Workflow** component. Rendered after **Central Loan Memory** and before **LO Personal Assistant**.

## Purpose

Speaks to independent LOs who manage pipelines across spreadsheets and sticky notes. Three timeline steps plus a closed-loan performance callout.

## Content blocks

| Block | Message |
|-------|---------|
| Full pipeline visibility | Prospect → funded, one screen, no manual spreadsheet date columns |
| Daily summary | Overdue conditions, TRID deadlines, stale files — start day with focus |
| Closed loan performance | Volume, avg loan size, time to close by month/quarter/year |
| Dark callout card | Example production metrics (illustrative) |

## Layout

- Two-column grid: intro + Unsplash operations image on the left, numbered timeline on the right
- Full-width dark **marble-slate** card below for closed-loan performance

## Navigation

Header link: **Pipeline** → `#pipeline`

## Content source

Copy direction from [Web 1.docx](./Web%201.docx) — “Pipeline Management — no more Excel tracking.”
