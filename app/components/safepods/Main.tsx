"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import Image from "next/image";
import { safePodsData } from "./data";

const Main = () => {
  return (
    <section className="py-140 bg-off-white">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap gap-15 items-center">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-3/6 ">
            <div className="relative">
              <Image src={safePodsData.firstSection.image} alt="Our Company" width={400} height={400} className="w-full h-[250px] md:h-[350px] 2xl:h-full object-cover"></Image>
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
            {safePodsData.firstSection.description.split('\n').map((line, idx) => (
              <p key={idx} className="text-20 leading-[1.5] font-normal text-secondary/75 text-body-color mb-5 last:mb-0">
                {/* {line} */}
                SAFETECH has introduced its advanced SafePods production line to meet the rising demand for high-quality, ready-to-install modular units. Designed and assembled in a controlled factory environment, these pods integrate precast concrete bases, precision steel structures, and fully fitted MEP systems, ensuring unmatched consistency and performance. Whether for bathrooms, kitchens, or multi-use spaces, every SafePod is built with strict adherence to project specifications, incorporating acoustic, fire-resistant, and waterproofing standards. This innovation enhances construction speed, quality control, and overall project efficiency while minimizing on-site labor and waste.
                
                With SafePods, SAFETECH sets a new standard in modular building—fast, reliable, and future-ready units designed for seamless installation and superior performance.
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