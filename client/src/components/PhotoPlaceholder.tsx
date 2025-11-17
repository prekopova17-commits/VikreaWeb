export default function PhotoPlaceholder() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[hsl(var(--orange-cta))]/10 to-[hsl(var(--mint-accent))]/10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[hsl(var(--mint-accent))]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--orange-cta))]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img 
              src="/images/photo-placeholder.jpg"
              alt="Viera Prekopová - ViKrea"
              className="w-full h-full object-cover"
              data-testid="img-placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
