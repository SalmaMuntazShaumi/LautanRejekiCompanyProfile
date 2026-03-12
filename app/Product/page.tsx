"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ALL_PRODUCTS } from "@/constants";

// 1. Wrapper Utama dengan Suspense (Wajib di Next.js kalau pakai useSearchParams)
export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ padding: '5rem', textAlign: 'center' }}>Memuat Produk...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

// 2. Isi Konten Halaman
function ProductsContent() {
  const searchParams = useSearchParams();
  const brandParam = searchParams.get("brand"); 

  const [activeTab, setActiveTab] = useState("Rucika");
  const [searchQuery, setSearchQuery] = useState("");

  // Sinkronisasi: Jika user datang dari Beranda membawa ?brand=...
  useEffect(() => {
    if (brandParam === "pipa-rucika") setActiveTab("Rucika");
    if (brandParam === "pipa-shuanglin") setActiveTab("Shuanglin");
    if (brandParam === "kabel-extrana") setActiveTab("Extrana");
  }, [brandParam]);

  // Logika Filter
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const categoryBrand = activeTab.replace("Pipa ", "").replace("Kabel ", "");
    const isBrandMatch = product.brand === categoryBrand;
    const isSearchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return isBrandMatch && isSearchMatch;
  });

  return (
    <main style={{ padding: '4rem 5%', textAlign: 'center', minHeight: '80vh' }}>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>Cari produk yang kamu inginkan</p>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2.5rem' }}>Katalog Produk</h1>

      {/* --- TAB FILTER --- */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {["Rucika", "Shuanglin", "Extrana"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 25px', borderRadius: '10px', border: 'none',
              backgroundColor: activeTab === tab ? '#EF5350' : '#D1D5DB',
              color: activeTab === tab ? 'white' : '#4B5563',
              fontWeight: '600', cursor: 'pointer', transition: '0.3s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- SEARCH BAR --- */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
        <input 
          type="text" 
          placeholder={`Cari di kategori ${activeTab}...`}
          style={{ 
            width: '100%', maxWidth: '600px', padding: '12px 20px', borderRadius: '10px', 
            border: '1px solid #ddd', backgroundColor: '#f9f9f9'
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* --- GRID PRODUK --- */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" style={{ 
            borderRadius: '15px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            backgroundColor: 'white'
          }}>
            <div style={{ position: 'relative', height: '180px', backgroundColor: '#f5f5f5' }}>
              <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }}/>
            </div>  
            <div className="product-card-text" style={{ 
                backgroundColor: '#3D6098', padding: '10px', color: 'white', 
                height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
            }}>
              <p style={{
                  margin: 0, fontWeight: '500', textAlign: 'center',
                  fontSize: 'inherit', // Mengikuti parent (product-card-text)
                  display: '-webkit-box',
                  WebkitLineClamp: 2, // Maksimal 2 baris jika teks panjang
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  lineHeight: '1.2'
              }}>
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}