import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onAuditClick: () => void;
}

export default function FinalCTA({ onAuditClick }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden rounded-3xl p-12 lg:p-16 mb-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[hsl(var(--mint-accent))]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[hsl(var(--orange-cta))]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
                Chcete prestať hasiť požiare a začať riadiť systém?
              </h2>
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                Začnime krátkym callom. Poviete mi, čo sa deje — ja zistím, čo treba riešiť ako prvé.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-10 py-6 text-lg transition-all duration-200 hover:scale-105"
              asChild
              data-testid="button-final-cta-contact"
            >
              <a href="mailto:lucia@vycrea.sk">Poďme si zavolať</a>
            </Button>
            <Button 
              onClick={onAuditClick}
              size="lg"
              className="bg-transparent border-2 border-[hsl(var(--mint-accent))] text-[hsl(var(--mint-accent))] hover:bg-[hsl(var(--mint-accent))] hover:text-white font-semibold px-10 py-6 text-lg transition-all duration-200"
              data-testid="button-final-cta-audit"
            >
              Odhaľte kritické priority
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
