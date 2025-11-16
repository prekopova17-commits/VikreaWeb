import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Users, TrendingDown, Zap } from "lucide-react";

const situations = [
  {
    icon: AlertCircle,
    title: "Chaos v procesoch",
    description: "Každé oddelenie robí svoje. Informácie sa strácajú. Duplicitná práca. Nikto nevie, kde čo je."
  },
  {
    icon: TrendingDown,
    title: "Stagnujúci zisk",
    description: "Obrat rastie, ale zisk nie. Náklady utekajú. Nevieme presne kde. Marže klesajú."
  },
  {
    icon: Users,
    title: "Majiteľ je všade",
    description: "Musíte kontrolovať všetko osobne. Bez vás sa nič nedeje. Tím čaká na pokyny."
  },
  {
    icon: Zap,
    title: "Marketing bez výsledkov",
    description: "Investujete do reklamy, ale obchod nevie čo s leadmi. Žiadna spätná väzba, žiadne meranie ROI."
  }
];

export default function Situations() {
  return (
    <section className="py-20 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Poznáte tieto situácie?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Typické problémy firiem s 50-100 zamestnancami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {situations.map((situation, index) => {
            const Icon = situation.icon;
            return (
              <Card 
                key={index} 
                className="border-card-border hover:shadow-lg hover:border-primary/20 transition-all duration-200 group"
                data-testid={`card-situation-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-200">
                        <Icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">{situation.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{situation.description}</p>
                    </div>
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
