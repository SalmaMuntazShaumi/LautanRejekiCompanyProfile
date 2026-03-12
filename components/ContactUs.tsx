export default function ContactUs() {
    return (
        <section style={{ padding: '3rem 5%', textAlign: 'center', backgroundColor: 'white' }}>
            <h1 className="contact-heading" style={{ 
                marginBottom: '1rem', 
                fontWeight: '600', 
                color: '#333', 
                fontFamily: 'Montserrat',
                lineHeight: '1.3' // Tambahkan ini agar saat teks turun ke bawah tidak terlalu rapat
            }}>
                Buat kebutuhan pipamu menjadi lebih mudah bersama kami
            </h1>
            
            <p className="contact-text" style={{ 
                fontFamily: 'Montserrat', 
                maxWidth: '1040px', 
                margin: '0 auto 1.5rem auto', 
                lineHeight: '1.6', 
                color: '#666' 
            }}>
                Sebagai distributor pipa profesional dan transparan, kami selalu memastikan kepuasan pelanggan serta memberikan produk-produk berkualitas tinggi.
            </p>
            
            <button style={{ 
                color: '#333', 
                padding: '12px 24px', 
                border: '3px solid #E1E1E1', 
                borderRadius: '8px', 
                fontFamily: 'Montserrat',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: 'transparent'
            }}>
                Hubungi kami
            </button>
        </section>
    );
}