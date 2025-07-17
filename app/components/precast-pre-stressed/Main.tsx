"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { PrecastPrestressed } from "@/types/PrecastPrestressed"
import Image from "next/image";

const Main = ({data}: {data: PrecastPrestressed}) => {
  return (
    <section className="py-140 bg-light-gray">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap gap-13 md:gap-18 2xl:gap-20 items-center">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-1/2 ">
            <div className="relative">
              <Image src={data.firstSection.image} alt={data.firstSection.imageAlt} width={400} height={400} className="w-full h-[250px] lg:h-[350px] 2xl:h-full object-cover"></Image>
              <div className="absolute bottom-[-40px] left-0">
                <div className="lg:w-10 lg:h-20 h-16 w-8 bg-white relative z-20 group">
                  <div className="lg:w-10 lg:h-10 h-8 w-8 bg-black absolute bottom-0 left-0 "></div>
                  <div className="lg:w-10 lg:h-10 h-8 w-8 bg-primary absolute bottom-0 left-0 group-hover:bottom-[50%] transition-all duration-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-1/2 ">
            <h2 className="text-32 font-semibold text-primary lg:mb-6 mb-2 lg:leading-[1.5] leading-[1.2] ">{data.firstSection.firstTitle}</h2>
            <h3 className="text-32 font-semibold lg:mb-6 mb-4 lg:leading-[1.5] leading-[1.2] ">{data.firstSection.secondTitle}</h3>
            {/* <div className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5">
              {data.firstSection.description}
            </div> */}
            {data.firstSection.description.split('\n').map((line, idx) => (
              <p key={idx} className="text-20 leading-[1.5] font-normal text-secondary/75 text-body-color mb-5 last:mb-0">
                {line}
              </p>
            ))}
            {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5">{data.firstSection.desc}</p> */}
            {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-0">{data.firstSection.desc2}</p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Main;