import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onAuditClick: () => void;
}

export default function FinalCTA({ onAuditClick }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[hsl(var(--mint-accent))]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[hsl(var(--orange-cta))]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
            Pripravení na zmenu?
          </h2>
          <p className="text-lg lg:text-xl mb-12 opacity-90 leading-relaxed">
            Prestať stagnovat. Zaviesť systémy. Dosiahnuť +40% zisk.<br />
            Začnite s prioritizačnou maticou zadarmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onAuditClick}
              size="lg"
              className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-10 py-6 text-lg transition-all duration-200 hover:scale-105"
              data-testid="button-final-cta-audit"
            >
              Získať prioritnú mapu
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-10 py-6 text-lg transition-all duration-200"
              asChild
              data-testid="button-final-cta-contact"
            >
              <a href="mailto:lucia@vycrea.sk">Napísať email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
