import { motion } from "framer-motion";

const leadershipCollaboration =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80";

const features = [
  {
    title: "Complete loan application, faster",
    body: "Collect everything needed for the 1003 without going back to the borrower three times. Mooric ERP knows what is missing and tells you — before underwriting has to ask.",
    accent: "from-erp/20 to-transparent",
  },
  {
    title: "Fit the borrower to the right program",
    body: "Build a complete picture of their financials, employment, and property — then surface the program that actually fits. Conventional, FHA, VA, DSCR, WVOE — the right answer, not just the obvious one.",
    accent: "from-erp/15 to-transparent",
  },
  {
    title: "Condition tracking",
    body: "Every underwriting condition in one place. See at a glance what has been cleared, what is still outstanding, and what is overdue — without digging through email or making calls to find out where things stand.",
    accent: "from-erp/15 to-transparent",
  },
  {
    title: "TRID, Title, HOI, and Appraisal tracking",
    body: "Closing has a lot of moving parts with hard deadlines. Track Closing Disclosure timing, title search status, homeowners insurance, and appraisal order in a single view — so nothing is missed.",
    accent: "from-erp/10 to-transparent",
  },
] as const;

type FeatureEntry = (typeof features)[number];

function PlatformFeatureCard({
  step,
  delay,
  item,
  className = "",
}: {
  step: number;
  delay: number;
  item: FeatureEntry;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -3 }}
      className={`group relative overflow-hidden rounded-xl border border-organ-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-md sm:p-8 ${className}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${item.accent} blur-3xl transition-opacity group-hover:opacity-100`}
        aria-hidden
      />
      <div className="relative">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">
          {String(step).padStart(2, "0")}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-ink-950">{item.title}</h3>
        <p className="mt-3 leading-relaxed text-organ-800">{item.body}</p>
      </div>
    </motion.article>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-8 border-t border-organ-200/90 bg-white py-28 sm:py-40"
      aria-labelledby="features-heading"
    >
      <div className="layout-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-erp">
              The daily workflow
            </p>
            <h2
              id="features-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
            >
              The work you do every day — without the manual overhead.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-organ-800">
              Independent Loan Officers and processors juggle multiple files at once. Mooric ERP is built
              around the tasks that eat your day: completing applications, matching programs,
              clearing conditions, and hitting closing deadlines.
            </p>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl border border-organ-200 bg-white shadow-sm"
          >
            <img
              src={leadershipCollaboration}
              alt="Loan officer reviewing borrower files at a desk"
              width={1600}
              height={1067}
              className="aspect-[4/3] w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </motion.figure>
        </div>

        <div className="mt-24 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <PlatformFeatureCard key={f.title} step={i + 1} delay={i * 0.06} item={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
