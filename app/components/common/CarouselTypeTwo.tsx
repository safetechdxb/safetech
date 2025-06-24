"use client";
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import "swiper/css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SubTitle from "../common/SubTitle";
import { NavigationOptions } from 'swiper/types';



import { useParams } from 'next/navigation';
import CarouselTypeTwoItem from './CarouselTypeTwoItem';
import { StaticImageData } from 'next/image';
interface CarouselTypeTwoProps {
  title: string;
  items: {
    title: string;
    image: string | StaticImageData;
    imageAlt: string;
    description: string;
  }[];
}

// Add more products as needed
const CarouselTypeTwo = ({ title, items }: CarouselTypeTwoProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const { elements } = useParams()

  console.log(elements)

  return (
    <div className="container overflow-visible">
      <div className="flex flex-wrap align-center justify-between gap-y-4 lg:gap-0 mb-4 md:mb-8 2xl:mb-20">
        <div className="relative">
          <SubTitle titleText={title} color="text-secondary" />
        </div>
        {/* Custom Nav Buttons */}
        <div className="flex" >
          <button ref={prevRef} className="text-secondary cursor-pointer font-bold border-2 border-secondary first:border-r-0 px-8 py-4 h-fit group hover:bg-secondary hover:text-white transition">
            <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.991 5.75C21.4052 5.75 21.741 6.08579 21.741 6.5C21.741 6.91421 21.4052 7.25 20.991 7.25V5.75ZM0.413664 7.03033C0.120771 6.73744 0.120771 6.26256 0.413664 5.96967L5.18664 1.1967C5.47953 0.903806 5.9544 0.903806 6.2473 1.1967C6.54019 1.48959 6.54019 1.96447 6.2473 2.25736L2.00465 6.5L6.2473 10.7426C6.54019 11.0355 6.54019 11.5104 6.2473 11.8033C5.9544 12.0962 5.47953 12.0962 5.18664 11.8033L0.413664 7.03033ZM20.991 7.25H0.943995V5.75H20.991V7.25Z" fill="#1E1E1E" className='group-hover:fill-white' />
            </svg>
          </button>
          <button ref={nextRef} className="text-secondary cursor-pointer font-bold border-2 border-secondary first:border-r-0 px-8 py-4 h-fit group hover:bg-secondary hover:text-white transition">
            <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.29907 5.75C0.884859 5.75 0.549072 6.08579 0.549072 6.5C0.549072 6.91421 0.884859 7.25 1.29907 7.25V5.75ZM21.8764 7.03033C22.1693 6.73744 22.1693 6.26256 21.8764 5.96967L17.1034 1.1967C16.8105 0.903806 16.3356 0.903806 16.0427 1.1967C15.7499 1.48959 15.7499 1.96447 16.0427 2.25736L20.2854 6.5L16.0427 10.7426C15.7499 11.0355 15.7499 11.5104 16.0427 11.8033C16.3356 12.0962 16.8105 12.0962 17.1034 11.8033L21.8764 7.03033ZM1.29907 7.25H21.346V5.75H1.29907V7.25Z" fill="#1E1E1E" className='group-hover:fill-white' />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Swiper className={`!overflow-visible type-two-carousel ${isHovering ? 'is-hovering' : ''}`}
          // install Swiper modules
          modules={[Navigation, A11y]}
          loop={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          // centeredSlides={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: "auto",
            },
          }}
        >
          {
            items.map((slide, index) => {
                const isActive = index === activeIndex;
              return <SwiperSlide key={index} className={` transition-all duration-700 ease-in-out ${index === activeIndex ? 'w-[300px] min-w-[300px]' : 'w-[250px] min-w-[250px]'} `}
                onMouseEnter={() => {
                  if (index !== activeIndex) setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
                <CarouselTypeTwoItem image={slide.image} imageAlt={slide.imageAlt} title={slide.title} description={slide.description} isActive={index === activeIndex}
                 hideDesc={isActive && isHovering} />
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )



}

export default CarouselTypeTwo;