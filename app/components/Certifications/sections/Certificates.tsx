"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  return (
    <section className="py-[50px] md:py-[60px] xl:py-[100px] overflow-hidden relative">
      <div className="container">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-25">
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={moveUp(item.id * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative group overlbl h-full">
                <figure className="overlayclr">
                  <Image src={item.image} alt="" className="w-full object-cover" />
                </figure>
                <motion.div
                  className="absolute z-10 flex flex-col inset-x-[10px] xxl:inset-x-[20px] bottom-[10px] xxl:bottom-[20px] p-[10px] lg:p-[20px] backdrop-blur-[10px] bg-white/10 text-white rounded-custom gap-[20px] group-hover:bg-primary transition-all"
                >
                  <motion.div className="flex justify-between items-center w-full group">
                    <h4 className="text-24 font-semibold text-white leading-[1.2] transition-opacity duration-500">
                      {item.title}
                    </h4>
                    <div className="flex items-center">
                      <div className="w-[8px] h-[8px] bg-primary rounded-full transition-opacity duration-500 opacity-100 group-hover:bg-white group-hover:w-[15px] group-hover:h-[15px]"></div>
                      <Image
                        src="/assets/img/icons/arwtp.svg"
                        alt=""
                        width={0}
                        height={0}
                        className="transition-all duration-500 ease-in-out group-hover:w-[14px]"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // close on background click
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent modal from closing when clicking on image
            >
              <Image src={selectedImage} alt="Modal Image" className="w-[60dvh] h-auto rounded-lg" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-[-15%] lg:top-2 right-2 text-white text-2xl cursor-pointer"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
