"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients";
import SubTitle from "../common/SubTitle";
import {assets} from "@/public/assets/assets";
import Image from "next/image";
import { About } from "@/public/types/about";
const Achievements = ({data}:{data:About}) => {
  return ( 
    <section className="py-140 relative ">
      <Image src={assets.AchievementsBg} alt="Achievements" className="absolute inset-0 w-full h-full object-cover -z-10" />
      <div className="bg-black/65 absolute inset-0 w-full h-full -z-10"></div>
      <div className="container">
        <div className="relative mb-10">
          <SubTitle titleText={data.thirdSection.title} color="text-white" />
        </div>
          <p className="text-20 font-normal leading-[1.3] text-white max-w-6xl">{data.thirdSection.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
           {
            data.thirdSection.items.map((item,index)=>(
              <motion.div variants={moveUp(index * 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index} className="bg-primary p-8 flex flex-col gap-[86px]">
                <div className="flex justify-between items-center">
                  <h3 className="text-64 font-bold leading-[1] text-white">{item.number}</h3>
                  <Image src={item.logo} alt={item.logoAlt} width={50} height={50} className="w-auto h-[50px] object-contain" />
                </div>
                <h4 className="text-20 font-semibold text-white">{item.value}</h4>
              </motion.div>
            ))
           }
          </div>
      </div>
    </section>
   );
}
 
export default Achievements;