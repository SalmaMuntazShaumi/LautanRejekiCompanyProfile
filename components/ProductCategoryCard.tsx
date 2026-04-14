import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ name, img, slug }: { name: string; img: string; slug: string }) {
  return (
    // Link ke katalog sesuai slug brand
    <Link href={`/Product?brand=${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div className="category-card">
        
        {/* Container Gambar - Sekarang diatur oleh .category-image-container di CSS */}
        <div className="category-image-container">
          <Image 
            src={img} 
            alt={name} 
            fill 
            className="img-zoom"
            style={{ objectFit: 'cover' }} // Transition sudah ada di CSS .img-zoom
          />
        </div>
        
        {/* Container Teks */}
        <div style={{ padding: '1.2rem', color: 'white', textAlign: 'center' }}>
          <h4 className="category-name" style={{ margin: 0, fontWeight: '600' }}>
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
}