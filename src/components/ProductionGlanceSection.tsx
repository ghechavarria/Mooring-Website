import { motion } from "framer-motion";

const productionStats = [
  ["Volume", "12 loans"],
  ["Avg. loan size", "$385K"],
  ["Avg. days to close", "32"],
] as const;

export function ProductionGlance({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "text-white" : ""}>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">
        Your production at a glance
      </p>
      <p
        className={`mt-5 font-serif text-2xl font-semibold sm:text-3xl ${dark ? "text-white" : "text-ink-950"}`}
      >
        Closed loan performance, without building a spreadsheet
      </p>
      <p
        className={`mt-3 max-w-md text-sm leading-relaxed sm:text-base ${dark ? "text-slate-300" : "text-organ-800"}`}
      >
        Volume, average loan size, and time to close — broken down by month, quarter, or year. The
        numbers you need to understand your own book, already in the platform.
      </p>
      <div className="mt-8 flex flex-wrap gap-8">
        {productionStats.map(([label, value]) => (
          <div key={label}>
            <p className={`text-xs font-medium ${dark ? "text-slate-400" : "text-organ-800"}`}>
              {label}
            </p>
            <p className="mt-1 font-mono text-sm tabular-nums text-erp">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Sits directly under the hero’s blue moving ticker strip (Final look) */
export function ProductionGlanceSection() {
  return (
    <section
      id="production-glance"
      className="relative overflow-hidden bg-white px-6 py-20 text-ink-950 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-24"
      aria-label="Your production at a glance"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 lg:gap-14"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-erp">
            Your production at a glance
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Closed loan performance, without building a spreadsheet
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-organ-800 sm:text-lg">
            Volume, average loan size, and time to close — broken down by month, quarter, or year.
            The numbers you need to understand your own book, already in the platform.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {productionStats.map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.06 }}
              className="rounded-2xl bg-organ-100 px-6 py-7 sm:px-7 sm:py-8"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-organ-700">
                {label}
              </p>
              <p className="mt-4 font-display text-3xl font-bold tabular-nums tracking-tight text-ink-950 sm:text-4xl">
                <span className="text-erp">{value}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
