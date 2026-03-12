"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Download, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ALL_PRODUCTS } from "@/constants";

export default function ProductDetailPage() {
  const { slug } = useParams();
  
  // Mencari data produk berdasarkan slug
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);

  // State untuk menyimpan kelas yang dipilih (Default: kelas pertama dari data)
  const [selectedKelas, setSelectedKelas] = useState("");

  // Set default kelas setelah produk ditemukan
  useEffect(() => {
    if (product?.kelas && product.kelas.length > 0) {
      setSelectedKelas(product.kelas[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h1>Produk tidak ditemukan</h1>
        <Link href="/produk">Kembali ke Katalog</Link>
      </div>
    );
  }

  return (
    <main style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#fff' }}>
      
      {/* --- HERO BANNER --- */}
      {/* Mengikuti desain banner pada file Products - Details Exoplas.jpg */}
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <Image 
          src={product.bannerImg!} 
          alt={product.name!} 
          fill 
          style={{ objectFit: 'cover' }} 
          priority
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 8%' 
        }}>
          <h1 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 'bold' }}>
            {product.name}
          </h1>
        </div>
      </div>

      <div style={{ padding: '3rem 8%' }}>
        
        {/* --- TOMBOL KEMBALI & UNDUH --- */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <Link href="/produk" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666', textDecoration: 'none' }}>
            <ChevronLeft size={20} /> Kembali ke Produk
          </Link>
          
          {/* Tombol Unduh Katalog sesuai desain di Products - Details Exoplas.jpg */}
          <a 
            href={product.katalogUrl} 
            download 
            style={{ 
              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px',
              border: '1px solid #ccc', borderRadius: '8px', color: '#333', 
              textDecoration: 'none', fontWeight: '500', fontSize: '14px'
            }}
          >
            <Download size={18} /> Unduh Katalog
          </a>
        </div>

        {/* --- DESKRIPSI --- */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#777', marginBottom: '1.5rem' }}>
            Deskripsi
          </h2>
          <p style={{ lineHeight: '1.8', color: '#333', fontSize: '1.1rem', maxWidth: '900px' }}>
            {product.deskripsi}
          </p>
        </section>

        {/* --- DINAMIS CHIPS (KELAS) --- */}
        {/* Terinspirasi dari bagian Tipe Pipa di Products - Details PVC Standard.jpg */}
        {product.kelas && product.kelas.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#777', marginBottom: '1.5rem' }}>
              Kelas
            </h2>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '2rem' }}>
              {product.kelas.map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedKelas(k)}
                  style={{
                    padding: '10px 35px',
                    borderRadius: '25px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedKelas === k ? '#EF5350' : '#E0E0E0',
                    color: selectedKelas === k ? 'white' : '#666',
                  }}
                >
                  {k}
                </button>
              ))}
            </div>

            {/* Keterangan Kelas yang Aktif */}
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #EF5350' }}>
               <p style={{ margin: 0, fontSize: '1.1rem' }}>
                 <strong style={{ color: '#EF5350' }}>Kelas {selectedKelas}</strong>:
                 {selectedKelas === "AW" 
                    ? " Pipa uPVC untuk aplikasi air bersih bertekanan tinggi (hingga 10 Bar)." 
                    : " Pipa uPVC untuk saluran pembuangan dan air limbah tanpa tekanan."}
               </p>
            </div>
          </section>
        )}

        {/* --- TABEL SPESIFIKASI DINAMIS --- */}
        {/* Tabel berubah berdasarkan state selectedKelas seperti di Products - Details PPR.jpg */}
        {selectedKelas && product.tabelSpesifikasi && (
          <section>
            <div style={{ 
              marginTop: '2rem', 
              border: '1px solid #eee', 
              borderRadius: '15px', 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <Image 
                src={product.tabelSpesifikasi[selectedKelas]} 
                alt={`Tabel Spesifikasi ${product.name} Kelas ${selectedKelas}`} 
                width={1200} 
                height={800} 
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </section>
        )}

      </div>
    </main>
  );
}