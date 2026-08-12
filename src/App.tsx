import { ContactModalProvider } from "./context/ContactModalContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductionGlanceSection } from "./components/ProductionGlanceSection";
import { ProblemSection } from "./components/ProblemSection";
import { Features } from "./components/Features";
import { PipelineSection } from "./components/PipelineSection";
import { CentralLoanMemorySection } from "./components/CentralLoanMemorySection";
import { LOPersonalAssistantSection } from "./components/LOPersonalAssistantSection";
import { BrokerProcessFlowSection } from "./components/BrokerProcessFlowSection";
import { LosCompatibilityStrip } from "./components/LosCompatibilityStrip";
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
          <ProductionGlanceSection />
          <ProblemSection />
          <Features />
          <PipelineSection />
          <CentralLoanMemorySection />
          <LOPersonalAssistantSection />
          <BrokerProcessFlowSection />
          <LosCompatibilityStrip />
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
