import { motion } from "framer-motion";

const operationsWorkspace =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80";

const steps = [
  {
    title: "Full pipeline visibility, one screen",
    detail:
      "From the moment you first speak to a prospect to the day the loan funds, every file has a clear status. No more spreadsheets with columns of dates to manually update. No more wondering where a file stands.",
  },
  {
    title: "Daily summary — know what needs attention today",
    detail:
      "The Summary view surfaces everything that needs your attention right now — overdue conditions, upcoming TRID deadlines, files that have been sitting without an update. Start every day knowing exactly where to focus.",
  },
  {
    title: "Closed loan performance",
    detail:
      "See your closed loan history summarized by month, quarter, or year — volume, average loan size, time to close. Simple visibility into your own production without building a report.",
  },
];

export function PipelineSection() {
  return (
    <section
      id="pipeline"
      className="relative scroll-mt-8 border-t border-organ-200 bg-organ-50 py-28 sm:py-40"
      aria-labelledby="pipeline-heading"
    >
      <div className="layout-shell z-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-erp">
              Pipeline
            </p>
            <h2
              id="pipeline-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
            >
              Pipeline management — no more Excel tracking.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-organ-800">
              One of the most common pain points for independent Loan Officers is managing a pipeline
              across spreadsheets, sticky notes, and calendar reminders. Mooric ERP replaces
              all of that with a single view that follows every loan from first conversation
              to funded.
            </p>
            <figure className="mt-10 overflow-hidden rounded-xl border border-organ-200/90 bg-white shadow-sm">
              <img
                src={operationsWorkspace}
                alt="Loan officer managing mortgage pipeline on screen"
                width={1400}
                height={933}
                className="aspect-[3/2] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
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
                    <span className="block h-full w-px shrink-0 rounded-full bg-gradient-to-b from-erp/40 via-organ-200/90 to-erp/30" />
                  </motion.div>
                ) : null}
                <div className="relative z-[1] flex items-start gap-6">
                  <motion.span
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-erp/30 bg-erp font-mono text-xs font-semibold text-white shadow-[0_0_20px_rgba(0,117,255,0.2)]"
                    whileHover={{ scale: 1.08 }}
                  >
                    {i + 1}
                  </motion.span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="text-lg font-semibold text-ink-950">{s.title}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-organ-800">{s.detail}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            className="relative block overflow-hidden rounded-xl border border-organ-200 bg-white p-6 shadow-card-md sm:p-8 lg:col-span-2 lg:p-10"
            initial={{ opacity: 0.85 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-erp/8 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-96 -translate-x-1/2 rounded-full bg-erp/5 blur-3xl"
              aria-hidden
            />
            <div className="relative z-10 lg:flex lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 lg:max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">
                  Your production at a glance
                </p>
                <p className="mt-5 font-serif text-2xl font-semibold text-ink-950 sm:text-3xl">
                  Closed loan performance, without building a spreadsheet
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-organ-800 sm:text-base">
                  Volume, average loan size, and time to close — broken down by month, quarter,
                  or year. The numbers you need to understand your own book, already in the
                  platform.
                </p>
              </div>
              <div
                className="mt-10 flex w-full flex-col justify-center gap-5 border-t border-organ-200 pt-8 sm:gap-6 sm:pt-10 lg:mt-0 lg:w-56 lg:shrink-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:w-64"
                aria-hidden
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-erp">
                  Example view
                </p>
                {[
                  ["Volume", "12 loans"],
                  ["Avg. loan size", "$385K"],
                  ["Avg. days to close", "32"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-medium text-organ-800">{label}</p>
                    <p className="mt-1 font-mono text-sm tabular-nums text-erp">{value}</p>
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
