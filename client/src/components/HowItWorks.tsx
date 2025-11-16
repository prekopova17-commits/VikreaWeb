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
    description: "Pozriem sa na procesy, komunikáciu, prepojenia a slabé miesta naprieč celou firmou."
  },
  {
    icon: ConnectionIcon,
    number: "02",
    title: "Návrh riešení",
    description: "Ukážem vám, čo brzdí váš rast, a poviem konkrétne kroky — transparentne a prakticky."
  },
  {
    icon: GrowthIcon,
    number: "03",
    title: "Implementácia",
    description: "Nastavím procesy, upracem role, zodpovednosti a pripravím podklady, aby systém fungoval v praxi."
  },
  {
    icon: ControlIcon,
    number: "04",
    title: "Kontrola a tempo",
    description: "Ustrážim dodržiavanie procesov a zabezpečím, že sa veci nielen naštartujú, ale aj udržia."
  }
];

export default function HowItWorks() {
  return (
    <section id="ako-to-funguje" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="text-sm lg:text-base font-semibold text-[hsl(var(--orange-cta))] mb-4 uppercase tracking-wider">
            Ako to funguje
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Jasný systém, ktorý vaša firma zvládne
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Neučím teóriu. Zasahujem priamo do fungovania firmy, identifikujem slabé miesta a určím presné kroky, ktoré treba urobiť.
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
