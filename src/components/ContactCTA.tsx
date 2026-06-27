import { motion } from "framer-motion";
import { useContactModal } from "../context/ContactModalContext";

export function ContactCTA() {
  const { openContactModal } = useContactModal();
  return (
    <section
      id="contact"
      className="relative scroll-mt-8 bg-canvas py-20 sm:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative z-10 overflow-hidden rounded-xl border border-organ-200/95 bg-organ-50 px-5 py-12 text-center shadow-card-md sm:px-14 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(191,211,230,0.08),transparent_55%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-organ-800">
              Ready when you are
            </p>
            <h2
              id="cta-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
            >
              See how Mooric ERP fits your day-to-day workflow.
            </h2>
            <p className="mt-5 text-lg text-organ-800">
              On a short call we walk through the 1003, condition tracking, pipeline view, and
              Central Loan Memory — using the kind of file you work every week.
            </p>
            <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                className="btn-primary-silver w-full px-8 py-3.5 text-center text-sm sm:w-auto"
                onClick={() => openContactModal("walkthrough")}
              >
                Book a walkthrough
              </button>
              <span className="text-center text-sm text-organ-600 sm:text-left">
                Response within one business day
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
