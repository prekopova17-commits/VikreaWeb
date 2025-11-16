const results = [
  { value: "+40%", label: "Zisk", progress: 0.75 },
  { value: "+60%", label: "Obrat", progress: 0.85 },
  { value: "–35%", label: "Náklady", progress: 0.65 },
  { value: "25", label: "Rokov", progress: 0.65 }
];

const achievements = [
  "2 nové strategické pozície",
  "kompletné zavedenie procesov na úrovni ISO"
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          {results.map((result, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-40 h-40 lg:w-48 lg:h-48">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-white mb-1">{result.value}</div>
                  <div className="text-sm lg:text-base font-semibold text-gray-300">{result.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                <span className="text-[hsl(var(--mint-accent))] mt-1">●</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl font-semibold text-foreground italic">
            Systém, jasné kroky a pravidelná kontrola dokážu zmeniť chod firmy do 12 mesiacov.
          </p>
        </div>
      </div>
    </section>
  );
}
