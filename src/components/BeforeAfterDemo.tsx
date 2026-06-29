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

const pipeline = [
  {
    name: "Johnson, Michael",
    detail: "Purchase · $485k · Conv",
    selected: true,
    pills: [
      { label: "HOA overdue", tone: "bg-red-100 text-red-800" },
      { label: "CTC Jun 28", tone: "bg-erp/15 text-erp" },
    ],
  },
  {
    name: "Martinez, Sofia",
    detail: "Refi · $320k · FHA",
    selected: false,
    pills: [
      { label: "Submitted", tone: "bg-erp/15 text-erp" },
      { label: "CTC Jul 8", tone: "bg-organ-100 text-organ-700" },
    ],
  },
  {
    name: "Kim, David",
    detail: "Purchase · $480k · Conv",
    selected: false,
    pills: [{ label: "LE not sent", tone: "bg-amber-100 text-amber-900" }],
  },
  {
    name: "Williams, Sarah",
    detail: "Purchase · $290k · FHA",
    selected: false,
    pills: [{ label: "On track", tone: "bg-green-100 text-green-800" }],
  },
] as const;

const keyDates = [
  { label: "Application date", value: "May 2, 2024", pill: "Done", tone: "bg-green-100 text-green-800" },
  { label: "LE sent", value: "May 6, 2024", pill: "Done", tone: "bg-green-100 text-green-800" },
  { label: "HOA questionnaire", value: "Due Jun 4", pill: "Overdue 5d", tone: "bg-red-100 text-red-800" },
  { label: "CD deadline", value: "Jun 25, 2024", pill: "3 days", tone: "bg-amber-100 text-amber-900" },
  { label: "Clear to close", value: "Jun 28, 2024", pill: "19 days", tone: "bg-organ-100 text-organ-700" },
] as const;

const documents = [
  {
    title: "W2 2023 — Acme Corp",
    detail: "Wages $100,800 · Extracted",
    pill: "Verified",
    tone: "bg-green-100 text-green-800",
  },
  {
    title: "Bank statement — Apr 2024",
    detail: "Chase ****1234 · Balance $42,300",
    pill: "Verified",
    tone: "bg-green-100 text-green-800",
  },
  {
    title: "Driver's license",
    detail: "FL · Expires 2028",
    pill: "Verified",
    tone: "bg-green-100 text-green-800",
  },
  {
    title: "Paystub — May 2024",
    detail: "YTD $42,000 · Income gap flagged",
    pill: "Review",
    tone: "bg-amber-100 text-amber-900",
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

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0 text-organ-500" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M21 21l-5.2-5.2M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
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

function StatusPill({ label, tone }: { label: string; tone: string }) {
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${tone}`}>
      {label}
    </span>
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
    <div className="flex h-full flex-col gap-3 p-3 sm:p-4">
      <div className="flex items-center gap-2 rounded-lg border border-organ-200 bg-white px-3 py-2 shadow-sm">
        <SearchIcon />
        <span className="text-xs text-organ-500">Search any loan, document, or date…</span>
      </div>

      <div className="grid flex-1 gap-3 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col rounded-lg border border-organ-200 bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[13px] font-semibold text-ink-950">Pipeline</p>
            <span className="rounded-full bg-organ-100 px-2 py-0.5 text-[10px] font-semibold text-organ-700">
              4 active
            </span>
          </div>
          <ul className="mt-3 flex-1 space-y-2">
            {pipeline.map((loan) => (
              <li
                key={loan.name}
                className={`rounded-lg border px-3 py-2 ${
                  loan.selected ? "border-erp bg-erp/5" : "border-organ-100 bg-organ-50/50"
                }`}
              >
                <p className="text-[13px] font-semibold text-ink-950">{loan.name}</p>
                <p className="mt-0.5 text-xs text-organ-700">{loan.detail}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {loan.pills.map((pill) => (
                    <StatusPill key={pill.label} label={pill.label} tone={pill.tone} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-3 md:grid-rows-[0.9fr_1.1fr]">
          <div className="flex flex-col rounded-lg border border-organ-200 bg-white p-3 shadow-sm">
            <p className="text-[13px] font-semibold text-ink-950">Key dates — Johnson, Michael</p>
            <ul className="mt-3 flex-1 space-y-2">
              {keyDates.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-wrap items-center justify-between gap-2 border-b border-organ-100 pb-1.5 last:border-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-ink-950">{item.label}</p>
                    <p className="text-[11px] text-organ-600">{item.value}</p>
                  </div>
                  <StatusPill label={item.pill} tone={item.tone} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-lg border border-organ-200 bg-white p-3 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[13px] font-semibold text-ink-950">Documents</p>
              <span className="rounded-full bg-erp/10 px-2 py-0.5 text-[10px] font-semibold text-erp">
                4 files · AI classified
              </span>
            </div>
            <ul className="mt-3 flex-1 space-y-2">
              {documents.map((doc) => (
                <li
                  key={doc.title}
                  className="flex flex-wrap items-start justify-between gap-2 rounded-md border border-organ-100 px-2.5 py-1.5"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-ink-950">{doc.title}</p>
                    <p className="text-[11px] text-organ-600">{doc.detail}</p>
                  </div>
                  <StatusPill label={doc.pill} tone={doc.tone} />
                </li>
              ))}
            </ul>
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
      <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-erp/10 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-xl border border-organ-200 bg-white shadow-card-md">
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
    <div
      className={`@container min-w-0 overflow-hidden rounded-xl border border-organ-200/90 bg-white shadow-card-md ${className}`}
    >
      <DemoChrome view={view} onViewChange={setView} idPrefix={idPrefix} />
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={view === "before" ? beforeTabId : afterTabId}
        className="min-[1100px]:h-[30rem] min-[1100px]:overflow-y-auto min-[1200px]:h-[36rem] xl:h-[42rem]"
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
