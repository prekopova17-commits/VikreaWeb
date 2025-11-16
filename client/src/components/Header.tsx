export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <img 
              src="/images/vikrea-logo-dark.png"
              alt="ViKrea Logo"
              className="h-12 lg:h-16 w-auto"
              data-testid="img-logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
