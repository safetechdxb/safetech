"use client"
import {motion} from "framer-motion";
import { fadeIn } from "../motionVarients";
import SubTitle from '../common/SubTitle';
import Image from 'next/image';
import { home } from "@/public/types/home";
const OurClients = ({data}:{data:home}) => {
  return ( 
    <section className='py-140 bg-light-gray'>
      <div className="container">
      <div className="relative mb-10 lg:mb-20">
          <SubTitle titleText={data.clients.title} color='text-secondary' />
      </div>
        <div className="flex justify-center lg:justify-between gap-6 flex-wrap items-center ">
          {data.clients.items.slice(0, 6).map((client,index) => (
            <motion.div variants={fadeIn(index * 0.1)} initial="hidden" whileInView="show" viewport={{once:false, amount:0.2}} key={index} className='flex justify-center items-center '>
              <Image src={client.image} alt={client.imageAlt} className='object-contain w-30 h-10 lg:h-auto lg:w-auto' height={40} width={30} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center lg:justify-around gap-6 flex-wrap items-center mt-15">
          {data.clients.items.slice(6, 11).map((client,index) => (
            <motion.div variants={fadeIn(index * 0.1)} initial="hidden" whileInView="show" viewport={{once:false, amount:0.2}} key={index} className='flex justify-center items-center '>
              <Image src={client.image} alt={client.imageAlt} className='object-contain w-30 h-10 lg:h-auto lg:w-auto' height={30} width={30} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center lg:justify-between gap-6 flex-wrap items-center mt-15">
          {data.clients.items.slice(11, 17).map((client,index) => (
            <motion.div variants={fadeIn(index * 0.1)} initial="hidden" whileInView="show" viewport={{once:false, amount:0.2}} key={index} className='flex justify-center items-center '>
              <Image src={client.image} alt={client.imageAlt} className='object-contain w-30 h-10 lg:h-auto lg:w-auto' height={40} width={30} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default OurClients;