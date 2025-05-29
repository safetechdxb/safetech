import React from 'react'
import SubTitle from '../common/SubTitle'
import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'

export default function WeightsSec({data}:{data:PrecastPreStressedElement}) {
  return (
    <section className='py-140'>
      <div className="container">
        <div className="flex gap-5">
          <div className='flex-6/12'>
          <div className="relative ">
            <SubTitle titleText={data.forthSection.title} color='text-secondary' />
          </div>  
          </div>
          <div className='lg:flex-7/12 bg-light-gray p-32p'>
            <table className='w-full text-left'>
              <thead >
                <tr className='border-b border-gray-300 pb-3 grid grid-cols-2'>
                  <th className='text-20 font-semibold leading-[1.3]'>{data.forthSection.column1Title}</th>
                  <th className='text-20 font-semibold leading-[1.3]'>{data.forthSection.column2Title}</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.forthSection.items.map((item,index) => (
                    <tr key={index} className='border-b border-gray-300 py-3 grid grid-cols-2 w-full'>
                      <td className='text-20 font-normal leading-[1.6] text-secondary/75'>{item.column1Value}</td>
                      <td className='text-20 font-normal leading-[1.6] text-secondary/75'>{item.column2Value}</td>
                    </tr>
                  ))
                }
                {/* <td></td> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
