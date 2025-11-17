// Recommendations from mini_audit_recommendations.xlsx
// Maps pillar + level to recommendation text

export interface Recommendation {
  pillar: 'processes' | 'sales' | 'people' | 'growth';
  level: 1 | 2 | 3; // 1 = critical, 2 = medium, 3 = mild
  title: string;
  text: string;
}

export const RECOMMENDATIONS: Recommendation[] = [
  {
    pillar: 'processes',
    level: 1,
    title: 'Procesy – kritický stav',
    text: 'Popíšeme všetky opakované činnosti a nastavíme jasné štandardy. Bez toho budete rásť do chaosu — nie do zisku. Pripravím vám procesný základ tak, aby ho každý vedel používať a kontrolovať v bežnej praxi.',
  },
  {
    pillar: 'processes',
    level: 2,
    title: 'Procesy – stredný problém',
    text: 'Zavedieme kontrolný cyklus a reporting, aby systémy neboli len \'na papieri\'. Tým zabezpečíme, že vaši ľudia budú pracovať rovnako a výsledky budú predvídateľné.',
  },
  {
    pillar: 'processes',
    level: 3,
    title: 'Procesy – mierny problém',
    text: 'Vybudujeme prepojený workflow marketing → obchod → realizácia, aby informácie nepadali medzi stoličky. Zabránime duplicite práce a stratám informácií.',
  },
  {
    pillar: 'sales',
    level: 1,
    title: 'Obchod & marketing – kritický stav',
    text: 'Nastavíme jasný obchodný postup krok za krokom a prepojíme marketing tak, aby generoval reálne dopyty, nie len obsah. Bez toho vám uniká najviac peňazí.',
  },
  {
    pillar: 'sales',
    level: 2,
    title: 'Obchod & marketing – stredný problém',
    text: 'Zjednotíme obchodné aktivity (CRM, reporting, kvalifikácia leadov) a nastavíme marketing podľa potrieb obchodu, nie podľa kreatívnych nápadov.',
  },
  {
    pillar: 'sales',
    level: 3,
    title: 'Obchod & marketing – mierny problém',
    text: 'Urobíme audit produktovej ponuky, vyjasníme USP a nastavíme viditeľnosť tak, aby bolo jasné, prečo má zákazník vybrať práve vás.',
  },
  {
    pillar: 'people',
    level: 1,
    title: 'Ľudia & výkon – kritický stav',
    text: 'Rozdelíme zodpovednosti, nastavíme jasné kompetencie a kontrolu výkonu. Bez tohto nebude fungovať nič — ani procesy, ani rast.',
  },
  {
    pillar: 'people',
    level: 2,
    title: 'Ľudia & výkon – stredný problém',
    text: 'Zavedieme pevné očakávania pre jednotlivé role, postavíme reporting a nastavíme spätnú väzbu tak, aby ľudia pracovali rovnako každý týždeň.',
  },
  {
    pillar: 'people',
    level: 3,
    title: 'Ľudia & výkon – mierny problém',
    text: 'Nastavíme rytmus stretnutí, odovzdávacích protokolov a pravidiel komunikácie, aby celá firma ťahala rovnakým smerom.',
  },
  {
    pillar: 'growth',
    level: 1,
    title: 'Rast & stratégia – kritický stav',
    text: 'Nastavíme jasné 3–5 strategických cieľov na 6 mesiacov a konkrétne kroky, ktoré k nim vedú. Bez smeru sa rast mení na chaos.',
  },
  {
    pillar: 'growth',
    level: 2,
    title: 'Rast & stratégia – stredný problém',
    text: 'Vyberieme najkritickejšiu oblasť, ktorá brzdí škálovanie, a nastavíme roadmapu — postupnosť krokov, čo treba riešiť ako prvé.',
  },
  {
    pillar: 'growth',
    level: 3,
    title: 'Rast & stratégia – mierny problém',
    text: 'Identifikujeme možnosti expanzie (B2B, nové produkty, nové trhy) a pripravíme plán, ktorý bude realistický a udržateľný.',
  },
];

// Helper function to find recommendation by pillar and level
export function getRecommendation(
  pillar: 'processes' | 'sales' | 'people' | 'growth',
  level: 1 | 2 | 3
): Recommendation | undefined {
  return RECOMMENDATIONS.find(r => r.pillar === pillar && r.level === level);
}
