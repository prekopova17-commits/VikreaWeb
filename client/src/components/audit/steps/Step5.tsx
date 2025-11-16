import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AuditData } from "../AuditWizard";
import { Target } from "lucide-react";

interface Step5Props {
  onNext: (data: Partial<AuditData>) => void;
  onBack: () => void;
  data: AuditData;
}

const goalOptions = [
  { value: "profit", label: "Zvýšiť zisk" },
  { value: "processes", label: "Zlepšiť procesy" },
  { value: "control", label: "Zaviesť kontrolu" },
  { value: "sales", label: "Posilniť obchod" },
  { value: "marketing", label: "Posilniť marketing" },
  { value: "ai", label: "Zaviesť AI" },
  { value: "performance", label: "Zlepšiť výkon ľudí" },
  { value: "hiring", label: "Najať ľudí" }
];

export default function Step5({ onNext, onBack, data }: Step5Props) {
  const [goals, setGoals] = useState<string[]>(data.goals || []);

  const toggleGoal = (value: string) => {
    setGoals(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    if (goals.length > 0) {
      onNext({ goals });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Target className="w-8 h-8 text-[hsl(var(--mint-accent))] flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Ciele
          </h2>
          <p className="text-muted-foreground text-sm">
            Čo chcete dosiahnuť v najbližších 6 mesiacoch?
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {goalOptions.map((option) => (
            <Card
              key={option.value}
              className={`p-4 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
                goals.includes(option.value)
                  ? "border-2 border-[hsl(var(--mint-accent))] bg-[hsl(var(--mint-accent))]/5"
                  : "border border-card-border"
              }`}
              onClick={() => toggleGoal(option.value)}
              data-testid={`option-goal-${option.value}`}
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={goals.includes(option.value)}
                  className={goals.includes(option.value) ? "border-[hsl(var(--mint-accent))] data-[state=checked]:bg-[hsl(var(--mint-accent))]" : ""}
                />
                <span className="text-sm font-medium text-foreground">{option.label}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 border-2 border-primary text-primary font-semibold py-6"
          data-testid="button-step5-back"
        >
          Späť
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={goals.length === 0}
          className="flex-1 bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold py-6"
          data-testid="button-step5-next"
        >
          Pokračovať
        </Button>
      </div>
    </div>
  );
}
