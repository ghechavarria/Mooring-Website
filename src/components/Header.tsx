import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LogoMark } from "./LogoMark";

const links = [
  { label: "Overview", href: "#top" },
  { label: "Capabilities", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Outcomes", href: "#results" },
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

  return (
    <>
    <header className="sticky top-0 z-40 shrink-0 border-b border-organ-200/90 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06),0_8px_24px_-4px_rgba(15,23,42,0.08)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-gold/0 via-gold/35 to-gold/0" aria-hidden />
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <a href="#top" className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 md:flex-initial">
          <LogoMark surface="dark" navBorder />
          <span className="min-w-0">
            <span className="block truncate font-display text-[12px] font-bold uppercase tracking-[0.14em] text-organ-950 sm:text-[13px] sm:tracking-[0.16em]">
              BaseReality
            </span>
            <span className="block truncate text-[11px] font-medium text-organ-600">
              Mortgage origination
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
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

        <div className="hidden items-center gap-4 md:flex lg:gap-5">
          <a
            href="#"
            className="text-sm font-medium text-organ-800 underline-offset-4 transition hover:text-organ-950 hover:underline"
          >
            Client access
          </a>
          <a href="#contact" className="btn-primary-gold px-4 py-2.5 text-sm">
            Request a briefing
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-md border border-organ-200 text-organ-900 transition hover:bg-organ-50 md:hidden"
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
            className="fixed inset-0 z-[200] md:hidden"
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
                  href="#"
                  className="rounded-lg px-3 py-3.5 text-base font-medium text-organ-800 underline-offset-4 active:bg-organ-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Client access
                </a>
                <a
                  href="#contact"
                  className="btn-primary-gold mt-3 w-full px-3 py-3.5 text-center text-base font-semibold"
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
