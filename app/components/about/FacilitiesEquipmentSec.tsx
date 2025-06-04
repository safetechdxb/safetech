"use client"
import { motion } from 'framer-motion';
import { moveUp } from '../motionVarients';
import Image from 'next/image'
import React from 'react'
import SubTitle from '../common/SubTitle'
// import { facEq } from './data'
// import { ChevronRight } from 'lucide-react'
import { About } from '@/public/types/about'

export default function FacilitiesEquipmentSec({ data }: { data: About }) {
  console.log(data)
  return (
    <section className='py-140 bg-light-gray'>
      <div className="container">
        <div className="relative mb-5 lg:mb-10">
          <SubTitle titleText={data.fourthSection.title} color='text-secondary' />
        </div>
        <p className='mb-10 lg:mb-15'>{data.fourthSection.description}</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {
            data.fourthSection.items.map((item, index) => (
              <motion.div variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className='group p-5 lg:p-8 bg-white hover:bg-primary trasition-all duration-300 hover:-translate-y-2 icon-crd' key={index}>
                <div className='border-b border-secondary/40 pb-10 group-hover:border-white trasition-all duration-300'>
                  <div className="bg-primary p-3 w-20 h-20 group-hover:bg-white trasition-all duration-300">
                    <Image src={item.logo} alt={item.title} width={100} height={100} className='w-full h-auto object-contain brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0' />
                  </div>
                </div>
                <div className='py-10 group-hover:text-white trasition-all duration-300'>
                  <h3 className='font-medium text-20'>{item.title}</h3>
                  {/* 
              <ul className='mt-6 flex flex-col gap-y-2'>
                {item.listData.map((li,index) =>(
                  <li className='flex items-start' key={index}><div className='min-w-6'><ChevronRight /></div><span className='text-20 font-normal leading-[1.5]' >{li}</span></li>
                ))}
              </ul> */}

                  <div className='arrow-list' dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
