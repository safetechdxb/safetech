"use client"
import React from 'react'
import Image from 'next/image'
import SubTitle from '../common/SubTitle'
import { motion, AnimatePresence } from "framer-motion"
import { moveUp, paragraphItem } from '../motionVarients'
import { useState } from 'react'
import { GrcFactory } from '@/types/GrcFactory'

export default function AccSec({ data }: { data: GrcFactory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-140 bg-exlight-gray">
      <div className="container">
        <div className="relative tracking-[3px] mb-10 lg:mb-20 lg:max-w-3xl">
          <SubTitle titleText={data.thirdSection.title} color="text-black" />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-y-15 xl:gap-10 2xl:gap-15">
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative lg:order-2 w-full lg:w-3/7">

            <div className="">
              <figure className="image-wrapper ">
                <Image src={data.thirdSection.items[activeIndex].image} alt={data.thirdSection.items[activeIndex].imageAlt} width={1000} height={1000} 
                className="w-full h-[250px] md:h-[300px] 2xl:h-full object-cover" />
              </figure>
            </div>

            <div className="absolute bottom-[-40px] right-0">
              <div className="w-10 h-20 bg-white relative z-20 group">
                <div className="w-10 h-10 bg-black absolute top-0 left-0 "></div>
                <div className="w-10 h-10 bg-primary absolute top-0 left-0 group-hover:top-[50%] transition-all duration-200"></div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:order-1 lg:w-4/7 ">
            {data.thirdSection.items.map((da, index) => (
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
                </div>

                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <>
                      <motion.div key="content" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto", marginTop: "20px" }} exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4 }} className="text-territory text-[16px] font-[400] leading-[1.7] text-secondary lg:max-w-2xl"> <p className="opacity-75">{da.description}</p>
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
  )
}
