'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {

  const banners = [
    { id: 1, color: '#ff0000', img: '/images/banner/standard.png' },
    { id: 2, color: '#00ff00', img: '/images/banner/green.png' },
    { id: 3, color: '#344A84', img: '/images/banner/hdpe_rucika.png'},
    { id: 4, color: '#4d4d4d', img: '/images/banner/hdpe.png' },
    { id: 5, color: '#1a4a8e', img: '/images/banner/extrana.png' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="hero-slider"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id} style={{ backgroundColor: banner.color }}>
          <div className="hero-slide">
            <div className="hero-copy">
              <span className="eyebrow">Distributor pipa dan kabel</span>
              <h1>Solusi material proyek yang siap mendukung kebutuhan lapangan</h1>
              <p>Produk terpercaya dari Rucika, Shuanglin, dan Extrana dengan layanan konsultasi yang responsif.</p>
              <div className="hero-actions">
                <Link href="/Product" className="btn-primary">Lihat Produk</Link>
                <Link href="/Contact" className="btn-secondary">Konsultasi</Link>
              </div>
            </div>
            <div className="hero-image-wrap">
              <Image src={banner.img} alt="Banner produk PT Lautan Rejeki" width={720} height={360} priority={banner.id === 1} className="hero-image" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
