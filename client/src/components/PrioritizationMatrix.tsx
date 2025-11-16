import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2 } from "lucide-react";

interface PrioritizationMatrixProps {
  onAuditClick: () => void;
}

export default function PrioritizationMatrix({ onAuditClick }: PrioritizationMatrixProps) {
  return (
    <section id="audit" className="bg-[hsl(var(--mint-accent))]">
      <div className="container mx-auto px-4">
        <div className="max-w-[640px] mx-auto text-center pt-24 pb-16">
          <h1 className="text-[42px] font-bold text-white mb-8 leading-tight">
            Zistite, čo brzdí rast vašej firmy
          </h1>
          <p className="text-xl text-white/90 mb-8">
            6 otázok. 3 minúty. Jasná mapa priorít vo vašej emailovej schránke.
          </p>
          
          <div className="mb-8">
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Input 
                type="text"
                placeholder="Názov vašej firmy (voliteľné)"
                className="pl-12 pr-4 py-6 text-base rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:bg-white/20"
                data-testid="input-company-name"
              />
            </div>
          </div>

          <div className="mb-3">
            <Button 
              onClick={onAuditClick}
              size="lg"
              className="bg-white hover:bg-white/90 text-[hsl(var(--orange-cta))] border-2 border-[hsl(var(--orange-cta))] font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-200 hover:scale-105"
              data-testid="button-matrix-start"
            >
              Začať audit
            </Button>
          </div>
          <p className="text-sm text-white/80">
            Výsledok vidím iba ja a vy.
          </p>
        </div>
      </div>
    </section>
  );
}
