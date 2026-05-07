import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-tide/20 blur-[100px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[90px]"
          animate={{ x: [0, -50, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-grid-fade bg-[length:48px_48px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-glow/90 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tide opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tide" />
            </span>
            AI-native loan file ops
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Mortgage files,
            <span className="block bg-gradient-to-r from-mist via-white to-glow bg-clip-text text-transparent">
              cleared with precision.
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist/75"
          >
            ClearLedger ingests disclosures, income docs, and trailing items —
            then routes exceptions to the right desk with machine-readable
            evidence your investors can trust.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 shadow-xl shadow-white/10 transition hover:bg-mist"
            >
              Schedule a walkthrough
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-tide/50 hover:bg-white/5"
            >
              Explore the platform
              <svg
                className="h-4 w-4 text-glow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
          <motion.ul
            variants={item}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-10 font-mono text-xs text-mist/55"
          >
            <li>SOC 2 Type II · pipeline ready</li>
            <li>LOS &amp; VOA connectors</li>
            <li>Human-in-the-loop QC</li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-tide/20 via-transparent to-cyan-400/10 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-mist/45">
                Loan file · #48291
              </span>
            </div>
            <div className="relative space-y-4 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-glow">AI extraction</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    1003 · Income summary
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-mist/55">
                    Borrower stated income reconciled to YTD paystub lines 12–14.
                  </p>
                </div>
                <motion.span
                  className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-400/30"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                >
                  Clear
                </motion.span>
              </div>
              <div className="relative h-36 overflow-hidden rounded-xl border border-white/10 bg-ink-950/80">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tide/5 to-ink-950/90" />
                <motion.div
                  className="absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-glow to-transparent shadow-[0_0_24px_rgba(94,234,212,0.6)]"
                  animate={{ top: ["12%", "88%", "12%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute left-4 right-4 h-2 rounded bg-white/10"
                    style={{ top: `${18 + i * 18}%` }}
                    initial={{ opacity: 0.35 }}
                    animate={{ opacity: [0.35, 0.65, 0.35] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.35,
                    }}
                  />
                ))}
                <p className="absolute bottom-3 left-4 font-mono text-[10px] text-mist/45">
                  OCR + layout model · confidence 0.97
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Trailing", "VOE", "Appraisal"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-mist/70"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
