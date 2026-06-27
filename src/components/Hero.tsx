import { motion } from "framer-motion";
import { HeroSessionPulse } from "./HeroSessionPulse";
import { useContactModal } from "../context/ContactModalContext";
import { SHOW_CONTACT_ACTIONS } from "../config/contactActions";

export function Hero() {
  const { openContactModal } = useContactModal();
  return (
    <section
      id="top"
      className="relative scroll-mt-24 border-b border-slate-800/90 bg-[#020617] pt-0"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_12%,rgba(56,189,248,0.1),transparent_52%),radial-gradient(ellipse_80%_45%_at_80%_35%,rgba(30,112,214,0.09),transparent_50%),radial-gradient(ellipse_70%_50%_at_10%_80%,rgba(15,23,42,0.65),transparent_55%),radial-gradient(ellipse_80%_40%_at_80%_30%,rgba(191,211,230,0.05),transparent_45%)]"
        aria-hidden
      />

      <div className="relative w-full">
        <HeroSessionPulse>
          <p className="sr-only">
            Decorative session strip above; main headline and body copy follow.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90">
              <span className="h-px w-10 shrink-0 bg-accent sm:w-14" aria-hidden />
              Intelligent Automation. Real Results.
            </p>
            <h1
              id="hero-heading"
              className="mt-3 text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl xl:text-[3.35rem] xl:leading-[1.08]"
            >
              Less chasing paperwork. More time closing loans.
            </h1>
            <p className="mt-5 max-w-none text-base leading-relaxed text-slate-300 sm:text-lg lg:mt-6 lg:max-w-4xl xl:max-w-5xl xl:text-xl xl:leading-relaxed">
              You did not get into this business to re-enter borrower data, hunt down documents,
              or update five spreadsheets before your first coffee. Mooric ERP handles that
              overhead so you can focus on what actually needs your judgment — advising
              borrowers and getting files to the finish line.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 lg:mt-10">
              <button
                type="button"
                className={`btn-primary-silver w-full px-6 py-3 text-center text-sm sm:w-auto sm:px-6${SHOW_CONTACT_ACTIONS ? "" : " hidden"}`}
                onClick={() => openContactModal("briefing")}
              >
                Request a briefing
              </button>
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center rounded-md border border-accent/45 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition hover:border-accent hover:bg-slate-900/80 sm:w-auto"
              >
                See how it works
              </a>
            </div>
            <dl className="mt-10 grid w-full gap-8 border-t border-slate-700/80 pt-8 sm:grid-cols-3 sm:gap-10 lg:mt-12 lg:gap-14 lg:pt-10 xl:gap-20">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-accent/85">
                  1003
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  Complete the application without three rounds of borrower follow-up
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-accent/85">
                  Conditions
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  Cleared, outstanding, and overdue — one view, no email archaeology
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-accent/85">
                  Closing
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  TRID, title, HOI, and appraisal deadlines tracked in one place
                </dd>
              </div>
            </dl>
          </motion.div>
        </HeroSessionPulse>
      </div>
    </section>
  );
}
