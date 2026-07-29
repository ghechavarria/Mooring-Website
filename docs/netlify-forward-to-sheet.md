# Netlify forwarder (`/forward-to-sheet`)

Netlify Function that receives form submission webhooks and forwards them to Google Apps Script. Netlify always gets HTTP **200**, so the notification hook is less likely to be disabled when Apps Script is slow or redirects.

Implemented in [`netlify/functions/forward-to-sheet.js`](../netlify/functions/forward-to-sheet.js). Apps Script stays unchanged — see [netlify-contact-apps-script.md](./netlify-contact-apps-script.md) and [`scripts/netlify-contact-Code.gs`](../scripts/netlify-contact-Code.gs).

## Flow

1. Visitor submits the contact form → Netlify Forms stores it.
2. Form notification POSTs to `https://mooricerp.com/forward-to-sheet`.
3. Function reads the body, POSTs it to `APPS_SCRIPT_WEBHOOK_URL` (`redirect: "follow"`), then returns `{ ok: true }` with status 200.
4. Apps Script appends the sheet row and sends email.

## Environment variable

In Netlify → **Project configuration → Environment variables**:

| Key | Value |
|-----|--------|
| `APPS_SCRIPT_WEBHOOK_URL` | Full Apps Script web app URL ending in `/exec` (prefer `https://script.google.com/macros/s/.../exec`) |

Never commit this URL to the repo.

If the variable is missing, the function still returns **200** with `{ ok: false, error: "missing_url" }` so Netlify does not disable the hook (check function logs).

## Form notification

1. Deploy the site so `/forward-to-sheet` exists.
2. Netlify → **Forms → Form notifications** → edit the `contact` outgoing webhook.
3. Set URL to `https://mooricerp.com/forward-to-sheet`.
4. Save / re-enable if the hook was **Disabled**.
5. Submit a live test: Forms entry, sheet row, email; hook stays enabled.

## Build

[`netlify.toml`](../netlify.toml) sets `functions.directory = "netlify/functions"`. Route path is configured in the function as `/forward-to-sheet`.
