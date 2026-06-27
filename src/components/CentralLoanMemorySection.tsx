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
    body: "When you structure the loan or choose a program, you are not starting from scratch. Mooric surfaces the right recommendation the way an experienced LO would — based on the full picture, not just the last document uploaded.",
  },
] as const;

export function CentralLoanMemorySection() {
  return (
    <section
      id="memory"
      className="relative scroll-mt-8 border-y border-organ-200 marble-organ-light py-24 sm:py-32"
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
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
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
          className="mx-auto mt-14 max-w-2xl rounded-xl border border-erp/25 bg-white px-6 py-8 text-center shadow-card sm:px-10 sm:py-10"
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
