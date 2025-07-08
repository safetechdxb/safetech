"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients"; 
import SubTitle from "../common/SubTitle";
// import { accreditations } from "./data";
import Image from "next/image";
import { About } from "@/public/types/about";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const AccrSec = ({data}:{data:About}) => {
  console.log(data)
  return ( 
    <section className="py-140 bg-light-gray">
      <div className="container">
        <div className="relative mb-10 lg:mb-15">
          <SubTitle titleText="Accreditations" color="text-secondary" />
        </div>
        <div className="hidden lg:flex gap-4 lg:gap-8 justify-between w-full">
          {data.accreditations.map((item,index)=>(
            <motion.div variants={moveUp(index * 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index} className="group">
              <Image src={item.logo} alt={item.logoAlt} width={200} height={100} className="w-[100px] lg:w-[106px] lg:h-[104px] object-contain grayscale-100 group-hover:grayscale-0" />
            </motion.div>
          ))}
        </div>
        <div className="lg:hidden block">
          <Swiper className="w-full" slidesPerView={3} spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

           breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}>
            {
              data.accreditations.map((item,index)=>(
                <SwiperSlide key={index}>
                  <Image src={item.logo} alt={item.logoAlt} width={200} height={100} className="w-20 h-20 lg:w-[106px] lg:h-[104px] object-contain grayscale-100 group-hover:grayscale-0" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
   );
}
 
export default AccrSec;