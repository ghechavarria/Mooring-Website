# Pulse theme colors (`tailwind.config.js`)

Extended palette **`pulse`** for the hero session strip: **dark slate / near-black** surfaces with **deep blue** and **sky** accents for monitor-style contrast.

| Token | Role |
| --- | --- |
| `pulse-void` | Deepest background |
| `pulse-ink` | Gradient mid |
| `pulse-slate` | Slate band |
| `pulse-deep` | Optional mid-depth (reserved) |
| `pulse-blue` | Accent anchor |
| `pulse-glow` | Sky / cyan highlight |
| `pulse-ice` | High-contrast text on dark |

Used primarily in legacy pulse variants. The integrated hero top bar in [HeroSessionPulse.tsx](../src/components/HeroSessionPulse.tsx) now uses **`organ-100`** / **`organ-500`** for a silver/light-gray monitor strip; brand blue is reserved for the bottom tagline strip.
