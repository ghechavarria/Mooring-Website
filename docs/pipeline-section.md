# Pipeline section

Pipeline management section (`#pipeline`) in [PipelineSection.tsx](../src/components/PipelineSection.tsx). Replaces the former **Workflow** component. Rendered after **Features** and before **LO Personal Assistant**.

## Purpose

Speaks to independent LOs and broker shops who manage pipelines across spreadsheets and sticky notes. Framed as **CLOSED — Pipeline & production** (stage label from the broker-side process). Three timeline steps plus a closed-loan performance callout.

## Content blocks

| Block | Message |
|-------|---------|
| Full pipeline visibility | Prospect → funded, one screen, no manual spreadsheet date columns |
| Daily summary | Overdue conditions, TRID deadlines, stale files — start day with focus |
| Closed loan performance | Volume, avg loan size, time to close by month/quarter/year |
| Dark callout card | Example production metrics (illustrative) — **light** card with **`text-erp`** accents |

## Layout

- **Surface:** **`bg-organ-50`** with **`border-t border-organ-200`** and **`py-28 sm:py-40`** — faint tint alternates with adjacent white sections
- **Header:** Eyebrow `04 · Closed` (mono, normal weight) + serif headline `CLOSED — Pipeline & production` + intro (Excel/spreadsheet tracking; end-to-end single view — not “replaces your LOS”)
- Two-column grid: intro copy on the left, numbered timeline on the right
- Mooric pipeline example panel underneath (scale-to-fit mock; see [mooric-pipeline-example-panel.md](./mooric-pipeline-example-panel.md))
- Production glance card below the panel
- Full-width **white** card below for closed-loan performance (`bg-white`, `border-organ-200`, blue metric values) — pops on the tinted band

## Navigation

Reached by scrolling past **Features** — no dedicated header link. Anchor: `#pipeline`.

## Content source

Web4 repositioning + earlier pipeline copy — stage-framed as Closed within the broker-side process.
