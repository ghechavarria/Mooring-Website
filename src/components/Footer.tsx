function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.2H6.06v7.2h2.28zM7.2 9.9a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zm11.14 8.44v-3.95c0-2.11-.45-3.74-2.92-3.74-1.19 0-1.99.65-2.31 1.27h-.03v-1.07h-2.19v7.2h2.28v-3.56c0-.94.18-1.85 1.34-1.85 1.15 0 1.16 1.07 1.16 1.91v3.51h2.4z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.39 0 12 0 12s0 3.61.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.61 24 12 24 12s0-3.61-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy">
      <p className="border-b border-white/5 py-[0.52rem] text-center font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        1003 completion · Condition tracking · Pipeline without Excel
      </p>
      <div className="layout-shell flex flex-col items-center justify-between gap-8 py-[1.8rem] sm:flex-row">
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
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-300/40 hover:bg-white/10 hover:text-sky-300"
          >
            <LinkedInIcon />
          </button>
          <button
            type="button"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-sky-300/40 hover:bg-white/10 hover:text-sky-300"
          >
            <YouTubeIcon />
          </button>
        </div>
        <p className="font-mono text-xs text-slate-400">
          © {new Date().getFullYear()} Mooric ERP
        </p>
      </div>
    </footer>
  );
}
