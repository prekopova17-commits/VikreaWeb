import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnostika",
    description: "Identifikujeme slabé miesta v procesoch, prepojení oddelení, delegovaní a kontrole. Bez PowerPointov, priamo v teréne."
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Návrh",
    description: "Navrhneme konkrétne riešenia prispôsobené vašej firme. Prioritizujeme to, čo prinesie najväčší dopad na zisk."
  },
  {
    icon: Wrench,
    number: "03",
    title: "Implementácia",
    description: "Nedodávame len plány. Implementujeme systémy priamo vo vašej firme. Nastavíme procesy, CRM, kontrolu dodávateľov."
  },
  {
    icon: BarChart3,
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
                className="border-card-border hover-elevate transition-all duration-200 relative overflow-visible"
                data-testid={`card-step-${index}`}
              >
                <CardContent className="p-8 pt-16">
                  <div className="absolute -top-6 left-8">
                    <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-primary-foreground" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[hsl(var(--mint-accent))] mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
