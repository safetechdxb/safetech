"use client"
import {motion} from "framer-motion"
import { moveUp } from "../motionVarients";
import SubTitle from "../common/SubTitle";
// import { parentalCompanies } from "./data"; 
import Image from "next/image";
import { About } from "@/public/types/about";
const ParentalCompaniesSec = ({data}:{data:About}) => {
  return ( 
    <section className="py-140 bg-secondary">
      <div className="container">
        <div className="mb-5 lg:mb-10">
          <div className="relative mb-10">
            <SubTitle titleText={data.fifthSection.title} color="text-white" />
          </div>
          <p className="text-white/75 max-w-4xl">{data.fifthSection.description}</p>
        </div>
        <div className="flex flex-col gap-y-10 lg:gap-y-14">
          {
            // parentalCompanies is an array of objects with id, title, bg, icon, and link properties
            data.fifthSection.items.map((item,index) => (
              <div key={index} className="grid lg:grid-cols-2 items-center group ">
                <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="relative lg:h-[470px] lg:group-even:order-2">
                  <Image src={item.image} alt={item.title} width={790} height={790} className="w-full h-full"></Image>
                </motion.div>
                <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="flex flex-col items-start lg:pl-[82px] group-even:pl-0 lg:group-even:order-1 lg:group-even:pr-15">
                  <h3 className="primary-text-stroke text-secondary font-bold text-52 lg:text-96 tracking-widest"> {(index+1).toString().padStart(2, '0')}</h3>
                  <div className="grid grid-cols-[auto_1fr] gap-y-2 lg:gap-4 items-center mb-1 lg:mb-[37.81px]">
                    <div className="w-auto flex items-start">
                      <Image src={item.logo} alt={item.title} width={100} height={100} className="object-contain h-10 w-full"></Image>
                    </div> 
                    <div className="w-full">
                      <h3 className="text-white text-32 leading-[1.5] font-bold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="font-normal text-white/75 text-20 leading-[1.3] ">{item.description}</p>
                </motion.div>
              </div>
            ))
          }
      </div>
      </div>
    </section>
   );
}
 
export default ParentalCompaniesSec;