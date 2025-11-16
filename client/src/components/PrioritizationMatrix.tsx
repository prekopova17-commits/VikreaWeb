import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface PrioritizationMatrixProps {
  onAuditClick: () => void;
}

const steps = [
  "Veľkosť firmy",
  "Procesy & Systém",
  "Obchod & Marketing",
  "Ľudia & Výkon",
  "Ciele",
  "Kontakt"
];

export default function PrioritizationMatrix({ onAuditClick }: PrioritizationMatrixProps) {
  return (
    <section className="py-20 lg:py-32 bg-accent/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--mint-accent))]/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Prioritizačná matica
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            6-krokový audit odhalí, kde presne unikajú peniaze a na čo sa zamerať ako prvé.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-card border border-card-border rounded-xl p-6 hover-elevate active-elevate-2 transition-all duration-200"
                data-testid={`step-${index}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--mint-accent))]/10 border-2 border-[hsl(var(--mint-accent))] flex items-center justify-center flex-shrink-0">
                    <span className="text-[hsl(var(--mint-accent))] font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="font-semibold text-foreground text-sm lg:text-base">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--mint-accent))]/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-[hsl(var(--mint-accent))]" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Čo získate:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--mint-accent))] mt-1">●</span>
                    <span>Jasný rebríček priorít — čo riešiť ako prvé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--mint-accent))] mt-1">●</span>
                    <span>Analýzu slabých miest vo vašej firme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--mint-accent))] mt-1">●</span>
                    <span>Prvé kroky na zlepšenie procesov a systémov</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Button 
            onClick={onAuditClick}
            size="lg"
            className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-10 py-6 text-lg transition-all duration-200 hover:scale-105 group"
            data-testid="button-matrix-start"
          >
            Spustiť audit (6 minút)
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground">
            100% zadarmo • Žiadne povinnosti
          </p>
        </div>
      </div>
    </section>
  );
}
