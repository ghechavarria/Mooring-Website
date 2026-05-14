import { motion, useReducedMotion } from "framer-motion";
import { HeroLattice } from "./HeroLattice";

export function HeroMotionBand() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-y border-gold/35 bg-gradient-to-br from-[#1a1612] via-organ-900 to-[#2c261c]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_45%,rgba(181,154,109,0.22),transparent_62%),radial-gradient(ellipse_85%_65%_at_50%_-10%,rgba(181,154,109,0.32),transparent_55%),radial-gradient(ellipse_75%_60%_at_100%_40%,rgba(181,154,109,0.18),transparent_52%),radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(181,154,109,0.16),transparent_48%),linear-gradient(155deg,rgba(181,154,109,0.11)_0%,transparent_42%,rgba(181,154,109,0.09)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[120%] w-[70%] rounded-full bg-gold/28 blur-[100px]"
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 40, 0], y: [0, -24, 0], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-1/4 top-0 h-full w-[55%] rounded-full bg-gradient-to-bl from-gold/18 to-organ-700/30 blur-[90px]"
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -32, 0], y: [0, 20, 0], opacity: [0.35, 0.55, 0.35] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <HeroLattice />

      {!reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent shadow-[0_0_24px_rgba(181,154,109,0.45)]"
          aria-hidden
          initial={{ top: "18%" }}
          animate={{ top: ["18%", "78%", "22%", "70%", "18%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <div
          className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          aria-hidden
        />
      )}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-20">
        <motion.p
          className="font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-gold/85"
          initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mortgage workspace
        </motion.p>

        <div className="relative mt-6">
          {!reduceMotion ? (
            <motion.span
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-[min(92vw,540px)] rounded-full bg-gold/18 blur-3xl"
              aria-hidden
              animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.96, 1.06, 0.96] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}
          <motion.p
            className="relative z-10 bg-gradient-to-r from-gold via-[#f4ead8] to-gold bg-[length:200%_100%] bg-clip-text font-display text-3xl font-extrabold uppercase tracking-[0.12em] text-transparent sm:text-5xl sm:tracking-[0.22em] md:text-6xl md:tracking-[0.26em] lg:text-7xl lg:tracking-[0.28em] animate-shimmer-slow"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            BaseReality
          </motion.p>
        </div>

        <p className="relative z-10 mt-8 max-w-md text-sm leading-relaxed text-slate-100/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
          Borrower touchpoints, lender conditions, and your checklist — one governed flow
          from first doc to clear-to-close, with gold-threaded controls on organic slate.
        </p>
      </div>
    </div>
  );
}
