# Pipeline section

Pipeline management section (`#pipeline`) in [PipelineSection.tsx](../src/components/PipelineSection.tsx). Replaces the former **Workflow** component. Rendered after **Features** and before **LO Personal Assistant**.

## Purpose

Speaks to independent Loan Officers who manage pipelines across spreadsheets and sticky notes. Three timeline steps plus a closed-loan performance callout.

## Content blocks

| Block | Message |
|-------|---------|
| Full pipeline visibility | Prospect → funded, one screen, no manual spreadsheet date columns |
| Daily summary | Overdue conditions, TRID deadlines, stale files — start day with focus |
| Closed loan performance | Volume, avg loan size, time to close by month/quarter/year |
| Dark callout card | Example production metrics (illustrative) — **light** card with **`text-erp`** accents |

## Layout

- **Surface:** **`bg-organ-50`** with **`border-t border-organ-200`** and **`py-28 sm:py-40`** — faint tint alternates with adjacent white sections (Features, Assistant) without stacking marble texture against **Central Loan Memory** above
- **Header:** Eyebrow `Pipeline` + serif headline + intro (shared section-header pattern)
- Two-column grid: intro + Unsplash operations image on the left, numbered timeline on the right
- Full-width **white** card below for closed-loan performance (`bg-white`, `border-organ-200`, blue metric values) — pops on the tinted band

## Navigation

Reached by scrolling past **Features** — no dedicated header link. Anchor: `#pipeline`.

## Content source

Copy direction from [Web 1.docx](./Web%201.docx) — “Pipeline Management — no more Excel tracking.”
