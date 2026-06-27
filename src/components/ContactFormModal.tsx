import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useContactModal } from "../context/ContactModalContext";

function encodeFormBody(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function ContactFormModal() {
  const { isOpen, modalTitle, closeContactModal } = useContactModal();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
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
          message: String(formData.get("message") ?? ""),
          "bot-field": String(formData.get("bot-field") ?? ""),
        }),
      });

      if (!response.ok) throw new Error("Submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6"
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
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-organ-200/95 bg-organ-50 shadow-card-md">
        <div className="flex items-start justify-between gap-4 border-b border-organ-200/90 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-organ-800">
              Get in touch
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
                We received your message and will respond within one business day.
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
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-md border border-organ-200 bg-white px-3 py-2.5 text-ink-950 shadow-sm outline-none transition focus:border-erp focus:ring-2 focus:ring-erp/25"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-organ-800">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
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
                  {status === "submitting" ? "Sending…" : modalTitle}
                </button>
                <p className="text-center text-xs text-organ-600 sm:text-right">
                  Response within one business day
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
