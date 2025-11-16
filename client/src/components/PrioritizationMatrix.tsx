import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface PrioritizationMatrixProps {
  onAuditClick: () => void;
}

export default function PrioritizationMatrix({ onAuditClick }: PrioritizationMatrixProps) {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[640px] mx-auto text-center pt-24 pb-16">
          <h1 className="text-[42px] font-bold text-primary mb-8 leading-tight">
            Zistite, čo brzdí rast vašej firmy
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            9 otázok. 3 minúty. Jasná mapa priorít vo vašej emailovej schránke.
          </p>
          
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Začnite písať názov firmy..."
                className="pl-12 pr-4 py-6 text-base rounded-xl border-2 border-border focus:border-primary"
                data-testid="input-company-search"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Vyhľadávanie v Obchodnom registri SR
            </p>
          </div>

          <div className="mb-3">
            <Button 
              onClick={onAuditClick}
              size="lg"
              className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-colors duration-200"
              data-testid="button-matrix-start"
            >
              Začať audit
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Výsledok vidím iba ja a vy.
          </p>
        </div>
      </div>
    </section>
  );
}
