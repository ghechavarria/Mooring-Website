# Before/After demo (`BeforeAfterDemo.tsx`)

Interactive toggle demo. **Embedded in the hero** at `#demo` — not a standalone section.

## Purpose

Shows the transformation from how Loan Officers and processors work today versus with Mooric ERP. Before uses messy folders + Excel; After mirrors the product **Summary** home (sidebar + notifications).

## Exports

| Export | Use |
| --- | --- |
| `InteractiveDemoCard` | Full interactive card (tabs + panels); used in [Hero.tsx](../src/components/Hero.tsx) |
| `DemoAppWindow` | Optional browser chrome wrapper around the card (stronger blue glow) |
| `AfterPanel` / `BeforePanel` | Panel content |
| `BeforeAfterDemo` | Legacy section wrapper (unused in [App.tsx](../src/App.tsx); kept for reference) |

## Layout

- **Window chrome bar:** segmented toggle (Before / After) only
- **Card glow:** blue ring + soft bloom + deep drop shadow (`0 0 0 1px rgba(37,99,235,0.25)`, `0 0 60px -12px rgba(37,99,235,0.45)`, `0 40px 90px -30px rgba(0,0,0,0.7)`) plus blurred halo behind the card
- Default view in hero: **After Mooric** (`defaultView="after"`)
- **Equal-height panels:** CSS grid overlap (`[grid-area:1/1]`); inactive panel `invisible`
- **Capped height on `min-[1100px]+`:** `min-[1100px]:h-[26rem] min-[1200px]:h-[30rem] xl:h-[34rem]` with internal scroll; outer wrapper `p-1` / `min-[1100px]:p-2` so the glow and card keep breathing room from the session pulse and ticker

## Before panel

- Three folder cards with messy filenames + Excel tracker table (`Pipeline tracker v3 FINAL (2).xlsx`)
- Root fills height; filenames wrap (`break-words`)

## After panel (Summary mock)

Faithful scaled recreation of the product Summary UI, scoped **only** inside the After tab:

- **Dark sidebar** (`#141c30`): Mooric mark, Loan Officer nav (Summary selected, Pre-Approval, Loan Pipeline, Archive, Calendar, Guideline Search, System Flow) + count badges
- **Light main** (`#eef1f8`): “Good day, Joe”, closing filter + Generate daily to-do, Find any loan search, active-loans count, Notifications (Action / Reminder / Overdue / Expiring) + Assigned to me

## Interaction

- Toggle: **Before Mooric** | **After Mooric**
- Opacity transition; respects `prefers-reduced-motion`
- Accessible tablist / tabpanel; `idPrefix` keeps IDs unique

## Entry point

[Hero.tsx](../src/components/Hero.tsx) hosts `#demo`. Hero secondary CTA points to `#memory`.
