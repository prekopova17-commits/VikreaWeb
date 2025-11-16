export default function PhotoPlaceholder() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[hsl(var(--orange-cta))]/10 to-[hsl(var(--mint-accent))]/10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[hsl(var(--mint-accent))]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--orange-cta))]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="aspect-[3/4] bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--orange-cta))]/5" />
            <div className="text-center text-muted-foreground relative z-10">
              <div className="text-lg font-semibold mb-2">Photo Placeholder</div>
              <div className="text-sm">Portrait Image (3:4)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
