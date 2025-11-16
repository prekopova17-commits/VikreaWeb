import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import ThankYou from "./steps/ThankYou";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AuditData {
  companySize?: string;
  processes?: string;
  departments?: string;
  opportunities?: string[];
  clientWork?: string;
  delegation?: string;
  departmentSpeed?: string;
  goals?: string[];
  email?: string;
  gdprConsent?: boolean;
}

interface AuditWizardProps {
  open: boolean;
  onClose: () => void;
}

export default function AuditWizard({ open, onClose }: AuditWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [auditData, setAuditData] = useState<AuditData>({});
  const totalSteps = 6;

  const handleNext = (data: Partial<AuditData>) => {
    setAuditData({ ...auditData, ...data });
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Audit submitted:', { ...auditData, ...data });
      setCurrentStep(7);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setAuditData({});
    onClose();
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        {currentStep <= totalSteps && (
          <div className="sticky top-0 bg-background z-10">
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <div className="text-sm font-medium text-muted-foreground">
                Krok {currentStep} z {totalSteps}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="h-8 w-8"
                data-testid="button-audit-close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="w-full bg-border/30">
              <div 
                className="h-1.5 bg-[hsl(var(--mint-accent))] transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
                data-testid="progress-audit"
              />
            </div>
          </div>
        )}

        <div className="p-8">
          {currentStep === 1 && <Step1 onNext={handleNext} data={auditData} />}
          {currentStep === 2 && <Step2 onNext={handleNext} onBack={handleBack} data={auditData} />}
          {currentStep === 3 && <Step3 onNext={handleNext} onBack={handleBack} data={auditData} />}
          {currentStep === 4 && <Step4 onNext={handleNext} onBack={handleBack} data={auditData} />}
          {currentStep === 5 && <Step5 onNext={handleNext} onBack={handleBack} data={auditData} />}
          {currentStep === 6 && <Step6 onNext={handleNext} onBack={handleBack} data={auditData} />}
          {currentStep === 7 && <ThankYou onClose={handleClose} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
