"use client";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import "swiper/css";
import 'swiper/css/navigation';
import SubTitle from '../common/SubTitle'
import { NavigationOptions } from 'swiper/types';
import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'

export default function DiagramSlide({ data }: { data: PrecastPreStressedElement }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className='py-140 bg-light-gray'>
      <div className="container">
        <div className="flex justify-between flex-wrap gap-y-2 lg:gap-0 pb-8 lg:pb-0">
          <div className="relative mb-5 lg:mb-20">
            <SubTitle titleText={data.thirdSection.title} color='text-secondary' />
          </div>
          <div className="flex ">
            {/* Navigation buttons */}
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
          <Swiper
            modules={[Autoplay, Navigation, A11y]}
            autoplay={{ delay: 5000 }}
            speed={800}
            loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
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
            }}>
            {
              data.thirdSection.items.map((item,index) =>
              (
                <SwiperSlide key={item.title+index}>
                  <div className='bg-white p-5 lg:py-20'>
                    <div className="flex flex-wrap xl:flex-nowrap gap-10 2xl:gap-20 items-center">
                      <motion.div className='bg-exlight-gray p-32p flex flex-col gap-y-5 2xl:gap-y-0 h-full justify-between 2xl:min-h-[328px] lg:w-3/7'>
                        <Image src={item.image} alt={item.imageAlt} width={605} height={286}></Image>
                        <h3 className='text-secondary font-semibold text-20 leading-[1.6]'>{item.title}</h3>
                      </motion.div>
                      <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className='lg:w-4/7'>
                        <p className='text-20 text-secondary/75 leading-[1.6]'>{item.description}</p>
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}
