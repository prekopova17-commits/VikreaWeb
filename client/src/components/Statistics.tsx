export default function Statistics() {
  return (
    <section className="py-20 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48">
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
                  opacity="0.3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="hsl(var(--mint-accent))"
                  strokeWidth="20"
                  strokeDasharray={`${Math.PI * 160 * 0.75} ${Math.PI * 160}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-white mb-1">+40%</div>
                <div className="text-base font-semibold text-gray-300">Zisk</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48">
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
                  opacity="0.3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="hsl(var(--mint-accent))"
                  strokeWidth="20"
                  strokeDasharray={`${Math.PI * 160 * 0.85} ${Math.PI * 160}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-white mb-1">+60%</div>
                <div className="text-base font-semibold text-gray-300">Obrat</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48">
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
                  opacity="0.3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="hsl(var(--mint-accent))"
                  strokeWidth="20"
                  strokeDasharray={`${Math.PI * 160 * 0.65} ${Math.PI * 160}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-white mb-1">25</div>
                <div className="text-base font-semibold text-gray-300">Rokov</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
