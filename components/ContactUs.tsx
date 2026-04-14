export default function ContactUs() {
    return (
        <section style={{ padding: '3rem 5%', textAlign: 'center', backgroundColor: 'white' }}>
            <h1 className="section-title">
                Buat kebutuhan pipamu menjadi lebih mudah bersama kami
            </h1>
            
            <p className="section-desc">
                Sebagai distributor pipa profesional dan transparan, kami selalu memastikan kepuasan pelanggan serta memberikan produk-produk berkualitas tinggi.
            </p>
            
            <a 
            href="https://wa.me/6287780450268?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20katalog%20produk%20dan%20harga%20yang%20ditawarkan." 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}>
                <button style={{ 
                    color: '#333', 
                    padding: '12px 24px', 
                    border: '3px solid #E1E1E1', 
                    borderRadius: '8px', 
                    fontFamily: 'Montserrat',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backgroundColor: 'transparent'}}>
                        Hubungi kami
                </button>
            </a>
        </section>
    );
}