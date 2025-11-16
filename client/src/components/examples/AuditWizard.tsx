import { useState } from 'react';
import AuditWizard from '../audit/AuditWizard';
import { Button } from '@/components/ui/button';

export default function AuditWizardExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>
        Open Audit Wizard
      </Button>
      <AuditWizard open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
