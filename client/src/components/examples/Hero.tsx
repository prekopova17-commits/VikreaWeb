import Hero from '../Hero';

export default function HeroExample() {
  return <Hero onAuditClick={() => console.log('Audit clicked from hero')} />;
}
