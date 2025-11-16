import bannerImage from "@assets/Viera Prekopova1_1763326933486.jpg";

export default function ViKreaBanner() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1E40AF] to-[#06D6A0]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content - Left */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4" data-testid="text-banner-title">
              VyCrea
            </h2>
            <p className="text-2xl lg:text-4xl font-semibold text-[hsl(var(--orange-cta))]" data-testid="text-banner-tagline">
              Systémy. Výsledky. Žiadne výhovorky.
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
