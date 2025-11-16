import { useState, Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Situations from "@/components/Situations";
import Statistics from "@/components/Statistics";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Services from "@/components/Services";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const AuditWizard = lazy(() => import("@/components/audit/AuditWizard"));

export default function Home() {
  const [showAudit, setShowAudit] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero onAuditClick={() => setShowAudit(true)} />
      <Situations />
      <Statistics />
      <HowItWorks />
      <Results />
      <Services onAuditClick={() => setShowAudit(true)} />
      <About />
      <FinalCTA onAuditClick={() => setShowAudit(true)} />
      <Footer />

      <Suspense fallback={null}>
        <AuditWizard open={showAudit} onClose={() => setShowAudit(false)} />
      </Suspense>
    </div>
  );
}
