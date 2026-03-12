// components/LogoSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

interface LogoItem {
  id: number;
  img: string;
  alt: string;
}

export default function LogoSlider({ items }: { items: LogoItem[] }) {
  return (
    <div style={{ padding: '0 5%' }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        // style={{ padding: '20px 40px' }}
      >
        {items.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div style={{ 
              backgroundColor: 'white', height: '200px', display: 'flex', 
              justifyContent: 'center', alignItems: 'center', borderRadius: '8px',
              border: '1px solid #f0f0f0', padding: '20px'
            }}>
              <Image src={logo.img} alt={logo.alt} width={180} height={80} style={{ objectFit: 'contain' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}