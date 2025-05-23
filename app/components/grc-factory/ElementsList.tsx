import React from 'react'
import SubTitle from '../common/SubTitle'
import { elementsData } from './data'
import Image from 'next/image'
import ArrowBtn from '../common/ArrowBtn'

export default function ElementsList() {
  return (
    <section className='py-140 bg-secondary'>
      <div className="container">
       <div className="mb-20">
          <div className="relative mb-10">
            <SubTitle titleText='GRC products' color='text-white' />
          </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {elementsData.map(el =>(
          <div className='bg-white flex flex-col' key={el.id}>
            <div className='h-[271px] overflow-hidden'>
              <Image src={el.img} alt={el.title} width={400} height={400} className='w-full h-full object-cover' />
            </div>
            <div className='px-8 pt-15'>
              <h3 className='text-20 leading-[1.3] font-semibold text-black mb-5'>{el.title}</h3>
              <p className='text-20 font-normal leading-[1.5] text-secondary/75'>{el.desc}</p>
            </div>
            <div className="mt-auto px-8 pb-8">
              <ArrowBtn btnText='Read more' btnLInk='#' border={false} />
            </div>
          </div>
        ))}
       </div>
      </div>
    </section>
  )
}
