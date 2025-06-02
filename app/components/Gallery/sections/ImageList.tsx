"use client";

import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface PlatformsItem {
  categories:{
    category:string;
    images:{
      title:string;
      image:string;
      imageAlt:string;
    }[]
  }[]
}

interface PlatformsSectionProps {
  data: PlatformsItem;
}

const List = ({ data }:PlatformsSectionProps) => {
  const categories = ["All",...data.categories.map((category)=>category.category)];
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const filteredData = activeCategory === 'All'
    ? data.categories.map((item)=>item.images).flat()
    : data.categories.filter((item) => item.category === activeCategory).map((item)=>item.images).flat();


  const handleAccordionToggle = (category: string) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // delay between items
      },
    },
  };

  return (
    <section className="py-140 overflow-hidden relative">
      <div className="container">
        <div>
          {!isMobile ? (
            // Tabs (desktop)
            <div className="border-b border-secondary/40 mb-5 lg:mb-15">
              <motion.div className="flex items-center" variants={containerVariants} initial="hidden" animate="show" >
                {categories.map((category,index) => (
                  <div className="flex gap-8 items-center group" key={index}>
                    <p className={`select-none text-14 font-semibold pb-[9px] border-b-2 relative top-0.5 ${activeCategory === category ? "border-primary text-primary" : "border-transparent text-secondary"
                        } uppercase cursor-pointer transition-all duration-300 hover:text-primary hover:border-[#E11F27]`}
                      onClick={() => setActiveCategory(category)} >
                      {category}
                    </p>
                    <p className="pb-[10px] mr-8 text-secondary/20 group-last:opacity-0">|</p>
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            // Accordions (mobile)
            <div className="space-y-4 mb-6">
              {categories.map((category) => (
                <div key={category} className="border border-[#1E1E1E66] rounded-lg">
                  <button className="w-full text-left px-4 py-3 flex justify-between items-center text-14 font-semibold uppercase text-secondary hover:text-[#E11F27] transition-all duration-300"
                    onClick={() => handleAccordionToggle(category)} > {category} <span>{openAccordion === category ? "−" : "+"}</span>
                  </button>
                  {openAccordion === category && (
                    <div className="p-4">
                      <div className="  ">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[60px]">
                          {data.categories
                            .map((item) => category === "All" ? item.images : item.category === category ? item.images : [])
                            .flat()
                            .map((item, index) => (
                              <Image
                                key={index}
                                src={item.image}
                                alt={`Image ${index}`}
                                className={`w-full  h-[150px]  md:h-[200px] xl:h-[355px] object-cover col-span-1`}
                                width={100}
                                height={100}
                              />
                            ))}
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab content (only shown on desktop) */}
          {!isMobile && (
            <div>
              <div className="grid grid-cols-4 gap-4 lg:gap-[60px]">
                {filteredData.map((item, index) => (
                  <motion.div variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index} className={`relative h-[250px]  md:h-[200px] xl:h-[355px] group ${(index % 9) == 0 ? 'col-span-2' : 'col-span-1'}`}>
                    <Image key={index} src={item.image} alt={`Image ${index}`} className={`w-full h-full object-cover `} width={600} height={600}/>
                    <div className="absolute left-0 bottom-10 w-0 overflow-hidden transition-all duration-200 bg-primary group-hover:w-[75%]">
                      <h3 className="text-white font-semibold text-18 min-w-max leading-[1] uppercase p-8 mb-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default List;
