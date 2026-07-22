import { motion } from "framer-motion";

const stages = [
  {
    name: "Prospect",
    line: "Every lead and conversation logged, ready to become a file.",
  },
  {
    name: "Application & Setup",
    line: "Upload borrower docs — AI completes the 1003, you review side by side.",
  },
  {
    name: "Processing",
    line: "Conditions, TRID deadlines, title, HOI, appraisal — tracked on one screen, updated as things come in.",
  },
  {
    name: "Closed",
    line: "Clean handoff, full file history, audit-ready records.",
  },
] as const;

export function BrokerProcessFlowSection() {
  return (
    <section
      id="process"
      className="relative scroll-mt-8 border-b border-organ-200/90 bg-organ-50 py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">
            End to end
          </p>
          <h2
            id="process-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 text-balance sm:text-4xl"
          >
            One workspace for the entire broker-side process.
          </h2>
          <p className="mt-4 max-w-[700px] text-lg leading-relaxed text-organ-800">
            From first conversation to closed loan — one system, connected stages, not a pile of
            separate tools.
          </p>
        </motion.div>

        <ol className="relative mt-14 m-0 grid list-none gap-8 p-0 sm:gap-6 lg:grid-cols-4 lg:gap-0">
          {stages.map((stage, i) => (
            <motion.li
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative lg:px-5 xl:px-6"
            >
              {i < stages.length - 1 ? (
                <span
                  className="pointer-events-none absolute left-4 top-10 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-erp/40 via-organ-200 to-erp/30 lg:block"
                  aria-hidden
                />
              ) : null}
              <div className="relative flex gap-4 lg:flex-col lg:gap-4">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-erp/30 bg-erp font-mono text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-erp">
                    {stage.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-organ-800">{stage.line}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
