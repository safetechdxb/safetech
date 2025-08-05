"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { moveUp } from "../../motionVarients";
import Image, { StaticImageData } from "next/image";
import { Certifications } from "@/public/types/certifications";
const Certificates = ({ data }:{data:Certifications}) => {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);

  return (
    <section className="py-[50px] md:py-[60px] xl:py-[100px] overflow-hidden relative">
      <div className="container">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-25">
          {data.certifications.map((item,index) => (
            <motion.div key={index} variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="cursor-pointer" onClick={() => setSelectedImage(item.image)} >
              <div className="relative group overlbl h-full">
                <figure className="overlayclr">
                  <Image src={item.image} alt="" width={400} height={400} className="w-full object-cover" />
                </figure>
                <motion.div
                  className="absolute z-10 flex flex-col w-[97%] left-[50%] -translate-x-[50%] bottom-[10px] xxl:bottom-[20px] p-[10px] lg:p-[20px] backdrop-blur-[10px] bg-white/10 
                  text-white rounded-custom gap-[20px] group-hover:bg-primary transition-all" >
                  <motion.div className="flex justify-between items-center w-full group">
                    <h4 className="text-24 font-semibold text-white leading-[1.2] transition-opacity duration-500">{item.title}</h4>
                    <div className="flex items-center">
                      <div className="w-[8px] h-[8px] bg-primary rounded-full transition-opacity duration-500 group-hover:hidden"></div>
                      <Link href={item.file} download target="_blank">
                      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block">
                        <path d="M1 14V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V14M4 8L9 13M9 13L14 8M9 13V1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      </Link>
                      {/* <Image src="/assets/img/icons/arwtp.svg" alt="" width={0} height={0} className="transition-all duration-500 ease-in-out group-hover:w-[14px]" /> */}
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
              className="relative max-w-2xl 2xl:max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent modal from closing when clicking on image
            >
              <Image src={selectedImage} alt="Modal Image" width={400} height={400} className="w-full px-[6vw] lg:h-[90vh] md:h-[80vh] h-auto rounded-lg" />
              <button onClick={() => setSelectedImage(null)} className="absolute top-[-15%] md:top-5 2xl:top-2 right-0 2xl:right-2 text-white text-2xl cursor-pointer" >
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
