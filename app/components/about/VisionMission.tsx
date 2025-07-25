"use client"
import {motion} from "framer-motion";
import { fadeIn } from "../motionVarients";
// import { visionMission } from "./data";
import Image from "next/image";
import { About } from "@/public/types/about";
const VisionMission = ({data}:{data:About}) => {
  return (
    <section className="vision-mission bg-exlight-gray py-140">
      <div className="container">
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 ">
              <motion.div variants={fadeIn(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="hover:bg-secondary group transition-all duration-500 ">
            <div className="flex flex-col gap-6 lg:gap-10 border-b lg:border-b-0 lg:border-r border-primary group-last:border-0 py-5 lg:py-10 lg:my-25 px-5 lg:px-15 ">
                  <div className="bg-primary rounded-full flex items-center justify-center w-[60px] h-[60px] lg:w-[110px] lg:h-[110px] p-3">
                    <Image src={data.secondSection.vision.logo} alt="" width={400} height={400} className="w-15 h-15 lg:w-full lg:h-full" />
                  </div>
                  <div className="">
                    <h2 className="text-32 leading-[1] font-semibold text-black uppercase mb-5 group-hover:text-white">Our Vision</h2>
                    <p className="text-20 leading-[1.3] font-normal text-secondary group-hover:text-white">{data.secondSection.vision.description}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn(0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="hover:bg-secondary group transition-all duration-500 ">
                <div className="flex flex-col gap-6 lg:gap-10 py-5 lg:py-10 lg:my-25 border-b lg:border-b-0 lg:border-r border-primary group-last:border-0 px-5 lg:px-15 ">
                  <div className="bg-primary rounded-full flex items-center justify-center w-[60px] h-[60px] lg:w-[110px] lg:h-[110px] p-3">
                <Image src={data.secondSection.mission.logo} alt={data.secondSection.mission.logoAlt} width={400} height={400} className="w-15 h-15 lg:w-full lg:h-full" />
                  </div>
                  <div className="">
                    <h2 className="text-32 leading-[1] font-semibold text-black uppercase mb-5 group-hover:text-white">Our Mission</h2>
                    <p className="text-20 leading-[1.3] font-normal text-secondary group-hover:text-white">{data.secondSection.mission.description}</p>
                  </div>
                </div>
              </motion.div>        
        </div>
      </div>
    </section>
  );
}

export default VisionMission;