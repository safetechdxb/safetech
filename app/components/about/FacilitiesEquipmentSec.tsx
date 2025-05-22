import Image from 'next/image'
import React from 'react'
import SubTitle from '../common/SubTitle'
import { facEq } from './data'

export default function FacilitiesEquipmentSec() {
  return (
    <section className='py-140 bg-light-gray'>
      <div className="container">
        <div className="relative mb-5 lg:mb-10">
          <SubTitle titleText='Facilities & Equipments' color='text-secondary' />
        </div>
        <p className='mb-10 lg:mb-15'>SAFETECH Precast Building Manufacturing LLC, one of the largest precast factories in the Middle East, is equipped with advanced, fully automated production lines capable of manufacturing over 2.5 million square meters of precast panels annually. Our facilities include specialized units for producing a wide range of products—from wall panels and hollow core slabs to beams, columns, staircases, and foundation elements.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {
            facEq.map(item => (
          <div className='group p-5 lg:p-8 bg-white hover:bg-primary trasition-all duration-300' key={item.id}>
            <div className='border-b border-secondary/40 pb-10 group-hover:border-white'>
              <div className="bg-primary p-3 w-20 h-20 group-hover:bg-white">
                <Image src={item.icon} alt={item.title} width={100} height={100} className='w-full h-auto object-contain brightness-0 invert-100 group-hover:brightness-100 group-hover:invert-0' />
              </div>
            </div>
            <div className='py-10'>
              <h3 className='text-black font-medium text-20'>{item.title}</h3>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
