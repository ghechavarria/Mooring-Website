# Mooric loan example panel (`MooricLoanExamplePanel.tsx`)

Decorative product mock under the daily workflow intro in [Features.tsx](../src/components/Features.tsx). Ported from the standalone landing `#features` figure (Maria Chen / LN-2026-0051).

## Placement

Inside `.layout-shell` after the **03 · The daily workflow** copy and before the four feature cards.

## Behavior

- Designed at a fixed **1160px** stage (standalone width).
- A `ResizeObserver` scales the whole stage to the current shell width (`scale = frameWidth / 1160`), so the panel **grows and shrinks with the page**.
- Layout height is compensated (`stageHeight * scale`) so scaling does not leave a gap or overlap.
- Shadow: `0 24px 60px -28px rgba(15,23,42,0.35)`.

## Contents

- Chrome URL: `app.mooricerp.com/loans/LN-2026-0051`
- Dark origination sidebar, loan meta pills, AI Intake, document intake, classified documents

Decorative only — not a live app embed.
