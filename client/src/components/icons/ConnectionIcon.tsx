export default function ConnectionIcon({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="15" stroke="hsl(var(--mint-accent))" strokeWidth="3" fill="none"/>
      <circle cx="65" cy="35" r="15" stroke="hsl(var(--mint-accent))" strokeWidth="3" fill="none"/>
      <circle cx="35" cy="65" r="15" stroke="hsl(var(--mint-accent))" strokeWidth="3" fill="none"/>
      <circle cx="65" cy="65" r="15" stroke="hsl(var(--mint-accent))" strokeWidth="3" fill="none"/>
      <line x1="50" y1="35" x2="50" y2="65" stroke="hsl(var(--orange-cta))" strokeWidth="2"/>
      <line x1="35" y1="50" x2="65" y2="50" stroke="hsl(var(--orange-cta))" strokeWidth="2"/>
    </svg>
  );
}
