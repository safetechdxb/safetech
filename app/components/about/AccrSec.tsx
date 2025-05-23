"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients"; 
import SubTitle from "../common/SubTitle";
import { accreditations } from "./data";
import Image from "next/image";
const AccrSec = () => {
  return ( 
    <section className="py-140 bg-light-gray">
      <div className="container">
        <div className="relative mb-10 lg:mb-15">
          <SubTitle titleText="Accreditations" color="text-secondary" />
        </div>
        <div className="flex flex-wrap gap-4 lg:gap-8 justify-between w-full">
          {accreditations.map((item)=>(
            <motion.div variants={moveUp(item.id * 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} key={item.id}>
              <Image src={item.logo} alt={item.title} width={106} height={104} className="w-[100px] lg:w-[106px] lg:h-[104px] object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default AccrSec;