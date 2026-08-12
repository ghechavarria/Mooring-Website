import { useEffect, useRef, useState, type ReactNode } from "react";

const DESIGN_WIDTH = 1160;

type NavItem = {
  label: string;
  count?: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: "Summary", count: "6" },
  { label: "Pre-Approval", count: "2" },
  { label: "Loan Pipeline", count: "5", active: true },
  { label: "Archive" },
  { label: "Calendar", count: "3" },
  { label: "Guideline Search" },
  { label: "System Flow" },
];

const loanMeta = [
  { label: "Setup", className: "bg-[#3f4756] text-white" },
  { label: "Purchase", className: "bg-[#2563eb] text-white" },
  { label: "Primary Residence", className: "bg-[#16a34a] text-white" },
  { label: "Loan $420,000", className: "border border-[#e2e8f0] bg-white text-[#334155]" },
  { label: "LTV 80.00%", className: "border border-[#e2e8f0] bg-white text-[#334155]" },
  { label: "FICO 734", className: "border border-[#bbf7d0] bg-[#dcfce7] font-bold text-[#15803d]" },
  { label: "Rate 6.500%", className: "border border-[#e2e8f0] bg-white text-[#334155]" },
] as const;

const classifiedDocs = [
  {
    file: "drivers_license_maria.jpg",
    detail: "Maria Chen · DOB 08/12/1989",
    type: "Identity",
    typeClass: "bg-[#3f4756] text-white",
    fields: "4 fields → 1003",
  },
  {
    file: "paystub_mar_2026.pdf",
    detail: "BrightPath Medical · $8,400/mo base",
    type: "Income · paystub",
    typeClass: "bg-[#15803d] text-white",
    fields: "6 fields → 1003",
  },
  {
    file: "w2_2025_maria.pdf",
    detail: "2025 wages $100,800",
    type: "Income · W-2",
    typeClass: "bg-[#15803d] text-white",
    fields: "5 fields → 1003",
  },
  {
    file: "purchase_contract_678harbor.pdf",
    detail: "678 Harbor Ln · $525,000 purchase price",
    type: "Property",
    typeClass: "bg-[#2563eb] text-white",
    fields: "8 fields → 1003",
  },
] as const;

function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[8.5px] font-semibold ${className}`}>
      {children}
    </span>
  );
}

export function MooricLoanExamplePanel() {
  const frameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const [layout, setLayout] = useState({ scale: 1, height: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    if (!frame || !stage) return undefined;

    function sync() {
      if (!frame || !stage) return;
      const scale = frame.clientWidth / DESIGN_WIDTH;
      setLayout({ scale, height: stage.offsetHeight * scale });
    }

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="w-full">
      <div className="relative w-full" style={{ height: layout.height || undefined }}>
        <figure
          ref={stageRef}
          className="origin-top-left overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#eef1f8] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)]"
          style={{
            width: DESIGN_WIDTH,
            transform: `scale(${layout.scale})`,
          }}
          aria-label="Mooric ERP loan file example for Maria Chen"
        >
          <div className="flex items-center gap-3 border-b border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5">
            <div className="flex shrink-0 gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
            </div>
            <span className="rounded-md border border-[#e2e8f0] bg-white px-3 py-1 font-mono text-[10px] text-slate-500">
              app.mooricerp.com/loans/LN-2026-0051
            </span>
          </div>

          <div className="flex items-stretch">
            <div className="flex w-[7.5rem] shrink-0 flex-col gap-0.5 bg-[#141c30] px-2 py-3">
              <div className="px-1.5 pb-2.5 pt-0.5">
                <p className="m-0 text-[7.5px] font-semibold uppercase tracking-[0.16em] text-[#8b95ab]">
                  Origination
                </p>
                <p className="m-0 mt-1 text-[10.5px] font-bold text-white">Mooric ERP</p>
              </div>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[9.5px] ${
                    item.active ? "bg-[#26314e] font-semibold text-white" : "text-[#9aa4b8]"
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  {item.count ? (
                    <span
                      className={`ml-1 shrink-0 rounded-full px-1.5 text-[8.5px] font-semibold ${
                        item.active ? "bg-[#3a4666] text-[#dde3ef]" : "bg-[#2a3450] text-[#c3cbdc]"
                      }`}
                    >
                      {item.count}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3.5 px-[18px] py-4">
              <p className="m-0 text-[8.5px] font-semibold text-[#2563eb]">‹ All files</p>
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="m-0 text-[13px] font-bold text-[#0f172a]">Maria Chen</p>
                <span className="font-mono text-[8.5px] text-slate-400">LN-2026-0051</span>
                <span className="ml-auto inline-flex items-center gap-1 text-[8.5px] font-semibold text-[#16a34a]">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#16a34a]" aria-hidden />
                  Autosaved
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {loanMeta.map((pill) => (
                  <Pill key={pill.label} className={pill.className}>
                    {pill.label}
                  </Pill>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <Pill className="bg-[#2563eb] font-bold text-white">AI Intake</Pill>
                <Pill className="border border-[#e2e8f0] bg-white text-[#334155]">1003</Pill>
                <Pill className="border border-[#e2e8f0] bg-white text-[#334155]">Documents</Pill>
                <Pill className="border border-[#e2e8f0] bg-white text-[#334155]">Lender Submission</Pill>
                <Pill className="ml-auto border border-[#fbcfe8] bg-[#fdf2f8] text-[#db2777]">
                  ♥ Loan Memory
                </Pill>
              </div>

              <div className="rounded-[10px] border border-[#e8edf5] bg-white p-3.5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <p className="m-0 text-[10px] font-bold text-[#0f172a]">Document intake</p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Pill className="bg-[#dbeafe] font-bold text-[#2563eb]">4 docs · 23 fields extracted</Pill>
                    <Pill className="border border-[#bfdbfe] bg-white text-[#2563eb]">✉ Invite borrower</Pill>
                  </div>
                </div>
                <div className="mt-2 rounded-lg border-[1.5px] border-dashed border-slate-300 bg-[#f8fafc] p-2.5 text-center">
                  <p className="m-0 text-[8.5px] font-bold text-[#0f172a]">Drop borrower documents</p>
                  <p className="m-0 mt-1 text-[7px] leading-relaxed text-slate-500">
                    IDs, paystubs, W-2s, bank statements, purchase contract — each file is classified and
                    its fields are mapped to the 1003 automatically.
                  </p>
                </div>
              </div>

              <div className="rounded-[10px] border border-[#e8edf5] bg-white p-3.5 shadow-sm">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-1.5">
                  <p className="m-0 text-[10px] font-bold text-[#0f172a]">Classified documents</p>
                  <Pill className="bg-[#2563eb] font-bold text-white">Apply 23 fields to 1003 →</Pill>
                </div>
                <div className="flex flex-col gap-1.5">
                  {classifiedDocs.map((doc) => (
                    <div
                      key={doc.file}
                      className="flex flex-wrap items-center gap-x-2 gap-y-1.5 rounded-[7px] border border-[#eef2f7] px-2.5 py-1.5"
                    >
                      <div className="min-w-0 basis-full">
                        <p className="m-0 text-[8.5px] font-semibold text-[#0f172a]">{doc.file}</p>
                        <p className="m-0 text-[7.5px] text-slate-500">{doc.detail}</p>
                      </div>
                      <Pill className={doc.typeClass}>{doc.type}</Pill>
                      <span className="shrink-0 text-[7.5px] text-slate-600">{doc.fields}</span>
                      <Pill className="bg-[#dcfce7] text-[#16a34a]">✓ parsed</Pill>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
