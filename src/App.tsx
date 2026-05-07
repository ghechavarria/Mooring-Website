import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Workflow } from "./components/Workflow";
import { StatsSection } from "./components/StatsSection";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(13,159,154,0.22),transparent)]"
        aria-hidden
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <StatsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
