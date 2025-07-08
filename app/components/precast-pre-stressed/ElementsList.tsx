"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients";
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import ArrowBtn from '../common/ArrowBtn'
import { usePathname } from 'next/navigation'
import { PrecastPrestressed } from '@/types/PrecastPrestressed'

export default function ElementsList({data}: {data:PrecastPrestressed}) {
  const pathname = usePathname();

  // const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  
  return (
    <section className='py-140 bg-off-white '>
      <div className="container">
          <div className="relative mb-8 2xl:mb-10">
            <SubTitle titleText={data.elementsSection.title} color='text-secondary' />
          </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.elementsSection.items.map((el,index) =>(
          <motion.div variants={moveUp(index * 0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} className='bg-white flex flex-col' key={index}>
            <div className='h-[271px] overflow-hidden'>
              <Image src={el.image} alt={el.imageAlt} width={400} height={400} className='w-full h-full object-cover' />
            </div>
            <div className='lg:px-8 px-5 pt-5 lg:pt-10 2xl:pt-15'>
              <h3 className='text-20 leading-[1.3] font-semibold text-black mb-3 2xl:mb-5'>{el.title}</h3>
              <p className='text-20 font-normal leading-[1.5] text-secondary/75'>{el.description}</p>
            </div>
            <div className="mt-auto px-5 lg:px-8 pb-5 lg:pb-8">
              <ArrowBtn btnText='Read more' btnLInk={`${pathname}/${el.slug}`} border={false} />
            </div>
          </motion.div>
        ))}
       </div>
      </div>
    </section>
  )
}
