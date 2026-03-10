'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {

  const banners = [
    { id: 1, color: '#ff0000', img: '/images/standard.png' },
    { id: 2, color: '#00ff00', img: '/images/green.png' },
    { id: 3, color: '#4d4d4d', img: '/images/hdpe.png' },
    { id: 4, color: '#1a4a8e', img: '/images/extrana.png' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      style={{ height: '300px' }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id} style={{ backgroundColor: banner.color }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image src={banner.img} alt="Banner" width={600} height={300} style={{ objectFit: 'contain' }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}