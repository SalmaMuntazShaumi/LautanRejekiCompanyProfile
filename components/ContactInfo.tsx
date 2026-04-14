export default function ContactInfo({ icon, title, list }: any) {
  return (
    <div>
      <h4 style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
        {icon} {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
        {list.map((item: string, i: number) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}