import bannerImage from "@assets/Viera Prekopova1_1763326933486.jpg";

export default function ViKreaBanner() {
  return (
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content - Left */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tight leading-none" style={{ fontFamily: 'Inter, sans-serif' }} data-testid="text-banner-title">
              ViKrea
            </h2>
            <p className="text-3xl lg:text-5xl font-bold text-[hsl(var(--orange-cta))] leading-tight tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }} data-testid="text-banner-tagline">
              Systémy. Výsledky.<br className="hidden lg:block" /> Žiadne výhovorky.
            </p>
          </div>

          {/* Image - Right */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={bannerImage}
                alt="Viera Prekopová - ViKrea"
                className="w-full h-full object-cover"
                data-testid="img-banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
