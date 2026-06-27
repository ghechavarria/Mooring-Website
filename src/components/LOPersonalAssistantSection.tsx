import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Ask anything about a loan file",
    body: "The assistant already knows the full context from Central Loan Memory — income, conditions, timeline, borrower notes. No re-explaining the file every time.",
  },
  {
    title: "Add notes on the go",
    body: "Capture what you want to remember about a borrower, a conversation, or a next step — attached to the file, not scattered across apps.",
  },
  {
    title: "Set reminders without leaving the platform",
    body: "Follow up with a borrower, check on a condition, confirm an appraisal appointment. Reminders live where the loan lives.",
  },
  {
    title: "Stay in one place",
    body: "No more context-switching between the loan file, a notes app, a calendar, and an email thread. Your work partner is already in the file.",
  },
] as const;

export function LOPersonalAssistantSection() {
  return (
    <section
      id="assistant"
      className="relative scroll-mt-8 border-t border-organ-200/90 bg-white pb-20 pt-16 sm:pb-24 sm:pt-20"
      aria-labelledby="assistant-heading"
    >
      <div className="layout-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-erp">
            LO Personal Assistant
          </p>
          <h2
            id="assistant-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
          >
            The assistant that already knows your file.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-organ-800">
            Not a chatbot. Not a help center. An always-on work partner that works the way you
            actually work — with full loan context from the moment you open a file.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {capabilities.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl border border-organ-200/90 bg-organ-50/90 p-6 shadow-card sm:p-8"
            >
              <h3 className="text-lg font-semibold text-ink-950">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-organ-800">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
