const links = [
  { label: "Security", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Status", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-tide to-glow font-mono text-xs font-semibold text-ink-950">
            CL
          </span>
          <span className="text-sm font-medium text-white">ClearLedger</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-mist/55 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-mist/40">
          © {new Date().getFullYear()} ClearLedger
        </p>
      </div>
    </footer>
  );
}
