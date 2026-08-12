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
      className="relative scroll-mt-8 border-b border-organ-200/90 bg-white pb-24 pt-16 sm:pb-32 sm:pt-20"
      aria-labelledby="process-heading"
    >
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">End to end</p>
          <h2
            id="process-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 text-balance sm:text-4xl lg:text-5xl"
          >
            One workspace for the entire broker-side process.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-organ-800">
            From first conversation to closed loan — one system, connected stages, not a pile of
            separate tools.
          </p>
        </motion.div>

        <ol className="mt-14 m-0 grid list-none gap-5 p-0 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stages.map((stage, i) => (
            <motion.li
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl bg-organ-100 px-5 py-6 sm:px-6 sm:py-7"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-erp font-mono text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-erp">
                {stage.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-organ-800">{stage.line}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
