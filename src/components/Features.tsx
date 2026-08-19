import { MooricLoanExamplePanel } from "./MooricLoanExamplePanel";
import { motion } from "framer-motion";

function IconApplication() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconMatching() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="11" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconConditions() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 11.5 11 13.5 16 8.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClosing() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 13h2v2H8v-2zm4.5 0h2v2h-2v-2z" fill="currentColor" />
    </svg>
  );
}

const features = [
  {
    stage: "Loan application",
    title: "Complete loan application, faster",
    body: "Collect everything needed for the 1003 without going back to the borrower three times. Mooric ERP knows what is missing and tells you — before underwriting has to ask.",
    Icon: IconApplication,
  },
  {
    stage: "Program matching",
    title: "Fit the borrower to the right program",
    body: "Build a complete picture of their financials, employment, and property — then surface the program that actually fits. Conventional, FHA, VA, DSCR, WVOE — the right answer, not just the obvious one.",
    Icon: IconMatching,
  },
  {
    stage: "Conditions",
    title: "Condition tracking",
    body: "Every underwriting condition in one place. See at a glance what has been cleared, what is still outstanding, and what is overdue — without digging through email or making calls to find out where things stand.",
    Icon: IconConditions,
  },
  {
    stage: "Closing deadlines",
    title: "TRID, Title, HOI, and Appraisal tracking",
    body: "Closing has a lot of moving parts with hard deadlines. Track Closing Disclosure timing, title search status, homeowners insurance, and appraisal order in a single view — so nothing is missed.",
    Icon: IconClosing,
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="section-marketing section-glass border-t border-white/50 pb-40 sm:pb-48"
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
      <div className="layout-shell mt-20 sm:mt-24">
        <MooricLoanExamplePanel />
      </div>
      <div className="mt-28 grid w-full gap-x-8 gap-y-12 px-6 sm:mt-36 sm:grid-cols-2 sm:items-stretch sm:px-10 lg:mt-40 lg:gap-x-10 lg:gap-y-16 lg:px-16 xl:px-24">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`glass-folder ${i % 2 === 1 ? "sm:mt-8" : ""}`}
          >
            <span className="glass-folder__tab">
              <f.Icon />
              {f.stage}
            </span>
            <div className="glass-folder__body p-10 sm:p-12 lg:p-14">
              <span className="glass-folder__mark" aria-hidden>
                <f.Icon />
              </span>
              <h3 className="relative max-w-[calc(100%-3.5rem)] font-display text-xl font-bold uppercase tracking-wide text-ink-950">
                {f.title}
              </h3>
              <p className="relative mt-5 max-w-lg leading-relaxed text-organ-800">{f.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
