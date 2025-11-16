const results = [
  { value: "+40%", label: "Zisk", progress: 0.75 },
  { value: "+60%", label: "Obrat", progress: 0.85 },
  { value: "–35%", label: "Náklady", progress: 0.65 },
  { value: "2", label: "Strategické pozície", progress: 0.5, isSmallText: true },
  { value: "ISO", label: "Zavedenie procesov", progress: 0.7, isSmallText: true }
];

export default function Statistics() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Výsledky, nie sľuby
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Priamo v teréne zavádzam systém, nie prezentácie. Výsledky mojich klientov:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8 max-w-6xl mx-auto mb-16">
          {results.map((result, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-36 h-36 lg:w-40 lg:h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="hsl(var(--primary))"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="20"
                    opacity="0.2"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--mint-accent))"
                    strokeWidth="20"
                    strokeDasharray={`${Math.PI * 160 * result.progress} ${Math.PI * 160}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
                  <div className={`${result.isSmallText ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl'} font-extrabold text-white mb-1`}>
                    {result.value}
                  </div>
                  <div className={`${result.isSmallText ? 'text-xs' : 'text-sm'} font-semibold text-gray-300 text-center leading-tight`}>
                    {result.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[hsl(var(--mint-accent))]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-foreground/5 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[hsl(var(--orange-cta))] leading-relaxed">
                Systém, jasné kroky a pravidelná kontrola dokážu zmeniť chod firmy do 12 mesiacov.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
