"use client";

import Image, { StaticImageData } from "next/image";
import SubTitle from "../../common/SubTitle";
import { motion } from "framer-motion";

interface PlatformsItem {
  id: number;
  title: string;
  paragraphs: string[];
  image: string | StaticImageData;
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
}
const ImageText: React.FC<PlatformsSectionProps> = ({ data }) => {
  const paragraphItem = {
    hidden: { opacity: 0, y: 50 },  // Start with opacity 0 and slide up from 50px below
    show: {
      opacity: 1,
      y: 0,  // Slide to its normal position
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="py-140 bg-off-white overflow-hidden relative">
      <div className="container">
        <div className="lg:flex items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-[34px] xl:pr-[134px]">
            <div className="flex gap-5 items-center"  >
              <div className="relative w-full  mx-auto">
                {data.map((item) => (
                  <div key={item.id} className="flex flex-col gap-4 mb-6 lg:mb-0">
                    <motion.figure variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} >
                      <Image src={item.image} alt="" className="w-full h-auto object-cover" />
                    </motion.figure>
                    <motion.div className="absolute bottom-[-15px] right-0 lg:right-[auto] lg:bottom-[-40px] lg:left-0"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} >

                      <div className="w-10 h-20 bg-white relative z-20 group">
                        <div className="w-10 h-10 bg-black absolute top-0 left-0 "></div>
                        <div className="w-10 h-10 bg-primary absolute top-0 left-0 group-hover:top-[50%] transition-all duration-200"></div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pr-0 lg:pr-[44px] mt-6 lg:mt-0 ">
            {data.map((item) => (
              <div key={item.id}>
                <div className="relative tracking-[3px] max-w-lg mb-4 lg:mb-10">
                  <SubTitle titleText={item.title} color="text-black" />
                </div>
                <motion.div className="space-y-4" variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} >
                  {item.paragraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="text-20 text-secondary/75 font-normal mb-4 last:mb-0 leading-[1.3]" >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
