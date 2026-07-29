# Netlify to Sheets + email (Apps Script)

Paste-ready Google Apps Script for the **Mooric ERP Contact Form Replies** spreadsheet. Bound to the sheet via **Extensions → Apps Script**. Appends a row and sends a clean HTML email on **new** submissions only (retries/duplicates do not email again).

**Source of truth for the script:** [`scripts/netlify-contact-Code.gs`](../scripts/netlify-contact-Code.gs)

Do **not** copy from a markdown code fence (smart quotes can break Apps Script). Copy from the `.gs` file only.

**Production webhook path:** Netlify Forms should notify [`/forward-to-sheet`](./netlify-forward-to-sheet.md), not Apps Script directly. The forwarder keeps the Netlify hook enabled; set `APPS_SCRIPT_WEBHOOK_URL` in Netlify env to your `/exec` URL.

## Setup (Apps Script)

1. Open [`scripts/netlify-contact-Code.gs`](../scripts/netlify-contact-Code.gs) in the repo.
2. Select all → copy.
3. Sheet → **Extensions → Apps Script** → select all in `Code.gs` → paste → **Save**.
4. Set `NOTIFY_TO` / `NOTIFY_CC` at the top if needed.
5. **Deploy → Manage deployments → Edit → New version → Deploy** (Execute as **Me**, Who has access **Anyone**).
6. Prefer URL `https://script.google.com/macros/s/.../exec` (not `/a/macros/mooricerp.com/...`).
7. Put that URL in Netlify env as `APPS_SCRIPT_WEBHOOK_URL`, then point the form notification at `/forward-to-sheet` ([docs](./netlify-forward-to-sheet.md)).

Sheet columns: `Timestamp | Name | Email | Role | State | Loans per month | Message | Submission ID`

## Behavior

| Event | Sheet | Email |
|-------|--------|--------|
| New submission | New row + Submission ID | One HTML email |
| Netlify retry / duplicate ID | No new row | No email |
| Lock busy | No write | No email |

## After Apps Script code changes

Edit [`scripts/netlify-contact-Code.gs`](../scripts/netlify-contact-Code.gs), re-copy into Apps Script, **Save**, then **Deploy → New version**. Confirm Executions shows the new version on the next submit.
