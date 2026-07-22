# Broker process-flow section

Four-stage loan journey (`#process`) in [`BrokerProcessFlowSection.tsx`](../src/components/BrokerProcessFlowSection.tsx). Rendered after the hero; the [LOS compatibility strip](./los-compatibility-strip.md) follows immediately underneath.

## Purpose

Positions Mooric as **one workspace for the entire broker-side process** — stages inside one system, not standalone features.

## Stages

| Stage | Line |
|-------|------|
| Prospect | Every lead and conversation logged, ready to become a file. |
| Application & Setup | Upload borrower docs — AI completes the 1003, you review side by side. |
| Processing | Conditions, TRID deadlines, title, HOI, appraisal — tracked on one screen, updated as things come in. |
| Closed | Clean handoff, full file history, audit-ready records. |

## Layout

- Eyebrow `End to end` + serif headline + short intro
- Horizontal connected steps on `lg+` (numbered nodes + gradient connectors); stacked on smaller viewports
- Surface: `bg-organ-50` with section borders matching adjacent bands

## Related framing

Feature cards and the pipeline section reuse these stage names as labels (see Features / Pipeline docs).
