"use client";

import Image from "next/image";
import SubTitle from "../../common/SubTitle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { assets } from "@/public/assets/assets";



interface PlatformsSectionProps {
  title: string;
  description: string;
}
const GetInTouch: React.FC<PlatformsSectionProps> = ({

  title,
  description,
}) => {
  return (
    <section className="py-140 overflow-hidden relative" id="enq-form">
      <div className="container">
        <div className="relative tracking-[3px]   mb-3 lg:mb-[30px]">
          <SubTitle titleText={title} color="text-black" />
        </div>
        <div className="mb-6 lg:mb-[60px]">
          <p className="text-secondary text-20 font-normal leading-[1.6] opacity-90 max-w-[60ch]">
            {description}
          </p>
        </div>

        {/* Reusable animation wrapper for fields */}
        <form>
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-[140px] mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px] " >
          <div className="relative w-full ">
            <input type="text" placeholder="Name"
              className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full"/>
          </div>
          <div className="relative w-full ">
            <input type="number" placeholder="Phone"
              className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full"/>
          </div>
          <div className="relative w-full ">
            <input type="email" placeholder="Email"
              className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full"/>
          </div>
          <div className="relative w-full ">
            <input type="text" placeholder="Subject"
              className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full"/>
          </div>
        </motion.div>
        <motion.div
          className="" >
          <div className="relative w-full ">
            <textarea placeholder="Message" className="px-1 appearance-none bg-transparent lg:h-[178px]
             border-0 border-b border-secondary focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 font-normal text-16 
             py-[16px] pr-6 w-full resize-none"/>
          </div>
          <div className="w-full ">
            <button type="submit" className="mt-2 flex w-[215px] cursor-pointer overflow-hidden group transition duration-300 ml-auto">
              <div className="bg-primary text-white text-[16px] font-[400] px-2 py-4 transition duration-300 min-w-[165px]"> Send message </div>
              <div className="flex min-w-[100px] overflow-hidden">
                <div className="bg-black w-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition duration-300 transform group-hover:-translate-x-[50px]">
                  <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
                </div>
                <div className="bg-primary w-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition duration-300  transform group-hover:-translate-x-[50px]">
                  <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
                </div>
              </div>
            </button>
          </div>
        </motion.div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
