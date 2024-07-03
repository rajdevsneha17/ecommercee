import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.avif"
import img3 from "../assets/img3.avif"
import img4 from "../assets/img4.avif"

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
  return (
    <div className='w-12/12 h-full'>
    <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
        
      <SwiperSlide><img src={img1}  ></img></SwiperSlide>
      <SwiperSlide><img src={img2}></img></SwiperSlide>
      <SwiperSlide><img src={img3}></img></SwiperSlide>
      <SwiperSlide><img src={img4}></img></SwiperSlide>
      
    </Swiper>
    </div>
    
    </div>
      )
}

export default Slider
