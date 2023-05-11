import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import { Box, Image } from '@chakra-ui/react';
import img_1 from "../assets/img_1.png";

const Home = () => {
  return (
    <Box mt={'-70px'}>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 1000 }}
    >

      <SwiperSlide >
        <Image src={img_1}/>
      </SwiperSlide>
      <SwiperSlide >
        <Image src={img_1} />
      </SwiperSlide>
      <SwiperSlide >
        <Image src={img_1} />
      </SwiperSlide>
      <SwiperSlide >
        <Image src={img_1} />
      </SwiperSlide>
      <SwiperSlide >
        <Image src={img_1} />
      </SwiperSlide>
    </Swiper>
    </Box>
  )
}

export default Home