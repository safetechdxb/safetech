"use client";

import { assets } from "@/public/assets/assets";
import SubTitle from "../../common/SubTitle";
import Image from "next/image";
import { motion } from "framer-motion";


interface PlatformsItem {
  id: number;
  jobtitle: string;
  size: string;
  category: string;
  btn: string;
}

interface PlatformsSectionProps {
  title: string;
  data: PlatformsItem[];
}


const Openings: React.FC<PlatformsSectionProps> = ({ data, title }) => {


  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Controls the stagger effect (delay for each item)
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 50 },  // Start with opacity 0 and slide up
    show: {
      opacity: 1,
      y: 0,  // Slide into place
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="py-[40px] md:py-[50px] xl:py-[110px] bg-off-white overflow-hidden relative">
      <div className="container">
        <div className="border-b border-[#1E1E1E66]  mb-5 lg:mb-[50px]">
          <div className="relative tracking-[3px]  mb-4 lg:mb-[30px] ">
          <SubTitle titleText={title} color="text-black" />
          </div>
          </div>
          <motion.div
  variants={listContainer}
  initial="hidden"
  animate="show"
  className="space-y-7"
>
  {data.map((item) => (
    <motion.div
      key={item.id}
      variants={listItem}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="md:flex justify-between group items-center border-b border-[#1E1E1E66] border-dashed mb-7 pb-7 md:mb-[30px] md:pb-[30px]"
    >
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <p className="text-24 text-secondary group-hover:text-[#E11F27] transition-all duration-300">
          {item.jobtitle}
        </p>
      </div>
      <div className="w-full md:w-2/3 flex justify-between items-center group">
        <p className="uppercase w-2/5 opacity-60 text-18 font-normal">
          {item.size}
        </p>
        <div className="uppercase w-2/5 opacity-60 text-18">
          <p className="px-[16px] py-[4px] bg-[#1E1E1E0D] rounded-2xl font-normal w-fit">
            {item.category}
          </p>
        </div>
        <div className="flex items-center gap-2 w-1/5 justify-end cursor-pointer font-normal">
          <p className="uppercase font-[700] text-[14px] text-primary">
            {item.btn}
          </p>
          <Image src={assets.arrowred} alt="arrow" />
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>


      </div>
    </section>
  );
};

export default Openings;
