import React from 'react'
import SubTitle from '../common/SubTitle'
import { panelsData } from './data'
export default function WallPanelsSec() {
  return (
    <section className='py-140 bg-off-white'>
      <div className="container">
        <div className="mb-5 lg:mb-10">
          <div className="relative mb-10">
            <SubTitle titleText="Types of wall panel" color="text-secondary" />
          </div>
          <p className=" max-w-4xl">Modern construction utilizes advanced precast wall panel systems to enhance structural performance, energy efficiency, and design flexibility. These panels are engineered for rapid installation, superior durability, and long-term cost savings. The three primary types include:</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {
            panelsData.map(panel => (
              <div key={panel.id}>
                <div className='border-b border-secondary/45 pb-8 mb-8'>
                  <div className='bg-primary w-fit p-5 text-white'>
                    <h4 className='text-30 font-semibold leading-[1.3333]'>{panel.id.toString().padStart(2, '0')}</h4>
                  </div>
                </div>
                <div>
                  <h3 className='text-20 font-semibold leading-[1.3] mb-5'>{panel.title}</h3>
                  <p className='text-20 text-secondary/75 leading-[1.5] font-normal'>{panel.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
