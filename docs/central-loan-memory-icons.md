# Central Loan Memory lane icons

Icons used in the **Lanes** layout column headers (`CentralLoanMemorySection.tsx`).

## Files

| File | Source | Use |
|------|--------|-----|
| [plug-disconnected.svg](../src/assets/icons/plug-disconnected.svg) | [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) — Plug Disconnected 24 Regular (MIT) | Without memory column header |
| [broken-link.svg](../src/assets/icons/broken-link.svg) | [SVG Repo](https://www.svgrepo.com/svg/408786/broken-link-broken-link-url-hyperlink-disconnect) — Broken Link (CC0) | Outcome without memory card |
| [brain-pictogram-5.svg](../src/assets/icons/brain-pictogram-5.svg) | [SVG Repo](https://www.svgrepo.com/svg/482778/brain-pictogram-5) — Brain Pictogram 5 (CC0) | With Mooric column |

`IconWithoutMemory` and `IconBrokenLink` are inline SVGs with `currentColor`. `IconBrain` uses a CSS mask so the pictogram inherits ERP blue.

## Outcome cell (Lanes)

The **Outcome** row uses paired `.memory-outcome-lost` / `.memory-outcome-mooric` cells in [index.css](../src/index.css):

- **Without memory:** muted red wash, dashed faded card, broken-link icon in a soft red circle.
- **With Mooric outcome cell:** `MemoryPipelineBackdrop` — one winding pipeline with a white light traveling through its curves.

## Outcome backdrop (`MemoryPipelineBackdrop`)

Inline SVG in `CentralLoanMemorySection.tsx`. Two strokes: the pipe, then an animated light dash (`memory-pipeline-light`). Respects `prefers-reduced-motion`.

## Header usage

```tsx
<div className="text-slate-400" aria-label="Without memory">
  <IconWithoutMemory size={22} />
</div>
<div className="text-erp" aria-label="With Mooric">
  <IconBrain size={22} />
</div>
```
