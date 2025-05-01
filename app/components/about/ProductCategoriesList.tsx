"use client"
import {motion} from "framer-motion"
import { moveUp } from "../motionVarients";
import Image from "next/image";
import SubTitle from "@/app/components/common/SubTitle";
import { productCategories } from "./data";
import Link from "next/link";
const productCategoriesList = () => {
  return ( 
    <section className="py-140">
      <div className="container">
        <div className="relative mb-12">
          <SubTitle titleText="Innovation Across industries" color="text-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-14">
         {
          productCategories.map((item)=>(
            <motion.div variants={moveUp(item.id * 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} key={item.id} className="relative group h-[350px] flex flex-col  items-center cursor-pointer">
              <Link href={item.link} className="absolute inset-0 z-20 h-full w-full"></Link>
              <div className="h-[285px] relative top-0 left-0 w-full overflow-hidden z-0">
                <Image src={item.bg} alt="Product Categories" className="w-full h-full object-cover" width={200} height={200} unoptimized />
              </div>
              <div className="absolute bottom-[10px] z-10 border border-secondary/15 bg-white group-hover:bg-primary px-3 py-6 w-[90%] mx-auto flex items-center gap-4 transition-all duration-300">
                <Image src={item.icon} alt="Product Categories" className="w-auto h-16 group-hover:brightness-0 group-hover:invert transition-all duration-300" width={200} height={200} />
                <h3 className="text-primary group-hover:text-white font-semibold uppercase text-14">{item.title}</h3>
              </div>
            
            </motion.div>
          ))
         }
        </div>
      </div>
    </section>
   );
}
 
export default productCategoriesList;