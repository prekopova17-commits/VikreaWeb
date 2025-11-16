import { Card, CardContent } from "@/components/ui/card";
import SystemsIcon from "@/components/icons/SystemsIcon";
import GrowthIcon from "@/components/icons/GrowthIcon";
import ControlIcon from "@/components/icons/ControlIcon";
import ConnectionIcon from "@/components/icons/ConnectionIcon";

const steps = [
  {
    icon: SystemsIcon,
    number: "01",
    title: "Diagnostika",
    description: "Identifikujeme slabé miesta v procesoch, prepojení oddelení, delegovaní a kontrole. Bez PowerPointov, priamo v teréne."
  },
  {
    icon: ConnectionIcon,
    number: "02",
    title: "Návrh",
    description: "Navrhneme konkrétne riešenia prispôsobené vašej firme. Prioritizujeme to, čo prinesie najväčší dopad na zisk."
  },
  {
    icon: GrowthIcon,
    number: "03",
    title: "Implementácia",
    description: "Nedodávame len plány. Implementujeme systémy priamo vo vašej firme. Nastavíme procesy, CRM, kontrolu dodávateľov."
  },
  {
    icon: ControlIcon,
    number: "04",
    title: "Kontrola",
    description: "Weekly check-iny. Meranie výsledkov. Dokopávanie k zodpovednosti. Zostanem, dokým neuvidím +40% zisk."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Ako to funguje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 kroky k systematickému rastu a zisku
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="border-card-border hover:shadow-lg hover:border-primary/20 transition-all duration-200 relative overflow-visible group"
                data-testid={`card-step-${index}`}
              >
                <CardContent className="p-8 pt-20 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center p-5 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-200">
                      <Icon className="w-full h-full" />
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="text-sm font-bold text-[hsl(var(--mint-accent))] mb-3">{step.number}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
