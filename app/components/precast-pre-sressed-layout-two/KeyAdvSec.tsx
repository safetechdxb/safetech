import React from 'react'
import SubTitle from '../common/SubTitle'
import { keyAdvs } from './data'
export default function KeyAdvSec() {
  return (
    <section className='py-140 bg-secondary'>
      <div className="container">
        <div className="relative mb-10 lg:mb-20">
          <SubTitle titleText='Key Advantages' color='text-white' />
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
                  {
                    keyAdvs.map(item => (
                      <div key={item.id}>
                        <div className='border-b border-white/45 pb-8 mb-8'>
                          <div className='bg-primary w-fit p-5 text-white'>
                            <h4 className='text-30 font-semibold leading-[1.3333]'>{item.id.toString().padStart(2, '0')}</h4>
                          </div>
                        </div>
                        <div className='text-white'>
                          <h3 className='text-20 font-semibold leading-[1.3] mb-5'>{item.title}</h3>
                          <p className='text-20 leading-[1.5] font-normal'>{item.desc}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
      </div>
    </section>
  )
}
