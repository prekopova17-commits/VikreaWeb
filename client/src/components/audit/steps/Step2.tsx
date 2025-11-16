import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuditData } from "../AuditWizard";
import { Settings } from "lucide-react";

interface Step2Props {
  onNext: (data: Partial<AuditData>) => void;
  onBack: () => void;
  data: AuditData;
}

const processOptions = [
  { value: "none", label: "Nemáme" },
  { value: "ignored", label: "Sú, ale ignorované" },
  { value: "inconsistent", label: "Nekonzistentné" },
  { value: "functional", label: "Funkčný systém" }
];

const departmentOptions = [
  { value: "separate", label: "Každý robí svoje" },
  { value: "chaotic", label: "Chaoticky" },
  { value: "weak", label: "Máme pravidlá, ale slabé dodržiavanie" },
  { value: "good", label: "Funguje dobre" }
];

export default function Step2({ onNext, onBack, data }: Step2Props) {
  const [processes, setProcesses] = useState(data.processes || "");
  const [departments, setDepartments] = useState(data.departments || "");

  const handleSubmit = () => {
    if (processes && departments) {
      onNext({ processes, departments });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Settings className="w-8 h-8 text-[hsl(var(--mint-accent))] flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Procesy & Systém
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-4">Ako sú nastavené vaše procesy?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {processOptions.map((option) => (
              <Card
                key={option.value}
                className={`p-4 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
                  processes === option.value
                    ? "border-2 border-primary bg-primary/5"
                    : "border border-card-border"
                }`}
                onClick={() => setProcesses(option.value)}
                data-testid={`option-processes-${option.value}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      processes === option.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {processes === option.value && (
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
          <h3 className="font-semibold text-foreground mb-4">Ako funguje prepojenie oddelení?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {departmentOptions.map((option) => (
              <Card
                key={option.value}
                className={`p-4 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
                  departments === option.value
                    ? "border-2 border-primary bg-primary/5"
                    : "border border-card-border"
                }`}
                onClick={() => setDepartments(option.value)}
                data-testid={`option-departments-${option.value}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      departments === option.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {departments === option.value && (
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
          data-testid="button-step2-back"
        >
          Späť
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!processes || !departments}
          className="flex-1 bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold py-6"
          data-testid="button-step2-next"
        >
          Pokračovať
        </Button>
      </div>
    </div>
  );
}
