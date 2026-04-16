'use client';
import { useState } from "react";

import Image from "next/image";
import { Award, Handshake, Scale, Lightbulb, ShieldCheck, MapPin, Building2, Warehouse, Phone } from "lucide-react";
import LogoSlider from "@/components/LogoSlider";
import VisiMisiSlider from "@/components/VisiMisiSlider";
import { GALLERY, KLIEN_LOGOS, MITRA_LOGOS, NEWS } from "@/constants";
import CompanyMaps from "@/components/Maps";
import ContactInfo from "@/components/ContactInfo";
import { clamp, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import Modal from "@/components/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function AboutPage() {

  const [showAllGallery, setShowAllGallery] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  return (
    <main style={{ fontFamily: 'Montserrat, sans-serif' }}>

      {/* ================= PROFIL ================= */}
      <section style={{ padding: '5rem 10%', textAlign: 'center' }}>
        <Reveal>
          <h2 className="section-title">PT LAUTAN REJEKI</h2>
          <p className="section-desc">
            PT Lautan Rejeki merupakan distributor bahan bangunan yang mengfokuskan diri pada pipa bangunan berkualitas...
          </p>
        </Reveal>
      </section>

      {/* ================= GALLERY ================= */}
      <section style={{ padding: '3rem 10%', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <Reveal>
          <h2 className="section-title">Gallery Kami</h2>
          <p className="section-desc">
            Berikut adalah beberapa foto kegiatan dan proyek yang telah kami tangani, sebagai bukti komitmen kami dalam memberikan layanan terbaik.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {GALLERY.slice(0, 8).map((img, i) => (
            <Reveal key={i} delay={0.5 + i * 0.1}>
              <div className="gallery-img">
                <img src={img} alt={`gallery-${i}`} />
              </div>
            </Reveal>
          ))}
        </div>

        <motion.button
          onClick={() => setShowAllGallery(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: '1.5rem',
            padding: '12px 24px',
            border: '3px solid #E1E1E1',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            backgroundColor: 'transparent'
          }}
        >
          Lihat Semua
        </motion.button>
      </section>

      {/* MODAL GALLERY */}
      <Modal isOpen={showAllGallery} onClose={() => setShowAllGallery(false)} maxWidth="1000px">
        <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>
          Semua Dokumentasi
        </h3>

        <div
          className="gallery-modal-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem"
          }}
        >
          {GALLERY.map((img, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "1 / 1" }}>
              <Image src={img} alt={`gallery-${i}`} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </Modal>

      {/* ================= NEWS ================= */}
      <Reveal>
        <section style={{ padding: '4rem 10%', backgroundColor: '#f9f9f9', alignItems: 'center', textAlign: 'center', alignContent: 'center' }}>
          <h2 className="section-title" style={{ textAlign: 'center'}}>
            Berita & Kegiatan
          </h2>

          <p className="section-desc" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Ikuti perkembangan terbaru dari kegiatan dan proyek kami.
          </p>

          <div className="news-grid">
            {NEWS.slice(0, 6).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.2}>
                <div className="news-card" onClick={() => setSelectedNews(item)}>
                  <div className="news-image">
                    <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  </div>

                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

          <motion.button
            onClick={() => setShowAllNews(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              alignItems: 'center',
              marginTop: "2rem",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "2px solid #ddd",
              background: "transparent",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            Lihat Semua
          </motion.button>
        </section>
      </Reveal>

      {/* MODAL SEMUA NEWS */}
      <Modal isOpen={showAllNews} onClose={() => setShowAllNews(false)} maxWidth="1000px">
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Semua Berita
        </h3>

        <div className="news-grid">
          {NEWS.map((item) => (
            <div
              key={item.id}
              className="news-card"
              onClick={() => {
                setSelectedNews(item);
                setShowAllNews(false); // 🔥 UX FIX
              }}
            >
              <div className="news-image">
                <Image src={item.img} alt={item.title} fill style={{ objectFit: "cover" }} />
              </div>

              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* MODAL DETAIL NEWS */}
      <Modal isOpen={!!selectedNews} onClose={() => setSelectedNews(null)} maxWidth="800px">
        {selectedNews && (
          <>
            <div style={{ position: "relative", width: "100%", height: "250px", zIndex: 1 }}>
              <Image src={selectedNews.img} alt={selectedNews.title} fill style={{ objectFit: "cover" }} />
            </div>

            <div style={{ padding: "1.5rem" }}>
              <p style={{ fontSize: "clamp(12px, 2.5vw, 16px)", color: "#888" }}>
                {selectedNews.date}
              </p>

              <h2 style={{textAlign: 'justify', margin: "0.5rem 0", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 'bold', color: "#333" }}>
                {selectedNews.title}
              </h2>

              <p style={{textAlign: 'justify', lineHeight: "1.6", color: "#444", fontSize: "clamp(14px, 2.5vw, 20px)" }}>
                {selectedNews.desc}
              </p>
            </div>
          </>
        )}
      </Modal>

      {/* ================= REST ================= */}
      <VisiMisiSlider />

      <section className="values-section">
        <h2 className="section-title">Nilai Perusahaan Kami</h2>
        <div className="values-grid">
          <ValueCard icon={<Award size={40}/>} title="Kualitas" desc="Produk unggul dengan standar kualitas terbaik" />
          <ValueCard icon={<Handshake size={40}/>} title="Layanan Terbaik" desc="Pelayanan yang prima adalah pedoman kami" />
          <ValueCard icon={<Scale size={40}/>} title="Integritas" desc="Integritas hal penting dalam perusahaan kami" />
          <ValueCard icon={<Lightbulb size={40}/>} title="Inovatif" desc="Inovasi cerdas untuk konsumen dan produsen" />
          <ValueCard icon={<ShieldCheck size={40}/>} title="Keamanan" desc="Keamanan bagi seluruh hal yang berkaitan dengan kami" />
        </div>
      </section>

      <Reveal>
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
          <h2 className="section-title">Kerja sama kami</h2>
          <p className="section-desc" style={{ width: '60%', margin: '0 auto 2rem' }}>
            PT Lautan Rejeki menjalin kerja sama dengan berbagai mitra untuk mendistribusikan pipa konstruksi berkualitas, didukung oleh layanan profesional dan proses yang transparan.
          </p>
          <LogoSlider items={MITRA_LOGOS} />
        </section>
      </Reveal>


      <Reveal>
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
          <h2 className="section-title">Klien kami</h2>
          <LogoSlider items={KLIEN_LOGOS} />
        </section>
      </Reveal>

      <Reveal delay={0.5}>
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
          <h2 className="section-title">Referensi Proyek</h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1}
            style={{
              height: '300px',
              borderRadius: '12px',
              overflow: 'hidden',
              padding: '0 5%'
            }}
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                    overflow: 'hidden'
                  }}
                >

                  {/* 1. Background Image */}
                  <Image
                    src={banner.img}
                    alt={banner.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />

                  {/* 2. Gradient Overlay (INI YANG BIKIN BEDANYA!) */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                      zIndex: 1
                    }}
                  />

                  {/* 3. TEXT (POSISI & STYLE ASLI) */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '40px',
                      left: '40px',
                      color: 'white',
                      textAlign: 'left',
                      zIndex: 2,
                      maxWidth: '80%'
                    }}
                  >
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
      </Reveal>

      <CompanyMaps />

    </main>
  );
}

function ValueCard({ icon, title, desc }: any) {
  return (
    <motion.div className="value-card">
      <div className="value-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

const banners = [
    { id: 1, img: '/images/proyek/citra.png', title: 'Citra Garden', desc: 'Serpong' },
    { id: 2, img: '/images/proyek/idc.png', title: 'Iris Data Center', desc: 'Cikarang' },
    { id: 3, img: '/images/proyek/jpo.png', title: 'Jakarta Premium Outlet', desc: 'Alam Sutera' },
    { id: 4, img: '/images/proyek/summa.png', title: 'Summarecon', desc: 'Bogor' },
];
