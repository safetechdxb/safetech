import React from 'react'
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import { featuresData } from './data'
export default function FeaturesSec() {
  return (
    <section className='py-140 relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-0 w-full h-full'>
        <Image src={featuresData.imgBg} alt={featuresData.title} width={1920} height={1087} className='h-full' />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-secondary/50"></div>
      <div className="container relative z-20">
        <div className="mb-5 lg:mb-20">
          <div className="relative mb-10">
            <SubTitle titleText={featuresData.title} color="text-white" />
          </div>
          <p className="text-white max-w-4xl text-20 font-normal leading-[1.6]">{featuresData.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cos-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {
            featuresData.data.map(item => (
              <div className='bg-primary p-32p text-white flex flex-col min-h-[251px]' key={item.id}>
                <h3 className='text-24 font-bold leading-[1.5]'>{item.title}</h3>
                <p className='mt-auto leading-[1.5] text-20 font-normal'>{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
