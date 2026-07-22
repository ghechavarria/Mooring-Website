import { motion } from "framer-motion";

const painPoints = [
  {
    stat: "3×",
    title: "The same data, re-typed",
    body: "Intake notes, the 1003, the LOS — you enter the same borrower information again and again, and every re-entry is a chance for an error underwriting will catch later.",
  },
  {
    stat: "17",
    title: "Emails to clear one condition",
    body: "Which conditions are cleared? Which are still open? The answer lives across email threads, phone calls, and memory — not in one place you can trust.",
  },
  {
    stat: "5+",
    title: "Tools that don't talk",
    body: "Excel for the pipeline, folders for documents, a calendar for deadlines, notes for borrower context, email for everything else. You are the integration.",
  },
  {
    stat: "9 PM",
    title: "When you find out something slipped",
    body: "A CD deadline, an expiring lock, an HOA questionnaire nobody chased — hard dates don't remind themselves, so the anxiety never fully switches off.",
  },
] as const;

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative scroll-mt-8 border-b border-organ-200/90 bg-[linear-gradient(145deg,#ebf0f9_0%,#d8e0ef_42%,#c9d4e8_72%,#ebf0f9_100%)] py-28 sm:py-40"
      aria-labelledby="problem-heading"
    >
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">
            01 · The problem
          </p>
          <h2
            id="problem-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 text-balance sm:text-4xl"
          >
            Where does your day actually go?
          </h2>
          <p className="mt-4 max-w-[700px] text-lg leading-relaxed text-organ-800">
            Ask independent LOs and broker shops. It’s not the borrowers, the guidelines, or the
            deals — it’s the overhead between them. The same file, handled five different ways, in
            five different places.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-[1160px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group relative flex flex-col gap-2.5 overflow-hidden rounded-xl border border-organ-200/90 bg-white/80 p-7 shadow-card transition hover:border-erp/50 hover:shadow-[0_14px_34px_-20px_rgba(37,99,235,0.35)]"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-erp/15 via-sky-400/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <p className="relative font-mono text-[34px] font-semibold tabular-nums text-slate-500">
                {item.stat}
              </p>
              <h3 className="relative text-[16.5px] font-semibold text-ink-950">{item.title}</h3>
              <p className="relative text-[14.5px] leading-relaxed text-organ-700">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mx-auto mt-14 flex max-w-[1160px] flex-wrap items-center justify-between gap-4 rounded-xl border border-organ-200/90 bg-white/75 px-7 py-7 shadow-card sm:px-9"
        >
          <p className="max-w-[720px] text-[17px] leading-relaxed text-organ-800">
            <span className="font-semibold text-ink-950">None of this is loan officer work.</span> It’s
            overhead — and it’s exactly what Mooric ERP is built to take off your plate.
          </p>
          <a
            href="#memory"
            className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-erp transition hover:text-erp-600"
          >
            See how ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
