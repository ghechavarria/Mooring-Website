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

const fragmentedExamples: Record<(typeof tracks)[number]["label"], string> = {
  "1003": "Pay stub upload",
  Conditions: "Conditions sheet",
  Closing: "Closing checklist",
};

const memoryStat = {
  value: "~1 hr",
  caption:
    "saved per file on loan structuring alone — because the system already knows the borrower when you sit down to build the deal.",
} as const;

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

function MemoryEyebrow({ className = "" }: { className?: string }) {
  return (
    <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-erp ${className}`}>
      Core differentiator
    </p>
  );
}

function MemoryStatBlock({
  className = "",
  compact = false,
  dark = false,
}: {
  className?: string;
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={className}>
      <p
        className={`font-mono font-semibold tabular-nums ${
          dark ? "text-erp" : "text-[#020618]"
        } ${compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}
      >
        {memoryStat.value}
      </p>
      <p
        className={`mt-3 leading-relaxed ${dark ? "text-slate-300" : "text-organ-800"} ${
          compact ? "text-sm" : "text-sm sm:text-base"
        }`}
      >
        {memoryStat.caption}
      </p>
    </div>
  );
}

function LivingRecordDiagram({
  variant = "connected",
  showLabel = true,
  compact = false,
}: {
  variant?: "connected" | "fragmented";
  showLabel?: boolean;
  compact?: boolean;
}) {
  const fragmented = variant === "fragmented";

  return (
    <div className={`relative mx-auto ${compact ? "max-w-[16rem]" : "max-w-xs"}`}>
      {showLabel ? (
        <p
          className={`relative z-10 mb-6 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${
            fragmented ? "text-organ-500" : "text-erp"
          }`}
        >
          {fragmented ? "Disconnected steps" : "One living record"}
        </p>
      ) : null}

      {!fragmented ? (
        <>
          <div
            className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-erp/20 via-erp to-erp/20"
            aria-hidden
          />
          <motion.div
            className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-erp/60"
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />
        </>
      ) : null}

      <div className={`relative ${compact ? "space-y-4" : "space-y-6"}`}>
        {tracks.map((track, i) => (
          <motion.div
            key={track.label}
            initial={{ opacity: 0, x: fragmented ? 0 : i % 2 === 0 ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className={`flex items-center gap-3 ${
              fragmented
                ? `flex-row ${i % 2 === 0 ? "-translate-x-1.5" : "translate-x-1.5"}`
                : i % 2 === 0
                  ? "flex-row"
                  : "flex-row-reverse text-right"
            }`}
          >
            <div
              className={`min-w-0 flex-1 rounded-xl border p-3 ${
                fragmented
                  ? "border-dashed border-organ-300 bg-organ-50/80"
                  : "border-organ-200 bg-organ-50/60"
              } ${!fragmented && i % 2 !== 0 ? "ml-auto" : ""}`}
            >
              <p
                className={`text-sm font-semibold ${fragmented ? "text-organ-600" : "text-[#020618]"}`}
              >
                {track.label}
              </p>
              {fragmented ? (
                <>
                  <p className="mt-1 text-[11px] leading-relaxed text-organ-500">
                    {fragmentedExamples[track.label]}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-organ-400">
                    reset
                  </p>
                </>
              ) : (
                <p className="mt-1 text-[11px] leading-relaxed text-organ-600">{track.body}</p>
              )}
            </div>
            <span
              className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 ${
                fragmented
                  ? "h-9 w-9 border-organ-200 bg-organ-200 text-organ-500"
                  : "h-10 w-10 border-white bg-erp text-white shadow-[0_0_20px_rgba(0,117,255,0.35)]"
              }`}
            >
              <track.icon />
            </span>
          </motion.div>
        ))}
      </div>

      {!fragmented ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={`relative z-10 rounded-xl border border-erp/30 bg-erp/5 px-4 py-3 text-center ${
            compact ? "mt-6" : "mt-8"
          }`}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-erp">
            Central Loan Memory
          </p>
          <p className="mt-1 text-xs text-organ-700">Full borrower context — retained</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={`relative z-10 rounded-xl border border-dashed border-organ-300 bg-organ-50/80 px-4 py-3 text-center ${
            compact ? "mt-6" : "mt-8"
          }`}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-organ-500">
            Borrower context
          </p>
          <p className="mt-1 text-xs text-organ-500">Lost</p>
        </motion.div>
      )}
    </div>
  );
}

function ConceptSplitLivingRecord() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <MemoryEyebrow />
        <h2
          id="memory-heading"
          className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
        >
          Central Loan Memory
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-organ-800">
          This is what makes Mooric ERP different from every other tool on the market. The system
          does not reset between tasks — it remembers the file.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="relative mt-12 overflow-hidden rounded-3xl border border-organ-200 bg-white shadow-card-md"
      >
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-organ-200 bg-organ-100/50 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-organ-500">
              Without memory
            </p>
            <h3 className="mt-3 text-lg font-semibold text-organ-600">{contrasts[0].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-organ-500">{contrasts[0].body}</p>
            <div className="mt-4 rounded-xl border border-dashed border-organ-300 bg-organ-50/80 p-4">
              <h4 className="text-sm font-semibold text-organ-600">Last document wins</h4>
              <p className="mt-2 text-xs leading-relaxed text-organ-500">
                When you structure the loan or choose a program, context from earlier steps is gone —
                you are working from whatever was uploaded most recently, not the full borrower story.
              </p>
            </div>
            <div className="mt-8">
              <LivingRecordDiagram variant="fragmented" showLabel compact />
            </div>
          </div>

          <div className="relative bg-[radial-gradient(ellipse_80%_60%_at_80%_20%,rgba(0,117,255,0.08),transparent_55%)] p-6 sm:p-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-erp">
              With Mooric
            </p>
            <h3 className="mt-3 text-base font-semibold text-ink-950 sm:text-lg">{contrasts[1].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-organ-800">{contrasts[1].body}</p>
            <div className="mt-4 rounded-xl border border-erp/20 bg-white/65 p-4">
              <h4 className="text-sm font-semibold text-ink-950">{contrasts[2].title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-organ-700">{contrasts[2].body}</p>
            </div>
            <div className="mt-6">
              <LivingRecordDiagram variant="connected" showLabel={false} compact />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-[42%] z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-organ-200 bg-white font-mono text-[10px] font-bold uppercase tracking-wider text-organ-600 shadow-card">
            vs
          </span>
        </div>

        <div className="border-t border-organ-200 bg-organ-50/40 px-6 py-5 sm:px-8">
          <MemoryStatBlock compact />
        </div>
      </motion.div>
    </div>
  );
}

export function CentralLoanMemorySection() {
  return (
    <section
      id="memory"
      className="relative scroll-mt-8 border-y border-organ-200 marble-organ-light py-28 sm:py-40"
      aria-labelledby="memory-heading"
    >
      <div className="layout-shell z-10">
        <ConceptSplitLivingRecord />
      </div>
    </section>
  );
}
