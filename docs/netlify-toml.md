# `netlify.toml`

Build and functions settings for the Mooring site on Netlify ([netlify.toml](../netlify.toml)).

## Settings

| Key | Value |
|-----|--------|
| `command` | `npm run build` |
| `publish` | `dist` |
| `functions.directory` | `netlify/functions` |

Locks publish directory so form detection always scans Vite’s output (including [index.html](../index.html) and [public/__forms.html](../public/__forms.html)). No secrets or webhook URLs belong in this file — put `APPS_SCRIPT_WEBHOOK_URL` in the Netlify UI ([forwarder docs](./netlify-forward-to-sheet.md)).

## See also

- [contact-form-modal.md](./contact-form-modal.md)
- [netlify-forward-to-sheet.md](./netlify-forward-to-sheet.md)
