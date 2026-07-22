import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useContactModal } from "../context/ContactModalContext";
import { SHOW_CONTACT_ACTIONS } from "../config/contactActions";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
] as const;

const ROLES = ["Loan Officer", "Processor", "Broker Owner", "Other"] as const;
const LOAN_VOLUMES = ["1–3", "4–10", "10+"] as const;

function encodeFormBody(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

function ChipButton({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${
        selected
          ? "border-erp bg-erp text-white shadow-sm"
          : "border-organ-200 bg-white text-organ-800 hover:border-erp/40"
      }`}
    >
      {children}
    </button>
  );
}

export function ContactFormModal() {
  const { isOpen, modalTitle, closeContactModal } = useContactModal();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [role, setRole] = useState<(typeof ROLES)[number] | "">("");
  const [loansPerMonth, setLoansPerMonth] = useState<(typeof LOAN_VOLUMES)[number] | "">("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
      setRole("");
      setLoansPerMonth("");
      return undefined;
    }
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => nameRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeContactModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!role || !loansPerMonth) {
      setStatus("error");
      setErrorMessage("Please select your role and monthly loan volume.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormBody({
          "form-name": "contact",
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          role,
          state: String(formData.get("state") ?? ""),
          loans_per_month: loansPerMonth,
          message: String(formData.get("message") ?? ""),
          "bot-field": String(formData.get("bot-field") ?? ""),
        }),
      });

      if (!response.ok) throw new Error("Submit failed");
      setStatus("success");
      form.reset();
      setRole("");
      setLoansPerMonth("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-stretch p-0 lg:items-center lg:justify-center lg:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-heading"
    >
      <button
        type="button"
        className="absolute inset-0 bg-organ-950/50 backdrop-blur-[2px]"
        aria-label="Close contact form"
        onClick={closeContactModal}
      />
      <div className="relative z-10 h-dvh max-h-dvh w-full max-w-none overflow-y-auto overflow-x-hidden rounded-none border-0 bg-organ-50 shadow-none lg:h-auto lg:max-h-[min(90vh,44rem)] lg:max-w-lg lg:rounded-xl lg:border lg:border-organ-200/95 lg:shadow-card-md">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-organ-200/90 bg-organ-50 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-organ-800">
              Early access
            </p>
            <h2
              id="contact-modal-heading"
              className="mt-1 font-serif text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl"
            >
              {modalTitle}
            </h2>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-organ-200 text-organ-900 transition hover:bg-white"
            aria-label="Close"
            onClick={closeContactModal}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
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

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          {status === "success" ? (
            <div className="text-center">
              <p className="font-serif text-lg font-semibold text-ink-950">Thank you.</p>
              <p className="mt-2 text-organ-800">
                We received your request and will reach out personally within one business day.
              </p>
              <button
                type="button"
                className="btn-primary-silver mt-6 px-6 py-3 text-sm"
                onClick={closeContactModal}
              >
                Close
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="role" value={role} />
              <input type="hidden" name="loans_per_month" value={loansPerMonth} />
              <p className="hidden" aria-hidden>
                <label>
                  Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-organ-800">
                  Name
                </label>
                <input
                  ref={nameRef}
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-md border border-organ-200 bg-white px-3 py-2.5 text-ink-950 shadow-sm outline-none transition focus:border-erp focus:ring-2 focus:ring-erp/25"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-organ-800">
                  Work email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@yourbrokerage.com"
                  className="mt-1.5 w-full rounded-md border border-organ-200 bg-white px-3 py-2.5 text-ink-950 shadow-sm outline-none transition focus:border-erp focus:ring-2 focus:ring-erp/25"
                />
              </div>

              <div>
                <span className="block text-sm font-medium text-organ-800">I am a…</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {ROLES.map((option) => (
                    <ChipButton
                      key={option}
                      selected={role === option}
                      onClick={() => setRole(option)}
                    >
                      {option}
                    </ChipButton>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-state" className="block text-sm font-medium text-organ-800">
                    State
                  </label>
                  <select
                    id="contact-state"
                    name="state"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-md border border-organ-200 bg-white px-3 py-2.5 text-ink-950 shadow-sm outline-none transition focus:border-erp focus:ring-2 focus:ring-erp/25"
                  >
                    <option value="" disabled>
                      Select a state…
                    </option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-sm font-medium text-organ-800">
                    Loans you close per month
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {LOAN_VOLUMES.map((option) => (
                      <ChipButton
                        key={option}
                        selected={loansPerMonth === option}
                        onClick={() => setLoansPerMonth(option)}
                      >
                        {option}
                      </ChipButton>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-organ-800">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  required
                  className="mt-1.5 w-full resize-y rounded-md border border-organ-200 bg-white px-3 py-2.5 text-ink-950 shadow-sm outline-none transition focus:border-erp focus:ring-2 focus:ring-erp/25"
                />
              </div>

              {status === "error" ? (
                <p className="text-sm text-red-700" role="alert">
                  {errorMessage}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary-silver w-full px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === "submitting" ? "Sending…" : "Get early access"}
                </button>
                <p
                  className={`text-center text-xs text-organ-600 sm:text-right${SHOW_CONTACT_ACTIONS ? "" : " hidden"}`}
                >
                  You&apos;ll hear from us personally — response within one business day
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
