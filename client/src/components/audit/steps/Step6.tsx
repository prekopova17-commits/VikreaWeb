import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuditData } from "../AuditWizard";
import { Mail } from "lucide-react";

interface Step6Props {
  onNext: (data: Partial<AuditData>) => void;
  onBack: () => void;
  data: AuditData;
}

export default function Step6({ onNext, onBack, data }: Step6Props) {
  const [email, setEmail] = useState(data.email || "");
  const [gdprConsent, setGdprConsent] = useState(data.gdprConsent || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && gdprConsent) {
      onNext({ email, gdprConsent });
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Mail className="w-8 h-8 text-[hsl(var(--mint-accent))] flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Kam vám máme poslať prioritnú mapu?
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-semibold">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="vas@email.sk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base"
            required
            data-testid="input-email"
          />
        </div>

        <div className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
          <Checkbox
            id="gdpr"
            checked={gdprConsent}
            onCheckedChange={(checked) => setGdprConsent(checked === true)}
            className="mt-1"
            data-testid="checkbox-gdpr"
          />
          <label
            htmlFor="gdpr"
            className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
          >
            Súhlasím so spracovaním osobných údajov za účelom zaslania prioritnej mapy a kontaktovania. 
            Viac informácií o <a href="#" className="text-primary hover:underline">ochrane údajov</a>.
          </label>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="flex-1 border-2 border-primary text-primary font-semibold py-6"
            data-testid="button-step6-back"
          >
            Späť
          </Button>
          <Button
            type="submit"
            disabled={!email || !isValidEmail(email) || !gdprConsent}
            className="flex-1 bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold py-6 transition-all duration-200 hover:scale-105"
            data-testid="button-step6-submit"
          >
            Získať výsledky
          </Button>
        </div>
      </form>
    </div>
  );
}
