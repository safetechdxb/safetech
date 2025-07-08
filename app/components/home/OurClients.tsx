"use client"
import {motion} from "framer-motion";
import { fadeIn } from "../motionVarients";
import SubTitle from '../common/SubTitle';
import Image from 'next/image';
import { home } from "@/public/types/home";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";  
const OurClients = ({data}:{data:home}) => {
  
  return ( 
    <section className='py-140'>
      <div className="container">
      <div className="relative mb-10 lg:mb-20">
          <SubTitle titleText={data.clients.title} color='text-secondary' />
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-center lg:justify-between gap-2 gap-y-6 md:gap-4 2xl:gap-6  items-center">
          {data.clients.items.slice(0,6).map((client,index) => (
            <motion.div variants={fadeIn(index * 0.1)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} key={index} className='flex justify-center items-center '>
              <Image src={client.image} alt={client.imageAlt} className='object-contain w-20 h-5 lg:w-30 lg:h-10 2xl:h-auto 2xl:w-auto grayscale-100 hover:grayscale-0' height={30} width={30} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center lg:justify-around gap-2 gap-y-6 md:gap-4 2xl:gap-6 items-center mt-15">
          {data.clients.items.slice(6, 11).map((client,index) => (
            <motion.div variants={fadeIn(index * 0.1)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} key={index} className='flex justify-center items-center '>
              <Image src={client.image} alt={client.imageAlt} className='object-contain w-20 h-5 lg:w-30 lg:h-10 2xl:h-auto 2xl:w-auto grayscale-100 hover:grayscale-0' height={30} width={30} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center lg:justify-between gap-2 gap-y-6 md:gap-4 2xl:gap-6 items-center mt-15">
          {data.clients.items.slice(11, 17).map((client,index) => (
            <motion.div variants={fadeIn(index * 0.1)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} key={index} className='flex justify-center items-center '>
              <Image src={client.image} alt={client.imageAlt} className='object-contain w-20 h-5 lg:w-30 lg:h-10 2xl:h-auto 2xl:w-auto grayscale-100 hover:grayscale-0' height={40} width={30} />
            </motion.div>
          ))}
        </div>
        </div>
        <div className="block lg:hidden"> 
          <Swiper
            className="w-full"
            slidesPerView={3}
            spaceBetween={10}
            modules={[Autoplay]}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
          >
            {data.clients.items.map((client, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={client.image}
                  alt={client.imageAlt}
                  className="object-contain w-20 h-5 lg:w-30 lg:h-10 2xl:h-auto 2xl:w-auto grayscale-100 hover:grayscale-0"
                  height={30}
                  width={30}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
   );
}
 
export default OurClients;