"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { mainDesc } from "./data";
import Image from "next/image";
const Main = () => {
  return (
    <section className="py-140">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap gap-20 items-center">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-1/2 ">
            <div className="relative">
              <Image src={mainDesc.mainImg} alt="Our Company" width={400} height={400} className="w-full"></Image>
              <div className="absolute bottom-[-40px] left-0">
                <div className="w-10 h-20 bg-white relative z-20 group">
                  <div className="w-10 h-10 bg-black absolute bottom-0 left-0 "></div>
                  <div className="w-10 h-10 bg-primary absolute bottom-0 left-0 group-hover:bottom-[50%] transition-all duration-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-1/2 ">
            
            <h2 className="text-32 font-semibold text-primary leading-[1.5] ">{mainDesc.title}</h2>
            <h3 className="text-32 font-semibold mb-6 leading-[1.5] ">{mainDesc.subTitle}</h3>
            <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5">{mainDesc.desc}</p>
            <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-0">{mainDesc.desc2}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Main;