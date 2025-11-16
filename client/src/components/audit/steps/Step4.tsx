import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuditData } from "../AuditWizard";
import { Users } from "lucide-react";

interface Step4Props {
  onNext: (data: Partial<AuditData>) => void;
  onBack: () => void;
  data: AuditData;
}

const delegationOptions = [
  { value: "owner-all", label: "Majiteľ robí všetko" },
  { value: "no-deadline", label: "Delegujeme bez termínu" },
  { value: "inconsistent", label: "Nekonzistentný výkon" },
  { value: "clear-roles", label: "Jasné role" }
];

const speedOptions = [
  { value: "slow", label: "Pomalý" },
  { value: "no-standards", label: "Bez štandardov" },
  { value: "sometimes", label: "Dobré, nie vždy" },
  { value: "clear-sla", label: "Jasné SLA" }
];

export default function Step4({ onNext, onBack, data }: Step4Props) {
  const [delegation, setDelegation] = useState(data.delegation || "");
  const [departmentSpeed, setDepartmentSpeed] = useState(data.departmentSpeed || "");

  const handleSubmit = () => {
    if (delegation && departmentSpeed) {
      onNext({ delegation, departmentSpeed });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Users className="w-8 h-8 text-[hsl(var(--mint-accent))] flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Ľudia & Výkon
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-4">Ako delegujete?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {delegationOptions.map((option) => (
              <Card
                key={option.value}
                className={`p-4 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
                  delegation === option.value
                    ? "border-2 border-primary bg-primary/5"
                    : "border border-card-border"
                }`}
                onClick={() => setDelegation(option.value)}
                data-testid={`option-delegation-${option.value}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      delegation === option.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {delegation === option.value && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">{option.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-4">Ako rýchlo reagujú oddelenia?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {speedOptions.map((option) => (
              <Card
                key={option.value}
                className={`p-4 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
                  departmentSpeed === option.value
                    ? "border-2 border-primary bg-primary/5"
                    : "border border-card-border"
                }`}
                onClick={() => setDepartmentSpeed(option.value)}
                data-testid={`option-speed-${option.value}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      departmentSpeed === option.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {departmentSpeed === option.value && (
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
          data-testid="button-step4-back"
        >
          Späť
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!delegation || !departmentSpeed}
          className="flex-1 bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold py-6"
          data-testid="button-step4-next"
        >
          Pokračovať
        </Button>
      </div>
    </div>
  );
}
