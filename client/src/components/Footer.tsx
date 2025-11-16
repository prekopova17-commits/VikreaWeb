export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-dark))] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <img 
                src="/images/vikrea-logo-light.png"
                alt="ViKrea Logo"
                className="h-12 w-auto mb-4"
                data-testid="img-footer-logo"
              />
              <p className="text-white/90 text-base leading-relaxed mb-3">
                Systémy. Výsledky. Žiadne výhovorky.
              </p>
              <p className="text-white/70 text-sm">
                ISO 9001/14001 • 25 rokov skúseností
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:prekopova17@gmail.com" className="hover:text-white transition-colors" data-testid="link-footer-email">
                  prekopova17@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+421905400026" className="hover:text-white transition-colors" data-testid="link-footer-phone">
                  +421 905 400 026
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Informácie</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-privacy">
                  Ochrana údajov
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-legal">
                  Právne informácie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} ViKrea. Všetky práva vyhradené. Vytvorila Martina Habová.</p>
        </div>
      </div>
    </footer>
  );
}
