"use client"
import { motion } from 'framer-motion';
import { moveUp } from '../motionVarients';
import SubTitle from '../common/SubTitle'
// import { PrecastPreStressedElement } from '@/types/PrecastPreStressedElement'
import { safePodsData } from './data'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function KeyAdvSec() {
  const [showAll, setShowAll] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);
  const initialCount = 6;
  const hasMore = safePodsData.thirdSection.items.length > initialCount;
  const firstBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (hasToggled && !showAll && firstBoxRef.current) {
        firstBoxRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [showAll, hasToggled]);
  
    const handleToggle = () => {
      setHasToggled(true); // only set after user action
      setShowAll(prev => !prev);
    };
  return (
    <section className='py-140 bg-secondary'>
      <div className="container">
        <div className="relative mb-10 lg:mb-20">
          <SubTitle titleText={safePodsData.thirdSection.title} color='text-white' />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
          {
            safePodsData.thirdSection.items.map((item, index) => {
              const isVisible = showAll || index < initialCount;  
              return (
              <motion.div variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index} ref={index === 0 ? firstBoxRef : null}
                className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"
                  }`} >
                <div className='border-b border-white/45 pb-8 mb-8'>
                  <div className='bg-primary w-fit p-5 text-white'>
                    {safePodsData.thirdSection.items[index].image ? <Image src={safePodsData.thirdSection.items[index].image} alt={safePodsData.thirdSection.items[index].imageAlt} width={50} height={50} className="w-auto h-[50px] object-contain" /> : <h4 className='text-30 font-semibold leading-[1.3333]'>{(index + 1).toString().padStart(2, '0')}</h4>}
                  </div>
                </div>
                <div className='text-white'>  
                  <h3 className='text-20 font-semibold leading-[1.3] mb-5'>{item.title}</h3>
                  <p className='text-20 leading-[1.5] font-normal'>{item.description}</p>
                </div>
              </motion.div>
            )}  
          )}
        </div>

        {hasMore && (
          <div className="lg:mt-10 text-center flex justify-center">
            <motion.button
              onClick={handleToggle}
              className="flex bg-primary text-white hover:bg-opacity-80 transition h-[50px] overflow-hidden group" >
              <span className="px-4 py-2 uppercase font-normal text-16 leading-normal border-r border-r-primary group-hover:border-white/20 flex items-center justify-center">
                {showAll ? "Show Less" : "Show More"}
              </span>
              <div className="flex flex-col relative overflow-hidden">
                <div className={`bg-white w-[50px] h-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 
                  ${showAll ? "group-hover:translate-y-[-50px]" : "group-hover:translate-y-[50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" stroke="black" /> <path d="M12 2V22" stroke="black" />
                  </svg>
                </div>
                <div className={`bg-primary w-[50px] h-[50px] absolute  left-0 z-20 text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 group-hover:top-0 ${showAll ? "top-[50px]" : "top-[-50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" stroke="white" /> <path d="M12 2V22" stroke="white" />
                  </svg>
                </div>
              </div>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}
