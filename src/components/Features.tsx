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

function FeaturesWorkspaceScribble() {
  return (
    <motion.div
      className="features-scribble"
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <p className="features-scribble__label">
        <span>your future</span>
        <span>workspace</span>
      </p>
      <svg
        className="features-scribble__arrow"
        viewBox="0 -85 251 251"
        fill="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M14.4435 26.0257C16.3478 34.2205 18.0405 42.2052 20.1564 51.2405C14.6551 50.6101 11.4813 47.2481 10.2118 43.4659C6.40316 32.1193 2.80616 20.5625 0.267088 8.79558C-1.21403 2.07164 3.65251 -1.50048 10.2118 0.600755C21.2144 3.96273 32.0054 7.95508 43.0081 11.7373C43.6428 11.9474 44.4892 12.1576 44.7008 12.5778C45.7587 14.0487 46.3935 15.7296 47.2398 17.4106C45.7587 18.041 44.2776 19.5119 43.0081 19.3017C38.5647 18.6714 34.3329 17.6208 30.1011 16.7803C27.7736 16.36 25.6577 15.7297 22.2723 16.7803C24.5998 19.3018 26.9273 22.0333 29.2548 24.5548C79.6129 74.5642 155.15 85.0703 217.781 51.2405C225.821 46.8279 233.227 41.5748 241.055 36.742C243.806 35.061 246.557 33.5901 249.307 31.9092C249.942 32.3294 250.365 32.9598 251 33.38C250.365 35.2711 250.154 37.7926 248.673 39.0533C244.018 43.4659 239.363 47.8785 234.073 51.6607C181.599 89.4829 108.601 90.9538 52.1064 54.8126C41.3153 47.8785 31.7938 39.0533 21.8492 31.0686C19.7333 29.3876 18.0406 27.4966 16.1363 25.6054C15.7131 25.3953 15.0783 25.6054 14.4435 26.0257Z"
        />
      </svg>
    </motion.div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="section-marketing section-glass border-t border-white/50 pb-40 sm:pb-48"
      aria-labelledby="features-heading"
    >
      <div className="relative">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <p className="font-mono text-[13px] font-normal uppercase tracking-[0.28em] text-erp">
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
        <div className="layout-shell mt-24 sm:mt-28 lg:mt-10">
          <div className="features-scribble-anchor">
            <FeaturesWorkspaceScribble />
            <MooricLoanExamplePanel />
          </div>
        </div>
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
