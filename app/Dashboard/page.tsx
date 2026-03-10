"use client";

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

export default function Dashboard({ data }: { data: any }) {
  return (
    <>
      <HeroSlider />
      <ContactUs />

      {/* --- QUICK LINKS --- */}
      <section style={{ padding: '2rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        <QuickLinkCard href="/produk" title="Lihat produk" icon={<Package2 size={42} color="#fff"/>} desc="Katalog produk terbaru kami." />
        <QuickLinkCard href="/About" title="Tentang" icon={<Info size={42} color="#fff"/>} desc="Visi misi perusahaan kami." />
        <QuickLinkCard href="/Contact" title="Kontak" icon={<Contact size={42} color="#fff"/>} desc="Konsultasi proyek anda." />
      </section>

      {/* --- KATEGORI PRODUK --- */}
        <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
        <h2 className="section-title">Kategori Produk</h2>
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginTop: '2rem' 
        }}>
            {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.name} {...cat} />
            ))}
        </div>
        </section>

      {/* --- SEGMENTASI PASAR --- */}
      <section style={{ padding: '2rem 5%', textAlign: 'center', backgroundColor: '#fff' }}>
        <h2 className="section-title">Segmentasi Pasar</h2>
        <p className="section-desc">Kami hadir sebagai distributor terpercaya yang memberikan pelayanan terbaik untuk setiap konsumen, baik untuk proyek berskala besar maupun kebutuhan skala kecil.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {SEGMENTATIONS.map((seg, i) => (
            <div key={i} className="card-container" style={{ position: 'relative', height: '250px', borderRadius: '12px', overflow: 'hidden' }}>
              <div className="card-image-wrapper" style={{ position: 'relative', height: '100%' }}>
                <Image src={seg.img} alt={seg.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
              </div>
              <span style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontWeight: '600', zIndex: 2 }}>{seg.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- NILAI PERUSAHAAN (FULL CENTERED) --- */}
      <section style={{ padding: '2rem 5%', textAlign: 'center' }}>
        <h2 className="section-title">Nilai Perusahaan</h2>
        <p className="section-desc"> Kami selalu menjunjung tinggi nilai-nilai perusahaan dalam setiap aspek pekerjaan kami.</p>
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
        <h2 className="section-title">Kerja sama kami</h2>
        <p className="section-desc">PT Lautan Rejeki menjalin kerja sama dengan berbagai mitra terbaik.</p>
        <LogoSlider items={MITRA_LOGOS} />
      </section>

      {/* --- MAPS KEMBALI DI SINI --- */}
      <CompanyMaps />
    </>
  );
}

// Sub-komponen (Taruh di file yang sama atau pisahkan)
const ValueItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}>
    {icon}
    <span style={{ fontSize: '18px', fontWeight: '500' }}>{label}</span>
  </div>
);