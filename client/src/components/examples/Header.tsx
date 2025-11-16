import Header from '../Header';

export default function HeaderExample() {
  return <Header onAuditClick={() => console.log('Audit clicked')} />;
}
