import { useContactModal } from "../context/ContactModalContext";
import { SHOW_CONTACT_ACTIONS } from "../config/contactActions";

export function HeroCopy({
  align = "left",
  headingId = "hero-heading",
}: {
  align?: "left" | "center";
  headingId?: string;
}) {
  const { openContactModal } = useContactModal();
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      <p
        className={`inline-flex items-center gap-2 rounded-full border border-organ-200 bg-white px-3 py-1 text-xs text-organ-700${centered ? " justify-center" : ""}`}
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-erp" aria-hidden />
        Built for independent loan officers
      </p>
      <p
        className={`mt-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-erp${centered ? " justify-center" : ""}`}
      >
        <span className="h-px w-10 shrink-0 bg-erp sm:w-14" aria-hidden />
        Intelligent Automation. Real Results.
      </p>
      <h1
        id={headingId}
        className="mt-3 text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl md:text-[2.5rem] md:leading-[1.08] lg:text-[2.75rem] xl:text-6xl"
      >
        Less chasing paperwork. More time closing loans.
      </h1>
      <p
        className={`mt-5 text-base leading-relaxed text-organ-800 sm:text-lg md:mt-4 md:text-base lg:mt-6 lg:text-lg xl:text-xl xl:leading-relaxed${centered ? " mx-auto max-w-2xl" : " max-w-xl"}`}
      >
        You did not get into this business to re-enter borrower data, hunt down documents, or
        update five spreadsheets before your first coffee. Mooric ERP handles that overhead so
        you can focus on what actually needs your judgment — advising borrowers and getting files
        to the finish line.
      </p>
      <div
        className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 md:mt-6 lg:mt-10${centered ? " items-center justify-center" : ""}`}
      >
        <button
          type="button"
          className={`btn-primary-silver w-full px-6 py-3 text-center text-sm sm:w-auto sm:px-6${SHOW_CONTACT_ACTIONS ? "" : " hidden"}`}
          onClick={() => openContactModal("briefing")}
        >
          Request a briefing
        </button>
        <a
          href="#memory"
          className="inline-flex w-full items-center justify-center rounded-md border border-organ-200 bg-white px-6 py-3 text-sm font-semibold text-ink-950 shadow-sm transition hover:border-erp hover:text-erp sm:w-auto"
        >
          See why it's different
        </a>
      </div>
    </div>
  );
}
