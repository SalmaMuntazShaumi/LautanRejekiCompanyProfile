"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Package2, Info, Contact, Award, Handshake, Scale, Lightbulb, ShieldCheck } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

// Import Komponen Pendukung
import HeroSlider from "@/components/HeroSlider";
import ContactUs from "@/components/ContactUs";
import LogoSlider from "@/components/LogoSlider";
import CompanyMaps from "@/components/Maps";

// Import Data Statis
import { CATEGORIES, MITRA_LOGOS, SEGMENTATIONS } from "@/constants";
import CategoryCard from "@/components/ProductCategoryCard";
import QuickLinkCard from "@/components/QuickLinkCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }, // Animasi hanya jalan sekali saat di-scroll
  transition: { duration: 0.8 }
};

export default function Dashboard({ data }: { data: any }) {
  return (
    <>
      <HeroSlider />
      <ContactUs />

      {/* --- QUICK LINKS --- */}
      <section style={{ padding: '2rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
  
        {[
          {
            href: "/Product",
            title: "Lihat Produk",
            desc: "Katalog produk terbaru kami.",
            icon: <Package2 size={42} color="#fff" />
          },
          {
            href: "/About",
            title: "Tentang",
            desc: "Visi misi perusahaan kami.",
            icon: <Info size={42} color="#fff" />
          },
          {
            href: "/Contact",
            title: "Kontak",
            desc: "Konsultasi proyek anda.",
            icon: <Contact size={42} color="#fff" />
          }
        ].map((item, i) => (
          
          <motion.div
            key={i}
            {...fadeInUp}
            transition={{ delay: i * 0.2 }}
          >
            <QuickLinkCard {...item} />
          </motion.div>

        ))}
      </section>
  
      {/* --- KATEGORI PRODUK --- */}
    <section className="category-section" style={{ padding: '4rem 5%', textAlign: 'center' }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Kategori Produk
      </motion.h2>      
      <div className="category-grid">
        {CATEGORIES.map((cat, i) => (
          <motion.div key={cat.name} {...fadeInUp} transition={{ delay: i * 0.1 }}>
            <CategoryCard key={cat.name} {...cat} />
          </motion.div>
        ))}
      </div>
    </section>

    {/* --- SEGMENTASI PASAR --- */}
    <section style={{ padding: '2rem 5%', textAlign: 'center', backgroundColor: '#fff' }}>
      <motion.h2 className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
          Segmentasi Pasar
      </motion.h2>

      <motion.p className="section-desc"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
          Kami hadir sebagai distributor terpercaya yang memberikan pelayanan terbaik untuk setiap konsumen, 
          baik untuk proyek berskala besar maupun kebutuhan skala kecil.
      </motion.p>
      
      {/* HAPUS gridTemplateColumns dari sini, biarkan CSS yang atur */}
      <div className="segmentation-grid"> 
        {SEGMENTATIONS.map((seg, i) => (
          <motion.div key={i} className="card-container" {...fadeInUp} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.05 }}>
            <div key={i} className="card-container">
            <div className="card-image-wrapper">
              <Image src={seg.img} alt={seg.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
            </div>
            <span style={{ position: 'absolute', bottom: '15px', left: '15px', color: 'white', fontWeight: '600', zIndex: 2, fontSize: 'inherit' }}>
              {seg.name}
            </span>
          </div>
          </motion.div>
          
        ))}
      </div>
    </section>

      {/* --- NILAI PERUSAHAAN (FULL CENTERED) --- */}
      <section style={{ padding: '2rem 5%', textAlign: 'center' }}>
        <motion.h2 className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
          Nilai Perusahaan
        </motion.h2>
        <motion.p className="section-desc"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}> 
        Kami selalu menjunjung tinggi nilai-nilai perusahaan dalam setiap aspek pekerjaan kami.
        </motion.p>
        <div style={{
          backgroundColor: '#3D6098', borderRadius: '12px', padding: '3rem 1rem', 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '2rem', marginTop: '3rem', color: 'white'
        }}>
          <ValueItem icon={<Award size={62} />} label="Berkualitas" />
          <ValueItem icon={<Handshake size={62} />} label="Layanan Terbaik" />
          <ValueItem icon={<Scale size={62} />} label="Jujur" />
          <ValueItem icon={<Lightbulb size={62} />} label="Inovatif" />
          <ValueItem icon={<ShieldCheck size={62} />} label="Aman" />
        </div>
      </section>

      {/* --- PARTNERSHIP --- */}
      <section style={{ padding: '2rem 0', textAlign: 'center' }}>
        <motion.h2 className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
          Kerja sama kami
        </motion.h2>

        <motion.p className="section-desc"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
          PT Lautan Rejeki menjalin kerja sama dengan berbagai mitra terbaik.
        </motion.p>
        <LogoSlider items={MITRA_LOGOS} />
      </section>

      {/* --- MAPS KEMBALI DI SINI --- */}
      <CompanyMaps />
    </>
  );
}

// Sub-komponen (Taruh di file yang sama atau pisahkan)
const ValueItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <motion.div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
    {...fadeInUp}
    whileHover={{ scale: 1.1 }}
  >
    <motion.div
      whileHover={{ rotate: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {icon}
    </motion.div>
    <span style={{ fontSize: '18px', fontWeight: '500' }}>{label}</span>
  </motion.div>
);