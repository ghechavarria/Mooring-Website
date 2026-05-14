import { motion } from "framer-motion";

const operationsWorkspace =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80";

const steps = [
  {
    title: "Engage",
    detail: "Borrowers enter through guided links and protected uploads — encrypted in transit and at rest.",
  },
  {
    title: "Enrich",
    detail: "AI summarizes what is in the file and flags gaps so your team is never surprised at underwriting.",
  },
  {
    title: "Advance",
    detail: "Conditions, lender asks, and internal checkpoints route to the right owner with a clear SLA.",
  },
  {
    title: "Close",
    detail: "Every touch leaves an audit-friendly trail from first contact through clear-to-close.",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="relative scroll-mt-8 border-t-0 marble-organ-light pb-20 pt-12 sm:pb-24 sm:pt-14"
      aria-labelledby="workflow-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <h2
              id="workflow-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
            >
              A backbone that matches how mortgages actually move.
            </h2>
            <p className="mt-4 text-lg text-organ-800">
              Replace duct-taped portals and spreadsheets with one pipeline that respects
              your compliance story — and still feels fast on the front line.
            </p>
            <figure className="mt-10 overflow-hidden border border-organ-200/90 bg-white shadow-sm">
              <img
                src={operationsWorkspace}
                alt="Mortgage operations team collaborating over loan files and systems"
                width={1400}
                height={933}
                className="aspect-[3/2] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="border-t border-organ-200 px-4 py-3 text-xs text-organ-600">
                Origination and operations on one governed view of the loan.
              </figcaption>
            </figure>
          </motion.div>

          <ol className="relative m-0 list-none space-y-0 p-0">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pb-14 last:pb-0"
              >
                {i < steps.length - 1 ? (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-8 bottom-0 z-0 flex w-8 origin-top justify-center"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.08 + 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="block h-full w-px shrink-0 rounded-full bg-gradient-to-b from-gold/45 via-organ-200/90 to-gold/40" />
                  </motion.div>
                ) : null}
                <div className="relative z-[1] flex items-start gap-6">
                  <motion.span
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-ink-950 font-mono text-xs font-semibold text-gold shadow-[0_0_20px_rgba(181,154,109,0.28)]"
                    whileHover={{ scale: 1.08 }}
                  >
                    {i + 1}
                  </motion.span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="text-lg font-semibold text-ink-950">{s.title}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-organ-800">
                      {s.detail}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            className="relative block overflow-hidden rounded-xl border border-organ-700/50 marble-slate p-6 shadow-card-md sm:p-8 lg:col-span-2 lg:p-10"
            initial={{ opacity: 0.85 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
              aria-hidden
            />
            <div className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-96 -translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl" aria-hidden />
            <div className="relative z-10 lg:flex lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 lg:max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                  Pipeline snapshot
                </p>
                <p className="mt-5 text-4xl font-semibold tabular-nums text-organ-50 sm:text-5xl">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    94%
                  </motion.span>
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-organ-200 sm:text-base">
                  Teams report fewer surprise stalls after rollout — with audit-grade
                  lineage baked in.
                </p>
                <div className="mt-8 h-2 overflow-hidden rounded-full bg-organ-950/80 sm:mt-10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-gold to-glow"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
              <div
                className="mt-10 flex w-full flex-col justify-center gap-5 border-t border-organ-600/25 pt-8 sm:gap-6 sm:pt-10 lg:mt-0 lg:w-56 lg:shrink-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:w-64"
                aria-hidden
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-organ-500">
                  Stages (illustrative)
                </p>
                {[
                  ["Intake", "58%"],
                  ["Conditions", "76%"],
                  ["Lender round-trip", "91%"],
                ].map(([label, width]) => (
                  <div key={label}>
                    <p className="text-[11px] font-medium text-organ-500">{label}</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-organ-950/75">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold/70 to-gold"
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
