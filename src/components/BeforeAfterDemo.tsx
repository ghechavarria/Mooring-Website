import { useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

type View = "before" | "after";

const folders = [
  {
    name: "Johnson docs",
    count: 3,
    files: ["scan001.pdf", "w2 michael FINAL.pdf", "bank stmt (1).pdf"],
  },
  {
    name: "Martinez - refi",
    count: 5,
    files: [
      "martinez paystub.jpg",
      "id front.png",
      "tax return 2022 copy.pdf",
      "tax return 2022 FINAL.pdf",
      "Untitled document.pdf",
    ],
  },
  {
    name: "Kim Purchase NEW",
    count: 2,
    files: ["w2.pdf", "photo id kim.jpg"],
  },
] as const;

type TrackerCell = { text: string; className?: string };

const trackerRows: { borrower: string; cells: TrackerCell[]; rowClass?: string }[] = [
  {
    borrower: "Johnson, M",
    cells: [
      { text: "5/2/24" },
      { text: "5/6/24?", className: "text-red-700" },
      { text: "6/28 ⚠", className: "bg-amber-100 text-amber-900" },
      { text: "OVERDUE", className: "bg-red-100 font-semibold text-red-800" },
      { text: "proc" },
    ],
  },
  {
    borrower: "Martinez",
    cells: [
      { text: "5/18/24" },
      { text: "7/8/24" },
      { text: "TBD", className: "bg-amber-100 text-amber-900" },
      { text: "" },
      { text: "submitted" },
    ],
  },
  {
    borrower: "Kim D.",
    cells: [
      { text: "5/20/24" },
      { text: "not sent", className: "bg-amber-100 text-amber-900" },
      { text: "7/5/24" },
      { text: "N/A" },
      { text: "setup??" },
    ],
  },
  {
    borrower: "Williams S.",
    rowClass: "italic text-organ-500",
    cells: [
      { text: "???" },
      { text: "" },
      { text: "7/15?" },
      { text: "" },
      { text: "new" },
    ],
  },
];

const summaryNav = [
  { label: "Summary", count: "6", active: true },
  { label: "Pre-Approval", count: "2", active: false },
  { label: "Loan Pipeline", count: "5", active: false },
  { label: "Archive", count: null, active: false },
  { label: "Calendar", count: "3", active: false },
  { label: "Guideline Search", count: null, active: false },
  { label: "System Flow", count: null, active: false },
] as const;

const summaryNotifications = [
  {
    tone: "Action",
    toneClass: "bg-[#fde3e3] text-[#dc2626]",
    body: "Rate lock expires Jul 18 — before target closing Aug 3. Extend the lock or move up closing.",
    meta: "Processing · David Okafor · LN-2026-0038",
  },
  {
    tone: "Reminder",
    toneClass: "bg-[#fdeed3] text-[#b45309]",
    body: "Initial CD not started — must be sent by Jul 27 (21 days left) to close on time.",
    meta: "Processing · David Okafor · LN-2026-0038",
  },
  {
    tone: "Overdue",
    toneClass: "bg-[#fee2e2] text-[#dc2626]",
    body: "Initial CD not started — must be sent by Jul 3 (-3 days left) to close on time.",
    meta: "Processing · James Whitfield · LN-2026-0031",
  },
  {
    tone: "Expiring",
    toneClass: "bg-[#fdeed3] text-[#b45309]",
    body: "Grace Kim — pre-approval letter expires Jul 20. Follow up or re-issue.",
    meta: "Pre-Approval",
  },
] as const;

const assignedTasks = [
  {
    title: "Review updated appraisal PDF and clear condition 2",
    meta: "from Alice Torres · David Okafor · due Jul 7",
  },
  {
    title: "Call listing agent re: closing time change",
    meta: "from Ben Liu · James Whitfield · due Jul 8",
  },
  {
    title: "Re-send VOE request to Gulf Freight HR",
    meta: "from Alice Torres · Priya Nair · due Jul 10",
  },
] as const;

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0 text-amber-600" aria-hidden>
      <path
        fill="currentColor"
        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2z"
      />
    </svg>
  );
}

function PageIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" className="shrink-0 text-organ-500" aria-hidden>
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4z"
      />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
      <path
        fill="currentColor"
        d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 0v3h14V5H5zm0 5v3h5v-3H5zm7 0v3h7v-3h-7zm-7 5v3h5v-3H5zm7 0v3h7v-3h-7z"
      />
    </svg>
  );
}

