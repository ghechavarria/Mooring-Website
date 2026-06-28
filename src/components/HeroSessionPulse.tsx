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

const ECG_BEAT_PX = 100;
const bpm = 40;
const beatMs = Math.round(60000 / bpm);

function ecgWavePath(width: number, amplitude: number, baseline: number, step: number): string {
  let d = `M0 ${baseline}`;
  for (let x = step; x <= width; x += step) {
    d += ` L${x} ${baseline + Math.sin((x / ECG_BEAT_PX) * Math.PI * 2) * amplitude}`;
  }
  return d;
}

const ecgWaveScrollPath = ecgWavePath(2800, 10, 28, 4);

function DriftingEcg({
  pathD,
  stroke,
  strokeWidth,
  heightClass,
  viewHeight,
  vignette,
  reduceMotion,
}: {
  pathD: string;
  stroke: string;
  strokeWidth: number;
  heightClass: string;
  viewHeight: number;
  vignette: string;
  reduceMotion: boolean | null;
}) {
  const gid = useId().replace(/:/g, "");

  return (
    <div className={`relative flex min-w-0 flex-1 items-stretch overflow-hidden ${heightClass}`}>
      <svg
        viewBox={`0 0 360 ${viewHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className={`relative z-[1] block w-full shrink-0 ${heightClass}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <clipPath id={`${gid}-clip`}>
            <rect x="0" y="0" width="360" height={viewHeight} />
          </clipPath>
          <linearGradient id={`${gid}-edgeshade`} x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
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
          <mask id={`${gid}-edgemask`} maskUnits="userSpaceOnUse" x="0" y="0" width="360" height={viewHeight}>
            <rect width="360" height={viewHeight} fill={`url(#${gid}-edgeshade)`} />
          </mask>
        </defs>
        <g clipPath={`url(#${gid}-clip)`} mask={`url(#${gid}-edgemask)`}>
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
              className="integrated-ecg-path"
              d={pathD}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="8"
              shapeRendering="geometricPrecision"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </g>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{ background: vignette }}
        aria-hidden
      />
    </div>
  );
}

export function HeroSessionPulse({ children }: { children?: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => setTick((n) => n + 1), beatMs);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="flex w-full min-h-0 flex-1 flex-col bg-white text-white">
      <div aria-hidden className="shrink-0 bg-erp">
        <div className="layout-header-px flex min-h-[3.5rem] flex-col gap-2 py-3 sm:min-h-0 sm:flex-row sm:items-center sm:gap-6 sm:py-3.5">
          <div className="flex shrink-0 items-center gap-2">
            <span className="rounded border border-white/40 bg-white/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider">
              Live
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
              Session pulse
            </span>
          </div>
          <p className="min-w-0 flex-1 truncate font-mono text-[11px] text-white/85 sm:text-xs">
            {statusLines[tick % statusLines.length]}
          </p>
          <div className="relative min-w-0 flex-1 sm:max-w-md">
            <DriftingEcg
              pathD={ecgWaveScrollPath}
              stroke="rgba(255,255,255,0.92)"
              strokeWidth={1.75}
              heightClass="h-8 sm:h-9"
              viewHeight={40}
              vignette="linear-gradient(90deg, rgb(0 117 255) 0%, rgb(0 117 255 / 0.7) 10%, transparent 30%, transparent 70%, rgb(0 117 255 / 0.7) 90%, rgb(0 117 255) 100%)"
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </div>

      {children != null ? (
        <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center border-t border-organ-200 bg-white text-ink-950">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,117,255,0.06),transparent_55%)]"
            aria-hidden
          />
          <div className="relative layout-header py-8 sm:py-10 lg:py-6 xl:py-8">{children}</div>
        </div>
      ) : null}

      <p className="layout-header-px shrink-0 border-t border-erp-600 bg-erp py-2.5 text-center font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/90">
        Mooric ERP — built for Loan Officers who are tired of running their pipeline out of Excel
      </p>
    </div>
  );
}
