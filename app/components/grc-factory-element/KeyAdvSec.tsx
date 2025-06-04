"use client"
import { motion } from 'framer-motion';
import { moveUp } from '../motionVarients';
import SubTitle from '../common/SubTitle'
import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'

export default function KeyAdvSec({ data }: { data: PrecastPreStressedElement }) {
  return (
    <section className='py-140 bg-secondary'>
      <div className="container">
        <div className="relative mb-10 lg:mb-20">
          <SubTitle titleText={data.secondSection.title} color='text-white' />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
          {
            data.secondSection.items.map((item, index) => (
              <motion.div variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index}>
                <div className='border-b border-white/45 pb-8 mb-8'>
                  <div className='bg-primary w-fit p-5 text-white'>
                    <h4 className='text-30 font-semibold leading-[1.3333]'>{(index + 1).toString().padStart(2, '0')}</h4>
                  </div>
                </div>
                <div className='text-white'>
                  <h3 className='text-20 font-semibold leading-[1.3] mb-5'>{item.title}</h3>
                  <p className='text-20 leading-[1.5] font-normal'>{item.description}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
