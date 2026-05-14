import { LogoMark } from "./LogoMark";

const links = [
  { label: "Security", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Status", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy">
      <p className="border-b border-white/5 py-3 text-center font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        Borrower experience · Loan team velocity · AI-assisted confidence
      </p>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 py-10 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <LogoMark surface="dark" />
          <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
            BaseReality
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-slate-300 underline-offset-4 transition hover:text-sky-300 hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-slate-400">
          © {new Date().getFullYear()} BaseReality
        </p>
      </div>
    </footer>
  );
}
