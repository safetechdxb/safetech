"use client"
import { motion } from 'framer-motion';
import { moveUp } from '../motionVarients';
import React, { useEffect, useRef, useState } from 'react'
import SubTitle from '../common/SubTitle'
import { PrecastConcreteElement } from '@/types/PrecastConcreteElement'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

export default function WallPanelsSec({ data }: { data: PrecastConcreteElement }) {

  const [showAll, setShowAll] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);
  const [initialCount, setInitialCount] = useState(6);
  const [hasFinished, setHasFinished] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hasMore = data.secondSection.items.length > initialCount;
  const firstBoxRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef(null)
  const nextRef = useRef(null)


  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (hasToggled && !showAll && firstBoxRef.current) {
      firstBoxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAll, hasToggled]);

  const handleToggle = () => {
    if (hasFinished) {
      setShowAll(false);
      setInitialCount(6);
      setHasFinished(false);
    }
    else {
      setHasToggled(true); // only set after user action
      setInitialCount(prev => prev + 6);
    }
  };

  useEffect(() => {
    console.log(initialCount);
    if (initialCount >= data.secondSection.items.length) {
      console.log("finished");
      setHasFinished(true);
    }
  }, [initialCount]);

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    // Initial check on mount
    checkIsMobile();
  
    // Listen for resize
    window.addEventListener("resize", checkIsMobile);
  
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  console.log("hadmore",hasMore,hasFinished);


  return (
    <section className='py-140 bg-off-white'>
      {!isMobile ? (<div className="container">
        <div className="mb-5 lg:mb-10">
          <div className="relative mb-10">
            <SubTitle titleText={data.secondSection.title} color="text-secondary" />
          </div>
          <p className="max-w-5xl text-20 leading-[1.5] font-normal text-secondary/75">{data.secondSection.description}</p>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10`}>
          {
            data.secondSection.items.map((panel, index) => {
              const isVisible = showAll || index < initialCount;
              return (
                <motion.div variants={moveUp(index * 0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index} ref={index === 0 ? firstBoxRef : null}
                  className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "hidden"
                    }`}>
                  <div className='border-b border-secondary/45 pb-8 mb-8'>
                    <div className='bg-primary w-fit p-5 text-white'>
                      <h4 className='text-30 font-semibold leading-[1.3333]'>{(index + 1).toString().padStart(2, '0')}</h4>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-20 font-semibold leading-[1.3] mb-5'>{panel.title}</h3>
                    <p className='text-20 text-secondary/75 leading-[1.5] font-normal'>{panel.description}</p>
                  </div>
                </motion.div>
              )
            })
          }
        </div>

        {( hasMore || data.secondSection.items.length > 6) && (

          (hasFinished) ? (
          <div className="text-center flex justify-center mt-20">
            <motion.button
              onClick={handleToggle}
              className="flex bg-primary text-white hover:bg-opacity-80 transition h-[50px] overflow-hidden group" >
              <span className="px-4 py-2 uppercase font-normal text-16 leading-normal border-r border-r-primary group-hover:border-white/20 flex items-center justify-center">
                Show Less
              </span>
              <div className="flex flex-col relative overflow-hidden">
                <div className={`bg-white w-[50px] h-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 
                  ${showAll || hasFinished ? "group-hover:translate-y-[-50px]" : "group-hover:translate-y-[50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll || hasFinished ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" stroke="black" /> <path d="M12 2V22" stroke="black" />
                  </svg>
                </div>
                <div className={`bg-primary w-[50px] h-[50px] absolute  left-0 z-20 text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 group-hover:top-0 ${showAll || hasFinished ? "top-[50px]" : "top-[-50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll || hasFinished ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" stroke="white" /> <path d="M12 2V22" stroke="white" />
                  </svg>
                </div>
              </div>
            </motion.button>
          </div>
          ) : (

            <div className="text-center flex justify-center mt-20">
            <motion.button
              onClick={handleToggle}
              className="flex bg-primary text-white hover:bg-opacity-80 transition h-[50px] overflow-hidden group" >
              <span className="px-4 py-2 uppercase font-normal text-16 leading-normal border-r border-r-primary group-hover:border-white/20 flex items-center justify-center">
                Show More
              </span>
              <div className="flex flex-col relative overflow-hidden">
                <div className={`bg-white w-[50px] h-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 
                  ${showAll || hasFinished ? "group-hover:translate-y-[-50px]" : "group-hover:translate-y-[50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll || hasFinished ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" stroke="black" /> <path d="M12 2V22" stroke="black" />
                  </svg>
                </div>
                <div className={`bg-primary w-[50px] h-[50px] absolute  left-0 z-20 text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 group-hover:top-0 ${showAll || hasFinished ? "top-[50px]" : "top-[-50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll || hasFinished ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" stroke="white" /> <path d="M12 2V22" stroke="white" />
                  </svg>
                </div>
              </div>
            </motion.button>
          </div>

          )
        )}

      </div>) : (

        <div className="container overflow-hidden">
          <div className="flex flex-wrap align-center justify-between gap-y-4 lg:gap-0 mb-4 md:mb-10 2xl:mb-20">
            <div className="relative">
              <SubTitle titleText={data.secondSection.title} color="text-secondary" />
            </div>
            <p className="max-w-5xl text-20 leading-[1.5] font-normal text-secondary/75">{data.secondSection.description}</p>
            {/* Custom Nav Buttons */}
            {/* <motion.div className="flex" variants={moveLeft(0)} initial="hidden" animate="show" viewport={{ once: false, amount: 0.2 }} >
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
                  </motion.div> */}
          </div>
          <div>
            <Swiper className="!overflow-hidden"
              // install Swiper modules
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={false}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}
            >
              
              {
                data.secondSection.items.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div  key={index} ref={index === 0 ? firstBoxRef : null}
                  className={`transition-opacity duration-500 ease-in-out opacity-100`}>
                  <div className='border-b border-secondary/45 pb-8 mb-8'>
                    <div className='bg-primary w-fit p-5 text-white'>
                      <h4 className='text-30 font-semibold leading-[1.3333]'>{(index + 1).toString().padStart(2, '0')}</h4>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-20 font-semibold leading-[1.3] mb-5'>{slide.title}</h3>
                    <p className='text-20 text-secondary/75 leading-[1.5] font-normal'>{slide.description}</p>
                  </div>
                </div>
                  </SwiperSlide>
                ))
              }
              
            </Swiper>
          </div>
        </div>
      )}
    </section>
  )
}
