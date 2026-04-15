"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css/pagination";

export default function VisiMisiSlider() {
  return (
    <section className="visi-misi-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          // Biarkan kosong agar Swiper mencari elemen .swiper-pagination di tiap slide
        }}
        autoplay={{ delay: 5000 }}
      >
        {/* --- SLIDE 1: VISI --- */}
        <SwiperSlide>
          <div className="slide-container">
            <div className="image-wrapper">
              <Image src="/images/visi_misi.png" alt="Visi" width={200} height={100} className="responsive-image" />
            </div>
            <div className="text-wrapper">
              <h2 className="section-title">Visi</h2>
              <p className="section-desc">
                Menjadi perusahaan terpandang dan sukses di bidang distribusi bahan bangunan di Indonesia dengan menyediakan produk berkualitas tinggi, inovatif, serta memberikan pelayanan terbaik untuk mendukung pembangunan Indonesia.
              </p>
              {/* Indikator Slide 1 */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- SLIDE 2: MISI --- */}
        <SwiperSlide>
          <div className="slide-container">
            <div className="image-wrapper">
              <Image src="/images/visi_misi.png" alt="Misi" width={500} height={400} className="responsive-image" />
            </div>
            <div className="text-wrapper">
              <h2 className="section-title">Misi</h2>
              <ul className="misi-list">
                <li>Mengembangkan jaringan distribusi yang terintegrated dan efisien, meningkatkan produktivitas tenaga kerja dan mendukung pertumbuhan ekonomi nasional.</li>
                <li>Memberikan pelayanan terbaik kepada pelanggan dengan menjaga kepercayaan dan kenyamanan.</li>
                <li>Menyediakan produk yang bermutu, berinovasi dan berkelanjutan, dengan tetap mengutamakan kualitas.</li>
              </ul>
              {/* Indikator Slide 2 (PASTI MUNCUL) */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}