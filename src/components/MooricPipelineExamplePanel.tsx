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

const pipelineLoans = [
  {
    name: "Maria Chen",
    detail: "Conventional · $420,000 · Purchase",
    status: "Setup",
    statusClass: "bg-[#3f4756] text-white",
    badges: [
      { label: "2 docs missing", className: "bg-[#fdeed3] text-[#b45309]" },
      { label: "1003: 82% complete", className: "bg-[#dbeafe] text-[#2563eb]" },
    ],
    closing: "not set",
  },
  {
    name: "David Okafor",
    detail: "FHA · $323,275 · Purchase",
    status: "Processing",
    statusClass: "bg-[#2563eb] text-white",
    badges: [
      { label: "Lock: exp Jul 18", className: "bg-[#fdeed3] text-[#b45309]" },
      { label: "TRID: LE sent", className: "bg-[#dbeafe] text-[#2563eb]" },
      { label: "Appraisal: scheduled", className: "bg-[#fdeed3] text-[#b45309]" },
      { label: "HOI: missing", className: "bg-[#fde3e3] text-[#dc2626]" },
      { label: "Title: ordered", className: "bg-[#dbeafe] text-[#2563eb]" },
      { label: "Conditions: 2 open", className: "bg-[#fdeed3] text-[#b45309]" },
    ],
    closing: "Aug 3",
  },
  {
    name: "Priya Nair",
    detail: "Conventional · $540,000 · Purchase",
    status: "Processing",
    statusClass: "bg-[#2563eb] text-white",
    badges: [
      { label: "Lock: exp Aug 1", className: "bg-[#dcfce7] text-[#16a34a]" },
      { label: "TRID: LE sent", className: "bg-[#dbeafe] text-[#2563eb]" },
      { label: "Appraisal: received", className: "bg-[#dcfce7] text-[#16a34a]" },
      { label: "HOI: received", className: "bg-[#dcfce7] text-[#16a34a]" },
      { label: "Title: clear", className: "bg-[#dcfce7] text-[#16a34a]" },
      { label: "Conditions: gift letter", className: "bg-[#fdeed3] text-[#b45309]" },
    ],
    closing: "Aug 14",
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
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-semibold ${className}`}>
      {children}
    </span>
  );
}

export function MooricPipelineExamplePanel() {
  const frameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const [layout, setLayout] = useState({ scale: 1, height: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    if (!frame || !stage) return undefined;

    function sync() {
      if (!frame || !stage) return;
      setLayout({
        scale: frame.clientWidth / DESIGN_WIDTH,
        height: stage.offsetHeight * (frame.clientWidth / DESIGN_WIDTH),
      });
    }

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="mt-14 w-full">
      <div className="relative w-full" style={{ height: layout.height || undefined }}>
        <figure
          ref={stageRef}
          className="origin-top-left overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#eef1f8] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)]"
          style={{
            width: DESIGN_WIDTH,
            transform: `scale(${layout.scale})`,
          }}
          aria-label="Mooric ERP loan pipeline example"
        >
          <div className="flex items-center gap-3 border-b border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-2.5">
            <div className="flex shrink-0 gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
            </div>
            <span className="rounded-md border border-[#e2e8f0] bg-white px-3 py-1 font-mono text-[10px] text-slate-500">
              app.mooricerp.com/pipeline
            </span>
          </div>

          <div className="flex items-stretch">
            <div className="flex w-[7rem] shrink-0 flex-col gap-0.5 bg-[#141c30] px-2 py-3">
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
              <div>
                <p className="m-0 text-[7px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                  Loan Pipeline
                </p>
                <p className="m-0 mt-1 text-[13px] font-bold text-[#0f172a]">Loan Pipeline</p>
                <p className="m-0 mt-0.5 text-[8.5px] text-slate-500">
                  Create a new loan below, or open any loan in the pipeline.
                </p>
              </div>

              <div className="rounded-[10px] border border-[#e8edf5] bg-white p-3.5 shadow-sm">
                <div className="mb-2 flex items-center gap-1.5">
                  <p className="m-0 text-[10px] font-bold text-[#0f172a]">Loan pipeline</p>
                  <div className="flex rounded-full bg-[#eef1f8] p-0.5">
                    <span className="rounded-full bg-[#2563eb] px-2.5 py-0.5 text-[7px] font-bold text-white">
                      All
                    </span>
                    <span className="px-2.5 py-0.5 text-[7px] font-semibold text-slate-500">Setup</span>
                    <span className="px-2.5 py-0.5 text-[7px] font-semibold text-slate-500">
                      Processing
                    </span>
                  </div>
                  <span className="ml-auto rounded-md border border-[#e2e8f0] bg-white px-2.5 py-0.5 text-[7px] text-slate-400">
                    Search…
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  {pipelineLoans.map((loan) => (
                    <div
                      key={loan.name}
                      className="flex items-center gap-5 rounded-lg border border-[#eef2f7] px-4 py-3"
                    >
                      <div className="w-[170px] shrink-0">
                        <p className="m-0 text-[11px] font-bold text-[#0f172a]">{loan.name}</p>
                        <p className="m-0 mt-0.5 mb-1.5 text-[8.5px] text-slate-500">{loan.detail}</p>
                        <Pill className={loan.statusClass}>{loan.status}</Pill>
                      </div>
                      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-1.5">
                        {loan.badges.map((badge) => (
                          <Pill key={badge.label} className={badge.className}>
                            {badge.label}
                          </Pill>
                        ))}
                      </div>
                      <div className="shrink-0 rounded-lg border border-[#e2e8f0] px-3 py-1.5 text-center">
                        <p className="m-0 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                          Closing
                        </p>
                        <p className="m-0 mt-0.5 text-[10px] font-bold text-[#0f172a]">{loan.closing}</p>
                      </div>
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
