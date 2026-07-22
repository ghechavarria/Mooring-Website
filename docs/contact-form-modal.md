# Contact form modal

Popup Netlify contact form opened from site CTAs. Implemented as [ContactFormModal.tsx](../src/components/ContactFormModal.tsx) with shared state from [ContactModalContext.tsx](../src/context/ContactModalContext.tsx).

## Triggers

| Location | Button label | Modal title |
|----------|----------------|-------------|
| [Header.tsx](../src/components/Header.tsx) — desktop | Get early access | Get early access |
| [Header.tsx](../src/components/Header.tsx) — mobile | Get early access — first month free | Get early access |
| [HeroCopy.tsx](../src/components/HeroCopy.tsx) | Get early access — first month free | Get early access |
| [ContactCTA.tsx](../src/components/ContactCTA.tsx) | Get early access | Get early access |

Both intents (`briefing` / `walkthrough`) resolve to the same modal title: **Get early access**.

## Feature flag

Contact CTAs are gated by **`SHOW_CONTACT_ACTIONS`** in [`src/config/contactActions.ts`](../src/config/contactActions.ts) (currently **`true`**).

## Netlify Forms (SPA)

1. **Hidden static form** in [index.html](../index.html) — `name="contact"`, fields listed below, honeypot `bot-field`.
2. **Visible modal form** posts the same field names via `fetch("/", …)` with `form-name=contact`.

## Fields

| Field | Type | Required |
|-------|------|----------|
| Name | text | yes |
| Work email (`email`) | email | yes |
| Role (`role`) | chip → hidden input | yes (Loan Officer / Processor / Broker Owner / Other) |
| State (`state`) | select (US + DC) | yes |
| Loans per month (`loans_per_month`) | chip → hidden input | yes (`1–3` / `4–10` / `10+`) |
| Message | textarea | optional |
| bot-field | honeypot | no |

## UX

- Portal overlay (`z-[300]`), scrollable body, backdrop click and Escape to close
- **Below `lg` (&lt; 1024px):** full-viewport sheet (edge-to-edge, no padding/rounded corners)
- **`lg` and up:** centered card (`max-w-lg`, rounded, padded overlay)
- Focus moves to name field when opened
- Success / error states; submit disabled while posting
- Footer note: personal response within one business day

## Deploy

Submissions appear in Netlify **Site configuration → Forms** after deploy. Local `npm run dev` does not deliver to Netlify.
