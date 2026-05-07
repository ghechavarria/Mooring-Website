import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  decimalPlaces = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimalPlaces?: number;
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
    <span ref={ref} className="tabular-nums">
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
    label: "Avg. hours saved per loan file",
    value: 6.5,
    suffix: " hrs",
    decimalPlaces: 1,
  },
  { label: "Exceptions caught pre-underwrite", value: 38, suffix: "%" },
  {
    label: "Investor findings tied to source pages",
    value: 99.2,
    suffix: "%",
    decimalPlaces: 1,
  },
];

export function StatsSection() {
  return (
    <section
      id="results"
      className="scroll-mt-24 border-y border-white/5 bg-gradient-to-b from-ink-900/50 to-ink-950 py-24"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            id="stats-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Outcomes teams measure in weeks, not slides.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-mist/65">
            Benchmarks from blended retail &amp; correspondent pipelines — your
            mileage improves as models absorb your overlays.
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
              className="rounded-2xl border border-white/10 bg-ink-950/70 px-8 py-10 text-center shadow-lg shadow-black/30"
            >
              <p className="font-mono text-4xl font-semibold text-white sm:text-5xl">
                <AnimatedNumber
                  value={s.value}
                  suffix={s.suffix}
                  decimalPlaces={s.decimalPlaces}
                />
              </p>
              <p className="mt-4 text-sm leading-snug text-mist/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
