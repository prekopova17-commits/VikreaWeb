import Services from '../Services';

export default function ServicesExample() {
  return <Services onAuditClick={() => console.log('Service audit clicked')} />;
}
