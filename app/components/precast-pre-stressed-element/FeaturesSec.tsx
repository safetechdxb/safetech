"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients";
import React from 'react'
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'

export default function FeaturesSec({data}:{data:PrecastPreStressedElement}) {
  return (
    <section className='py-140 relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-0 w-full h-full'>
        <Image src={data.secondSection.image} alt={data.secondSection.imageAlt} width={1920} height={1087} className='h-full object-cover' />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-secondary/50"></div>
      <div className="container relative z-20">
        <div className="mb-5 lg:mb-20">
          <div className="relative mb-5 lg:mb-10">
            <SubTitle titleText={data.secondSection.title} color="text-white" />
          </div>
          <p className="text-white max-w-4xl text-20 font-normal leading-[1.6]">{data.secondSection.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cos-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {
            data.secondSection.items.map((item,index) => (
              <motion.div variants={moveUp(index *0.3)} initial="hidden" whileInView="show" viewport={{once:true,amount:0.2}} className='bg-primary p-32p text-white flex flex-col gap-y-3 xl:gap-y-0 xl:min-h-[251px]' key={item.title}>
                <h3 className='text-24 font-bold leading-[1.5]'>{item.title}</h3>
                <p className='mt-auto leading-[1.5] text-20 font-normal'>{item.description}</p>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
