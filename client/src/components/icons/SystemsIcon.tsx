export default function SystemsIcon({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" stroke="hsl(var(--mint-accent))" strokeWidth="3" fill="none"/>
      <circle cx="50" cy="50" r="25" stroke="hsl(var(--orange-cta))" strokeWidth="3" fill="none"/>
      <circle cx="50" cy="50" r="15" stroke="hsl(var(--mint-accent))" strokeWidth="3" fill="none"/>
      <line x1="50" y1="15" x2="50" y2="85" stroke="hsl(var(--orange-cta))" strokeWidth="2"/>
      <line x1="15" y1="50" x2="85" y2="50" stroke="hsl(var(--orange-cta))" strokeWidth="2"/>
      <circle cx="50" cy="50" r="6" fill="hsl(var(--mint-accent))"/>
    </svg>
  );
}
