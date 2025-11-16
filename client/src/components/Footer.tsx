export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-dark))] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                VK
              </div>
              <span className="font-bold text-xl">VyCrea</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Kreatívna business agentúra zameraná na systematický rast SME firiem.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:lucia@vycrea.sk" className="hover:text-white transition-colors" data-testid="link-footer-email">
                  lucia@vycrea.sk
                </a>
              </li>
              <li>
                <a href="tel:+421000000000" className="hover:text-white transition-colors" data-testid="link-footer-phone">
                  +421 XXX XXX XXX
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
                <span>ISO 9001/14001</span>
              </li>
              <li>
                <span>25 rokov skúseností</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} VyCrea. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}
