import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ name, img, slug }: { name: string; img: string; slug: string }) {
  return (
    <Link href={`/Product?brand=${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div className="category-card" style={{ 
        borderRadius: '15px', 
        overflow: 'hidden', 
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
        backgroundColor: '#436197'
      }}>
        {/* Container Gambar - WAJIB overflow hidden */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <Image 
            src={img} 
            alt={name} 
            fill 
            className="img-zoom"
            style={{ 
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }} 
          />
        </div>
        
        <div style={{ padding: '1.2rem', color: 'white', textAlign: 'center' }}>
          <h4 style={{ margin: 0, fontWeight: '600' }}>{name}</h4>
        </div>
      </div>
    </Link>
  );
}