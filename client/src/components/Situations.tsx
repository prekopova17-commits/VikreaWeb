import { Button } from "@/components/ui/button";

const situations = [
  {
    title: "Procesy máte, ale nikto ich nerobí.",
    description: "Ľudia vedia, čo majú robiť, ale systém im nedáva rámec, zodpovednosť ani kontrolu.",
    color: "primary"
  },
  {
    title: "Vyrástli ste z 20 na 60 ľudí a nefunguje to.",
    description: "Každé oddelenie ide po svojom, informácie sa strácajú a projekty zostávajú nedokončené.",
    color: "orange"
  },
  {
    title: "Delegovanie nefunguje — lebo nie je na koho delegovať.",
    description: "Role, zodpovednosti a procesy sú nejasné. Majiteľ musí robiť všetko, inak sa veci nehýbu.",
    color: "mint"
  }
];

export default function Situations() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Rastiete rýchlo, ale vnútri to nefunguje?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Majitelia firiem 50–100 ľudí riešia tie isté bloky. Ak sa v nich vidíte, ste presne moja cieľovka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {situations.map((situation, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 lg:p-10 min-h-[320px] flex flex-col justify-between relative overflow-hidden group hover:scale-105 transition-transform duration-200 ${
                situation.color === "primary" 
                  ? "bg-primary text-white" 
                  : situation.color === "orange"
                  ? "bg-[hsl(var(--orange-cta))] text-white"
                  : "bg-[hsl(var(--mint-accent))] text-white"
              }`}
              data-testid={`card-situation-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">{situation.title}</h3>
                <p className="text-base lg:text-lg leading-relaxed opacity-95">{situation.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
            asChild
            data-testid="button-situations-contact"
          >
            <a href="mailto:lucia@vycrea.sk">Poďme si zavolať</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
