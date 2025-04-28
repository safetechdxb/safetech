"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface PlatformsItem {
  id: number;
  doctitle: string;
  size: string;
  category: string;
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
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Controls the stagger effect (delay for each item)
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 50 },  // Start with opacity 0 and slide up
  show: {
    opacity: 1,
    y: 0,  // Slide into place
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const categories = ["Safety", "Product brochure", "Industry guides", "Safety information"];

const List: React.FC<PlatformsSectionProps> = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const filteredData = data.filter((item) => item.category === activeCategory);

  const handleAccordionToggle = (category: string) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px] overflow-hidden relative">
      <div className="container">
        <div>
          {!isMobile ? (
            // Tabs (desktop)

            <div className="border-b border-[#1E1E1E66] mb-5 lg:mb-[80px]">
              <motion.div className="flex items-center" variants={containerVariants} initial="hidden" animate="show" >
                {categories.map((category) => (
                  <motion.div key={category} variants={itemVariants} className="flex gap-[16px] items-center" >
                    <p
                      className={`select-none text-14 font-[600] pb-[10px] border-b relative top-0.5 ${activeCategory === category
                          ? "border-[#E11F27] text-[#E11F27]"
                          : "border-transparent text-secondary"
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
                      {data
                        .filter((item) => item.category === category)
                        .map((item) => (
                          <div key={item.id} className="flex justify-between items-center border-b border-[#1E1E1E66] border-dashed mb-4 pb-4 group" >
                            <p className="text-18 text-secondary group-hover:text-[#E11F27] transition-all duration-300">
                              {item.doctitle}
                            </p>
                            <div className="flex items-center gap-4">
                              <span className="uppercase px-4 py-1 bg-[#1E1E1E0D] rounded-2xl opacity-60 text-14">
                                {item.size}
                              </span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none" className="cursor-pointer" >
                                <path
                                  className="stroke-[#1E1E1E] group-hover:stroke-[#E11F27] transition duration-300 "
                                  d="M1 14.5V16.5C1 17.0304 1.21071 17.5391 1.58579 17.9142C1.96086 18.2893 2.46957 18.5 3 18.5H15C15.5304 18.5 16.0391 18.2893 16.4142 17.9142C16.7893 17.5391 17 17.0304 17 16.5V14.5M4 8.5L9 13.5M9 13.5L14 8.5M9 13.5V1.5 "
                                  strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"
                                />
                              </svg>
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
            <motion.div
              variants={listContainer}
              initial="hidden"
              animate="show"
            >
              {filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  variants={listItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="md:flex justify-between group items-center border-b border-[#1E1E1E66] border-dashed mb-7 pb-7 md:mb-[30px] md:pb-[30px]"
                >
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <p className="text-24 text-secondary group-hover:text-[#E11F27] transition-all duration-300">
                      {item.doctitle}
                    </p>
                  </div>
                  <div className="w-full md:w-2/3 flex justify-between items-center group">
                    {/* svg + size + download icon */}

                    <div className="flex items-center w-full justify-between">
                      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.97 13H3V19H4V17H4.97C6.08 17 6.98 16.08 6.98 14.98C6.98 13.88 6.08 13 4.97 13ZM4.97 16H4V14H4.97C5.53 14 5.98 14.44 5.98 14.98C5.98 15.52 5.52 16 4.97 16ZM10 13C9.94 13 8 13 8 13V19C8 19 9.94 19 10 19C11.11 19 12 18.11 12 17.02V14.99C12 13.9 11.11 13.01 10 13.01V13ZM11 17.02C11 17.55 10.57 17.98 10.04 18H9V14H10.04C10.57 14.02 11 14.46 11 14.98V17.01V17.02ZM13 13H17V14H14V16H16V17H14V19H13V13ZM12.71 0H2.5C1.12 0 0 1.12 0 2.5V24H20V7.29L12.71 0ZM13 1.71L18.29 7H13V1.71ZM1 23V2.5C1 1.67 1.67 1 2.5 1H12V8H19V23H1Z" fill="#1E1E1E" />
                      </svg>

                      <span className="uppercase px-4 py-1 bg-[#1E1E1E0D] rounded-2xl opacity-60 text-18 font-normal">
                        {item.size}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none" className="cursor-pointer" >
                        <path
                          className="stroke-[#1E1E1E] group-hover:stroke-[#E11F27] transition duration-300 "
                          d="M1 14.5V16.5C1 17.0304 1.21071 17.5391 1.58579 17.9142C1.96086 18.2893 2.46957 18.5 3 18.5H15C15.5304 18.5 16.0391 18.2893 16.4142 17.9142C16.7893 17.5391 17 17.0304 17 16.5V14.5M4 8.5L9 13.5M9 13.5L14 8.5M9 13.5V1.5 "
                          strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* No changes needed inside here */}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          )}
        </div>
      </div>
    </section>
  );
};

export default List;
