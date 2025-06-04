"use client"
import {motion} from "framer-motion";
import {moveUp} from "../motionVarients";
import React from 'react'
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import ArrowBtn from '../common/ArrowBtn'
import { PrecastConcrete } from "@/types/PrecastConcrete"
import { usePathname } from 'next/navigation'

export default function ElementsList({data}: {data: PrecastConcrete}) {
    const pathname = usePathname();

  return (
    <section className='py-140 bg-off-white '>
      <div className="container">
       <div className="mb-10 2xl:mb-20">
          <div className="relative mb-10">
            <SubTitle titleText={data.elementsSection.title} color='text-secondary' />
          </div>
          <motion.div variants={moveUp(0.5)} initial="hidden" whileInView="show"  className='leading-[1.5] font-normal text-20 text-secondary/75 max-w-4xl'>
            {data.elementsSection.description}
          </motion.div>
          {/* <p className='leading-[1.5] font-normal text-20 text-secondary/75 max-w-4xl'>
            At SAFETECH Precast Building Manufacturing LLC, we
            manufacture a wide range of high-quality precast concrete
            elements using our automated precast factory, equipped with
            advanced machinery and modern production systems.
          </p> */}
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.elementsSection.items.map((el, index) =>(
          <motion.div variants={moveUp(index * 0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className='bg-white flex flex-col' key={index}>
            <div className='h-[271px] overflow-hidden'>
              <Image src={el.image} alt={el.imageAlt} width={400} height={400} className='w-full h-full object-cover' />
            </div>
            <div className='px-8 pt-10 2xl:pt-15'>
              <h3 className='text-20 leading-[1.3] font-semibold text-black mb-3 2xl:mb-5'>{el.title}</h3>
              <p className='text-20 font-normal leading-[1.5] text-secondary/75'>{el.description}</p>
            </div>
              <div className="mt-auto px-8 pb-8">
            {
              el.slug && (
              <ArrowBtn btnText='Read more' btnLInk={`${pathname}/${el.slug}`} border={false} />
            )
          }
          </div>
          </motion.div>
        ))}
       </div>
      </div>
    </section>
  )
}
