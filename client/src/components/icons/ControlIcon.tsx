export default function ControlIcon({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 50 L45 65 L70 35" stroke="hsl(var(--mint-accent))" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="15" y="15" width="70" height="70" rx="8" stroke="hsl(var(--orange-cta))" strokeWidth="3" fill="none"/>
    </svg>
  );
}
