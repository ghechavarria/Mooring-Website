import { motion } from "framer-motion";
import { InteractiveDemoCard } from "./BeforeAfterDemo";
import { HeroCopy, HeroStats } from "./HeroCopy";
import { HeroSessionPulse } from "./HeroSessionPulse";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex scroll-mt-24 flex-col border-b border-organ-200 bg-white pt-0"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_12%,rgba(0,117,255,0.06),transparent_52%),radial-gradient(ellipse_80%_45%_at_80%_35%,rgba(0,117,255,0.04),transparent_50%)]"
        aria-hidden
      />

      <div className="relative flex w-full flex-col">
        <HeroSessionPulse>
          <p className="sr-only">
            Decorative session strip above; main headline, interactive demo, and stats follow.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid w-full items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          >
            <HeroCopy />
            <div id="demo" className="w-full scroll-mt-24">
              <p className="sr-only">Before and after Mooric ERP interactive comparison</p>
              <InteractiveDemoCard idPrefix="hero-demo" />
            </div>
            <HeroStats className="lg:col-span-2" />
          </motion.div>
        </HeroSessionPulse>
      </div>
    </section>
  );
}
