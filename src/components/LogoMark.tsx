type LogoMarkProps = {
  /** `light` — warm bars on organ panel. `dark` — footer-style bars on slate (for header or footer). */
  surface?: "light" | "dark";
  /** When false, no border/background/ring — same three bars + rule, inline only. */
  boxed?: boolean;
  /** With `surface="dark"`, use the header’s thin gray frame (`border-organ-200`) instead of the footer frost line. */
  navBorder?: boolean;
};

/** Three ascending bars + gold rule — identical layout everywhere; colors follow surface. */
export function LogoMark({ surface = "light", boxed = true, navBorder = false }: LogoMarkProps) {
  return (
    <span
      className={
        boxed
          ? surface === "light"
            ? "relative flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 border border-organ-200 bg-organ-100 pb-1.5 pt-2"
            : `relative flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 border ${navBorder ? "border-organ-200" : "border-white/20"} bg-slate-950/90 pb-1.5 pt-2 shadow-inner shadow-black/40 ring-1 ring-gold/30`
          : "relative flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 pb-1.5 pt-2"
      }
      aria-hidden
    >
      <span className={`h-3 w-1 ${surface === "light" ? "bg-organ-950" : "bg-slate-100"}`} />
      <span className="h-5 w-1 bg-gold" />
      <span className={`h-2.5 w-1 ${surface === "light" ? "bg-organ-600" : "bg-slate-400"}`} />
      <span className="absolute bottom-[7px] left-1 right-1 h-px bg-gold" />
    </span>
  );
}
