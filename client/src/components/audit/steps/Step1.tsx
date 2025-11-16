import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuditData } from "../AuditWizard";

interface Step1Props {
  onNext: (data: Partial<AuditData>) => void;
  data: AuditData;
}

const options = [
  { value: "1-20", label: "1–20 ľudí" },
  { value: "20-50", label: "20–50 ľudí" },
  { value: "50-100", label: "50–100 ľudí" },
  { value: "100+", label: "100+ ľudí" }
];

export default function Step1({ onNext, data }: Step1Props) {
  const [selected, setSelected] = useState(data.companySize || "");

  const handleSubmit = () => {
    if (selected) {
      onNext({ companySize: selected });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Koľko ľudí máte vo firme?
        </h2>
        <p className="text-muted-foreground">
          Vyberte veľkosť vašej firmy
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => (
          <Card
            key={option.value}
            className={`p-6 cursor-pointer transition-all duration-200 hover-elevate active-elevate-2 ${
              selected === option.value
                ? "border-2 border-primary bg-primary/5"
                : "border border-card-border"
            }`}
            onClick={() => setSelected(option.value)}
            data-testid={`option-size-${option.value}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selected === option.value
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              >
                {selected === option.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="font-semibold text-foreground">{option.label}</span>
            </div>
          </Card>
        ))}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!selected}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
        data-testid="button-step1-next"
      >
        Pokračovať
      </Button>
    </div>
  );
}
