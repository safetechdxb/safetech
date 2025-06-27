"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SubTitle from "../../common/SubTitle";
import Image, { StaticImageData } from "next/image";
import { assets } from "@/public/assets/assets";
import { motion, easeOut } from "framer-motion";
import { moveUp, listUpMove } from "../../motionVarients";
interface PlatformsItem {
  id: number;
  title: string;
  desc: string;
  list: string[];
  Image: StaticImageData;
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
}
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // delay between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: easeOut } },
};
const categories = ["HIgh-rise buildings", "Residential villas", "commercial complexes", "industrial facilities"];

const Applications: React.FC<PlatformsSectionProps> = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const filteredData = data.filter((item) => item.title === activeCategory);

  const handleAccordionToggle = (category: string) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px] overflow-hidden relative bg-light-gray">
      <div className="container">
        <div className="relative tracking-[3px] max-w-[55ch] mb-8 lg:mb-[60px]">
          <SubTitle titleText="Applications" color="text-secondary" />
        </div>
        <div>
          {!isMobile ? (
            // Tabs (desktop)
            <div className="  border-b border-secondary/40 mb-5 lg:mb-[80px]">
              <motion.div className="flex items-center" variants={containerVariants} initial="hidden" animate="show" >
                {categories.map((category) => (
                  <motion.div key={category} variants={itemVariants} className="flex gap-8 items-center" >
                    <p className={`select-none text-14 font-[600] pb-[10px] border-b-2 relative top-0.5 ${activeCategory === category ? "border-primary text-primary" : "border-transparent text-secondary"
                      } uppercase cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary`}
                      onClick={() => setActiveCategory(category)} >
                      {category}
                    </p>
                    <p className="pb-[10px] mr-8 text-[#1E1E1E33]">|</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ) : (
            // Accordions (mobile)
            <div className="space-y-4 mb-6">
              {categories.map((category) => (
                <div key={category} className="border border-[#1E1E1E66] rounded-lg">
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center text-14 font-semibold uppercase text-secondary hover:text-[#E11F27] transition-all duration-300"
                    onClick={() => handleAccordionToggle(category)} >
                    {category}
                    <span>{openAccordion === category ? "−" : "+"}</span>
                  </button>
                  {openAccordion === category && (
                    <div className="p-4">
                      {data
                        .filter((item) => item.title === category)
                        .map((item) => (
                          <div key={item.id} className="lg:flex items-center">
                            <div className="w-full lg:w-1/2 pr-0 lg:pr-[34px] xl:pr-[80px]">
                              <div className="flex gap-5 items-center"  >
                                <div className="relative w-full  mx-auto">
                                  <div className="flex flex-col gap-4 mb-6 lg:mb-0">
                                    <figure >
                                      <Image src={item.Image} alt="" className="w-full h-auto object-cover" />
                                    </figure>
                                    <div className="absolute bottom-[-15px] right-0 lg:right-[auto] lg:bottom-[-40px] lg:left-0">
                                      <div className="w-10 h-20 bg-white relative z-20 group">
                                        <div className="w-10 h-10 bg-black absolute top-0 left-0 "></div>
                                        <div className="w-10 h-10 bg-primary absolute top-0 left-0 group-hover:top-[50%] transition-all duration-200"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full lg:w-1/2 pr-0 lg:pr-[44px] mt-6 lg:mt-0 ">
                              <div>
                                <p className="text-32 font-semibold leading-[1] mb-6 lg:mb-10 text-secondary/75 capitalize">  {item.title}</p>
                                <p className="text-20 leading-[1.3] text-secondary font-normal mb-6 lg:mb-10 ">  {item.desc}</p>
                                <ul>
                                  {item.list.map((list, index) => (
                                    <li key={index} className="flex items-start gap-3 text-20 font-normal last:mb-0  mb-5 leading-[1.3]">
                                      <Image src={assets.tick} alt="" width={20} height={20} />
                                      <span className="text-20 leading-[1.3] font-normal">{list}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab content (only shown on desktop) */}
          {!isMobile && (
            <div>
              {filteredData.map((item) => (
                <div key={item.id} className="lg:flex items-stretch gap-20">
                  <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full flex flex-col lg:w-3/7">
                    <Image src={item.Image} alt="" width={700} height={1000} className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full flex flex-col lg:w-4/7 pr-0 lg:pr-[44px] mt-6 lg:mt-0 ">
                      <h3 className="text-32 font-semibold leading-[1] mb-6 lg:mb-10 text-secondary capitalize">  {item.title}</h3>
                      <p className="text-20 leading-[1.3] text-secondary font-normal mb-6 lg:mb-10 ">  {item.desc}</p>
                      <ul>
                        {item.list.map((list, index) => (
                          <motion.li variants={listUpMove} initial="hidden" animate="show" key={index} className="flex items-start gap-3 text-20 text-secondary/75 font-normal last:mb-0  mb-5 leading-[1.3]">
                            <Image src={assets.tick} alt="" width={20} height={20} />
                            <span className="text-20 leading-[1.3] text-secondary/75 font-normal  ">{list}</span>
                          </motion.li>
                        ))}
                      </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Applications;
