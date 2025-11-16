import { Award, Briefcase, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-primary" />
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
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Rokov</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-[hsl(var(--mint-accent))]/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-[hsl(var(--mint-accent))]" />
                </div>
                <div className="text-3xl font-bold text-primary">ISO</div>
                <div className="text-sm text-muted-foreground">Certifikácia</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-[hsl(var(--orange-cta))]/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[hsl(var(--orange-cta))]" />
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
