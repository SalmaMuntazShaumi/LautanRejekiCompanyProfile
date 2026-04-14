export default function ValueItem({ icon, label }: { icon: React.ReactNode; label: string}) {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', // Memusatkan secara horizontal
            justifyContent: 'center', // Memusatkan secara vertikal
            textAlign: 'center', // Memastikan teks panjang pun tetap di tengah
            gap: '1rem' // Memberi jarak antara ikon dan teks
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {icon}
            </div>
            <span style={{ 
            fontSize: '18px', 
            fontWeight: '500',
            display: 'block' 
            }}>
            {label}
            </span>
        </div>
    );
}