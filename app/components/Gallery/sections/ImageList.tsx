"use client";

import { motion } from "framer-motion";
import Image ,{ StaticImageData } from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface PlatformsItem {
  id: number;
  image:  StaticImageData;
  category: string;
  isWide: boolean;
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
}
const categories = ["All", "projects", "Precast", "prestress", "hollow core", "Throughs", "grc", "steel reinforcement", "modular prefab"];

const List: React.FC<PlatformsSectionProps> = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const filteredData = activeCategory === 'All'
  ? data
  : data.filter((item) => item.category === activeCategory);

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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };
  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px] overflow-hidden relative">
      <div className="container">
        <div>
          {!isMobile ? (
            // Tabs (desktop)
            <div className="  border-b border-[#1E1E1E66] mb-5 lg:mb-[80px]">
              <motion.div
    className="flex items-center"
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
                {categories.map((category) => (
                <motion.div
                        key={category}
                        variants={itemVariants}
                        className="flex gap-[16px] items-center"
                      >
                  <p

                  className={` select-none text-14 font-[600] pb-[10px] border-b relative top-0.5 ${
                    activeCategory === category ? "border-[#E11F27] text-[#E11F27]" : "border-transparent text-secondary"
                  } uppercase cursor-pointer transition-all duration-300 hover:text-[#E11F27] hover:border-[#E11F27]`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </p>
                <p className="pb-[10px] mr-[16px] text-[#1E1E1E33]">|</p>

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
                    onClick={() => handleAccordionToggle(category)}
                  >
                    {category}
                    <span>{openAccordion === category ? "−" : "+"}</span>
                  </button>
                  {openAccordion === category && (
                    <div className="p-4">
                    <div className="  ">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[60px]">
                        {data
                    .filter((item) => category === "All" || item.category === category)
                    .map((item, index) => (
                              <Image
                                key={index}
                                src={item.image}
                                alt={`Image ${index}`}
                                className={`w-full  h-[150px]  md:h-[200px] xl:h-[355px] object-cover ${
                                  item.isWide ? 'col-span-2' : 'col-span-1'
                                }`}
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
            <div className="  ">
              <div className="grid grid-cols-4 gap-4 lg:gap-[60px]">
                {filteredData.map((img, index) => (
                  <Image
                    key={index}
                    src={img.image}
                    alt={`Image ${index}`}
                    className={`w-full  h-[250px]  md:h-[200px] xl:h-[355px] object-cover ${
                      img.isWide ? 'col-span-2' : 'col-span-1'
                    }`}
                  />
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
