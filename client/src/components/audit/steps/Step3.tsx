import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AuditData } from "../AuditWizard";
import { TrendingUp } from "lucide-react";

interface Step3Props {
  onNext: (data: Partial<AuditData>) => void;
  onBack: () => void;
  data: AuditData;
}

const opportunityOptions = [
  { value: "sales", label: "Slabý obchodný proces" },
  { value: "crm", label: "Slabé CRM" },
  { value: "marketing", label: "Marketing mimo reality" },
  { value: "product", label: "Málo viditeľný produkt" },
  { value: "execution", label: "Nestíhame realizáciu" }
];

const clientWorkOptions = [
  { value: "random", label: "Náhodne" },
  { value: "chaotic", label: "Chaoticky" },
  { value: "no-control", label: "Bez kontroly" },
  { value: "clear", label: "Jasný sales proces" }
];

export default function Step3({ onNext, onBack, data }: Step3Props) {
  const [opportunities, setOpportunities] = useState<string[]>(data.opportunities || []);
  const [clientWork, setClientWork] = useState(data.clientWork || "");

  const toggleOpportunity = (value: string) => {
    setOpportunities(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    if (opportunities.length > 0 && clientWork) {
      onNext({ opportunities, clientWork });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <TrendingUp className="w-8 h-8 text-[hsl(var(--mint-accent))] flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Obchod, Marketing, Produkt
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-4">Kde unikajú príležitosti? (možnosť výberu viacerých)</h3>
          <div className="space-y-3">
            {opportunityOptions.map((option) => (
              <Card
                key={option.value}
                className={`p-4 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
                  opportunities.includes(option.value)
                    ? "border-2 border-[hsl(var(--mint-accent))] bg-[hsl(var(--mint-accent))]/5"
                    : "border border-card-border"
                }`}
                onClick={() => toggleOpportunity(option.value)}
                data-testid={`option-opportunity-${option.value}`}
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={opportunities.includes(option.value)}
                    className={opportunities.includes(option.value) ? "border-[hsl(var(--mint-accent))] data-[state=checked]:bg-[hsl(var(--mint-accent))]" : ""}
                  />
                  <span className="text-sm font-medium text-foreground">{option.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4">Ako pracujete s klientmi?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {clientWorkOptions.map((option) => (
              <Card
                key={option.value}
                className={`p-4 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
                  clientWork === option.value
                    ? "border-2 border-primary bg-primary/5"
                    : "border border-card-border"
                }`}
                onClick={() => setClientWork(option.value)}
                data-testid={`option-client-${option.value}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      clientWork === option.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {clientWork === option.value && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">{option.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 border-2 border-primary text-primary font-semibold py-6"
          data-testid="button-step3-back"
        >
          Späť
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={opportunities.length === 0 || !clientWork}
          className="flex-1 bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold py-6"
          data-testid="button-step3-next"
        >
          Pokračovať
        </Button>
      </div>
    </div>
  );
}
