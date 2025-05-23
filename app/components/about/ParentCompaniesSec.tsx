"use client"
import {motion} from "framer-motion"
import { moveUp } from "../motionVarients";
import SubTitle from "../common/SubTitle";
import { parentalCompanies } from "./data"; // data file with the parental companies data
import Image from "next/image";
const ParentalCompaniesSec = () => {
  return ( 
    <section className="py-140 bg-secondary">
      <div className="container">
        <div className="mb-5 lg:mb-10">
          <div className="relative mb-10">
            <SubTitle titleText="Associated businesses" color="text-white" />
          </div>
          <p className="text-white/75 max-w-4xl">MIG Holding LLC leads a dynamic group of associated companies, each contributing to a shared vision of growth, innovation, and impact. As the strategic
            core of the group, MIG Holding provides leadership, direction, and synergy across a
            diverse portfolio of businesses operating in key sectors such as construction,
            precast manufacturing, infrastructure, and smart technologies.</p>
        </div>
        <div className="flex flex-col gap-y-10 lg:gap-y-14">
          {
            // parentalCompanies is an array of objects with id, title, bg, icon, and link properties
            parentalCompanies.map((item) => (
              <div key={item.id} className="grid lg:grid-cols-2 group ">
                <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="relative lg:h-[470px] lg:group-even:order-2">
                  <Image src={item.img} alt={item.title} width={790} height={790} className="w-full h-full"></Image>
                </motion.div>
                <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="flex flex-col items-start gap-4 lg:pl-[82px] group-even:pl-0 pt-10 lg:pt-[67px] lg:group-even:order-1 lg:group-even:pr-15">
                  <h3 className="primary-text-stroke text-secondary font-bold text-52 lg:text-64 tracking-widest"> {item.id.toString().padStart(2, '0')}</h3>
                  <div className="flex flex-wrap gap-y-2 lg:gap-4 items-center mb-1 lg:mb-[37.81px]">
                    <Image src={item.logo} alt={item.title} width={45} height={49} className="object-contain"></Image>
                    <h3 className="text-white text-32 leading-[1.5] font-bold">{item.title}</h3>
                  </div>
                  <p className="font-normal text-white/75 text-20 leading-[1.3] ">{item.desc}</p>
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