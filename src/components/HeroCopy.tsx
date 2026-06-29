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
    <div className={`[container-type:inline-size] ${centered ? "mx-auto max-w-3xl text-center" : "max-[1099px]:mt-6"}`}>
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
        className="mt-3 font-serif text-[clamp(1rem,7.5cqi,3.75rem)] font-semibold leading-[1.1] tracking-tight text-ink-950 min-[1100px]:leading-[1.08]"
      >
        <span className="block whitespace-nowrap">Less chasing paperwork.</span>
        <span className="block whitespace-nowrap">More time closing loans.</span>
      </h1>
      <p
        className={`mt-5 text-base leading-relaxed text-organ-800 sm:text-lg min-[1100px]:mt-4 min-[1100px]:text-base min-[1200px]:mt-6 min-[1200px]:text-lg xl:text-xl xl:leading-relaxed${centered ? " mx-auto max-w-2xl" : " max-w-xl"}`}
      >
        You did not get into this business to re-enter borrower data, hunt down documents, or
        update five spreadsheets before your first coffee. Mooric ERP handles that overhead so
        you can focus on what actually needs your judgment — advising borrowers and getting files
        to the finish line.
      </p>
      <div
        className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 min-[1100px]:mt-6 min-[1200px]:mt-10${centered ? " items-center justify-center" : ""}`}
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
