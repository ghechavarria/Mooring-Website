# Zoomable product view (`ZoomableProductView.tsx`)

On **tablet/mobile** (`max-width: 1099px`), scaled product UI mocks act like images: click/tap to open a large shadowed lightbox.

## Behavior

- **Compact viewports (`max-width: 1099px`):** Click/tap the preview to open the lightbox (full-area layer at `z-10`). **Before/After** tabs use `data-product-zoom-ignore` and `z-20` so they sit above the layer and stay clickable in the inline view.
- **Desktop:** No expand overlay; inline preview only.
- **Lightbox:** Portaled to `document.body` (escapes section overflow / motion transforms). Centered with flex — **no transform on the shell**.
- **Zoom stage:** `w-[1160px]` inside a `min-w-0` scrollport so the dialog stays viewport-width and content pans (does not blow out the shell).
- **Layout:** Inside the lightbox, panels force **scale 1** + **top-left** origin (via `useProductZoomOpen()`). Absolute centering is disabled so the view is not clipped on the left.
- **Desktop (`min-width: 1100px`):** No overlay.
- **Observers:** Panels bind `ResizeObserver` to a frame callback ref so remounting into the portal remeasures correctly.

## Used by

- [`BeforeAfterDemo.tsx`](../src/components/BeforeAfterDemo.tsx) — `InteractiveDemoCard`
- [`MooricLoanExamplePanel.tsx`](../src/components/MooricLoanExamplePanel.tsx)
- [`MooricPipelineExamplePanel.tsx`](../src/components/MooricPipelineExamplePanel.tsx)
