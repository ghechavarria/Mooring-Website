# Loan Officer Personal Assistant section

Dedicated section (`#assistant`) in [LOPersonalAssistantSection.tsx](../src/components/LOPersonalAssistantSection.tsx). Rendered after **Pipeline** and before **HeroMotionBand**.

## Purpose

Positions the Loan Officer Personal Assistant as an always-on work partner — not a chatbot or help center. Headline: **“The assistant that already knows your file.”**

## Content blocks

Four capability cards:

1. Ask anything about a loan file (Central Loan Memory context)
2. Add notes on the go
3. Set reminders without leaving the platform
4. Stay in one place — no context-switching across apps

## Layout

- Light **white** band with **`py-28 sm:py-40`** (alternates with tinted Pipeline above and Team below)
- **Header:** Eyebrow `Loan Officer Personal Assistant` + centered serif headline + intro
- Centered intro + 2×2 card grid
- **Cards:** Unified white card style — `rounded-xl border border-organ-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-md sm:p-8` (matches **Features** `PlatformFeatureCard`)

## Navigation

Reached by scrolling past **Pipeline** — no dedicated header link. Anchor: `#assistant`.

## Content source

Copy direction from [Web 1.docx](./Web%201.docx) — “LO Personal Assistant.”
