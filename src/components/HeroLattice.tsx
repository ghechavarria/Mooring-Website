import { useId } from "react";

/** Full-bleed diagonal gold lattice; sits absolutely inside a `relative` parent. */
export function HeroLattice() {
  const pid = useId().replace(/:/g, "");

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full animate-grid-breathe text-gold/38"
      aria-hidden
    >
      <defs>
        <pattern
          id={`hero-lattice-${pid}`}
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 0H48V48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#hero-lattice-${pid})`} />
    </svg>
  );
}
