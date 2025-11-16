import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServicesProps {
  onAuditClick: () => void;
}

const services = [
  {
    name: "Audit & Konzultácia",
    borderColor: "border-t-[hsl(var(--mint-accent))]",
    price: "Individuálne",
    features: [
      "Komplexný audit procesov",
      "Identifikácia úzkych miest",
      "Prioritizačná mapa",
      "Odporúčania na quick wins",
      "2-3 konzultácie"
    ]
  },
  {
    name: "Implementácia Systémov",
    borderColor: "border-t-primary",
    price: "Projekt",
    popular: true,
    features: [
      "Všetko z Auditu",
      "Návrh procesov a systémov",
      "Implementácia CRM/ERP",
      "Nastavenie kontrolných mechanizmov",
      "Školenie tímu",
      "3-mesačná podpora"
    ]
  },
  {
    name: "Operačné Partnerstvo",
    borderColor: "border-t-[hsl(var(--orange-cta))]",
    price: "Retainer",
    features: [
      "Všetko z Implementácie",
      "Weekly check-iny",
      "Priama práca s tímom",
      "Kontrola dodávateľov",
      "Optimalizácia marží",
      "Reporting a KPI tracking",
      "Zostanem, dokým neuvidíme +40% zisk"
    ]
  }
];

export default function Services({ onAuditClick }: ServicesProps) {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Služby
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3 úrovne spolupráce podľa vašich potrieb
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`border-card-border border-t-4 ${service.borderColor} hover:shadow-xl hover:scale-105 transition-all duration-200 ${service.popular ? 'shadow-lg scale-105' : ''} group`}
              data-testid={`card-service-${index}`}
            >
              {service.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Najpopulárnejšie
                </div>
              )}
              <CardHeader className="pb-4">
                <h3 className="text-2xl font-bold text-foreground">{service.name}</h3>
                <div className="text-3xl font-extrabold text-primary mt-2">{service.price}</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[hsl(var(--mint-accent))] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={onAuditClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  data-testid={`button-service-${index}`}
                >
                  Začať
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
