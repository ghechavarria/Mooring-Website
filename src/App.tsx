import { BeforeAfterDemo } from "./components/BeforeAfterDemo";
import { ContactModalProvider } from "./context/ContactModalContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CentralLoanMemorySection } from "./components/CentralLoanMemorySection";
import { PipelineSection } from "./components/PipelineSection";
import { LOPersonalAssistantSection } from "./components/LOPersonalAssistantSection";
import { HeroMotionBand } from "./components/HeroMotionBand";
import { TeamSection } from "./components/TeamSection";
import { ContactCTA } from "./components/ContactCTA";
import { ContactFormModal } from "./components/ContactFormModal";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ContactModalProvider>
      <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col bg-organ-50">
        <Header />
        <main className="min-w-0 flex-1 overflow-x-hidden">
          <Hero />
          <BeforeAfterDemo />
          <Features />
          <CentralLoanMemorySection />
          <PipelineSection />
          <LOPersonalAssistantSection />
          <HeroMotionBand />
          <TeamSection />
          <ContactCTA />
        </main>
        <Footer />
        <ContactFormModal />
      </div>
    </ContactModalProvider>
  );
}
