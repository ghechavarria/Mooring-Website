# `netlify.toml`

Build settings for the Mooring site on Netlify ([netlify.toml](../netlify.toml)).

## Settings

| Key | Value |
|-----|--------|
| `command` | `npm run build` |
| `publish` | `dist` |

Locks publish directory so form detection always scans Vite’s output (including [index.html](../index.html) and [public/__forms.html](../public/__forms.html)). No secrets or webhook URLs belong in this file.

## See also

[contact-form-modal.md](./contact-form-modal.md)
