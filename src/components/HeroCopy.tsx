import { useContactModal } from "../context/ContactModalContext";
import { SHOW_CONTACT_ACTIONS } from "../config/contactActions";

/**
 * Site-matched hero copy. Type + spacing scale continuously with column
 * width (`.hero-copy` in index.css) so slow resizes stay smooth.
 */
export function HeroCopy({ headingId = "hero-heading" }: { headingId?: string }) {
  const { openContactModal } = useContactModal();

  return (
    <div className="hero-copy">
      <p className="hero-copy__badge">
        <span className="hero-copy__badge-dot" aria-hidden />
        <span>AI-powered · built for independent loan officers</span>
      </p>

      <h1 id={headingId} className="hero-copy__headline">
        <span className="hero-copy__headline-line">Less chasing paperwork.</span>
        <span className="hero-copy__headline-accent">More time closing loans.</span>
      </h1>

      <p className="hero-copy__body">
        You did not get into this business to re-enter borrower data or update five spreadsheets
        before your first coffee. Mooric ERP builds a Central Loan Memory of every file and handles
        that overhead — you focus on advising borrowers and closing.
      </p>

      <p className="hero-copy__platform">
        <span className="hero-copy__platform-rule" aria-hidden />
        <span className="hero-copy__platform-slot">
          <span className="hero-copy__platform-text">
            <span className="hero-copy__platform-line">Intelligent Mortgage Platform,</span>{" "}
            <span className="hero-copy__platform-line">Empowering Better Closings</span>
          </span>
        </span>
      </p>

      <nav className="hero-copy__actions" aria-label="Hero actions">
        <button
          type="button"
          className={`btn-primary-silver hero-copy__btn${SHOW_CONTACT_ACTIONS ? "" : " hidden"}`}
          onClick={() => openContactModal("briefing")}
        >
          Get early access — first month free
        </button>
        <a href="#features" className="hero-copy__btn hero-copy__btn--ghost">
          See why it&apos;s different
        </a>
      </nav>
    </div>
  );
}
