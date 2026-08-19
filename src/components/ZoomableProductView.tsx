import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/** Viewport widths at or below this use tap-to-expand (matches hero compact breakpoint). */
const COMPACT_MAX_PX = 1099;

const ProductZoomContext = createContext(false);

/** True while this tree is rendered inside an open product lightbox. */
export function useProductZoomOpen() {
  return useContext(ProductZoomContext);
}

/**
 * On tablet/mobile, click/tap opens a shadowed lightbox at near design scale (pan to
 * inspect). Dialog portals to `document.body`. Before/After tabs sit above the
 * click layer via `data-product-zoom-ignore` + z-index so they stay interactive.
 * Preview content uses `.product-preview-stage` to block clicks and text selection.
 */
export function ZoomableProductView({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const inlineRef = useRef<HTMLDivElement>(null);
  const [shellHeight, setShellHeight] = useState<number>();

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${COMPACT_MAX_PX}px)`);
    function sync() {
      setCompact(mq.matches);
      if (!mq.matches) setOpen(false);
    }
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const stage = (
    <ProductZoomContext.Provider value={open}>
      <div
        className={
          open
            ? "product-preview-stage min-h-0 min-w-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-4"
            : "product-preview-stage"
        }
      >
        <div className={open ? "w-[1160px] max-w-none" : undefined}>{children}</div>
      </div>
    </ProductZoomContext.Provider>
  );

  return (
    <>
      {open ? <div className="w-full" style={{ height: shellHeight }} aria-hidden /> : null}
      {!open ? (
        <div ref={inlineRef} className="relative">
          {stage}
          {compact ? (
            <button
              type="button"
              className="absolute inset-0 z-10 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-erp"
              aria-label={`Expand ${label}`}
              onClick={() => {
                setShellHeight(inlineRef.current?.offsetHeight);
                setOpen(true);
              }}
            >
              <span
                className="pointer-events-none absolute bottom-4 right-3 flex items-center gap-2 rounded-full border border-organ-200/90 bg-white/95 py-2 pl-3 pr-3.5 text-[0.8125rem] font-medium text-organ-800 shadow-[0_10px_28px_-10px_rgba(15,23,42,0.35)] backdrop-blur-md ring-1 ring-black/[0.04] sm:right-4"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 text-erp"
                  aria-hidden
                >
                  <path
                    d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
                Expand preview
              </span>
            </button>
          ) : null}
        </div>
      ) : null}
      {open
        ? createPortal(
            <div className="fixed inset-0 z-[210] flex items-center justify-center p-3 sm:p-5">
              <button
                type="button"
                className="absolute inset-0 bg-organ-950/55 backdrop-blur-[2px]"
                aria-label="Close expanded view"
                onClick={() => setOpen(false)}
              />
              <div
                data-product-zoom="open"
                className="relative z-10 flex max-h-[min(92svh,56rem)] w-full min-w-0 max-w-[min(100%,72rem)] flex-col overflow-hidden rounded-2xl border border-organ-200/90 bg-white shadow-[0_32px_80px_-20px_rgba(15,23,42,0.55)]"
                role="dialog"
                aria-modal="true"
                aria-label={label}
              >
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-organ-200/90 px-4 py-3 sm:px-5">
                  <p className="min-w-0 truncate font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-organ-800">
                    {label}
                  </p>
                  <button
                    type="button"
                    className="flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-md border border-organ-200 text-organ-900 transition hover:bg-organ-50"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        d="M6 6l12 12M18 6L6 18"
                      />
                    </svg>
                  </button>
                </div>
                {stage}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
