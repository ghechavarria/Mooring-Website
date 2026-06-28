import { motion } from "framer-motion";

const contrasts = [
  {
    title: "Most tools treat each step as a separate task",
    body: "Upload a pay stub, check a box, move on. The system forgets what it already learned about the borrower.",
  },
  {
    title: "Mooric ERP builds Central Loan Memory",
    body: "As documents come in and information is added, the system retains a complete understanding of the borrower — income complexity, credit story, property situation, all of it.",
  },
  {
    title: "Recommendations based on the full file",
    body: "When you structure the loan or choose a program, you are not starting from scratch. Mooric surfaces the right recommendation the way an experienced Loan Officer would — based on the full picture, not just the last document uploaded.",
  },
] as const;

export function CentralLoanMemorySection() {
  return (
    <section
      id="memory"
      className="relative scroll-mt-8 border-y border-organ-200 marble-organ-light py-28 sm:py-40"
      aria-labelledby="memory-heading"
    >
      <div className="layout-shell z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-erp">
            Core differentiator
          </p>
          <h2
            id="memory-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
          >
            Central Loan Memory
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-organ-800">
            This is what makes Mooric ERP different from every other tool on the market. The
            system does not reset between tasks — it remembers the file.
          </p>
          <p className="mt-3 text-sm font-medium text-organ-700">
            From application through closing — one living record.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-16 sm:mt-20"
        >
          <MemoryTrackPanel />
        </motion.div>

        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-3">
          {contrasts.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-xl border border-organ-200 border-t-2 border-t-erp bg-white px-5 py-8 shadow-card sm:px-8 sm:py-10"
            >
              <h3 className="text-lg font-semibold text-ink-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-organ-800">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-16 max-w-2xl rounded-xl border border-erp/25 bg-white px-6 py-8 text-center shadow-card sm:px-10 sm:py-10"
        >
          <p className="font-mono text-4xl font-semibold tabular-nums text-erp sm:text-5xl">
            ~1 hr
          </p>
          <p className="mt-3 text-sm leading-relaxed text-organ-800 sm:text-base">
            saved per file on loan structuring alone — because the system already knows the
            borrower when you sit down to build the deal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StatDocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function StatChecklistIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 11l2 2 4-4M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatCalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3v2M17 3v2M4 9h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 13h2v2H8v-2zm6 0h2v2h-2v-2z" fill="currentColor" />
    </svg>
  );
}

function MemoryTrackPanel() {
  const tracks = [
    {
      label: "1003",
      body: "Complete the application without three rounds of borrower follow-up",
      icon: StatDocIcon,
    },
    {
      label: "Conditions",
      body: "Cleared, outstanding, and overdue — one view, no email archaeology",
      icon: StatChecklistIcon,
    },
    {
      label: "Closing",
      body: "TRID, title, HOI, and appraisal deadlines tracked in one place",
      icon: StatCalendarIcon,
    },
  ] as const;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-organ-200/90 bg-white shadow-card-md">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,rgba(0,117,255,0.06),transparent_60%)]"
        aria-hidden
      />
      <div className="relative flex items-center gap-3 border-b border-organ-200/80 px-6 py-4 sm:px-8">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-erp">
          What memory keeps on track
        </span>
        <span className="h-px flex-1 bg-organ-200" aria-hidden />
      </div>
      <dl className="relative grid divide-y divide-organ-200/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {tracks.map((track) => (
          <div
            key={track.label}
            className="flex items-start gap-4 px-6 py-10 transition hover:bg-organ-50/50 sm:px-8 sm:py-12"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-erp/10 text-erp ring-1 ring-inset ring-erp/15">
              <track.icon />
            </span>
            <div className="min-w-0">
              <dt className="text-xl font-bold tracking-tight text-[#020618]">{track.label}</dt>
              <dd className="mt-2.5 text-sm leading-relaxed text-organ-700">{track.body}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
