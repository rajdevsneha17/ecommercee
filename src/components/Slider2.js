import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.avif"
import img3 from "../assets/img3.avif"
import img4 from "../assets/img4.avif"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider2 () {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}></img></SwiperSlide>
        <SwiperSlide><img src={img2}></img></SwiperSlide>
        <SwiperSlide><img src={img3}></img></SwiperSlide>
        <SwiperSlide><img src={img1}></img></SwiperSlide>
        <SwiperSlide><img src={img4}></img></SwiperSlide>
        <SwiperSlide><img src={img1}></img></SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
