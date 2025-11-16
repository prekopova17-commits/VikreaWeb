import { Button } from "@/components/ui/button";
import { TrendingUp, Target, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onAuditClick: () => void;
}

export default function Hero({ onAuditClick }: HeroProps) {
  return (
    <section className="pt-32 lg:pt-40 pb-20 lg:pb-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--mint-accent))]/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-foreground">
            Ak nevidíte, čo brzdí váš rast, nikdy to neopravíte. <span className="text-primary">Ja to nájdem a vyriešim podstatu problému.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Zatiaľ neviete, čo presne treba. Ja to zistím a nastavím procesy tak, aby vaša firma konečne fungovala systémovo — krok po kroku, s kontrolou a jasným poriadkom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-lg bg-[hsl(var(--orange-cta))]/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--orange-cta))]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-extrabold text-[hsl(var(--orange-cta))] mb-1">+40%</div>
                <div className="text-sm lg:text-base font-semibold text-muted-foreground">Zisk</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-lg bg-[hsl(var(--orange-cta))]/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-[hsl(var(--orange-cta))]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-extrabold text-[hsl(var(--orange-cta))] mb-1">+60%</div>
                <div className="text-sm lg:text-base font-semibold text-muted-foreground">Obrat</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-extrabold text-primary mb-1">25</div>
                <div className="text-sm lg:text-base font-semibold text-muted-foreground">Rokov</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
              asChild
              data-testid="button-hero-contact"
            >
              <a href="mailto:lucia@vycrea.sk">Poďme si zavolať</a>
            </Button>
            <Button 
              onClick={onAuditClick}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-200"
              data-testid="button-hero-audit"
            >
              Odhaľte kritické priority
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--mint-accent))]" />
              <span>ISO 9001/14001</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--mint-accent))]" />
              <span>25 rokov skúseností</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--mint-accent))]" />
              <span>Preukazateľné výsledky</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
