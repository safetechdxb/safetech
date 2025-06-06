"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients";
import React from 'react'
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import { PrecastPrestressed } from '@/types/PrecastPrestressed'

export default function ShortBnr({data}: {data: PrecastPrestressed}) {
  return (
    <section className='py-118 relative overflow-hidden'>
      <div className="absolute top-0 left-0 w-full h-full short-bnr-gradient z-20"></div>
      <div className="absolute top-0 left-0 z-10 h-full w-full  ">
        <Image src={data.secondSection.image} alt={data.secondSection.imageAlt} width={1920} height={550} className='w-full h-full object-cover'></Image>
      </div>
      <div className="container relative z-40">
        <div className="lg:w-1/2 lg:ml-auto">
          <div className="relative mb-10">
            <SubTitle titleText={data.secondSection.title} color='text-white' />
          </div>
          <motion.p variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className='text-20 font-normal leading-[1.5] text-off-white'>{data.secondSection.description}</motion.p>
        </div>
      </div>
    </section>
  )
}
