import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  decimalPlaces = 0,
  className = "tabular-nums",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimalPlaces?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 85, damping: 26 });
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    motionVal.set(value);
  }, [isInView, motionVal, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (!ref.current) return;
      ref.current.textContent =
        prefix +
        (decimalPlaces > 0
          ? v.toFixed(decimalPlaces)
          : Math.round(v).toLocaleString()) +
        suffix;
    });
  }, [decimalPlaces, prefix, spring, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimalPlaces > 0 ? (0).toFixed(decimalPlaces) : (0).toLocaleString()}
      {suffix}
    </span>
  );
}

const stats: {
  label: string;
  value: number;
  suffix: string;
  decimalPlaces?: number;
}[] = [
  {
    label: "Avg. weekly hours reclaimed per loan desk",
    value: 45,
    suffix: " hrs",
    decimalPlaces: 0,
  },
  { label: "Pipeline steps completed without manual chase", value: 74, suffix: "%" },
  {
    label: "Borrower and lender touchpoints in one workspace",
    value: 99,
    suffix: "%",
    decimalPlaces: 0,
  },
];

export function StatsSection() {
  return (
    <section
      id="results"
      className="relative scroll-mt-8 border-y border-slate-800/50 marble-slate py-20 sm:py-24"
      aria-labelledby="stats-heading"
    >
      <div className="layout-shell z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            id="stats-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-white [text-shadow:0_0_48px_rgba(191,211,230,0.38)] sm:text-4xl"
          >
            Outcomes you measure in funded loans — not heroic inbox sprints.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-accent-light/95">
            Illustrative benchmarks from lending teams that consolidated origination work in
            one governed workspace.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-xl border border-accent/50 border-t-2 border-t-white bg-organ-900/35 px-5 py-8 text-center shadow-[0_1px_0_0_rgba(191,211,230,0.2),0_12px_40px_-12px_rgba(0,0,0,0.45)] ring-1 ring-accent-light/35 backdrop-blur-sm sm:px-8 sm:py-10"
            >
              <AnimatedNumber
                  value={s.value}
                  suffix={s.suffix}
                  decimalPlaces={s.decimalPlaces}
                  className="inline-block bg-gradient-to-b from-accent-light via-white to-accent bg-clip-text font-mono text-4xl font-semibold tabular-nums text-transparent sm:text-5xl"
                />
              <p className="mt-4 text-sm leading-snug text-accent-light/90">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
