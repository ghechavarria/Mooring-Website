# Mooric pipeline example panel (`MooricPipelineExamplePanel.tsx`)

Decorative product mock for the Pipeline section, ported from the standalone landing `#pipeline` figure (`app.mooricerp.com/pipeline`).

## Placement

Wired in [PipelineSection.tsx](../src/components/PipelineSection.tsx) after the intro + steps grid and before the production glance card (same order as the standalone page). No stock photo.

## Behavior

Same scale-to-fit pattern as [mooric-loan-example-panel.md](./mooric-loan-example-panel.md):

- Fixed **1160px** design stage
- `ResizeObserver` scales the stage to the shell width (`scale = frameWidth / 1160`)
- Height compensated so growing/shrinking does not leave gaps

## Contents

- Browser chrome URL: `app.mooricerp.com/pipeline`
- Origination sidebar with Loan Pipeline active
- Pipeline list: Maria Chen, David Okafor, Priya Nair with status badges and closing dates

Decorative only — not a live app embed.
