import { motion } from "framer-motion";
import { HeroSessionPulse } from "./HeroSessionPulse";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 border-b border-slate-800 bg-slate-950 pt-5 md:pt-7"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_-5%,rgba(56,189,248,0.09),transparent_52%),radial-gradient(ellipse_80%_40%_at_80%_30%,rgba(181,154,109,0.06),transparent_45%)]"
        aria-hidden
      />

      <div className="relative w-full">
        <HeroSessionPulse variant="integrated">
          <p className="sr-only">
            Decorative session strip above; main headline and body copy follow.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/90">
              <span className="h-px w-10 shrink-0 bg-gold sm:w-14" aria-hidden />
              Intelligent Automation. Real Results.
            </p>
            <h1
              id="hero-heading"
              className="mt-3 text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl xl:text-[3.35rem] xl:leading-[1.08]"
            >
              The pipeline from first conversation to funded loan — without the scramble.
            </h1>
            <p className="mt-5 max-w-none text-base leading-relaxed text-slate-300 sm:text-lg lg:mt-6 lg:max-w-4xl xl:max-w-5xl xl:text-xl xl:leading-relaxed">
              Mooring ERP is a governed workspace for loan teams: intake, documentation, credit
              context, and lender milestones in one place — with AI accelerating the work you
              already do, not replacing your judgment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 lg:mt-10">
              <a href="#contact" className="btn-primary-gold w-full px-6 py-3 text-center text-sm sm:w-auto sm:px-6">
                Request a briefing
              </a>
              <a
                href="#platform"
                className="inline-flex w-full items-center justify-center rounded-md border border-gold/45 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition hover:border-gold hover:bg-slate-900/80 sm:w-auto"
              >
                Explore capabilities
              </a>
            </div>
            <dl className="mt-10 grid w-full gap-8 border-t border-slate-700/80 pt-8 sm:grid-cols-3 sm:gap-10 lg:mt-12 lg:gap-14 lg:pt-10 xl:gap-20">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-gold/85">
                  Pipeline
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  One thread from intake to post-close
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-gold/85">
                  Control
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  Built for regulated lending
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-gold/85">
                  Velocity
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                  Fewer stalls, clearer next steps
                </dd>
              </div>
            </dl>
          </motion.div>
        </HeroSessionPulse>
      </div>
    </section>
  );
}
