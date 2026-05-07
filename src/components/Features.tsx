import { motion } from "framer-motion";

const features = [
  {
    title: "Intelligent intake",
    body: "Classify every page, split packages, and merge borrowers automatically — even when filenames are chaos.",
    accent: "from-tide/30 to-transparent",
  },
  {
    title: "Policy-aware checks",
    body: "Run investor overlays and agency guides against extracted facts, not keywords — with citations back to the PDF.",
    accent: "from-cyan-400/25 to-transparent",
  },
  {
    title: "Exception routing",
    body: "Surface only what needs a human, routed by skill, SLA, and channel — with an audit trail lenders expect.",
    accent: "from-emerald-400/20 to-transparent",
  },
  {
    title: "Continuous learning",
    body: "Your corrections improve models in your tenant — without leaking data across clients.",
    accent: "from-violet-400/20 to-transparent",
  },
];

export function Features() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-24 border-t border-white/5 bg-ink-900/40 py-24"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tide/40 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <h2
            id="features-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Built for mortgage operations, not generic OCR.
          </h2>
          <p className="mt-4 text-lg text-mist/70">
            Production-grade extraction meets mortgage semantics — so underwriters
            spend time on judgment, not hunt-and-peck.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-950/60 p-8 shadow-xl shadow-black/20 transition-shadow hover:border-tide/25 hover:shadow-tide/5"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${f.accent} blur-3xl transition-opacity group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative">
                <span className="font-mono text-xs uppercase tracking-widest text-glow/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-mist/65">{f.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
