import React from 'react';
import './textohome.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCreative } from 'swiper/modules';

export default function TextoHome() {
  return (
    <div className="texto">
      <div className="textoCentral">
        <Swiper
        loop={true}
        
        effect='creative'
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Autoplay,Pagination, EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide className="imgCarrousell1">
            <div className='textoReferencial'>
            <h1>MEJOR CALIDAD DE IMAGEN CINERAMA</h1>
            <h3>Disfruta de la magia del cine</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="imgCarrousell2">
          <div className='textoReferencial'>
            <h1>MEJOR CALIDAD DE IMAGEN CINERAMA</h1>
            <h3>Disfruta de la magia del cine</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="imgCarrousell3">
          <div className='textoReferencial'>
            <h1>MEJOR CALIDAD DE IMAGEN CINERAMA</h1>
            <h3>Disfruta de la magia del cine</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="imgCarrousell4">
          <div className='textoReferencial'>
            <h1>MEJOR CALIDAD DE IMAGEN CINERAMA</h1>
            <h3>Disfruta de la magia del cine</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
