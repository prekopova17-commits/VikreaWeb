import { Award, Briefcase, TrendingUp } from "lucide-react";
import PatternBackground from "./PatternBackground";

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-accent/30 relative overflow-hidden">
      <PatternBackground />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 via-[hsl(var(--mint-accent))]/5 to-primary/5 rounded-xl flex items-center justify-center border-2 border-dashed border-border/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center p-8 relative z-10">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-primary" strokeWidth={2.5} />
                </div>
                <p className="text-muted-foreground font-medium">
                  Foto Lucia
                  <br />
                  <span className="text-sm">(800×1000)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              O mne
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Som <strong className="text-foreground">Lucia</strong>, operačný partner pre rast SME firiem. 
                Nie som teoretik ani coach – som praktik, ktorý vám pomôže implementovať systémy a dosiahnuť výsledky.
              </p>
              
              <p>
                Za sebou mám <strong className="text-foreground">25 rokov práce</strong> v manažmente a konzultingu. 
                Špecializujem sa na firmy s 50-100 zamestnancami, ktoré stagnujú alebo chaoticky rastú.
              </p>

              <p>
                Certifikovaná audítorka <strong className="text-foreground">ISO 9001/14001</strong>. 
                Pracovala som s desiatkam firmám naprieč odvetviami – od výroby po služby.
              </p>

              <p className="text-lg font-semibold text-foreground">
                Moje credo: Nie PowerPointy. Systémy a výsledky.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-200">
                  <Briefcase className="w-8 h-8 text-primary" strokeWidth={2.5} />
                </div>
                <div className="text-3xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Rokov</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[hsl(var(--mint-accent))]/15 to-[hsl(var(--mint-accent))]/5 flex items-center justify-center group-hover:from-[hsl(var(--mint-accent))]/20 group-hover:to-[hsl(var(--mint-accent))]/10 transition-all duration-200">
                  <Award className="w-8 h-8 text-[hsl(var(--mint-accent))]" strokeWidth={2.5} />
                </div>
                <div className="text-3xl font-bold text-primary">ISO</div>
                <div className="text-sm text-muted-foreground">Certifikácia</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[hsl(var(--orange-cta))]/15 to-[hsl(var(--orange-cta))]/5 flex items-center justify-center group-hover:from-[hsl(var(--orange-cta))]/20 group-hover:to-[hsl(var(--orange-cta))]/10 transition-all duration-200">
                  <TrendingUp className="w-8 h-8 text-[hsl(var(--orange-cta))]" strokeWidth={2.5} />
                </div>
                <div className="text-3xl font-bold text-primary">+40%</div>
                <div className="text-sm text-muted-foreground">Zisk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
