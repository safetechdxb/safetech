"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients"; 
import SubTitle from "../common/SubTitle";
// import { accreditations } from "./data";
import Image from "next/image";
import { About } from "@/public/types/about";
const AccrSec = ({data}:{data:About}) => {
  console.log(data)
  return ( 
    <section className="py-140 bg-light-gray">
      <div className="container">
        <div className="relative mb-10 lg:mb-15">
          <SubTitle titleText="Accreditations" color="text-secondary" />
        </div>
        <div className="flex flex-wrap gap-4 lg:gap-8 justify-between w-full">
          {data.accreditations.map((item,index)=>(
            <motion.div variants={moveUp(index * 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} key={index} className="group">
              <Image src={item.logo} alt={item.logoAlt} width={200} height={200} className="w-[100px] lg:w-[106px] lg:h-[104px] object-contain grayscale-100 group-hover:grayscale-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default AccrSec;