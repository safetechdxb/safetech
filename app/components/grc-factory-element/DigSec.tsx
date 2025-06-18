"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import SubTitle from '../common/SubTitle'
import Image from 'next/image'
import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'

export default function DigSec({ data }: { data: PrecastPreStressedElement }) {
  

  if(data.forthSectionStyle === "none") return null;
  
  return (
    <section className='py-140'>
      <div className="container ">
        <div className="relative mb-10">
          <SubTitle titleText={data.forthSection.title} color='text-secondary' />
        </div>
        <div className='bg-off-white p-5'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-20 items-center">
            <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className='bg-exlight-gray 2xl:p-32'>
              <Image src={data.forthSection.image} alt={data.forthSection.imageAlt} width={605} height={286}></Image>
            </motion.div>
            <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} >
              <p className='text-20 text-secondary/75 leading-[1.6]'>{data.forthSection.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}
