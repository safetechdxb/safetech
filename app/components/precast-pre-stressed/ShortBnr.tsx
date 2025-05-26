import React from 'react'
import SubTitle from '../common/SubTitle'
import { assets } from '@/public/assets/assets'
import Image from 'next/image'
export default function ShortBnr() {
  return (
    <section className='py-118 relative overflow-hidden'>
      <div className="absolute top-0 left-0 w-full h-full short-bnr-gradient z-20"></div>
      <div className="absolute top-0 left-0 z-10 h-full w-full  ">
        <Image src={assets.shortBnrBg} alt="precast-pre-stressed" width={1920} height={550} className='w-full h-full object-cover'></Image>
      </div>
      <div className="container relative z-40">
        <div className="w-1/2 lg:ml-auto">
          <div className="relative mb-10">
            <SubTitle titleText='Precision Engineering for Superior Performance' color='text-white' />
          </div>
          <p className='text-20 font-normal leading-[1.5] text-off-white'>SAFETECH specialize in prestressed concrete—an advanced precast manufacturing method that combines high-strength steel strands with concrete under tension. This innovative approach delivers unmatched structural efficiency, allowing for slimmer designs without compromising strength. By prestressing our concrete elements, we create components that resist deflection, minimize cracking, and endure heavy loads over extended spans—perfect for modern architectural demands.</p>
        </div>
      </div>
    </section>
  )
}
