# Contact form modal

Popup Netlify contact form opened from site CTAs. Implemented as [ContactFormModal.tsx](../src/components/ContactFormModal.tsx) with shared state from [ContactModalContext.tsx](../src/context/ContactModalContext.tsx).

## Triggers

| Location | Button label | Modal title |
|----------|----------------|-------------|
| [Header.tsx](../src/components/Header.tsx) — desktop + mobile | Request a briefing | Request a briefing |
| [Hero.tsx](../src/components/Hero.tsx) | Request a briefing | Request a briefing |
| [ContactCTA.tsx](../src/components/ContactCTA.tsx) | Book a walkthrough | Book a walkthrough |

The modal heading and submit button label match the CTA that opened it (`openContactModal("walkthrough")` vs default `"briefing"`).

The `#contact` section remains on the page for anchor/SEO; buttons open the modal instead of scrolling or `mailto:`.

## Netlify Forms (SPA)

1. **Hidden static form** in [index.html](../index.html) — `name="contact"`, `data-netlify="true"`, `netlify-honeypot="bot-field"` — so Netlify detects fields at deploy time.
2. **Visible modal form** uses the same form name and field names: `name`, `email`, `message`, plus honeypot `bot-field`.
3. **Submit** — `fetch("/", { method: "POST", ... })` with `application/x-www-form-urlencoded` body including `form-name=contact` (required for Vite/React SPAs).

## Fields

| Field | Type | Required |
|-------|------|----------|
| Name | text | yes |
| Email | email | yes |
| Message | textarea | yes |
| bot-field | hidden honeypot | no |

## UX

- Portal overlay (`z-[300]`), backdrop click and Escape to close
- Focus moves to name field when opened
- Success state with thank-you message; error state with retry
- Submit disabled while posting

## Deploy

Submissions appear in Netlify **Site configuration → Forms** after deploy. Local `npm run dev` does not deliver to Netlify — test submit on the hosted site.
