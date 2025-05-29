"use client";
import {motion} from "framer-motion";
import { moveUp,paragraphItem } from "../motionVarients";
import parse from "html-react-parser";

interface Props {
  mainImg?: string | StaticImageData;
  mainImageAlt?: string;
  mainDesc?: string;
  galleryImgs?: string[];
}

import { StaticImageData } from "next/image";
import Image from "next/image";
const ContentWrapper = ({mainImg,mainImageAlt,mainDesc,galleryImgs}:Props) => {
  return ( 
    <div className="flex flex-col gap-10">
      {mainImg && (
        <motion.div variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }}>
          <Image src={mainImg} alt={mainImageAlt || ""} width={1920} height={1080} className="w-full h-auto object-cover" />
        </motion.div>
      )}
      {
        mainDesc && mainDesc.split("<p><br></p>").slice(0, 1).map((desc, index) => (
          <motion.div key={index} variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="text-secondary text-20 leading-[1.3] font-normal">
            {parse(desc)}
          </motion.div>
        ))
      }
      {
        galleryImgs && galleryImgs.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mt-4">
            {galleryImgs.map((img, index) => (
              <motion.div variants={moveUp(index * 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index}>
              <Image  src={img} alt={`Gallery Image ${index + 1}`} width={1920} height={1080} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        )
      }
     <div className="flex flex-col gap-7">
     {
        mainDesc && mainDesc.split("<p><br></p>").slice(1).map((desc, index) => (
          <motion.div key={index} variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="text-secondary text-20 leading-[1.3] font-normal">
            {parse(desc)}
          </motion.div>
        ))
      }
        {/* {
          subDesc2 && (
            <motion.p variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="text-secondary text-20 leading-[1.3] font-normal mb-0">
              {subDesc2}
            </motion.p>
          )
        } */}
     </div>
    </div>
   );
}
 
export default ContentWrapper;