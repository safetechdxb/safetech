"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { GrcFactory } from "@/types/GrcFactory";
import Image from "next/image";

const Main = ({data}: {data: GrcFactory}) => {
  return (
    <section className="py-140 bg-off-white">
      <div className="container">
        <div className="flex flex-wrap xl:flex-nowrap gap-y-13 md:gap-y-18 lg:gap-10 2xl:gap-y-0 2xl:gap-x-20 items-center">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-3/6 ">
            <div className="relative">
              <Image src={data.firstSection.image} alt={data.firstSection.imageAlt} width={400} height={400} className="w-full h-[300px] lg:h-full 2xl:h-full object-cover"></Image>
              <div className="absolute bottom-[-40px] left-0">
                <div className="lg:w-10 lg:h-20 h-16 w-8 bg-white relative z-20 group">
                  <div className="lg:w-10 lg:h-10 h-8 w-8 bg-black absolute bottom-0 left-0 "></div>
                  <div className="lg:w-10 lg:h-10 h-8 w-8 bg-primary absolute bottom-0 left-0 group-hover:bottom-[50%] transition-all duration-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-4/6 ">
            
            <h2 className="text-32 font-semibold text-primary lg:mb-6 mb-3 lg:leading-[1.5] leading-[1.2] ">{data.firstSection.firstTitle} <br/><span className="text-black"> {data.firstSection.secondTitle}</span> </h2>
            {data.firstSection.description.split('\n').map((line, idx) => (
              <p key={idx} className="text-20 leading-[1.5] font-normal text-secondary/75 text-body-color mb-5 last:mb-0">
                {line}
              </p>
            ))}
            {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5">{data.firstSection.description}</p> */}
            {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-0">{data.firstSection.description2}</p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Main;