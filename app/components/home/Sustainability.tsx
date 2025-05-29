"use client"
import { assets } from "@/public/assets/assets";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import ArrowBtn from "../common/ArrowBtn";
import {motion} from "framer-motion";
import {moveUp} from "../motionVarients"
import { About } from "@/public/types/about";
const Sustainability = ({data}:{data:About}) => {
  return (
    <section className="py-140 relative" style={{
      backgroundImage: `url(${assets.forestBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-black/80 w-full h-full"></div>
      <div className="container relative z-3">
        <div className="relative">
          <SubTitle titleText="Sustainability" color="text-white" />
        </div>
        <div className="lg:w-1/2 ml-auto pt-4 lg:pt-[90px] flex flex-col gap-20">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}  >
            <p className="text-white/80 text-24 leading-[1.3]">{data.sustainablity.description}</p>
          </motion.div>
          <motion.ul variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} >
            <li className="flex gap-3 items-center mb-4 last:mb-0">
              <Image src={assets.Leaf} alt="Sustainability Image 1" className="" />
              <p className="text-white text-24 leading-[1.3]">Reduce carbon footprint through precast technologies.</p>
            </li>
            <li className="flex gap-3 items-center mb-4 last:mb-0">
              <Image src={assets.Leaf} alt="Sustainability Image 1" className="" />
              <p className="text-white/80 text-24 leading-[1.3]">Optimize resources with eco-efficient designs.</p>
            </li>
            <li className="flex gap-3 items-center mb-4 last:mb-0">
              <Image src={assets.Leaf} alt="Sustainability Image 1" className="" />
              <p className="text-white/80 text-24 leading-[1.3]">Innovate for long-lasting sustainability.</p>
            </li>
          </motion.ul>
          <motion.div className="brightness-[0] invert opacity-80" variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} >
            <ArrowBtn btnText="More About Sustainability" btnLInk="#" border={true} />
          </motion.div>
          </div>
        </div>
    </section>
  );
}

export default Sustainability;