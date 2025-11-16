export default function Results() {
  return (
    <section className="py-20 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
            Výsledky
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tvrdé dáta z reálnych implementácií
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div className="text-center" data-testid="stat-profit">
            <div className="text-6xl lg:text-7xl font-extrabold text-[hsl(var(--orange-cta))] mb-2">
              +40%
            </div>
            <div className="text-xl font-semibold text-foreground mb-2">Zisk</div>
            <div className="text-sm text-muted-foreground">
              Priemerný nárast zisku do 12 mesiacov
            </div>
          </div>

          <div className="text-center" data-testid="stat-revenue">
            <div className="text-6xl lg:text-7xl font-extrabold text-[hsl(var(--orange-cta))] mb-2">
              +60%
            </div>
            <div className="text-xl font-semibold text-foreground mb-2">Obrat</div>
            <div className="text-sm text-muted-foreground">
              Rast obratu pri zachovaní marží
            </div>
          </div>

          <div className="text-center" data-testid="stat-margin">
            <div className="text-6xl lg:text-7xl font-extrabold text-[hsl(var(--orange-cta))] mb-2">
              +35%
            </div>
            <div className="text-xl font-semibold text-foreground mb-2">Marža</div>
            <div className="text-sm text-muted-foreground">
              Zlepšenie prevádzkových marží
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-foreground max-w-3xl mx-auto leading-relaxed">
            Nie PowerPointy. Nie sľuby. <span className="text-primary">Systémy a výsledky.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
