"use client"

import {motion} from 'framer-motion';
import { moveUp } from '../motionVarients';
import React from 'react'
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import { PrecastConcrete } from '@/types/PrecastConcrete'
export default function BuildingSystems({data}: {data: PrecastConcrete}) {
  return (
    <section className='py-140 bg-secondary'>
      <div className="container">
        <div className="mb-5 lg:mb-10">
          <div className="relative mb-10">
            <SubTitle titleText={data.thirdSection.title} color="text-white" />
          </div>
          <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className="text-white/75 max-w-4xl">
              {data.thirdSection.description}
          </motion.div>
          {/* <p className="text-white/75 max-w-4xl">At SAFETECH Precast Building Manufacturing LLC, we oer advanced
            Total Precast Building Systems designed for rapid construction, superior
            quality, and maximum eciency. Our total precast solutions integrate
            structural and architectural components into a fully precast building
            solution, suitable for a wide range of projects, including:</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {
            data.thirdSection.items.map((item, index) => (
              <motion.div variants={moveUp(index * 0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className='group p-5 lg:p-30p bg-white hover:bg-primary trasition-all duration-300 hover:-translate-y-2' key={index}>
                <div className='border-b border-secondary/40 pb-10 group-hover:border-white trasition-all duration-300'>
                  <div className="bg-primary p-3 w-20 h-20 group-hover:bg-white trasition-all duration-300 overflow-hidden">
                    <Image src={item.logo} alt={item.logoAlt} width={100} height={100} className='w-full h-[50px] object-contain brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0' />
                  </div>
                </div>
                <div className='pt-10 group-hover:text-white trasition-all duration-300'>
                  <h3 className='font-medium text-20 mb-5'>{item.title}</h3>
                  <p className='text-20 leading-[1.5] font-normal'>{item.description}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
