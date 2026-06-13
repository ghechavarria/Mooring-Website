# Workflow pipeline snapshot card

The **`marble-slate`** band at the bottom of [`src/components/Workflow.tsx`](../src/components/Workflow.tsx) includes a **Pipeline snapshot** column and a right column **Stages (illustrative)** with mini progress rows (Intake, Conditions, Lender round-trip).

## Contrast on dark marble

The slate panel uses the **`marble-slate`** utility in [`src/index.css`](../src/index.css) — base **`#020617`** with navy-blue veining (aligned with the hero / lattice band). Copy on that surface must use **defined** theme steps from [`tailwind.config.js`](../tailwind.config.js) (e.g. **`organ-100`**, **`organ-200`**, **`text-accent`**) — not **`organ-300`**–**`500`**, which are omitted from the `organ` scale so those utilities do not resolve, and text can fall back to the default (near-black) color and become unreadable.

Current treatment: **Stages** kicker aligns with the left column eyebrow (**`text-accent/90`**); stage labels use **`text-organ-100`** and **`text-xs`** for legibility.
