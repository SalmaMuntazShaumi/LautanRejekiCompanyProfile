import Image from 'next/image';

export default function SegmentationCard({ name, img, slug }: { name: string; img: string; slug: string }) {
    return (
        <div className="card-container" style={{ position: 'relative', height: '250px', borderRadius: '12px', overflow: 'hidden' }}>
            {/* Container Gambar untuk Animasi Zoom */}
            <div className="card-image-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image src={img} alt={name} fill style={{ objectFit: 'cover' }}/>
                {/* Overlay Gelap agar teks mudah dibaca */}
                <div className="card-overlay" style={{
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    zIndex: 1 }}/>
            </div>

            {/* Teks di Atas Gambar */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: 'white',
                fontWeight: '500',
                fontSize: '18px',
                textAlign: 'left',
                zIndex: 2}}>
                    {name}
            </div>
        </div>
    );
}