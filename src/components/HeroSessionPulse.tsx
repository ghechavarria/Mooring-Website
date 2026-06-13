import { useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useId, useState } from "react";

const statusLines = [
  "Preparing your loan file preview…",
  "Tracing document milestones through the pipeline…",
  "Routing conditions to the right owner…",
  "Keeping borrower and lender milestones aligned…",
  "Securing an audit-friendly trail for this visit…",
];

/** One beat = 100px wide, baseline y=28 (vertical center of 56px viewBox) — only `H`/`L`. */
const ECG_BEAT_PX = 100;

function ecgAngularBeatFrom(x0: number): string {
  return `H${x0 + 12} L${x0 + 14} 26 L${x0 + 16} 28 L${x0 + 18} 25 L${x0 + 20} 28 H${x0 + 28} L${x0 + 30} 28 L${x0 + 32} 6 L${x0 + 34} 28 L${x0 + 36} 46 L${x0 + 38} 28 H${x0 + 46} L${x0 + 48} 27 L${x0 + 50} 28 L${x0 + 52} 30 L${x0 + 54} 28 H${x0 + ECG_BEAT_PX}`;
}

function ecgPathRepeats(n: number): string {
  let d = "M0 28";
  for (let k = 0; k < n; k++) {
    d += ecgAngularBeatFrom(k * ECG_BEAT_PX);
  }
  return d;
}

const ecgScrollPath = ecgPathRepeats(28);

/** Calm cadence: strip drift, AI swell, and status tick share this interval (~40 bpm). */
const bpm = 40;
const beatMs = Math.round(60000 / bpm);

