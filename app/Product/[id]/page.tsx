'use client'; // This is required for interactive client components (useState)

import { useState, use } from 'react';
import Image from 'next/image';
import { ALL_PRODUCTS } from '../../../constants'; // Import your updated data
import { param } from 'framer-motion/client';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {

  const resolvedParams = use(params);
  const productId = Number(resolvedParams.id);

  // 1. Fetch the product based on URL ID
  const product = ALL_PRODUCTS.find((p) => p.id === productId);

  // 2. Manage state for the interactive chip section
  const [selectedSpecIndex, setSelectedSpecIndex] = useState(0);

  if (!product) {
    return <div className="p-20 text-center">Produk tidak ditemukan.</div>;
  }

  // Define the currently visible specification based on state
  const currentSpec = product.detailedSpecs?.[selectedSpecIndex];

  return (
    <div className="product-detail-layout">
    {/* --- Hero Header Section --- */}
    <section className="product-hero">
      {/* Gambar Background */}
      <Image 
        src={product.img} 
        alt={product.name} 
        fill 
        className="hero-bg-image"
        priority={true} 
      />
      
      {/* Overlay Gelap agar teks mudah dibaca */}
      <div className="hero-overlay"></div>

      {/* Konten Teks di Atas Gambar */}
      <div className="hero-content">
        <h1>{product.name}</h1>
      </div>
  </section>

    {/* --- Bagian Bawah (Deskripsi & Tombol) --- */}
    <section className="product-lower-body">
      <div className="action-bar">
        {product.catalogUrl ? (
          <a 
            href={product.catalogUrl} 
            download={`${product.name}-Katalog.pdf`} // Memberi nama file saat diunduh
            className="btn-download"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            <span className="icon">↓</span> Unduh Katalog
          </a>
        ) : (
          <button className="btn-download" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
            Katalog Tidak Tersedia
          </button>
        )}
      </div>

      <div className="description-container">

        {product.desc == null ? null
        : <section>
            <h3 style={{fontWeight: 'bold'}}>Deskripsi</h3>
            <p>{product.desc}</p>
          </section>  
        }

        {product.specs == null ? null
        : <section>
            <br />
            <h3 style={{fontWeight: 'bold'}}>Spesifikasi</h3>
            <div className="spec-table-image-wrapper">
                <Image 
                  src={product.specs} 
                  alt={''}
                  width={1200} // Berikan angka estimasi lebar maksimal
                  height={0}    // Biarkan 0
                  style={{ width: '100%', height: 'auto' }} // Kuncinya di sini
                  sizes="100vw"// Keep original proportions
                  priority={true} // Priority loading as this is crucial content
                />
              </div>        
          </section> 
        }

        {product.advantages && product.advantages.length > 0 && (
        <section>
          <br />
          <h3 style={{fontWeight: 'bold'}}>Keunggulan</h3>
          <ul className="advantages-list" style={{ listStyleType: 'num', paddingLeft: '20px' }}>
            {product.advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </section>
      )}

        {product.detailedSpecs && product.detailedSpecs.length > 0 && currentSpec && (
        <section>
          <br />
          <h3 style={{fontWeight: 'bold'}}>Tipe {product.name}</h3>

          {/* 1. Interactive Chips (Tabs) */}
          {product.detailedSpecs && product.detailedSpecs.length > 1 ? 
        <div className="chip-container">
            {product.detailedSpecs.map((spec, index) => (
              <button 
                key={spec.kelasName} 
                onClick={() => setSelectedSpecIndex(index)} // Updates state on click
                // Adds a special class if this chip is the selected one
                className={`kelas-chip ${selectedSpecIndex === index ? 'active' : ''}`}>
                {spec.kelasName}
              </button>
            ))}
          </div> : null}

          {/* 2. Dynamic Content Block */}
          {/* Key prop ensures React remounts these elements on change */}
          <div key={selectedSpecIndex} className="spec-content-block">
            {/* Specific Description */}
            <p className="spec-paragraph">
              <strong>Tipe {currentSpec.kelasName}</strong> {currentSpec.kelasDescription}
            </p>

            {/* Specific Image (The Table) */}
            {currentSpec.specImage && (
              <div className="spec-image-standalone">
                <Image 
                  src={currentSpec.specImage} 
                  alt={`Spesifikasi ${product.name}`}
                  width={1200} // Berikan angka estimasi lebar maksimal
                  height={0}    // Biarkan 0
                  style={{ width: '100%', height: 'auto' }} // Kuncinya di sini
                  sizes="100vw"
                  priority={true}
                />
              </div>
            )}
          </div>
        </section>
      )}
      </div>
    </section>
    </div>
  );
}