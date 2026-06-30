'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface LogoItem {
  id: number;
  img: string;
  alt: string;
}

export default function LogoSlider({ items }: { items: LogoItem[] }) {
  const swiperKey = items.map(i => i.id).join('-');
  if (!items || items.length === 0) return null;

  return (
    <div className="logo-slider-wrap">
      <Swiper
        key={swiperKey} // Reset Swiper saat items berubah
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // Fix untuk navigasi balik
        observer={true}
        observeParents={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className="logo-card">
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image 
                  src={logo.img} 
                  alt={logo.alt} 
                  fill // Gunakan fill agar lebih stabil di dalam container
                  style={{ objectFit: 'contain' }} 
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
