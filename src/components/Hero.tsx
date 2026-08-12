import { motion } from "framer-motion";
import { InteractiveDemoCard } from "./BeforeAfterDemo";
import { HeroCopy } from "./HeroCopy";
import { HeroSessionPulse } from "./HeroSessionPulse";

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
              className="grid w-full min-w-0 items-center gap-8 max-[1099px]:gap-0 min-[1100px]:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] min-[1100px]:gap-x-6 xl:gap-x-12"
            >
              <div className="hero-copy-stage w-full min-w-0 overflow-x-clip max-[1099px]:pt-16 max-[1099px]:pb-8 sm:max-[1099px]:pt-20 sm:max-[1099px]:pb-10 lg:max-[1099px]:pt-24">
                <HeroCopy />
              </div>
              <div
                id="demo"
                className="w-full min-w-0 scroll-mt-24 max-[1099px]:pt-6 max-[1099px]:pb-8 min-[1100px]:py-2"
              >
                <div className="max-[1099px]:mx-auto max-[1099px]:max-w-4xl">
                  <p className="mb-3 text-left font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8ea3c4] max-[1099px]:pl-1">
                    Live workspace
                  </p>
                  <p className="sr-only">Before and after Mooric ERP interactive comparison</p>
                  <InteractiveDemoCard
                    idPrefix="hero-demo"
                    defaultView="after"
                    preserveHorizontal
                  />
                  <ul className="hero-demo-stats mt-5 max-[1099px]:text-center sm:mt-6" aria-label="Product highlights">
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
                </div>
              </div>
            </motion.div>
          </HeroSessionPulse>
        </div>
      </div>
    </section>
  );
}
