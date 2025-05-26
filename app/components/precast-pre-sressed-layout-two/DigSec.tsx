import React from 'react'
import SubTitle from '../common/SubTitle'
import { diagramData } from './data'
import Image from 'next/image'
export default function DigSec() {
  return (
    <section className='py-140'>
      <div className="container ">
          <div className="relative mb-10">
            <SubTitle titleText={diagramData.title} color='text-secondary' />
          </div>
        <div className='bg-off-white p-5'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className='bg-exlight-gray p-32'>
              <Image src={diagramData.diagram} alt={diagramData.title} width={605} height={286}></Image>
            </div>
            <div>
              <p className='text-20 text-secondary/75 leading-[1.6]'>{diagramData.desc}</p>
            </div>
        </div>
        </div>
      </div>
      
    </section>
  )
}
