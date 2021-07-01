import React from 'react';
import {Swiper , SwiperSlide} from "swiper/swiper-react.cjs";
// Import Swiper styles
import 'swiper/swiper.scss';


const Slider = () => {
    return (
        <Swiper
            className="slider"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="slider-item">Slide 1</SwiperSlide>
            <SwiperSlide className="slider-item">Slide 2</SwiperSlide>
            <SwiperSlide className="slider-item">Slide 3</SwiperSlide>
            <SwiperSlide className="slider-item">Slide 4</SwiperSlide>
        </Swiper>
    );
}

export default Slider;