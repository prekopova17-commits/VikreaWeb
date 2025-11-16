import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface ThankYouProps {
  onClose: () => void;
}

export default function ThankYou({ onClose }: ThankYouProps) {
  return (
    <div className="text-center space-y-8 py-12">
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-[hsl(var(--mint-accent))]/10 flex items-center justify-center">
          <CheckCircle2 className="w-16 h-16 text-[hsl(var(--mint-accent))]" strokeWidth={2.5} />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-primary mb-4">
          Vaša prioritná mapa je na ceste
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
          Poslali sme vám výsledky. Stačí otvoriť email – čakajú tam na vás.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button
          size="lg"
          className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-8"
          asChild
          data-testid="button-thankyou-call"
        >
          <a href="mailto:lucia@vycrea.sk">Poďme si zavolať</a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-primary text-primary font-semibold px-8"
          asChild
          data-testid="button-thankyou-email"
        >
          <a href="mailto:lucia@vycrea.sk">Napísať email</a>
        </Button>
      </div>

      <Button
        variant="ghost"
        onClick={onClose}
        className="text-muted-foreground"
        data-testid="button-thankyou-close"
      >
        Zavrieť
      </Button>
    </div>
  );
}
