// components/CompanyMaps.tsx
export default function CompanyMaps() {
  // Alamat & Koordinat PT Lautan Rejeki (Cengkareng/Meruya)
  // Query ini akan mencari lokasi spesifik di Google Maps
  const mapQuery = "PT+Lautan+Rejeki+Jakarta+Barat";
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${mapQuery}`;

  // Opsi GRATIS tanpa API Key (menggunakan Google Maps Search Embed)
  const freeEmbedUrl = "https://maps.google.com/maps?q=PT%20Lautan%20Rejeki%20Meruya%20Ilir&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section style={{ padding: '2rem 5%', backgroundColor: '#f5f5f5' }}>
      <div style={{ 
        width: '100%', 
        height: '450px', 
        borderRadius: '15px', 
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        border: '1px solid #ddd'
      }}>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={freeEmbedUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}