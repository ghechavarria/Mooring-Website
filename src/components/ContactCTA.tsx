import { motion } from "framer-motion";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800/90 via-ink-900 to-ink-950 px-8 py-16 text-center shadow-2xl shadow-black/40 sm:px-16"
        >
          <motion.div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-tide/25 blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-glow">
              Ready when you are
            </p>
            <h2
              id="cta-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Put AI where your files actually live.
            </h2>
            <p className="mt-5 text-lg text-mist/70">
              We&apos;ll map your LOS, queues, and investor paths — then stand up a
              pilot lane so you can compare cycle times with receipts.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@clearledger.example"
                className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink-950 shadow-xl transition hover:bg-mist"
              >
                Email our solutions team
              </a>
              <span className="text-sm text-mist/45">
                Response within one business day
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
