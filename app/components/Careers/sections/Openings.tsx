"use client";

import { assets } from "@/public/assets/assets";
import SubTitle from "../../common/SubTitle";
import Image from "next/image";
import { motion } from "framer-motion";


interface PlatformsItem {
  id: number;
  jobtitle: string;
  type: string;
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
            <motion.div key={item.id} variants={listItem} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
              className="md:flex justify-between group items-center border-b border-[#1E1E1E66] border-dashed mb-7 pb-7 md:mb-[30px] md:pb-[30px]" >
              <div className="w-full md:w-2/5 mb-4 md:mb-0">
                <p className="text-24 text-secondary font-normal leading-[1.4] group-hover:text-[#E11F27] transition-all duration-300">
                  {item.jobtitle}
                </p>
              </div>
              <div className="w-full md:w-3/5 flex flex-wrap lg:flex-row justify-between lg:items-center group">
                <div className="lg:w-5/9">
                  <p className="uppercase text-secondary/50 text-16 font-semibold">
                    {item.type}
                  </p>
                </div>
                <div className="w-1/2 lg:w-3/9 text-18">
                  <p className="px-[16px] py-[4px] bg-secondary/5 text-secondary/60 rounded-2xl font-normal w-fit leading-[1.4]">
                    {item.category}
                  </p>
                </div>
                <div className="lg:w-1/7 flex items-center gap-2 justify-end cursor-pointer font-normal">
                  <div>
                    <button className="uppercase font-[700] text-[14px] text-primary min-w-max">
                      {item.btn}
                    </button>
                  </div>
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
