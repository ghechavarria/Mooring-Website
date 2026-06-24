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
      <div className="layout-shell flex flex-col items-center justify-between gap-8 py-10 sm:flex-row">
        <div className="flex shrink-0 items-center justify-center sm:justify-start">
          <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[10px] sm:h-28 sm:w-28">
            <img
              src="/images/full-logo-no-background.svg"
              alt="Mooric ERP"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
              decoding="async"
            />
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
          © {new Date().getFullYear()} Mooric ERP
        </p>
      </div>
    </footer>
  );
}
