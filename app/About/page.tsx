"use client";

import Image from "next/image";
import { Award, Handshake, Scale, Lightbulb, ShieldCheck, MapPin, Building2, Warehouse, Phone } from "lucide-react";
import LogoSlider from "@/components/LogoSlider";
import VisiMisiSlider from "@/components/VisiMisiSlider";
import { KLIEN_LOGOS, MITRA_LOGOS } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CompanyMaps from "@/components/Maps";
import ContactInfo from "@/components/ContactInfo";

export default function AboutPage() {
  return (
    <main style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* --- SEKSI PROFIL PERUSAHAAN --- */}
      <section style={{ padding: '5rem 10%', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1.5rem' }}>PT LAUTAN REJEKI</h2>
        <p style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#444' }}>
          PT Lautan Rejeki merupakan distributor bahan bangunan yang mengfokuskan diri pada pipa bangunan berkualitas. Berdiri sejak tahun 2008, kami telah melayani berbagai proyek skala nasional dengan integritas tinggi.
        </p>
      </section>

      {/* --- SEKSI VISI --- */}
      <VisiMisiSlider></VisiMisiSlider>

      {/* --- NILAI PERUSAHAAN (Custom Layout) --- */}
        <section style={{ padding: '5rem 10%', textAlign: 'center' }}>
        <h2 className="section-title">Nilai Perusahaan Kami</h2>
        
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1.5rem', 
            marginTop: '3rem' 
        }}>
            {/* Baris Pertama (3 Kotak) */}
            <ValueCard icon={<Award size={40}/>} title="Kualitas" desc="Produk unggul dengan standar kualitas terbaik" />
            <ValueCard icon={<Handshake size={40}/>} title="Layanan Terbaik" desc="Pelayanan yang prima adalah pedoman kami" />
            <ValueCard icon={<Scale size={40}/>} title="Integritas" desc="Integritas hal penting dalam perusahaan kami" />

            {/* Baris Kedua (2 Kotak Lebar) */}
            <ValueCard icon={<Lightbulb size={40}/>} title="Inovatif" desc="Inovasi cerdas untuk konsumen dan produsen" />
            <ValueCard icon={<ShieldCheck size={40}/>} title="Keamanan" desc="Keamanan bagi seluruh hal yang berkaitan dengan kami" />
        </div>
        </section>
        
      {/* --- PARTNERSHIP --- */}
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
            <h2 className="section-title">Kerja sama kami</h2>
            <p className="section-desc">PT Lautan Rejeki menjalin kerja sama dengan berbagai mitra untuk mendistribusikan pipa konstruksi berkualitas, didukung oleh layanan profesional dan proses yang transparan.</p>
            <LogoSlider items={MITRA_LOGOS} />
        </section>

      {/* --- KLIEN --- */}
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
            <h2 className="section-title">Klien kami</h2>
            <p className="section-desc">Kami telah mendistribusikan dari lebih 1000 konsumen kami baik dari skala besar hingga ke skala kecil</p>
            <LogoSlider items={KLIEN_LOGOS} />
        </section>

        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
            <h2 className="section-title">Referensi Proyek</h2>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                spaceBetween={30}
                slidesPerView={1}
                style={{ height: '300px', borderRadius: '12px', overflow: 'hidden', padding: '0 5%' }}
                >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                    {/* Container utama harus relative */}
                    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '15px', overflow: 'hidden' }}>
                        
                        {/* 1. Gambar Background */}
                        <Image 
                        src={banner.img} 
                        alt={banner.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        />

                        {/* 2. Overlay Gelap (Opsional, agar teks terbaca) */}
                        <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                        zIndex: 1 
                        }} />

                        {/* 3. Konten Teks */}
                        <div style={{ 
                        position: 'absolute', 
                        bottom: '40px', 
                        left: '40px', 
                        color: 'white', 
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        zIndex: 2,
                        maxWidth: '80%'
                        }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            {banner.title}
                        </h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginTop: '8px' }}>
                            {banner.desc}
                        </p>
                        </div>

                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

      {/* --- KONTAK & LOKASI (GRID BAWAH) --- */}
        <section style={{ padding: '5rem 10%', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            <ContactInfo icon={<Building2 />} title="Business Unit" list={["PT Lautan Rejeki Luas (2014)", "PT Aneka Rejeki Utama (2017)", "PT Kreasi Panen Jaya (2019)", "PT Jaya Panen Utama (2024)"]} />
            <ContactInfo icon={<MapPin />} title="Head Office" list={["Jl. Meruya Ilir Raya No.1 4, RT4/RW1, Serengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630"]} />
            <ContactInfo icon={<Warehouse />} title="Warehouse" list={["Jakarta . Serang . Tegal . Cirebon . Karawang . Bogor . Bandung . Sukabumi . Cianjur"]} />
            <ContactInfo icon={<Phone />} title="Our Contact" list={["Email : info@lautanrejeki.co.id", "Instagram : Lautanrejekiofficial", "Phone : 021-5863617", "Site : www.lautanrejeki.co.id"]} />
            </div>
        </section>

        <CompanyMaps></CompanyMaps>
    </main>
  );
}

function ValueCard({ icon, title, desc }: any) {
  return (
    <div className="value-card" style={{ 
      backgroundColor: '#436197', 
      color: 'white', 
      padding: '2.5rem 2rem', 
      borderRadius: '20px', 
      textAlign: 'left',
      flex: '1 1 300px', // Melar otomatis, minimal lebar 300px
      minHeight: '220px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxShadow: '8px 8px 0px rgba(0,0,0,0.1)', // Efek shadow kaku sesuai gambar
      border: '1px solid rgba(0,0,0,0.2)'
    }}>
      <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
      <h3 style={{ fontWeight: '500', fontSize: '1.4rem', marginBottom: '0.8rem' }}>{title}</h3>
      <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: '1.5' }}>{desc}</p>
    </div>
  );
}

const banners = [
    { id: 1, img: '/images/proyek/citra.png', title: 'Citra Garden', desc: 'Serpong' },
    { id: 2, img: '/images/proyek/idc.png', title: 'Iris Data Center', desc: 'Cikarang' },
    { id: 3, img: '/images/proyek/jco.png', title: 'Jakarta Central Outlet', desc: 'Alam Sutera' },
    { id: 4, img: '/images/proyek/summa.png', title: 'Summarecon', desc: 'Bogor' },
];