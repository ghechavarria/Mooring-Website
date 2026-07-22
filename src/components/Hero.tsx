import { motion } from "framer-motion";
import { InteractiveDemoCard } from "./BeforeAfterDemo";
import { HeroCopy } from "./HeroCopy";
import { HeroSessionPulse } from "./HeroSessionPulse";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.06] bg-[linear-gradient(to_bottom_right,#050910,#081120,#0a1626)]"
      aria-labelledby="hero-heading"
    >
      <div className="relative flex min-h-[calc(100svh-4.25rem)] flex-col min-[1100px]:h-[calc(100svh-4.25rem)] min-[1100px]:overflow-hidden">
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
              className="grid w-full items-center gap-12 max-[1099px]:gap-[4.8rem] min-[1100px]:grid-cols-2 min-[1100px]:gap-x-8 xl:gap-x-24"
            >
              <HeroCopy />
              <div
                id="demo"
                className="w-full min-w-0 scroll-mt-24 max-[1099px]:border-t max-[1099px]:border-white/10 max-[1099px]:pt-8 min-[1100px]:py-2"
              >
                <p className="mb-4 hidden font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8ea3c4] max-[1099px]:block">
                  Live preview
                </p>
                <p className="sr-only">Before and after Mooric ERP interactive comparison</p>
                <InteractiveDemoCard idPrefix="hero-demo" defaultView="after" />
              </div>
            </motion.div>
          </HeroSessionPulse>
        </div>
      </div>
    </section>
  );
}
