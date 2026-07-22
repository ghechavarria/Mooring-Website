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
        className={`inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/5 px-3.5 py-1.5 text-xs tracking-wide text-[#c3cfe2] backdrop-blur-sm${centered ? " justify-center" : ""}`}
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" aria-hidden />
        AI-powered · built for independent loan officers
      </p>
      <p
        className={`mt-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#60a5fa]${centered ? " justify-center" : ""}`}
      >
        <span
          className="h-px w-10 shrink-0 bg-gradient-to-r from-[#60a5fa] to-transparent sm:w-14"
          aria-hidden
        />
        Intelligent Mortgage Platform — Empowering Better Closings
      </p>
      <h1
        id={headingId}
        className="mt-4 font-serif text-[clamp(1rem,7.5cqi,3.75rem)] font-semibold leading-[1.1] tracking-tight text-white min-[1100px]:leading-[1.08]"
      >
        <span className="block whitespace-nowrap">Less chasing paperwork.</span>
        <span className="block whitespace-nowrap bg-[linear-gradient(92deg,#93c5fd_0%,#60a5fa_45%,#bfdbfe_100%)] bg-clip-text text-transparent">
          More time closing loans.
        </span>
      </h1>
      <p
        className={`mt-6 text-base leading-relaxed text-[#a9b8d0] sm:text-lg min-[1100px]:mt-4 min-[1100px]:text-base min-[1200px]:mt-6 min-[1200px]:text-lg xl:text-xl xl:leading-relaxed${centered ? " mx-auto max-w-2xl" : " max-w-xl"}`}
      >
        You did not get into this business to re-enter borrower data or update five spreadsheets
        before your first coffee. Mooric ERP builds a Central Loan Memory of every file and handles
        that overhead — you focus on advising borrowers and closing.
      </p>
      <div
        className={`mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3 min-[1100px]:mt-6 min-[1200px]:mt-10${centered ? " items-center justify-center" : ""}`}
      >
        <button
          type="button"
          className={`btn-primary-silver w-full px-6 py-3 text-center text-sm sm:w-auto sm:px-6${SHOW_CONTACT_ACTIONS ? "" : " hidden"}`}
          onClick={() => openContactModal("briefing")}
        >
          Get early access — first month free
        </button>
        <a
          href="#memory"
          className="inline-flex w-full items-center justify-center rounded-md border border-white/16 bg-white/5 px-6 py-3 text-sm font-semibold text-[#e2e8f0] transition hover:border-[#60a5fa] hover:bg-[rgba(96,165,250,0.08)] hover:text-[#93c5fd] sm:w-auto"
        >
          See why it's different
        </a>
      </div>
      <div
        className={`mt-8 flex flex-wrap items-center gap-x-8 gap-y-2.5 border-t border-white/10 pt-5${centered ? " justify-center" : ""}`}
      >
        <p className="text-[13.5px] text-[#8ea3c4]">
          <span className="font-mono text-white">~1 hr</span> saved per file on
          structuring
        </p>
        <p className="text-[13.5px] text-[#8ea3c4]">
          <span className="font-mono text-white">1003</span> auto-filled from documents
        </p>
        <p className="text-[13.5px] text-[#8ea3c4]">
          <span className="font-mono text-white">0</span> spreadsheets to maintain
        </p>
      </div>
    </div>
  );
}
