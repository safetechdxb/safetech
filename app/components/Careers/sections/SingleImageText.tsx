"use client";
import Image, { StaticImageData } from "next/image";
import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import SubTitle from "../../common/SubTitle";

interface PlatformsItem {
  id: number;
  title: string;
  paragraphs: string[];
  image: string | StaticImageData;
}
interface PlatformsSectionProps {
  data: PlatformsItem[];
  heading: string;
  description: string;
}

const SingleImageText: React.FC<PlatformsSectionProps> = ({
  data,
  heading,
  description,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);


  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.4 } },
  };
  return (
    <section className="pt-[50px] md:pt-[70px] xl:pt-[100px] pb-0 md:pb-[70px] xl:pb-[100px]   overflow-hidden relative ">
      <div className="container">
        <div className="lg:flex lg:items-center xxl:items-start">
          <div className="w-full lg:w-[51%] pr-0 lg:pr-[35px] xl:pr-[142px]">
            {data.map((item) => (
              <motion.div className=" hidden first:block" key={item.id}
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              exit="exit">
                <figure className="image-wrapper h-full ">
                  <Image
                    src={item.image}
                    alt="A beautiful view"
                    className="rounded-[15px] w-full object-cover "
                    priority
                  />
                </figure>
              </motion.div>
            ))}
          </div>

          <div className="w-full lg:w-[49%] pl-0   mt-6 lg:mt-0">
            <div className="relative tracking-[3px]  mb-4 lg:mb-[30px]">
          <SubTitle titleText={heading} color="text-black" />
            </div>
            <p className="font-normal text-20 leading-[1.4] text-secondary opacity-75 mb-5 lg:mb-[40px]">{description}</p>
  {data.map((da, index) => (
    <motion.div
      key={index}
      className="group border-b first:border-t border-[#00000015] py-5  lg:py-[20px] xxl:py-[30px] group transition-all duration-300"
      onMouseEnter={() => setActiveIndex(index)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >

      <h3
          className={`text-20 leading-[1] transition-all duration-300 cursor-pointer
             group-hover:text-primary group-hover:font-[600]
            ${activeIndex === index ? 'text-primary font-[600]' : 'text-secondary font-[400] '}
          `}
        > {da.title}
        </h3>

      <AnimatePresence mode="wait">
        {activeIndex === index && (
          <>
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "20px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4 }}
            className="text-territory text-[16px] font-[400] leading-[1.7] text-secondary "
          >
            <p className="opacity-75">{da.paragraphs}</p>
          </motion.div></>
        )}
      </AnimatePresence>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default SingleImageText;
