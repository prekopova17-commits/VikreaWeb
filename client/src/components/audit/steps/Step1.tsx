import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import { AuditData } from "../AuditWizard";

interface Step1Props {
  onNext: (data: Partial<AuditData>) => void;
  data: AuditData;
}

const options = [
  { value: "1–20", label: "1–20" },
  { value: "20–50", label: "20–50" },
  { value: "50–100", label: "50–100" },
  { value: "100+", label: "100+" }
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
      <div className="flex items-start gap-4">
        <Building className="w-8 h-8 text-[hsl(var(--mint-accent))] mt-1 flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Koľko ľudí máte vo firme?
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            className={`h-auto py-4 px-6 justify-center border-2 hover-elevate ${
              selected === option.value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-primary text-primary bg-background"
            }`}
            onClick={() => setSelected(option.value)}
            data-testid={`option-size-${option.value}`}
          >
            <span className="font-medium">{option.label}</span>
          </Button>
        ))}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!selected}
        className="w-full bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold py-6 text-base"
        data-testid="button-step1-next"
      >
        Pokračovať
      </Button>
    </div>
  );
}
