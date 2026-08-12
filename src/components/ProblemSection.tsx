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
      className="section-marketing border-b border-white/10 bg-navy text-white"
      aria-labelledby="problem-heading"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-5xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-erp">01 · The problem</p>
          <h2
            id="problem-heading"
            className="mt-4 font-display text-4xl font-extrabold uppercase tracking-[0.04em] text-white sm:text-6xl md:text-7xl"
          >
            Where does your day actually go?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Ask independent LOs and broker shops. It’s not the borrowers, the guidelines, or the
            deals — it’s the overhead between them. The same file, handled five different ways, in
            five different places.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-0 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border-b border-white/15 p-8 sm:border-r sm:last:border-r-0 lg:[&:nth-child(4n)]:border-r-0"
            >
              <p className="font-display text-5xl font-extrabold text-erp">{item.stat}</p>
              <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.body}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg text-slate-300">
            <span className="font-semibold text-white">None of this is loan officer work.</span> It’s
            overhead — and it’s exactly what Mooric ERP is built to take off your plate.
          </p>
          <a
            href="#memory"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.16em] text-erp"
          >
            See how ↓
          </a>
        </div>
      </div>
    </section>
  );
}
