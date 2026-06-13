import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Workflow } from "./components/Workflow";
import { HeroMotionBand } from "./components/HeroMotionBand";
import { StatsSection } from "./components/StatsSection";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col bg-organ-50">
      <Header />
      <main className="min-w-0 flex-1 overflow-x-hidden">
        <Hero />
        <Features />
        <Workflow />
        <HeroMotionBand />
        <StatsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
