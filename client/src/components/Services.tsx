import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServicesProps {
  onAuditClick: () => void;
}

const services = [
  {
    medal: "🥉",
    name: "VSTUP — Analýza & Akčný plán",
    price: "500–1000 €",
    duration: "10 hodín",
    borderColor: "border-t-[hsl(var(--mint-accent))]",
    features: [
      "diagnostiku celej firmy",
      "odhalenie slabých miest",
      "prioritizáciu krokov",
      "akčný plán, ktorý dáva zmysel"
    ],
    forWho: "Firmy, ktoré potrebujú pochopiť, kde začať."
  },
  {
    medal: "🥈",
    name: "ROZVOJ — Mesačná spolupráca",
    badge: "najčastejšie",
    duration: "cca 20 pracovných dní mesačne",
    price: "individuálne",
    borderColor: "border-t-primary",
    popular: true,
    features: [
      "všetko z balíka Vstup",
      "implementácia odporúčaní",
      "marketing + obchodné procesy",
      "prepojenie oddelení",
      "nastavenie rolí a zodpovedností",
      "kontrola plnenia",
      "priebežné vylepšovanie systému"
    ],
    forWho: "Firmy 50–100 ľudí, ktoré chcú rozvoj bez chaosu."
  },
  {
    medal: "🥇",
    name: "VIP — Dlhodobé partnerstvo",
    subtitle: "komplexné vedenie",
    duration: "1–3 roky",
    price: "premium",
    borderColor: "border-t-[hsl(var(--orange-cta))]",
    features: [
      "všetko z balíka Vstup",
      "všetko z balíka Rozvoj",
      "AI a automatizácia",
      "B2B expanzia",
      "onboarding a nábor",
      "príprava firmy na odovzdanie (exit)",
      "dlhodobé vedenie a stabilizácia"
    ],
    forWho: "Majitelia, ktorí chcú experta, čo firmu posunie reálne dopredu."
  }
];

export default function Services({ onAuditClick }: ServicesProps) {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Tri úrovne spolupráce
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`border-card-border border-t-4 ${service.borderColor} hover:shadow-xl hover:scale-105 transition-all duration-200 ${service.popular ? 'shadow-lg scale-105' : ''} group`}
              data-testid={`card-service-${index}`}
            >
              {service.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  {service.badge}
                </div>
              )}
              <CardHeader className="pb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                {service.subtitle && (
                  <p className="text-sm text-muted-foreground italic mb-3">({service.subtitle})</p>
                )}
                <div className="flex items-baseline gap-3 mt-3">
                  <div className="text-lg font-bold text-primary">{service.price}</div>
                  <span className="text-muted-foreground">•</span>
                  <div className="text-sm text-muted-foreground">{service.duration}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Čo obsahuje:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[hsl(var(--mint-accent))] mt-1">●</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Pre koho:</p>
                  <p className="text-sm text-muted-foreground italic">{service.forWho}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
            asChild
            data-testid="button-services-contact"
          >
            <a href="mailto:lucia@vycrea.sk">Poďme si zavolať</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
