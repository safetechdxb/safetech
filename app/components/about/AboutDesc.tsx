"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients";
import SubTitle from "../common/SubTitle";
// import { aboutMainDesc } from "./data";
import Image from "next/image";
import { About } from "@/public/types/about";
const AboutDesc = ({data}:{data:About}) => {
  return ( 
    <section className="py-140 bg-light-gray">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap gap-y-20 items-stretch">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="w-full lg:w-1/2 pr-0 sm:pr-15 xl:pr-[134px]">
            <div className="relative h-full">
              <Image src={data.firstSection.image} alt="Our Company" width={400} height={400} className="w-full h-full object-cover"></Image>
              <div className="absolute bottom-[-40px] left-0">
                <div className="w-10 h-20 bg-white relative z-20 group">
                  <div className="w-10 h-10 bg-black absolute top-0 left-0 "></div>
                  <div className="w-10 h-10 bg-primary absolute top-0 left-0 group-hover:top-[50%] transition-all duration-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="w-full lg:w-1/2 ">
            <div className="relative mb-5 lg:mb-10">
              <SubTitle titleText={data.firstSection.mainTitle} color="text-secondary" />
            </div>
              <h2 className="text-32 font-semibold text-primary mb-6 leading-[1.5] ">{data.firstSection.firstTitle} <br/><span className="text-black">{data.firstSection.secondTitle}</span> </h2>
              {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5">{data.firstSection.description}</p> */}
              {/* <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-0">{aboutMainDesc.desc2}</p> */}
            {data.firstSection.description.split('\n').map((line, idx) => (
              <p key={idx} className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5 last:mb-0">
                {line}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
   );
}
 
export default AboutDesc;