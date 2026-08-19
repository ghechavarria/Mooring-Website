import { motion } from "framer-motion";
import { MooricPipelineExamplePanel } from "./MooricPipelineExamplePanel";

const steps = [
  {
    title: "Full pipeline visibility, one screen",
    detail:
      "From the moment you first speak to a prospect to the day the loan funds, every file has a clear status. No more spreadsheets with columns of dates to manually update. No more wondering where a file stands.",
  },
  {
    title: "Daily summary — know what needs attention today",
    detail:
      "The Summary view surfaces everything that needs your attention right now — overdue conditions, upcoming TRID deadlines, files that have been sitting without an update. Start every day knowing exactly where to focus.",
  },
  {
    title: "Closed loan performance",
    detail:
      "See your closed loan history summarized by month, quarter, or year — volume, average loan size, time to close. Simple visibility into your own production without building a report.",
  },
] as const;

export function PipelineSection() {
  return (
    <section
      id="pipeline"
      className="section-marketing border-t-0 border-b-0 bg-[#0a1626] text-white"
      aria-labelledby="pipeline-heading"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <p className="font-mono text-[13px] font-normal uppercase tracking-[0.28em] text-erp">03 · Closed</p>
          <h2
            id="pipeline-heading"
            className="mt-4 font-display text-4xl font-extrabold uppercase tracking-[0.04em] text-white sm:text-6xl"
          >
            CLOSED — Pipeline & production
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            One of the most common pain points for independent LOs and broker shops is managing a
            pipeline across spreadsheets, sticky notes, and calendar reminders. Mooric ERP brings
            all of that into a single view that follows every loan from first conversation to
            funded — end to end, no more Excel tracking.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-0 border-t border-white/15 sm:grid-cols-3">
          {steps.map((s, i) => (
            <article
              key={s.title}
              className="border-b border-white/15 p-8 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="font-display text-4xl font-extrabold text-erp">{i + 1}</p>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12 w-full bg-[#0a1626] py-10 sm:py-12">
        <div className="layout-shell">
          <MooricPipelineExamplePanel />
        </div>
      </div>
    </section>
  );
}
