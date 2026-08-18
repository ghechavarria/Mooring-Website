import { motion } from "framer-motion";
import { useContactModal } from "../context/ContactModalContext";
import { SHOW_CONTACT_ACTIONS } from "../config/contactActions";

export function ContactCTA() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="contact"
      className="section-marketing bg-erp pb-32 pt-24 text-white sm:pb-40 sm:pt-32 lg:pb-44 lg:pt-36"
      aria-labelledby="cta-heading"
    >
      <div className="flex w-full flex-col gap-12 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/80">
            Let&apos;s talk
          </p>
          <h2
            id="cta-heading"
            className="mt-5 font-display text-4xl font-extrabold uppercase tracking-[0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Get early access — first month free.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Interested in one workspace for the entire broker-side process? Leave your info and
            we&apos;ll reach out personally.
          </p>
        </motion.div>
        <div className={`flex shrink-0 flex-col gap-4${SHOW_CONTACT_ACTIONS ? "" : " hidden"}`}>
          <button
            type="button"
            className="rounded-md border-2 border-white bg-transparent px-10 py-5 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-erp sm:px-12 sm:py-5 sm:text-lg"
            onClick={() => openContactModal("walkthrough")}
          >
            Get early access
          </button>
          <span className="text-center text-sm text-white/80 sm:text-left">
            Response within one business day
          </span>
        </div>
      </div>
    </section>
  );
}
