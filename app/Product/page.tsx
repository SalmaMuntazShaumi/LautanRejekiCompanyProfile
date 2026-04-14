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
      <h1 className="section-title">Katalog Produk</h1>

     {/* --- TAB FILTER --- */}
      <div className="tab-filter-container">
        {["Rucika", "Shuanglin", "Extrana"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- SEARCH BAR --- */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
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
          <Link href={`/Product/${product.id}`} key={product.id} className="product-card-link">
            <div key={product.id} className="product-card">
            {/* Gunakan class product-image-container supaya height-nya bisa kita atur via CSS */}
            <div className="product-image-container">
              <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }}/>
            </div>  
            
            <div className="product-card-text">
              <p>
                {product.name}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </main>
  );
}