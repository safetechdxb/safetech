import React from 'react'
import SubTitle from '../common/SubTitle'
import { weightsData } from './data'
export default function WeightsSec() {
  return (
    <section className='py-140'>
      <div className="container">
        <div className="flex gap-5">
          <div className='flex-6/12'>
          <div className="relative ">
            <SubTitle titleText="Hollowcore slabs weight" color='text-secondary' />
          </div>  
          </div>
          <div className='lg:flex-7/12 bg-light-gray p-32p'>
            <table className='w-full text-left'>
              <thead >
                <tr className='border-b border-gray-300 pb-3 grid grid-cols-2'>
                  <th className='text-20 font-semibold leading-[1.3]'>Weight(kg/m<sup>2</sup>)</th>
                  <th className='text-20 font-semibold leading-[1.3]'>HC Slab</th>
                </tr>
              </thead>
              <tbody>
                {
                  weightsData.map(item => (
                    <tr key={item.id} className='border-b border-gray-300 py-3 grid grid-cols-2 w-full'>
                      <td className='text-20 font-normal leading-[1.6] text-secondary/75'>{item.weight}</td>
                      <td className='text-20 font-normal leading-[1.6] text-secondary/75'>{item.hcSlab}</td>
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
