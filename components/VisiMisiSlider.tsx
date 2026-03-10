"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function VisiMisiSlider() {
  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '5rem 10%', position: 'relative' }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next-btn",
          prevEl: ".custom-prev-btn",
        }}
        autoplay={{ delay: 5000 }}
        style={{ width: '100%' }}
      >
        {/* --- SLIDE 1: VISI --- */}
        <SwiperSlide>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <Image 
                src="/images/visi_misi.png" 
                alt="Visi PT Lautan Rejeki" 
                width={500} 
                height={400} 
                style={{ borderRadius: '20px', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ flex: '1.2', minWidth: '300px' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>Visi</h2>
              <ul style={{ paddingLeft: '1.2rem', color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                    Menjadi perusahaan terpandang dan sukses di bidang distribusi bahan bangunan di Indonesia dengan menyediakan produk berkualitas tinggi, inovatif, serta memberikan pelayanan terbaik untuk mendukung pembangunan Indonesia.
                </p>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        {/* --- SLIDE 2: MISI --- */}
        <SwiperSlide>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <Image 
                src="/images/visi_misi.png" 
                alt="Misi PT Lautan Rejeki" 
                width={500} 
                height={400} 
                style={{ borderRadius: '20px', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ flex: '1.2', minWidth: '300px' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>Misi</h2>
              <ul style={{ paddingLeft: '1.2rem', color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '10px' }}>Mengembangkan jaringan distribusi yang terintegrasi dan efisien, meningkatkan produktivitas tenaga kerja dan mendukung pertumbuhan ekonomi nasional.</li>
                <li style={{ marginBottom: '10px' }}>Memberikan pelayanan terbaik kepada pelanggan dengan menjaga kepercayaan dan kenyamanan.</li>
                <li>Menyediakan produk yang bermutu, berinovasi dan berkelanjutan, dengan tetap mengutamakan kualitas.</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* --- CUSTOM NAVIGATION BUTTONS (Sesuai About.jpg) --- */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginTop: '1rem', 
        justifyContent: 'flex-start',
        paddingLeft: 'calc(45% + 3rem)' // Menyejajarkan tombol di bawah teks
      }}>
        <button className="custom-prev-btn" style={navButtonStyle}>
          <ChevronLeft size={24} />
        </button>
        <button className="custom-next-btn" style={navButtonStyle}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

const navButtonStyle = {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  border: '2px solid #333',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};