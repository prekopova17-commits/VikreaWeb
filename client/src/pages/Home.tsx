import { useState, Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Situations from "@/components/Situations";
import HowItWorks from "@/components/HowItWorks";
import Statistics from "@/components/Statistics";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
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
      <HowItWorks />
      <Statistics />
      <PhotoPlaceholder />
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
