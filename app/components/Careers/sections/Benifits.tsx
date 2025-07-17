"use client";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";

import Image from "next/image";
import SubTitle from "../../common/SubTitle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { careers } from "@/public/types/careers";


const Benifits  = ({data}:{data:careers}) => {
  

  return (
    <section className="py-140 bg-secondary overflow-hidden relative">
      <div className="container">
        <div className="relative tracking-[3px]   mb-3 lg:mb-[30px]">
          <SubTitle titleText={data.secondSection.title} color="text-white" />
        </div>
        <div className="mb-6 lg:mb-[60px]">
          <p className="text-white text-20 font-normal leading-[1.6] opacity-90 max-w-[60ch]">
            {data.secondSection.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.secondSection.items.map((item,index) => (
            <motion.div key={index} variants={moveUp(index * 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}  
            className="px-5 py-5 lg:pl-6 lg:pr-3 lg:py-12 bg-white hover:bg-primary group transition-all duration-500 justify-center" >
              <div className="mb-5 pb-5 2xl:mb-10 lg:pb-10 border-b border-[#F5F5F5] group-hover:border-white transition-all duration-500">
                <div className="w-10 h-10 p-2 2xl:p-0 md:w-[45px] md:-[45px] lg:w-12 lg:h-12 lg:p-2 2xl:w-[80px] 2xl:h-[80px] bg-primary group-hover:bg-white relative flex items-center justify-center transition-all duration-500">
                  <Image src={item.logo} alt={item.logoAlt} width={50} height={50} className="brightness-[0] invert-[1] group-hover:brightness-[1] group-hover:invert-[0]" />
                </div>
              </div>
              <h3 className="text-20 font-semibold text-[#101010] group-hover:text-white mb-2 2xl:mb-5 transition-all duration-500">
                {item.title}
              </h3>
              <p className="text-20 font-normal text-secondary leading-[1.6] group-hover:text-white transition-all duration-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benifits;
