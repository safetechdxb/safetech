"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import Image from "next/image";
import { SafePodsData } from "@/types/SafePods";

const Main = ({data}: {data:SafePodsData}) => {
  return (
    <section className="py-140 bg-off-white">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap gap-15 items-stretch">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-3/6 ">
            <div className="relative">
              <Image src={data.firstSection.image} alt="Our Company" width={400} height={400} className="w-full h-[250px] md:h-[350px] lg:h-full xl:h-full object-cover"></Image>
              <div className="absolute bottom-[-40px] left-0">
                <div className="w-10 h-20 bg-white relative z-20 group">
                  <div className="w-10 h-10 bg-black absolute bottom-0 left-0 "></div>
                  <div className="w-10 h-10 bg-primary absolute bottom-0 left-0 group-hover:bottom-[50%] transition-all duration-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-4/6 ">
            
            {/* <h2 className="text-32 font-semibold text-primary mb-6 leading-[1.5] ">{data.firstSection.firstTitle} <br/><span className="text-black"> {data.firstSection.secondTitle}</span> </h2> */}
            <h2 className="text-32 font-semibold text-primary mb-6 leading-[1.5] ">SAFETECH Unveils SafePods Modular Unit<br /><span className="text-black"> Facility to Transform Prefab Construction</span> </h2>
            {data.firstSection.description.split('\n').map((line, idx) => (
              <p key={idx} className="text-20 leading-[1.5] font-normal text-secondary/75 text-body-color mb-5 last:mb-0">
                {line}
             
              </p>
            ))}
            {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5">{data.firstSection.description}</p> */}
            {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-0">{mainDesc.desc2}</p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Main;