function BeforePanel() {
  return (
    <div className="flex h-full flex-col gap-4 p-4 @sm:p-5">
      <p className="text-xs text-organ-600 @sm:text-sm">
        Files scattered across folders with no clear structure. Dates tracked in a separate Excel sheet.
      </p>

      <div className="grid gap-3 @md:grid-cols-2 @xl:grid-cols-3">
        {folders.map((folder) => (
          <div
            key={folder.name}
            className="rounded-lg border border-organ-200 bg-white p-3 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <FolderIcon />
                <p className="truncate text-xs font-semibold text-ink-950 @sm:text-sm">{folder.name}</p>
              </div>
              <span className="shrink-0 rounded bg-organ-100 px-1.5 py-0.5 text-[10px] font-medium text-organ-600">
                {folder.count} files
              </span>
            </div>
            <ul className="mt-2.5 space-y-1">
              {folder.files.map((file) => (
                <li key={file} className="flex items-start gap-1.5 font-mono text-[10px] text-organ-700 @sm:text-[11px]">
                  <span className="mt-0.5">
                    <PageIcon />
                  </span>
                  <span className="min-w-0 break-words">{file}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-organ-200 shadow-sm">
        <div className="flex items-center gap-2 bg-green-700 px-3 py-2 text-white">
          <TableIcon />
          <p className="truncate font-mono text-[11px] font-semibold @sm:text-xs">
            Pipeline tracker v3 FINAL (2).xlsx
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[36rem] w-full border-collapse font-mono text-[10px] @sm:text-xs">
            <thead>
              <tr className="bg-organ-100 text-organ-800">
                <th className="border border-organ-200 px-2 py-1.5 text-left font-semibold">Borrower</th>
                <th className="border border-organ-200 px-2 py-1.5 text-left font-semibold">App date</th>
                <th className="border border-organ-200 px-2 py-1.5 text-left font-semibold">LE sent</th>
                <th className="border border-organ-200 px-2 py-1.5 text-left font-semibold">CTC target</th>
                <th className="border border-organ-200 px-2 py-1.5 text-left font-semibold">HOA due</th>
                <th className="border border-organ-200 px-2 py-1.5 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {trackerRows.map((row) => (
                <tr key={row.borrower} className={`bg-white text-organ-800 ${row.rowClass ?? ""}`}>
                  <td className="border border-organ-200 px-2 py-1.5 font-semibold">{row.borrower}</td>
                  {row.cells.map((cell, i) => (
                    <td
                      key={`${row.borrower}-${i}`}
                      className={`border border-organ-200 px-2 py-1.5 ${cell.className ?? ""}`}
                    >
                      {cell.text || "\u00a0"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function AfterPanel() {
  return (
    <div className="flex h-full min-h-[28rem] items-stretch">
      <div className="flex w-[7.5rem] shrink-0 flex-col gap-0.5 bg-[#141c30] px-2.5 py-3.5 sm:w-32">
        <div className="mb-3 flex items-center gap-1.5 px-1">
          <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] border border-[#2a3450] bg-[#0b1220] text-[10px] font-bold text-white">
            M
          </span>
          <div className="min-w-0">
            <p className="m-0 text-[6px] font-semibold uppercase tracking-[0.16em] text-[#8b95ab]">
              Origination
            </p>
            <p className="m-0 mt-px text-[9.5px] font-bold text-white">Mooric ERP</p>
          </div>
        </div>
        <p className="mb-0.5 px-1.5 text-[7px] font-semibold text-[#8b95ab]">Loan Officer</p>
        {summaryNav.map((item) => (
          <div
            key={item.label}
            className={`flex items-center justify-between rounded-[7px] px-2 py-1.5 text-[9.5px] ${
              item.active ? "bg-[#26314e] font-semibold text-white" : "text-[#9aa4b8]"
            }`}
          >
            <span className="truncate">{item.label}</span>
            {item.count != null ? (
              <span
                className={`rounded-full px-1.5 text-[7.5px] font-semibold ${
                  item.active ? "bg-[#3a4666] text-[#dde3ef]" : "bg-[#2a3450] text-[#c3cbdc]"
                }`}
              >
                {item.count}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2.5 bg-[#eef1f8] p-3.5">
        <div>
          <p className="m-0 text-[7px] font-bold uppercase tracking-[0.16em] text-[#2563eb]">Summary</p>
          <p className="m-0 mt-0.5 text-sm font-bold text-[#0f172a]">Good day, Joe</p>
          <p className="m-0 mt-0.5 text-[8.5px] text-[#64748b]">
            6 items need attention across pre-approval, setup, and processing.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-[7px] border border-[#dbe2ec] bg-white px-2.5 py-1 text-[8px] font-medium text-[#334155]">
            Closing within 7 days ▾
          </span>
          <span className="rounded-[7px] bg-[#2563eb] px-2.5 py-1 text-[8px] font-semibold text-white shadow-[0_2px_8px_rgba(37,99,235,0.35)]">
            ✦ Generate daily to-do
          </span>
        </div>

        <div className="rounded-[9px] border border-[#e8edf5] bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
          <p className="mb-1 text-[6.5px] font-bold uppercase tracking-[0.14em] text-[#64748b]">
            Find any loan
          </p>
          <div className="rounded-[7px] border border-[#e2e8f0] bg-white px-2 py-1.5 text-[8px] text-[#94a3b8]">
            Search borrowers across pre-approval, pipeline, and archive…
          </div>
        </div>

        <div className="w-fit min-w-[9.5rem] rounded-[9px] border border-[#e8edf5] bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
          <p className="m-0 text-base font-bold text-[#0f172a]">6</p>
          <p className="m-0 mt-0.5 text-[8px] text-[#64748b]">Active loans · open pipeline →</p>
        </div>

        <div className="grid min-h-0 flex-1 gap-2.5 @md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[9px] border border-[#e8edf5] bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
            <div className="mb-1.5 flex items-center gap-1.5">
              <p className="m-0 text-[9.5px] font-bold text-[#0f172a]">Notifications</p>
              <span className="rounded-full bg-[#fde3e3] px-1.5 py-px text-[7px] font-bold text-[#dc2626]">
                12 open
              </span>
            </div>
            <div className="mb-1.5 flex flex-wrap gap-1">
              <span className="rounded-full bg-[#2563eb] px-2 py-0.5 text-[7px] font-bold text-white">
                All
              </span>
              {["Processing", "Pre-Approval", "Setup"].map((tab) => (
                <span
                  key={tab}
                  className="rounded-full bg-[#eef1f8] px-2 py-0.5 text-[7px] font-semibold text-[#64748b]"
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              {summaryNotifications.map((item) => (
                <div
                  key={item.body}
                  className="flex items-start gap-1.5 rounded-lg border border-[#eef2f7] bg-[#f8fafc] px-2 py-1.5"
                >
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[7px] font-bold ${item.toneClass}`}
                  >
                    {item.tone}
                  </span>
                  <div className="min-w-0">
                    <p className="m-0 text-[8px] leading-snug text-[#0f172a]">{item.body}</p>
                    <p className="m-0 mt-0.5 text-[6.5px] text-[#94a3b8]">{item.meta}</p>
                    <p className="m-0 mt-0.5 text-[7px] font-semibold text-[#2563eb]">Open →</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="self-start rounded-[9px] border border-[#e8edf5] bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
            <div className="mb-1.5 flex items-center justify-between gap-1.5">
              <p className="m-0 text-[9.5px] font-bold text-[#0f172a]">Assigned to me</p>
              <span className="rounded-full bg-[#dbeafe] px-1.5 py-px text-[7px] font-bold text-[#2563eb]">
                3 open
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {assignedTasks.map((task) => (
                <div
                  key={task.title}
                  className="flex items-start gap-1.5 rounded-lg border border-[#eef2f7] bg-[#f8fafc] px-2 py-1.5"
                >
                  <div className="min-w-0 flex-1">
                    <p className="m-0 text-[8px] font-semibold leading-snug text-[#0f172a]">
                      {task.title}
                    </p>
                    <p className="m-0 mt-0.5 text-[6.5px] text-[#94a3b8]">{task.meta}</p>
                  </div>
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#bbf7d0] bg-white text-[8px] text-[#16a34a]">
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoChrome({
  view,
  onViewChange,
  idPrefix,
}: {
  view: View;
  onViewChange: (v: View) => void;
  idPrefix: string;
}) {
  const beforeTabId = `${idPrefix}-tab-before`;
  const afterTabId = `${idPrefix}-tab-after`;
  const panelId = `${idPrefix}-panel`;

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-organ-200 bg-organ-50 px-3 py-2 @sm:px-4">
      <div
        className="flex rounded-lg border border-organ-200 bg-white p-0.5"
        role="tablist"
        aria-label="Before or after Mooric"
      >
        <button
          type="button"
          role="tab"
          id={beforeTabId}
          aria-selected={view === "before"}
          aria-controls={panelId}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition @sm:px-3 @sm:text-sm ${
            view === "before" ? "bg-organ-100 text-ink-950" : "text-organ-600 hover:text-organ-900"
          }`}
          onClick={() => onViewChange("before")}
        >
          <FolderIcon />
          Before Mooric
        </button>
        <button
          type="button"
          role="tab"
          id={afterTabId}
          aria-selected={view === "after"}
          aria-controls={panelId}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition @sm:px-3 @sm:text-sm ${
            view === "after" ? "bg-organ-100 text-ink-950" : "text-organ-600 hover:text-organ-900"
          }`}
          onClick={() => onViewChange("after")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" className="text-erp" aria-hidden>
            <path
              fill="currentColor"
              d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm7 9l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zm-14 4l.8 2.4L8 18l-2.2.6L5 21l-.8-2.4L2 18l2.2-.6L5 15l.8 2.4L8 18z"
            />
          </svg>
          After Mooric
        </button>
      </div>
    </div>
  );
}

export function DemoAppWindow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute -inset-6 rounded-2xl bg-[rgba(37,99,235,0.28)] blur-3xl"
        aria-hidden
      />
      <div
        className="relative overflow-hidden rounded-xl border border-white/12 bg-white shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_0_60px_-12px_rgba(37,99,235,0.45),0_40px_90px_-30px_rgba(0,0,0,0.7)]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-organ-200 bg-organ-50 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="flex gap-1" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-organ-300" />
              <span className="h-2 w-2 rounded-full bg-organ-300" />
              <span className="h-2 w-2 rounded-full bg-organ-300" />
            </span>
            <span className="font-mono text-[10px] font-medium text-organ-700 sm:text-[11px]">
              Mooric ERP — Pipeline
            </span>
          </div>
          <span className="rounded border border-erp/30 bg-erp/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-erp">
            Live
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function InteractiveDemoCard({
  idPrefix = "demo",
  className = "",
  defaultView = "before" as View,
}: {
  idPrefix?: string;
  className?: string;
  defaultView?: View;
}) {
  const [view, setView] = useState<View>(defaultView);
  const reduceMotion = useReducedMotion();
  const beforeTabId = `${idPrefix}-tab-before`;
  const afterTabId = `${idPrefix}-tab-after`;
  const panelId = `${idPrefix}-panel`;

  return (
    <div className="relative p-1 min-[1100px]:p-2">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(37,99,235,0.22)] blur-3xl"
        aria-hidden
      />
      <div
        className={`@container relative min-w-0 overflow-hidden rounded-xl border border-white/12 bg-white shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_0_48px_-12px_rgba(37,99,235,0.4),0_28px_60px_-28px_rgba(0,0,0,0.65)] ${className}`}
      >
      <DemoChrome view={view} onViewChange={setView} idPrefix={idPrefix} />
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={view === "before" ? beforeTabId : afterTabId}
        className="min-[1100px]:h-[26rem] min-[1100px]:overflow-y-auto min-[1200px]:h-[30rem] xl:h-[34rem]"
      >
        <div className="grid h-full grid-cols-[minmax(0,1fr)]">
          <div
            aria-hidden={view !== "before"}
            className={`[grid-area:1/1] h-full min-w-0 ${reduceMotion ? "" : "transition-opacity duration-200"} ${view === "before" ? "opacity-100" : "invisible opacity-0"}`}
          >
            <BeforePanel />
          </div>
          <div
            aria-hidden={view !== "after"}
            className={`[grid-area:1/1] h-full min-w-0 ${reduceMotion ? "" : "transition-opacity duration-200"} ${view === "after" ? "opacity-100" : "invisible opacity-0"}`}
          >
            <AfterPanel />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export function BeforeAfterDemo() {
  return (
    <section
      id="demo"
      className="relative scroll-mt-8 border-t border-organ-200/90 bg-white py-12 sm:py-16"
      aria-labelledby="demo-heading"
    >
      <div className="layout-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-organ-800">
            See the difference
          </p>
          <h2 id="demo-heading" className="sr-only">
            Before and after Mooric ERP
          </h2>
        </div>

        <InteractiveDemoCard className="mx-auto mt-8 max-w-4xl" />
      </div>
    </section>
  );
}
