import { motion } from "framer-motion";

function IconAsk() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v5A3.5 3.5 0 0 1 15.5 15H12l-4.5 3.2V15H8.5A3.5 3.5 0 0 1 5 11.5v-5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M9 8.5h6M9 11.5h3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconNotes() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.2 4.2 19.8 9.8 9.5 20.1 4 21l.9-5.5L14.2 4.2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M12.8 5.6 18.4 11.2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconReminders() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15.5 18.5a3.5 3.5 0 0 1-7 0M6 10.5a6 6 0 1 1 12 0c0 4.2 1.4 5.8 1.4 5.8H4.6S6 14.7 6 10.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWorkspace() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16.75 13v7.5M13 16.75h7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const capabilities = [
  {
    title: "Ask anything about a loan file",
    body: "The assistant already knows the full context from Central Loan Memory — income, conditions, timeline, borrower notes. No re-explaining the file every time.",
    Icon: IconAsk,
  },
  {
    title: "Add notes on the go",
    body: "Capture what you want to remember about a borrower, a conversation, or a next step — attached to the file, not scattered across apps.",
    Icon: IconNotes,
  },
  {
    title: "Set reminders without leaving the platform",
    body: "Follow up with a borrower, check on a condition, confirm an appraisal appointment. Reminders live where the loan lives.",
    Icon: IconReminders,
  },
  {
    title: "Stay in one place",
    body: "No more context-switching between the loan file, a notes app, a calendar, and an email thread. Your work partner is already in one workspace — with the file.",
    Icon: IconWorkspace,
  },
] as const;

export function LOPersonalAssistantSection() {
  return (
    <section
      id="assistant"
      className="section-marketing section-neu"
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
            Loan Officer Personal Assistant
          </p>
          <h2 id="assistant-heading" className="section-heading">
            The assistant that already knows your file.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-organ-800">
            Not a chatbot. Not a help center. An always-on work partner in one workspace — with full
            loan context from the moment you open a file.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 sm:gap-7">
          {capabilities.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="neu-pad px-7 py-8 sm:px-8 sm:py-9"
            >
              <h3 className="flex items-start gap-3 text-lg font-semibold text-ink-950">
                <span className="mt-0.5 shrink-0 text-erp">
                  <item.Icon />
                </span>
                <span>{item.title}</span>
              </h3>
              <p className="mt-3 leading-relaxed text-organ-800">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
