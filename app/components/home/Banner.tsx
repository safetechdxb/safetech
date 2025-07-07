"use client";
import { motion } from 'framer-motion';
import {letterContainer, letterItemTop, moveUp } from '../motionVarients';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { home } from "@/public/types/home";


const HeroSlider = ({data}:{data:home}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(data)
  return (
    <section className="relative w-full h-[100dvh] lg:h-[100vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        spaceBetween={0}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {data.banners.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full ">
              <Image src={slide.image} alt={slide.title} width={1500} height={1000} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-secondary/75"/>
              <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-20 sm:pb-25 2xl:pb-36 gap-8 text-white">
                <motion.h1 className="text-[2.5rem] lg:text-96 font-bold leading-[1.15] uppercase" variants={letterContainer}
                  initial="hidden"
                  animate="show">
                  {/* {slide.title} */}
                  {slide.title.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={letterItemTop}
      className="inline-block mr-3 whitespace-pre"
    >
      {word}
    </motion.span>
  ))}
                  </motion.h1>
                <motion.p variants={moveUp(0.2)} initial="hidden" animate="show" className="max-w-xl text-sm md:text-22 text-gray-200 border-l-4 border-red-600 pl-4 lg:pl-8 leading-[1.3]"> {slide.description} </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 

      {/* Custom Pagination */}
      {data.banners.length > 1 && (

      <div className="absolute bottom-[5%] lg:bottom-[10%] z-20 w-full">
        <div className="container">
          <div className="flex gap-3 justify-end">
            {data.banners.map((_, index) => (
              <button key={index} className={`w-[50px] h-[2px] rounded-full transition-all duration-300 ${activeIndex === index ? "bg-white scale-125" : "bg-white/50" }`}
                onClick={() => swiperRef.current?.slideToLoop(index)} />
            ))}
          </div>
        </div>
      </div>
      )}

    </section>
  );
};

export default HeroSlider;
