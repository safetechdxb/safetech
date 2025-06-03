"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { moveUp, paragraphItem } from "../../motionVarients";
import SubTitle from "../../common/SubTitle";
import { assets } from "@/public/assets/assets";
import { careers } from "@/public/types/careers";

const SingleImageText = ({data}:{data:careers}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.4 } },
  };
  return (
    <section className="py-140 overflow-hidden relative ">
      <div className="container">
        <div className="lg:flex lg:items-center xxl:items-start">
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative w-full lg:w-[51%] pr-0 xl:pr-[35px] 2xl:pr-[142px]">
           
              <motion.div className="hidden first:block" variants={slideInLeft} initial="hidden" animate="visible" exit="exit">
                <figure className="image-wrapper h-full ">
                  <Image src={data.firstSection.image} alt="A beautiful view" className="w-full object-cover " width={400} height={400} />
                </figure>
               
              </motion.div>
      
           <div className="absolute bottom-[-40px] left-0">
              <div className="w-10 h-20 bg-white relative z-20 group">
                <div className="w-10 h-10 bg-black absolute top-0 left-0 "></div>
                <div className="w-10 h-10 bg-primary absolute top-0 left-0 group-hover:top-[50%] transition-all duration-200"></div>
              </div>
           </div>
          </motion.div>

          <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-[49%] pl-0   mt-6 lg:mt-0">
            <div className="relative tracking-[3px]  mb-4 lg:mb-[30px]">
              <SubTitle titleText={data.firstSection.title} color="text-black" />
            </div>
            <motion.div variants={slideInLeft} initial="hidden" animate="visible" exit="exit" >
              <p className="font-normal text-20 leading-[1.4] text-secondary opacity-75 mb-5 lg:mb-[40px]">{data.firstSection.description}</p>
            </motion.div>
            {data.firstSection.items.map((da, index) => (
              <motion.div
                key={index}
                className="group border-b first:border-t border-[#00000015] py-5  lg:py-[20px] xxl:py-[30px] group transition-all duration-300"
                onMouseEnter={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >

                <div className="flex justify-between">
                  <h3 className={`text-20 leading-[1] transition-all duration-300 cursor-pointer group-hover:text-primary group-hover:font-[600] ${activeIndex === index ? 'text-primary font-[600]' : 'text-secondary font-[400] '} `}> {da.title}
                  </h3>
                  {
                    activeIndex === index ? (
                      <div className="-rotate-180">
                        <Image src={assets.cheveronUp} alt={da.title} width={27.43} height={14.29} className="rotate-180" />
                      </div>

                    ) : (
                      <div className="">
                        <Image src={assets.cheveronUp} alt={da.title} width={27.43} height={14.29} className="rotate-180" />
                      </div>
                    )
                  }
                </div>

                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <>
                      <motion.div key="content" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto", marginTop: "20px" }} exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4 }} className="text-territory text-[16px] font-[400] leading-[1.7] text-secondary"> <p className="opacity-75">{da.description}</p>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SingleImageText;
