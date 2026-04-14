"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ALL_PRODUCTS } from "@/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
      <motion.p {...fadeInUp} style={{ color: '#666', marginBottom: '0.5rem' }}>
        Cari produk yang kamu inginkan
      </motion.p>

      <motion.h1 className="section-title" {...fadeInUp}>
        Katalog Produk
      </motion.h1>

     {/* --- TAB FILTER --- */}
      <div className="tab-filter-container">
        {["Rucika", "Shuanglin", "Extrana"].map((tab, i) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* --- SEARCH BAR --- */}
      <motion.div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
        {...fadeInUp}
      >
        <motion.input 
          type="text"
          placeholder={`Cari di kategori ${activeTab}...`}
          whileFocus={{ scale: 1.02 }}
          style={{ 
            width: '100%', maxWidth: '600px', padding: '12px 20px', borderRadius: '10px', 
            border: '1px solid #ddd', backgroundColor: '#f9f9f9'
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      {/* --- GRID PRODUK --- */}
      <motion.div 
        className="product-grid"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link href={`/Product/${product.id}`} className="product-card-link">
              <div className="product-card">

                <div className="product-image-container">
                  <Image 
                    src={product.img} 
                    alt={product.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>  

                <div className="product-card-text">
                  <p>{product.name}</p>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}