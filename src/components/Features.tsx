import { MooricLoanExamplePanel } from "./MooricLoanExamplePanel";
import { motion } from "framer-motion";

const features = [
  {
    stage: "Loan application",
    title: "Complete loan application, faster",
    body: "Collect everything needed for the 1003 without going back to the borrower three times. Mooric ERP knows what is missing and tells you — before underwriting has to ask.",
  },
  {
    stage: "Program matching",
    title: "Fit the borrower to the right program",
    body: "Build a complete picture of their financials, employment, and property — then surface the program that actually fits. Conventional, FHA, VA, DSCR, WVOE — the right answer, not just the obvious one.",
  },
  {
    stage: "Conditions",
    title: "Condition tracking",
    body: "Every underwriting condition in one place. See at a glance what has been cleared, what is still outstanding, and what is overdue — without digging through email or making calls to find out where things stand.",
  },
  {
    stage: "Closing deadlines",
    title: "TRID, Title, HOI, and Appraisal tracking",
    body: "Closing has a lot of moving parts with hard deadlines. Track Closing Disclosure timing, title search status, homeowners insurance, and appraisal order in a single view — so nothing is missed.",
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="section-marketing border-t border-organ-200 bg-white pb-0 sm:pb-0"
      aria-labelledby="features-heading"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-erp">
            02 · Broker-side process
          </p>
          <h2
            id="features-heading"
            className="mt-4 font-display text-4xl font-extrabold uppercase tracking-[0.04em] text-ink-950 sm:text-6xl"
          >
            The work you do every day — without the manual overhead.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-organ-800">
            Independent LOs and broker shops juggle multiple files at once. Mooric ERP is one
            workspace built around the stages that eat your day: completing applications, matching
            programs, clearing conditions, and hitting closing deadlines.
          </p>
        </motion.div>
      </div>
      <div className="mt-14 w-full bg-organ-100 py-12">
        <div className="layout-shell">
          <MooricLoanExamplePanel />
        </div>
      </div>
      <div className="mt-0 grid w-full sm:grid-cols-2 sm:items-stretch">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex h-full flex-col border-t border-organ-200 p-8 sm:border-r sm:odd:border-r sm:even:border-r-0 lg:p-12"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">{f.stage}</p>
            <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-ink-950">
              {f.title}
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed text-organ-800">{f.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
