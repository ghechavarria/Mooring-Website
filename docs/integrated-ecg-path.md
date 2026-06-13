# Integrated ECG path (`.integrated-ecg-path`)

Defined in **`src/index.css`** (utilities layer). Used by the **integrated** session pulse in **`HeroSessionPulse.tsx`** on the scrolling ECG `<path>`.

## Purpose

The integrated strip scales the ECG **SVG height** up from the **`lg`** breakpoint so the trace reads well on wide desktops. **`vector-effect: non-scaling-stroke`** keeps the stroke from blurring when the SVG is small (phone / tablet). Without a wider stroke on large viewports, the line would stay **~1.35px** while the wave grew, so it looked like a thin thread.

## Behavior

| Viewport | Approx. stroke width |
|----------|----------------------|
| Default (`< 1024px`) | **1.35px** (matches the previous inline attribute) |
| `lg` (≥ 1024px) | **1.85px** |
| `xl` (≥ 1280px) | **2.05px** |
| `2xl` (≥ 1536px) | **2.25px** |

The **panel** variant ECG is unchanged: it still uses inline **`strokeWidth="1.25"`** and **`vectorEffect="non-scaling-stroke"`** on its path.
