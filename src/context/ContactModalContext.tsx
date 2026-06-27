import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type ContactModalIntent = "briefing" | "walkthrough";

const modalTitles: Record<ContactModalIntent, string> = {
  briefing: "Request a briefing",
  walkthrough: "Book a walkthrough",
};

type ContactModalContextValue = {
  isOpen: boolean;
  modalTitle: string;
  openContactModal: (intent?: ContactModalIntent) => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<ContactModalIntent>("briefing");

  const openContactModal = useCallback((nextIntent?: ContactModalIntent) => {
    setIntent(nextIntent === "walkthrough" ? "walkthrough" : "briefing");
    setIsOpen(true);
  }, []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      isOpen,
      modalTitle: modalTitles[intent] ?? modalTitles.briefing,
      openContactModal,
      closeContactModal,
    }),
    [isOpen, intent, openContactModal, closeContactModal],
  );

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>;
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}
