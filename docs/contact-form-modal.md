# Contact form modal

Popup Netlify contact form opened from site CTAs. Implemented as [ContactFormModal.tsx](../src/components/ContactFormModal.tsx) with shared state from [ContactModalContext.tsx](../src/context/ContactModalContext.tsx).

## Triggers

| Location | Button label | Modal title |
|----------|----------------|-------------|
| [Header.tsx](../src/components/Header.tsx) — desktop | Get early access | Get early access |
| [Header.tsx](../src/components/Header.tsx) — mobile | Get early access (+ “First month free” under button) | Get early access |
| [HeroCopy.tsx](../src/components/HeroCopy.tsx) | Get early access — first month free | Get early access |
| [ContactCTA.tsx](../src/components/ContactCTA.tsx) | Get early access | Get early access |

Both intents (`briefing` / `walkthrough`) resolve to the same modal title: **Get early access**.

## Feature flag

Contact CTAs are gated by **`SHOW_CONTACT_ACTIONS`** in [`src/config/contactActions.ts`](../src/config/contactActions.ts) (currently **`true`**).

## Netlify Forms (SPA)

Netlify only registers forms present in **static HTML inside `dist`** after build. The React modal alone is not enough.

1. **Hidden form** in [index.html](../index.html) — `name="contact"`, `netlify` + `data-netlify="true"`, honeypot `bot-field` (input included).
2. **Detection backup** in [public/__forms.html](../public/__forms.html) — same form, copied into `dist/` by Vite ([docs](./__forms-html.md)).
3. **Visible modal** posts the same field names via `fetch("/", …)` with `form-name=contact` (urlencoded).
4. **Build lock** in [netlify.toml](../netlify.toml) — `npm run build`, publish `dist` ([docs](./netlify-toml.md)).

Do **not** dual-submit from the browser to Google Sheets or other write endpoints (exposes a public write URL). Keep Sheets sync server-side via Netlify (below).

## Fields

| Field | Type | Required |
|-------|------|----------|
| Name | text | yes |
| Work email (`email`) | email | yes |
| Role (`role`) | chip → hidden input | yes (Loan Officer / Processor / Broker Owner / Other) |
| State (`state`) | select (US + DC) | yes |
| Loans per month (`loans_per_month`) | chip → hidden input | yes (`1–3` / `4–10` / `10+`) |
| Message | textarea | yes |
| bot-field | honeypot | no (must be empty; bots that fill it are filtered) |

## UX

- Portal overlay (`z-[300]`), scrollable body, backdrop click and Escape to close
- **Below `lg` (&lt; 1024px):** full-viewport sheet (edge-to-edge, no padding/rounded corners)
- **`lg` and up:** centered card (`max-w-lg`, rounded, padded overlay)
- Focus moves to name field when opened
- Success / error states; submit disabled while posting
- Footer note: personal response within one business day

## Deploy

1. Push or trigger a production deploy.
2. Confirm **Forms** lists **`contact`**.
3. Optional check: View Page Source on the live site for `<form name="contact"`, or look for form detection lines in the deploy log.
4. Submit a test from the live site (local `npm run dev` does not deliver to Netlify).

## Secure Google Sheets tracking (ops)

After `contact` appears under Forms:

1. Create a spreadsheet and a Google Apps Script `doPost` that appends a row from the webhook JSON.
2. Deploy the script as a web app (execute as you; access Anyone — URL is a secret).
3. In Netlify: **Forms → Form notifications → Outgoing webhook** for form `contact`, URL = Apps Script web app URL.

Keep the webhook URL **only in the Netlify UI** — never commit it, and never call Sheets from the React form.
