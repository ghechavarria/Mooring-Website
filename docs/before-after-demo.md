# Before/After demo (`BeforeAfterDemo.tsx`)

Interactive toggle demo. **Embedded in the hero** at `#demo` — not a standalone section.

## Purpose

Shows the transformation from how Loan Officers and processors work today versus with Mooric ERP. Before uses messy folders + Excel; After mirrors the product **Summary** home (sidebar + notifications).

## Exports

| Export | Use |
| --- | --- |
| `InteractiveDemoCard` | Full interactive card (tabs + panels); used in [Hero.tsx](../src/components/Hero.tsx) |

Panels are wrapped in [ZoomableProductView](./zoomable-product-view.md) for click-to-zoom.

## Layout

- **Window chrome bar:** segmented toggle (Before / After) only
- **Card:** white surface, light border, neutral drop shadow only (no blue bloom / blur halo)
- Default view in hero: **After Mooric** (`defaultView="after"`)
- **Equal-height panels:** CSS grid overlap (`[grid-area:1/1]`); inactive panel `invisible`
- **Capped height on `min-[1100px]+`:** `min-[1100px]:h-[26rem] min-[1200px]:h-[30rem] xl:h-[34rem]` with internal scroll; outer wrapper `p-1` / `min-[1100px]:p-2`
- **`preserveHorizontal` (hero):** scales the 880px design width to the frame with `overflow-hidden`. Sidebar + Notifications / Assigned stay side-by-side at every viewport. Below **1100px** the scaled card is centered in the frame (`translateX(-50%)`, `transform-origin: top center`).

## Before panel

- Three folder cards with messy filenames + Excel tracker table (`Pipeline tracker v3 FINAL (2).xlsx`)
- Root fills height; filenames wrap (`break-words`)

## After panel (Summary mock)

Faithful scaled recreation of the product Summary UI, scoped **only** inside the After tab:

- **Dark sidebar** (`#141c30`): Mooric mark, Loan Officer nav (Summary selected, Pre-Approval, Loan Pipeline, Archive, Calendar, Guideline Search, System Flow) + count badges
- **Light main** (`#eef1f8`): “Good day, Joe”, closing filter + Generate daily to-do, Find any loan search, active-loans count, Notifications (Action / Reminder / Overdue / Expiring) + Assigned to me

## Interaction

Tab buttons toggle Before/After. Keyboard: arrow keys when focused on the tab list.
