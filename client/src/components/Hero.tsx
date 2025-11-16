import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PopupModal } from "react-calendly";

interface HeroProps {
  onAuditClick: () => void;
}

export default function Hero({ onAuditClick }: HeroProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/vikrea/30min";

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

          <div className="mb-12 max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src="/images/hero.png"
                alt="Lucia Prekopová - Business Consultant"
                className="w-full h-full object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
              onClick={() => setIsCalendlyOpen(true)}
              data-testid="button-hero-contact"
            >
              Poďme si zavolať
            </Button>
            <Button 
              onClick={onAuditClick}
              size="lg"
              className="bg-transparent border-2 border-[hsl(var(--mint-accent))] text-[hsl(var(--mint-accent))] hover:bg-[hsl(var(--mint-accent))] hover:text-white font-semibold px-10 py-6 text-lg transition-all duration-200"
              data-testid="button-hero-audit"
            >
              Odhaľte kritické priority
            </Button>
          </div>

        </div>
      </div>

      <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </section>
  );
}
