export default function GrowthIcon({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 70 L35 45 L50 55 L65 30 L80 40" stroke="hsl(var(--mint-accent))" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="70" r="4" fill="hsl(var(--orange-cta))"/>
      <circle cx="35" cy="45" r="4" fill="hsl(var(--orange-cta))"/>
      <circle cx="50" cy="55" r="4" fill="hsl(var(--orange-cta))"/>
      <circle cx="65" cy="30" r="4" fill="hsl(var(--orange-cta))"/>
      <circle cx="80" cy="40" r="4" fill="hsl(var(--orange-cta))"/>
      <line x1="15" y1="80" x2="85" y2="80" stroke="hsl(var(--mint-accent))" strokeWidth="2"/>
      <line x1="15" y1="80" x2="15" y2="20" stroke="hsl(var(--mint-accent))" strokeWidth="2"/>
    </svg>
  );
}
