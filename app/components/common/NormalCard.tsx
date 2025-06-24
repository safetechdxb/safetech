"use client"
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
interface NormalCardProps {
    image: string | StaticImageData;
    title: string;
    description: string;
    key:number
}
const NormalCard = ({ image, title, description,key }: NormalCardProps) => {
  return ( 
    <motion.div variants={moveUp(key*0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="group bg-white">
      <div className="overflow-hidden">
        <Image src={image} alt={title} width={400} height={400} className="w-full h-[250px] md:h-[350px] 2xl:h-full object-cover flex group-hover:scale-105 transition-all duration-300 ease-in-out"/>
      </div>
      <div className="px-3 py-5 lg:py-15 lg:px-[30px] text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-in-out">
        <h2 className="text-24 font-semibold leading-[1.3] mb-3 lg:mb-5">{title}</h2>
        <p className="text-20 font-normal leading-[1.5]">{description}</p>
      </div>
    </motion.div>
   );
}
 
export default NormalCard;