import React from 'react'
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'

export default function DigSec({data}:{data:PrecastPreStressedElement}) {
  return (
    <section className='py-140'>
      <div className="container ">
          <div className="relative mb-10">
            <SubTitle titleText={data.forthSection.title} color='text-secondary' />
          </div>
        <div className='bg-off-white p-5'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-20 items-center">
            <div className='bg-exlight-gray 2xl:p-32'>
              <Image src={data.forthSection.image} alt={data.forthSection.imageAlt} width={605} height={286}></Image>
            </div>
            <div>
              <p className='text-20 text-secondary/75 leading-[1.6]'>{data.forthSection.description}</p>
            </div>
        </div>
        </div>
      </div>
      
    </section>
  )
}
