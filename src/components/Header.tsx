import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  { label: "Overview", href: "#top" },
  { label: "Capabilities", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Outcomes", href: "#results" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="shrink-0">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="shrink-0">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onViewport = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onViewport);
    return () => mq.removeEventListener("change", onViewport);
  }, []);

  return (
    <>
    <header className="sticky inset-x-0 top-0 z-40 w-full max-w-none min-w-0 shrink-0 self-stretch border-b border-organ-200/90 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06),0_8px_24px_-4px_rgba(15,23,42,0.08)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent/0 via-accent/35 to-accent/0" aria-hidden />
      <div className="layout-header flex h-[4.25rem] items-center justify-between gap-3 xl:gap-x-6">
        <a
          href="#top"
          className="group flex min-w-0 shrink-0 items-center gap-3 rounded-xl py-1 pl-1 pr-2 transition-colors hover:bg-organ-50/90 sm:gap-3.5 sm:pr-3"
        >
          <span
            className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px] ring-1 ring-organ-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.05),0_4px_12px_-4px_rgba(15,23,42,0.12)] transition-[box-shadow,ring-color] group-hover:ring-accent/40 sm:h-[2.75rem] sm:w-[2.75rem]"
            aria-hidden
          >
            <img
              src="/images/mooring-small-logo.png"
              alt=""
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
              decoding="async"
            />
          </span>
          <span
            className="pointer-events-none hidden h-9 w-px shrink-0 bg-gradient-to-b from-organ-100 via-accent/45 to-organ-100 sm:block"
            aria-hidden
          />
          <span className="min-w-0 font-display text-[1.0625rem] font-extrabold uppercase leading-none tracking-[0.04em] sm:text-lg sm:tracking-[0.06em]">
            <span className="text-organ-950">Mooring </span>
            <span className="text-erp">ERP</span>
          </span>
        </a>

        <div className="hidden shrink-0 items-center gap-3 xl:ml-10 xl:flex xl:gap-3 2xl:ml-14 2xl:gap-5 min-[1800px]:ml-20">
          <nav className="flex items-center gap-0.5 xl:gap-1.5" aria-label="Primary">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-organ-800 transition hover:bg-organ-100 hover:text-organ-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary-silver shrink-0 px-4 py-2.5 text-sm">
            Request a briefing
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-md border border-organ-200 text-organ-900 transition hover:bg-organ-50 xl:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

    </header>
    {menuOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <button
              type="button"
              className="absolute inset-0 z-0 bg-organ-950/45 backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div
              id="mobile-nav-panel"
              className="absolute inset-y-0 right-0 z-10 flex w-[min(100%,20rem)] flex-col border-l border-organ-200 bg-white pl-4 pr-[max(1rem,env(safe-area-inset-right))] pt-[max(0.5rem,env(safe-area-inset-top))] shadow-2xl"
            >
              <div className="flex shrink-0 items-center justify-between gap-3 border-b border-organ-200 pb-3 pr-1 pt-1">
                <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-organ-950">
                  Menu
                </span>
                <button
                  type="button"
                  className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-md border border-organ-200 text-organ-900 transition hover:bg-organ-50"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <MenuIcon open />
                </button>
              </div>
              <nav
                className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overscroll-y-contain py-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
                aria-label="Mobile"
              >
                {links.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3.5 text-base font-medium text-organ-900 active:bg-organ-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-primary-silver mt-3 w-full px-3 py-3.5 text-center text-base font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Request a briefing
                </a>
              </nav>
            </div>
          </div>,
          document.body,
        )
      : null}
    </>
  );
}
