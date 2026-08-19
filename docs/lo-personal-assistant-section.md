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

- Light **neumorphic** band matching Production Glance (see [section-glass.md](./section-glass.md)); extra vertical padding `pb-40 pt-44 sm:pb-48 sm:pt-52`
- **Header:** Eyebrow `Loan Officer Personal Assistant` + centered headline + intro
- Centered intro + 2×2 `.neu-pad` grid
- **Cards:** Unique marks (ask / notes / bell / workspace) + title + body

## Navigation

Reached by scrolling past **Pipeline** — no dedicated header link. Anchor: `#assistant`.

## Content source

Copy direction from [Web 1.docx](./Web%201.docx) — “LO Personal Assistant.”
