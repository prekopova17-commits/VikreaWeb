import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2 } from "lucide-react";
import type { Company } from "@shared/schema";

interface PrioritizationMatrixProps {
  onAuditClick: () => void;
}

export default function PrioritizationMatrix({ onAuditClick }: PrioritizationMatrixProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch companies from ORSR
  const { data: companies = [], isLoading } = useQuery<Company[]>({
    queryKey: [`/api/companies/search?q=${debouncedQuery}`],
    enabled: debouncedQuery.length >= 2,
  });

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company);
    setSearchQuery(company.name);
    setShowResults(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
    if (e.target.value.length < 2) {
      setSelectedCompany(null);
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[640px] mx-auto text-center pt-24 pb-16">
          <h1 className="text-[42px] font-bold text-primary mb-8 leading-tight">
            Zistite, čo brzdí rast vašej firmy
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            9 otázok. 3 minúty. Jasná mapa priorít vo vašej emailovej schránke.
          </p>
          
          <div className="mb-8 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                placeholder="Začnite písať názov firmy..."
                className="pl-12 pr-4 py-6 text-base rounded-xl border-2 border-border focus:border-primary"
                data-testid="input-company-search"
              />
            </div>
            
            {showResults && debouncedQuery.length >= 2 && (
              <div className="absolute z-10 w-full mt-2 bg-card border-2 border-border rounded-xl shadow-lg max-h-80 overflow-y-auto">
                {isLoading ? (
                  <div className="p-4 text-center text-muted-foreground" data-testid="loading-companies">
                    Vyhľadávam...
                  </div>
                ) : companies.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground" data-testid="no-companies">
                    Žiadne výsledky
                  </div>
                ) : (
                  <ul className="py-2">
                    {companies.map((company) => (
                      <li
                        key={company.ico}
                        onClick={() => handleSelectCompany(company)}
                        className="px-4 py-3 hover-elevate cursor-pointer transition-colors"
                        data-testid={`company-${company.ico}`}
                      >
                        <div className="flex items-start gap-3">
                          <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="text-left flex-1">
                            <div className="font-semibold text-foreground">{company.name}</div>
                            <div className="text-sm text-muted-foreground">
                              IČO: {company.ico}
                              {company.legalForm && ` • ${company.legalForm}`}
                              {company.city && ` • ${company.city}`}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            
            <p className="text-xs text-muted-foreground mt-2">
              Vyhľadávanie v Obchodnom registri SR
            </p>
          </div>

          <div className="mb-3">
            <Button 
              onClick={onAuditClick}
              size="lg"
              className="bg-[hsl(var(--orange-cta))] hover:bg-[hsl(var(--orange-cta))]/90 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-colors duration-200"
              data-testid="button-matrix-start"
            >
              Začať audit
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Výsledok vidím iba ja a vy.
          </p>
        </div>
      </div>
    </section>
  );
}
