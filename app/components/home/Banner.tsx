"use client";
import { motion } from 'framer-motion';
import {letterContainer, letterItemTop, moveUp } from '../motionVarients';
import React from "react";
import Image from "next/image";
import { home } from "@/public/types/home";


const HeroSlider = ({data}:{data:home}) => {
  console.log(data)
  return (
    <section className="relative w-full h-[100dvh] lg:h-[100vh] overflow-hidden">
      
          
            <div className="relative w-full h-full ">
              {/* <Image src={slide.image} alt={slide.title} width={1500} height={1000} className="absolute inset-0 w-full h-full object-cover" /> */}
              {data.bannerStyle === "video" ? <video
                    src={'/assets/videos/Safetech V3 1.mp4'}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    autoPlay
                    muted
                    playsInline
                  /> :
                  <Image
                    src={data.bannerImage}
                    alt={data.bannerImageAlt}
                    width={1500}
                    height={1000}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  }
              <div className="absolute inset-0 bg-secondary/75"/>
              <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-20 sm:pb-25 2xl:pb-36 gap-8 text-white">
                <motion.h1 className="text-[2.5rem] lg:text-96 font-bold leading-[1.15] uppercase" variants={letterContainer}
                  initial="hidden"
                  animate="show">
                  {/* {slide.title} */}
                  {data.bannerTitle.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={letterItemTop}
      className="inline-block mr-3 whitespace-pre"
    >
      {word}
    </motion.span>
  ))}
                  </motion.h1>
                <motion.p variants={moveUp(0.2)} initial="hidden" animate="show" className="max-w-xl text-sm md:text-22 text-gray-200 border-l-4 border-red-600 pl-4 lg:pl-8 leading-[1.3]"> {data.bannerDescription} </motion.p>
              </div>
            </div>
          
      

      {/* Custom Pagination */}
      {/* {data.banners.length > 1 && (

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
      )} */}

    </section>
  );
};

export default HeroSlider;
