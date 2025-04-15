"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { Swiper as SwiperClass } from "swiper";

const slides = [
  {
    image: assets.banner01,
    title: "BUILT FOR THE FUTURE",
    description:
      "Safe Tech, a subsidiary of UNEC, delivers innovative construction solutions with advanced precast, prestress, and GRC products, tailored to meet diverse project needs.",
  },
  {
    image: assets.banner01,
    title: "ENGINEERED FOR EXCELLENCE",
    description:
      "We bring expertise and precision in every piece of construction technology we create.",
  },
];

const HeroSlider = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                width={1500}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-md text-sm md:text-base text-gray-200 border-l-4 border-red-600 pl-4">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-6  z-20 w-full">
      <div className="container">
        <div className=" flex gap-3 justify-end">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => swiperRef.current?.slideToLoop(index)}
          />
        ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
