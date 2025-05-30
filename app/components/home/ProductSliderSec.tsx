"use client";
import { useRef } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
// import { Navigation, A11y } from 'swiper/modules';
import "swiper/css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SubTitle from "../common/SubTitle";
// import ProductSliderItem from "./ProductSliderItem";
import ProductSlider from '../common/ProductSlider';
// import { NavigationOptions } from 'swiper/types';
// import { products } from './data';
import {motion} from "framer-motion"
import { moveLeft } from '../motionVarients';
import { home } from '@/public/types/home';
// Add more products as needed
const ProductSliderSec = ({data}:{data:home}) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <section className="py-140 bg-off-white overflow-hidden">
      <div className="container overflow-visible">
          <ProductSlider data={data} />
          {/* <Swiper className="!overflow-visible"
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={false}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => {
              // Link refs after initialization
              setTimeout(() => {
                if (prevRef.current && nextRef.current && swiper?.params?.navigation) {
                  if (prevRef.current && nextRef.current) {
                    (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                    (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                  }
                  swiper.navigation.destroy()
                  swiper.navigation.init()
                  swiper.navigation.update()
                }
              }, 100)
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.7,
                spaceBetween: 32,
              },
            }}
          >
            {
              products.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <ProductSliderItem
                    prdId={slide.id}
                    prdImg={slide.prdImg}
                    prdName={slide.prdName}
                    prdDec={slide.prdDec}
                    prdLink={slide.prdLink}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper> */}
      </div>
    </section>
  );
}

export default ProductSliderSec;