import { motion } from "framer-motion";

const steps = [
  {
    title: "Ingest",
    detail: "Secure tunnels from your LOS, mailbox, or SFTP — encrypted in transit and at rest.",
  },
  {
    title: "Understand",
    detail: "Models read forms like humans do: tables, handwriting, stamps, and amendments.",
  },
  {
    title: "Decide",
    detail: "Rules engine scores completeness and eligibility before anyone opens a queue.",
  },
  {
    title: "Prove",
    detail: "Exports investor-ready packages with lineage from source page to field.",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
      className="relative scroll-mt-24 py-24"
      aria-labelledby="workflow-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <h2
              id="workflow-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              A calm pipeline that moves when documents land.
            </h2>
            <p className="mt-4 text-lg text-mist/70">
              Replace brittle scripts with models trained on mortgage language —
              so teams scale throughput without scaling chaos.
            </p>
            <motion.div
              className="mt-10 hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-950 p-8 lg:block"
              initial={{ opacity: 0.85 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-glow">
                Live blend
              </p>
              <p className="mt-6 text-4xl font-semibold tabular-nums text-white">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  94%
                </motion.span>
              </p>
              <p className="mt-2 text-sm text-mist/60">
                Straight-through processing on standard conforming files after 90
                days — without sacrificing QC depth.
              </p>
              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-tide to-glow"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "94%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          </motion.div>

          <ol className="relative space-y-0">
            <div className="absolute left-[15px] top-6 bottom-6 w-px bg-gradient-to-b from-tide via-glow/40 to-transparent md:left-[19px]" aria-hidden />
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex gap-6 pb-14 last:pb-0"
              >
                <motion.span
                  className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-tide/40 bg-ink-950 font-mono text-xs font-semibold text-glow shadow-[0_0_24px_rgba(13,159,154,0.35)]"
                  whileHover={{ scale: 1.08 }}
                >
                  {i + 1}
                </motion.span>
                <div className="pt-0.5">
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-mist/65">
                    {s.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
