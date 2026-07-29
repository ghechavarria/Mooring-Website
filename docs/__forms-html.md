# `__forms.html` (Netlify form detection)

Static HTML at [`public/__forms.html`](../public/__forms.html). Vite copies it into `dist/` unchanged so Netlify’s deploy-time form scanner can register the `contact` form even for the React SPA.

## Purpose

- Mirror of the hidden form in [`index.html`](../index.html)
- Same `name`, fields, and honeypot as the modal submit payload
- Not linked from the app UI

## See also

[contact-form-modal.md](./contact-form-modal.md)
