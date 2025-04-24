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
          className={`select-none text-14 font-[600] pb-[10px] border-b relative top-0.5 ${
            activeCategory === category
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
                          <div
                            key={item.id}
                            className="flex justify-between items-center border-b border-[#1E1E1E66] border-dashed mb-4 pb-4 group"
                          >
                            <p className="text-18 text-secondary group-hover:text-[#E11F27] transition-all duration-300">
                              {item.doctitle}
                            </p>
                            <div className="flex items-center gap-4">
                              <span className="uppercase px-4 py-1 bg-[#1E1E1E0D] rounded-2xl opacity-60 text-14">
                                {item.size}
                              </span>
                              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      className="stroke-[#1E1E1E] group-hover:stroke-[#E11F27] transition duration-300 "
                      d="M1 14.5V16.5C1 17.0304 1.21071 17.5391 1.58579 17.9142C1.96086 18.2893 2.46957 18.5 3 18.5H15C15.5304 18.5 16.0391 18.2893 16.4142 17.9142C16.7893 17.5391 17 17.0304 17 16.5V14.5M4 8.5L9 13.5M9 13.5L14 8.5M9 13.5V1.5 "
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
