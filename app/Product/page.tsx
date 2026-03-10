"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter, Ellipsis } from "lucide-react";
import { ALL_PRODUCTS } from "@/constants";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("Pipa Rucika");
  const [searchQuery, setSearchQuery] = useState("");

  // Logika Filter: Menyaring produk berdasarkan Brand dan Search Bar
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    // 1. Cek apakah brand produk cocok dengan tab yang aktif
    // Kita hapus kata "Pipa " atau "Kabel " dari activeTab agar cocok dengan data brand
    const categoryBrand = activeTab.replace("Pipa ", "").replace("Kabel ", "");
    const isBrandMatch = product.brand === categoryBrand;

    // 2. Cek apakah nama produk mengandung kata dari search query
    const isSearchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return isBrandMatch && isSearchMatch;
  });

  return (
    <main style={{ padding: '4rem 5%', fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>Cari produk yang kamu inginkan</p>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2.5rem' }}>Pilih berdasarkan kategori</h1>

      {/* --- FILTER TABS --- */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <TabButton 
          label="Pipa Rucika" 
          active={activeTab === "Pipa Rucika"} 
          onClick={() => setActiveTab("Pipa Rucika")} 
          icon="/icons/rucika.png"
        />
        <TabButton 
          label="Pipa Shuanglin" 
          active={activeTab === "Pipa Shuanglin"} 
          onClick={() => setActiveTab("Pipa Shuanglin")} 
        />
        <TabButton 
          label="Kabel Extrana" 
          active={activeTab === "Kabel Extrana"} 
          onClick={() => setActiveTab("Kabel Extrana")} 
        />
      </div>

      {/* --- SEARCH BAR --- */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '4rem' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
          <Search style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} size={20} />
          <input 
            type="text" 
            placeholder="Cari produk sesuai kategori yang anda pilih"
            style={{ 
              width: '100%', padding: '12px 12px 12px 45px', borderRadius: '10px', 
              border: 'none', backgroundColor: '#E0E0E0', fontSize: '14px' 
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button style={{ padding: '12px 20px', backgroundColor: '#E0E0E0', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
          <Filter size={20} color="#555" />
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card" style={{ 
              borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
            }}>
              <div style={{ position: 'relative', height: '200px', backgroundColor: '#f5f5f5' }}>
                <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }} />
              </div>  
              <div style={{ 
                  backgroundColor: '#3D6098', padding: '15px', color: 'white', 
                  height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                <p style={{ 
                    margin: 0, fontWeight: '500', textAlign: 'center',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%',
                }}>
                    {product.name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', padding: '3rem', color: '#888' }}>
            Produk "{searchQuery}" tidak ditemukan di kategori {activeTab}.
          </div>
        )}
      </div>
    </main>
  );
}

// Komponen Kecil untuk Tombol Tab
function TabButton({ label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '12px 25px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: active ? '#EF5350' : '#D1D5DB',
        color: active ? 'white' : '#4B5563',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'all 0.3s ease'
      }}
    >
      {label}
    </button>
  );
}