"use client";

import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import Image, { StaticImageData } from "next/image";

interface PlatformsItem {
  id: number;
  image: StaticImageData;
  title: string;
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
}

const Certificates: React.FC<PlatformsSectionProps> = ({ data }) => {

  return (
    <section className="py-[50px] md:py-[60px] xl:py-[100px] overflow-hidden relative">
      <div className="container">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-25" >
          {data.map((item, index) => (
            <motion.div key={index} variants={moveUp(item.id * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <div className="relative group overlbl h-full">
                <figure className="overlayclr">
                  <Image src={item.image} alt="" className="w-full object-cover" />
                </figure>
                <motion.div
                  className="absolute z-10 flex flex-col inset-x-[10px] xxl:inset-x-[20px] bottom-[10px] xxl:bottom-[20px] p-[10px] lg:p-[20px] backdrop-blur-[10px] bg-white/10 text-white rounded-custom gap-[20px] group-hover:bg-primary transition-all" >
                  <motion.div
                    className="flex justify-between items-center w-full group" whileHover={{ opacity: 1 }} >
                    <h4 className="text-24 font-semibold text-white leading-[1.2] transition-opacity duration-500">
                      {item.title}
                    </h4>
                    <div className="flex items-center">
                      <div className="w-[8px] h-[8px] bg-primary rounded-full transition-opacity duration-500 opacity-100 group-hover:bg-white group-hover:w-[15px] group-hover:h-[15px]"></div>
                      <Image src="/assets/img/icons/arwtp.svg" alt="" width={0} height={0} className="transition-all duration-500 ease-in-out group-hover:w-[14px]"/>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
