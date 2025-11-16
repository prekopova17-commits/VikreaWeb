import { Button } from "@/components/ui/button";

interface HeaderProps {
  onAuditClick: () => void;
}

export default function Header({ onAuditClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              VK
            </div>
            <span className="font-bold text-lg lg:text-xl text-foreground">ViKrea</span>
          </div>
          
          <Button 
            onClick={onAuditClick}
            className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold transition-all duration-200 hover:scale-105"
            data-testid="button-header-audit"
          >
            Odhaľte priority
          </Button>
        </div>
      </div>
    </header>
  );
}
