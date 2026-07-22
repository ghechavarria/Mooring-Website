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
    "saved per file on loan structuring alone — the system already knows the borrower when you build the deal.",
} as const;

const complianceNote = {
  eyebrow: "Compliance-ready by design",
  body: 'Every document, extracted field, and update is logged against the file — when an auditor, investor, or underwriter asks "why," the answer is already on record.',
} as const;

function StatDocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <p className={`font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563eb] ${className}`}>
      02 · Core differentiator
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
    <div className={`flex items-center gap-5 ${className}`}>
      <p
        className={`shrink-0 font-mono font-semibold tabular-nums ${
          dark ? "text-erp" : "text-[#020618]"
        } ${compact ? "text-[2.75rem] leading-none" : "text-4xl sm:text-5xl"}`}
      >
        {memoryStat.value}
      </p>
      <p
        className={`leading-relaxed ${dark ? "text-slate-300" : "text-[#334155]"} ${
          compact ? "text-[14.5px]" : "text-sm sm:text-base"
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
    <div className={`relative mx-auto ${compact ? "max-w-[20rem]" : "max-w-xs"}`}>
      {showLabel ? (
        <p
          className={`relative z-10 mb-3 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${
            fragmented ? "text-slate-400" : "text-[#2563eb]"
          }`}
        >
          {fragmented ? "Disconnected steps" : "One living record"}
        </p>
      ) : null}

      {!fragmented ? (
        <>
          <div
            className="absolute bottom-8 left-1/2 top-6 w-px -translate-x-1/2 bg-gradient-to-b from-[#2563eb]/10 via-[#2563eb]/25 to-[#2563eb]/10"
            aria-hidden
          />
          <motion.div
            className="absolute bottom-8 left-1/2 top-6 w-px -translate-x-1/2 bg-[#2563eb]/20"
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />
        </>
      ) : null}

      <div className={`relative ${compact ? "space-y-2.5" : "space-y-6"}`}>
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
              className={`min-w-0 flex-1 rounded-xl border px-3 py-2.5 ${
                fragmented
                  ? "border-dashed border-slate-300 bg-white/90"
                  : "border-[#e7ebf1] bg-white/90"
              } ${!fragmented && i % 2 !== 0 ? "ml-auto" : ""}`}
            >
              <p
                className={`text-sm font-semibold ${fragmented ? "text-slate-500" : "text-[#0f172a]"}`}
              >
                {track.label}
              </p>
              {fragmented ? (
                <>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                    {fragmentedExamples[track.label]}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    reset
                  </p>
                </>
              ) : (
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{track.body}</p>
              )}
            </div>
            <span
              className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 ${
                fragmented
                  ? "h-[30px] w-[30px] border-[#e7ebf1] bg-[#e7ebf1] text-slate-400"
                  : "h-8 w-8 border-white bg-[#2563eb] text-white shadow-[0_0_20px_rgba(0,117,255,0.35)]"
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
          className={`relative z-10 rounded-xl border border-[#2563eb]/30 bg-[#2563eb]/5 px-3.5 py-2.5 text-center ${
            compact ? "mt-3.5" : "mt-8"
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2563eb]">
            Central Loan Memory
          </p>
          <p className="mt-1 text-xs text-slate-600">Full borrower context — retained</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={`relative z-10 rounded-xl border border-dashed border-slate-300 bg-white/90 px-3.5 py-2.5 text-center ${
            compact ? "mt-3.5" : "mt-8"
          }`}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Borrower context
          </p>
          <p className="mt-1 text-xs text-slate-400">Lost</p>
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
        className="max-w-3xl"
      >
        <MemoryEyebrow />
        <h2
          id="memory-heading"
          className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0f172a] text-balance sm:text-4xl"
        >
          Central Loan Memory
        </h2>
        <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-[#334155]">
          This is what makes Mooric ERP different from every other tool on the market. The system
          does not reset between tasks — it remembers the file.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="relative mt-12 overflow-hidden rounded-3xl border border-[#e7ebf1] bg-white shadow-card-md"
      >
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-[#e7ebf1] bg-[#f4f6f9]/50 p-7 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Without memory
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-500">{contrasts[0].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{contrasts[0].body}</p>
            <div className="mt-3.5 rounded-xl border border-dashed border-slate-300 bg-white/90 p-3.5">
              <h4 className="text-sm font-semibold text-slate-500">Last document wins</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                When you structure the loan or choose a program, context from earlier steps is gone —
                you are working from whatever was uploaded most recently, not the full borrower story.
              </p>
            </div>
            <div className="mt-5">
              <LivingRecordDiagram variant="fragmented" showLabel compact />
            </div>
          </div>

          <div className="relative bg-[radial-gradient(ellipse_80%_60%_at_80%_20%,rgba(0,117,255,0.08),transparent_55%)] p-7 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2563eb]">
              With Mooric
            </p>
            <h3 className="mt-3 text-lg font-semibold text-[#0f172a]">{contrasts[1].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#334155]">{contrasts[1].body}</p>
            <div className="mt-3.5 rounded-xl border border-[#2563eb]/20 bg-[#2563eb]/[0.04] p-3.5">
              <h4 className="text-sm font-semibold text-[#0f172a]">{contrasts[2].title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{contrasts[2].body}</p>
            </div>
            <div className="mt-5">
              <LivingRecordDiagram variant="connected" showLabel={false} compact />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-[42%] z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e7ebf1] bg-white font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-card">
            vs
          </span>
        </div>

        <div className="grid gap-7 border-t border-[#e7ebf1] bg-white/40 px-7 py-5 sm:grid-cols-[1fr_auto_1.2fr] sm:items-center sm:gap-7 sm:px-8">
          <MemoryStatBlock compact />
          <div className="hidden h-full min-h-[44px] w-px bg-[#d6dce6] sm:block" aria-hidden />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2563eb]">
              {complianceNote.eyebrow}
            </p>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#334155]">{complianceNote.body}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CentralLoanMemorySection() {
  return (
    <section
      id="memory"
      className="relative scroll-mt-8 border-y border-[#e7ebf1] py-28 sm:py-40"
      style={{
        backgroundColor: "#f4f6f9",
        backgroundImage:
          "linear-gradient(122deg, rgba(51,65,85,0.07) 0%, transparent 48%), linear-gradient(300deg, rgba(191,211,230,0.1) 0%, transparent 40%), radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,255,255,0.35), transparent 50%)",
      }}
      aria-labelledby="memory-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.28] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div className="layout-shell relative z-10">
        <ConceptSplitLivingRecord />
      </div>
    </section>
  );
}
