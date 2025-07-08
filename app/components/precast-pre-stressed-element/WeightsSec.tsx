"use client"
import { motion } from "framer-motion"
import { moveUp } from "../motionVarients"
import SubTitle from '../common/SubTitle'
import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'

export default function WeightsSec({ data }: { data: PrecastPreStressedElement }) {
  return (
    <section className='py-140'>
      <div className="container">
        <div className="flex flex-wrap xl:flex-nowrap gap-5">
          <div className='w-full xl:w-1/2 2xl:w-6/12'>
            <div className="relative ">
              <SubTitle titleText={data.forthSection.title} color='text-secondary' />
            </div>
          </div>
          <div className='w-full xl:w-1/2 2xl:w-7/12 bg-light-gray p-32p'>
            <motion.table variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className='w-full text-left'>
              <thead >
                <tr className='border-b border-gray-300 pb-3 grid grid-cols-2 '>
                  <th className='text-20 font-semibold leading-[1.3]'>{data.forthSection.column1Title}</th>
                  <th className='text-20 font-semibold leading-[1.3]'>{data.forthSection.column2Title}</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.forthSection.items.map((item, index) => (
                    <motion.tr variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index} 
                    className='border-b border-gray-300 py-3 grid grid-cols-2 w-full last:border-b-0 last:pb-0'>
                      <td className='text-20 font-normal leading-[1.6] text-secondary/75'>{item.column1Value}</td>
                      <td className='text-20 font-normal leading-[1.6] text-secondary/75'>{item.column2Value}</td>
                    </motion.tr>
                  ))
                }
                {/* <td></td> */}
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>
    </section>
  )
}
