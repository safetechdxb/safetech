"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { assets } from "@/public/assets/assets";
import Image from 'next/image'
import Link from 'next/link';


const NotFound = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-white dark:bg-gray-900 flex  h-screen relative flex-col justify-center items-center">

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center justify-center items-center flex flex-col">
          <motion.h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 flex justify-center gap-2">
            <motion.span
              animate={{
                x: [50, -10, 0],
              }}
              transition={{
                delay: 2,
                repeatType: "loop",
                duration: 1,
                ease: "easeInOut",
              }}
            >
              4
            </motion.span>
            <motion.span
              animate={{
                y: [-1000, 30, 0],
              }}
              transition={{
                delay: 2,
                repeatType: "loop",
                duration: 1,
                ease: "easeInOut",
              }}
              className='bg-white'
            >
              0
            </motion.span>
            <motion.span
              animate={{
                x: [-50, 10, 0],
              }}
              transition={{
                delay: 2,
                repeatType: "loop",
                duration: 1,
                ease: "easeInOut",
              }}
            >
              4
            </motion.span>
          </motion.h1>

          <motion.p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something&apos;s missing.
          </motion.p>
          <motion.p animate={{
            y: [0, -10, 0],
          }}
            transition={{
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
              duration: 1,
              ease: "easeInOut",
            }} className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page.
          </motion.p>
          <div className="w-fit flex justify-center items-center bg-green-600">
          <Link href="/">
  <motion.button
    type="submit"
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    }}
    viewport={{ once: true, amount: 0.2 }}
    className="flex cursor-pointer w-fit group transition duration-300"
  >
    
    <div className="bg-primary text-white text-[16px] font-[400] px-5 py-4 transition duration-300">
      BACK TO HOME
    </div>
    
    <div className="w-[50px] overflow-hidden relative">
      <div className="flex w-[100px] transition-transform duration-300 group-hover:-translate-x-[50px] h-full">
        <div className="bg-black w-[50px] h-full flex items-center justify-center">
          <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
        </div>
        <div className="bg-primary w-[50px] h-full flex items-center justify-center">
          <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
        </div>
      </div>
    </div>
  </motion.button>
  </Link>
</div>

        </div>
      </div>
    </motion.section>
  )
}

export default NotFound