export function HeroSessionPulse({
  variant = "panel",
  children,
}: {
  variant?: "panel" | "integrated";
  /** When `integrated`, main hero copy is rendered inside the same strip as the pulse. */
  children?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const gid = useId().replace(/:/g, "");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => setTick((n) => n + 1), beatMs);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  if (variant === "integrated") {
    return (
      <div className="flex w-full flex-col bg-gradient-to-b from-[#020617] via-[#030d18] to-[#020617] text-sky-100">
        <div aria-hidden>
          <div className="layout-header-px flex shrink-0 items-center justify-between border-b border-sky-500/25 bg-slate-950 py-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-[11px]">
              Session pulse
            </span>
            <span className="rounded border border-sky-400/50 bg-blue-950/80 px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-sky-200">
              Live
            </span>
          </div>

          <div className="grid grid-cols-1 border-b border-slate-800 bg-slate-900 sm:grid-cols-[minmax(0,17rem)_1fr]">
          <div className="layout-header-px flex items-center gap-4 border-slate-800 py-5 sm:border-r sm:py-6">
            <div
              className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-sky-500/60 bg-slate-950 shadow-[0_0_0_1px_rgba(14,165,233,0.25),0_0_24px_rgba(56,189,248,0.2)] sm:h-[4.5rem] sm:w-[4.5rem]${reduceMotion ? "" : " hero-ai-pulse-swell"}`}
              style={
                reduceMotion
                  ? undefined
                  : ({ "--ai-pulse-beat": `${beatMs}ms` } as CSSProperties)
              }
            >
              <span className="font-mono text-xs font-bold uppercase tracking-wide text-sky-200">
                AI
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-200">Intelligence layer</p>
              <p className="mt-1 font-mono text-[11px] leading-snug text-sky-400 sm:text-xs">
                {statusLines[tick % statusLines.length]}
              </p>
            </div>
          </div>

          <div className="relative min-h-[4.5rem] overflow-hidden border-t border-slate-800 bg-[#030712] sm:min-h-[5.25rem] sm:border-l sm:border-t-0 sm:border-slate-800">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.12) 50%, transparent 100%), repeating-linear-gradient(90deg, transparent, transparent 47px, rgba(51,65,85,0.35) 47px, rgba(51,65,85,0.35) 48px)",
              }}
              aria-hidden
            />
            <svg
              viewBox="0 0 360 56"
              preserveAspectRatio="xMidYMid meet"
              className="relative z-[1] block h-full min-h-[4.5rem] w-full sm:min-h-[5.25rem]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <clipPath id={`${gid}-int-clip`}>
                  <rect x="0" y="0" width="360" height="56" />
                </clipPath>
                <linearGradient id={`${gid}-int-stroke`} x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0c4a6e" />
                  <stop offset="0.35" stopColor="#38bdf8" />
                  <stop offset="0.65" stopColor="#bae6fd" />
                  <stop offset="1" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id={`${gid}-int-edgeshade`} x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fff" stopOpacity="0" />
                  <stop offset="0.04" stopColor="#fff" stopOpacity="0.12" />
                  <stop offset="0.1" stopColor="#fff" stopOpacity="0.42" />
                  <stop offset="0.18" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="0.3" stopColor="#fff" stopOpacity="1" />
                  <stop offset="0.7" stopColor="#fff" stopOpacity="1" />
                  <stop offset="0.82" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="0.9" stopColor="#fff" stopOpacity="0.42" />
                  <stop offset="0.96" stopColor="#fff" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <mask id={`${gid}-int-edgemask`} maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="56">
                  <rect width="360" height="56" fill={`url(#${gid}-int-edgeshade)`} />
                </mask>
              </defs>
              <g clipPath={`url(#${gid}-int-clip)`} mask={`url(#${gid}-int-edgemask)`}>
                <g
                  className={reduceMotion ? undefined : "hero-ecg-drift"}
                  style={
                    reduceMotion
                      ? undefined
                      : ({
                          "--ecg-beat": `${beatMs}ms`,
                          "--ecg-beat-width": "100px",
                        } as CSSProperties)
                  }
                >
                  <path
                    d={ecgScrollPath}
                    stroke={`url(#${gid}-int-stroke)`}
                    strokeWidth="1.35"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="8"
                    vectorEffect="non-scaling-stroke"
                    shapeRendering="geometricPrecision"
                  />
                </g>
              </g>
            </svg>
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{
                background:
                  "linear-gradient(90deg, rgb(3 7 18) 0%, rgb(3 7 18 / 0.82) 6%, rgb(3 7 18 / 0.35) 18%, transparent 34%, transparent 66%, rgb(3 7 18 / 0.35) 82%, rgb(3 7 18 / 0.82) 94%, rgb(3 7 18) 100%)",
              }}
              aria-hidden
            />
          </div>
        </div>
        </div>

        {children != null ? (
          <div className="relative z-10 border-t border-accent/30 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-950 backdrop-blur-md">
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(191,211,230,0.07)_0%,transparent_42%)]"
              aria-hidden
            />
            <div className="relative layout-header py-10 sm:py-12 lg:py-14 xl:py-16">{children}</div>
          </div>
        ) : null}

        <p className="layout-header-px border-t border-slate-800 bg-black py-2.5 text-center font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">
          Mooring ERP — illustrative session for this visit
        </p>
      </div>
    );
  }

  return (
    <aside
      className="relative overflow-hidden border border-slate-600 bg-slate-100 shadow-card-md ring-1 ring-slate-900/25"
      aria-labelledby="session-pulse-heading"
    >
      <h2 id="session-pulse-heading" className="sr-only">
        Illustrative mortgage session activity for this page visit
      </h2>
      <div className="flex items-center justify-between border-b border-sky-500/30 bg-slate-950 px-4 py-2.5">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-[11px]">
          Session pulse
        </span>
        <span className="rounded border border-sky-400/45 bg-blue-950/70 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-sky-200">
          Live
        </span>
      </div>
      <div className="space-y-4 bg-slate-100 p-4 sm:p-5">
        <div className="flex items-center gap-4">
          <div
            className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky-500/55 bg-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.18)]${reduceMotion ? "" : " hero-ai-pulse-swell"}`}
            style={
              reduceMotion ? undefined : ({ "--ai-pulse-beat": `${beatMs}ms` } as CSSProperties)
            }
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-sky-200">
              AI
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium text-slate-800">Intelligence layer</p>
            <p className="mt-0.5 truncate font-mono text-[10px] leading-snug text-blue-900">
              {statusLines[tick % statusLines.length]}
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md border border-slate-700 bg-[#030712]">
          <svg
            viewBox="0 0 360 56"
            preserveAspectRatio="xMidYMid meet"
            className="relative z-[1] h-14 w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <clipPath id={`${gid}-waveclip`}>
                <rect x="0" y="0" width="360" height="56" />
              </clipPath>
              <linearGradient id={`${gid}-ecg`} x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0c4a6e" />
                <stop offset="0.45" stopColor="#38bdf8" />
                <stop offset="1" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id={`${gid}-wave-edgeshade`} x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset="0.04" stopColor="#fff" stopOpacity="0.12" />
                <stop offset="0.1" stopColor="#fff" stopOpacity="0.42" />
                <stop offset="0.18" stopColor="#fff" stopOpacity="0.8" />
                <stop offset="0.3" stopColor="#fff" stopOpacity="1" />
                <stop offset="0.7" stopColor="#fff" stopOpacity="1" />
                <stop offset="0.82" stopColor="#fff" stopOpacity="0.8" />
                <stop offset="0.9" stopColor="#fff" stopOpacity="0.42" />
                <stop offset="0.96" stopColor="#fff" stopOpacity="0.12" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <mask id={`${gid}-wave-edgemask`} maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="56">
                <rect width="360" height="56" fill={`url(#${gid}-wave-edgeshade)`} />
              </mask>
            </defs>
            <g clipPath={`url(#${gid}-waveclip)`} mask={`url(#${gid}-wave-edgemask)`}>
              <g
                className={reduceMotion ? undefined : "hero-ecg-drift"}
                style={
                  reduceMotion
                    ? undefined
                    : ({
                        "--ecg-beat": `${beatMs}ms`,
                        "--ecg-beat-width": "100px",
                      } as CSSProperties)
                }
              >
                <path
                  d={ecgScrollPath}
                  stroke={`url(#${gid}-ecg)`}
                  strokeWidth="1.25"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="8"
                  vectorEffect="non-scaling-stroke"
                  shapeRendering="geometricPrecision"
                />
              </g>
            </g>
          </svg>
          <div
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(90deg, rgb(3 7 18) 0%, rgb(3 7 18 / 0.82) 6%, rgb(3 7 18 / 0.35) 18%, transparent 34%, transparent 66%, rgb(3 7 18 / 0.35) 82%, rgb(3 7 18 / 0.82) 94%, rgb(3 7 18) 100%)",
            }}
            aria-hidden
          />
        </div>
        <p className="border-t border-organ-200/80 bg-organ-50/95 px-4 py-3 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-slate-600 sm:px-5">
          Mooring ERP — illustrative session for this visit
        </p>
      </div>
    </aside>
  );
}
