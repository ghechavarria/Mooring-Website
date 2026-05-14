import { motion } from "framer-motion";

const leadershipCollaboration =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80";

const features = [
  {
    title: "Guided intake",
    body: "Borrower onboarding, questionnaires, and uploads land in one structured file — no mystery attachments.",
    accent: "from-gold/30 to-transparent",
  },
  {
    title: "AI-ready document flow",
    body: "Paperwork is organized and prioritized so your team sees what matters next — before underwriting has to ask twice.",
    accent: "from-glow/25 to-transparent",
  },
  {
    title: "Credit through package",
    body: "Pre-approval momentum carries into application prep and lender submission without re-keying the story of the loan.",
    accent: "from-gold/20 to-transparent",
  },
  {
    title: "Milestone visibility",
    body: "Conditional items, lender feedback, and closing checkpoints read as a single timeline — not five inboxes.",
    accent: "from-glow/20 to-transparent",
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
      className={`group relative overflow-hidden rounded-xl border border-organ-200/90 bg-organ-50/90 p-6 shadow-card transition-shadow hover:border-organ-600 hover:shadow-card-md sm:p-8 ${className}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${item.accent} blur-3xl transition-opacity group-hover:opacity-100`}
        aria-hidden
      />
      <div className="relative">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-organ-800">
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
      id="platform"
      className="relative scroll-mt-8 border-t border-organ-200/90 bg-white pb-0 pt-20 sm:pt-24"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-organ-700/25 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <h2
              id="features-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
            >
              Built for the full mortgage journey — not another point fix.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-organ-800">
              Loan officers, processors, and lender partners work from the same governed surface,
              with AI quietly clearing noise so humans stay on high-value decisions.
            </p>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden border border-organ-200 bg-white shadow-sm"
          >
            <img
              src={leadershipCollaboration}
              alt="Loan and operations leaders reviewing pipeline performance together"
              width={1600}
              height={1067}
              className="aspect-[4/3] w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="border-t border-organ-200 px-4 py-3 text-xs leading-snug text-organ-600">
              Alignment across origination, processing, and partner milestones.
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <PlatformFeatureCard key={f.title} step={i + 1} delay={i * 0.06} item={f} />
          ))}
        </div>
      </div>

      <div
        className="relative bg-gradient-to-b from-organ-50/45 to-organ-100/65 py-14 sm:py-20"
        aria-hidden
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/65 to-transparent" />
        </div>
      </div>
    </section>
  );
}
