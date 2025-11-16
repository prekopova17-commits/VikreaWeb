const highlights = [
  "25 rokov skúseností (obchod, marketing, procesy, kvalita)",
  "ISO 9001/14001",
  "prepojenie oddelení v praxi, nie na papieri",
  "schopnosť viesť aj ťažké zmeny",
  "razantná, ale empatická komunikácia",
  "výsledky viditeľné v číslach, nie v prezentáciách"
];

export default function About() {
  return (
    <section id="o-mne" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-center">
            Kto som a prečo ma berú firmy do stredu diania
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            Nie som konzultantka, ktorá odovzdá prezentáciu a nechá vás v tom. Som operačný partner, ktorý nastaví systém, ustráži ho a posunie firmu ďalej.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
          <div className="lg:w-80 flex-shrink-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src="/images/about-portrait.jpg"
                alt="Lucia Prekopová - Expert v systematizácii firiem"
                className="w-full h-full object-cover"
                data-testid="img-about"
              />
            </div>
          </div>

          <div className="flex-1">
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="text-[hsl(var(--mint-accent))] mt-1.5 text-xl">●</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[hsl(var(--mint-accent))]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-foreground/5 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[hsl(var(--orange-cta))] leading-relaxed">
                Majiteľ sa môže venovať rastu. Ja ustrážim, aby mala firma systém.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
