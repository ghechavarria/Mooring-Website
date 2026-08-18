import { motion } from "framer-motion";
import { InteractiveDemoCard } from "./BeforeAfterDemo";
import { HeroCopy } from "./HeroCopy";
import { HeroSessionPulse } from "./HeroSessionPulse";

function HeroStats({ className = "" }: { className?: string }) {
  return (
    <ul className={`hero-demo-stats ${className}`.trim()} aria-label="Product highlights">
      <li>
        <p className="hero-demo-stats__num">~1 hr</p>
        <p className="hero-demo-stats__label">saved per file on structuring</p>
      </li>
      <li>
        <p className="hero-demo-stats__num">1003</p>
        <p className="hero-demo-stats__label">auto-filled from documents</p>
      </li>
      <li>
        <p className="hero-demo-stats__num">0</p>
        <p className="hero-demo-stats__label">spreadsheets to maintain</p>
      </li>
    </ul>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-[4.25rem] overflow-hidden border-b border-white/[0.06] bg-[linear-gradient(to_bottom_right,#050910,#081120,#0a1626)]"
      aria-labelledby="hero-heading"
    >
      <div className="relative flex min-h-[calc(100svh-4.25rem)] flex-col">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_72%_20%,rgba(37,99,235,0.22),transparent_55%),radial-gradient(ellipse_70%_55%_at_12%_85%,rgba(30,64,175,0.18),transparent_55%),radial-gradient(ellipse_55%_40%_at_50%_-10%,rgba(96,165,250,0.14),transparent_60%)]"
          aria-hidden
        />
        <div className="relative flex w-full min-h-0 flex-1 flex-col">
          <HeroSessionPulse>
            <p className="sr-only">
              Decorative session strip above; main headline and interactive demo follow.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex w-full min-w-0 flex-col gap-10 max-[1099px]:gap-12 min-[1100px]:gap-16"
            >
              <div className="hero-copy-stage w-full min-w-0 pt-4 sm:pt-6 max-[1099px]:hidden max-[1099px]:mx-auto max-[1099px]:max-w-[880px] min-[1100px]:pt-12 min-[1100px]:pb-2">
                <HeroCopy mode="lead" align="center" className="hero-copy--billboard" />
              </div>
              <div className="grid w-full min-w-0 items-start gap-x-8 gap-y-1.5 max-[1099px]:gap-x-0 min-[1100px]:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] min-[1100px]:items-center min-[1100px]:gap-x-10">
                <div className="hero-copy-stage hero-copy-stage--panel w-full min-w-0 max-[1099px]:overflow-visible max-[1099px]:order-1 max-[1099px]:mx-auto max-[1099px]:max-w-[880px] min-[1100px]:overflow-x-clip min-[1100px]:self-center">
                  <HeroCopy mode="support" />
                </div>
                <div className="mx-auto flex w-full min-w-0 max-w-[880px] flex-col items-center gap-2 max-[1099px]:order-2">
                  <p className="w-full text-left font-mono text-[10px] uppercase tracking-[0.18em] text-[#8ea3c4]">
                    Live workspace
                  </p>
                  <div id="demo" className="w-full min-w-0 scroll-mt-24">
                    <p className="sr-only">Before and after Mooric ERP interactive comparison</p>
                    <InteractiveDemoCard idPrefix="hero-demo" defaultView="after" preserveHorizontal />
                  </div>
                </div>
                <HeroStats className="hero-demo-stats--spread mt-16 pb-12 max-[1099px]:order-3 min-[1100px]:col-span-2 min-[1100px]:mt-24 min-[1100px]:pb-16" />
              </div>
            </motion.div>
          </HeroSessionPulse>
        </div>
      </div>
    </section>
  );
}
