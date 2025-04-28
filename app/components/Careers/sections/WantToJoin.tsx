"use client";

import Image from "next/image";
import SubTitle from "../../common/SubTitle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { useState } from "react";
import { assets } from "@/public/assets/assets";


interface PlatformsSectionProps {
  title: string;
  description: string;
}
const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const WantToJoin: React.FC<PlatformsSectionProps> = ({

  title,
  description,
}) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    if (!file) {
      alert("No file selected.");
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, DOC, and DOCX files are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File must be smaller than 10MB.");
      e.target.value = "";
      return;
    }

    setFileName(file.name);
  };
  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px]  overflow-hidden relative">
      <div className="container">
        <div className="relative tracking-[3px]   mb-3 lg:mb-[30px]">
          <SubTitle titleText={title} color="text-black" />
        </div>
        <div className="mb-6 lg:mb-[60px]">
          <motion.div className="mb-6 lg:mb-[60px]" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} >
            <p className="text-secondary text-20 font-normal leading-[1.6] opacity-90 max-w-[60ch]">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Reusable animation wrapper for fields */}

        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px]">

          <div className="relative w-full ">
            <input type="text" placeholder="First Name"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
          </div>
          <div className="relative w-full ">
            <input type="text" placeholder="Last Name"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
          </div>
          <div className="relative w-full ">
            <input type="email" placeholder="Email"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
          </div>
          <div className="relative w-full ">
            <input type="number" placeholder="Phone Number"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
          </div>
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1  w-full mb-4 lg:mb-[30px]" >
          <div className="relative w-full flex gap-4 items-center mt-2">
            <p className="text-[16px] text-[#595959]">Gender</p>
            <div className="flex gap-4">
              {["Male", "Female", "Others"].map((gender, i) => (
                <div key={i} className="inline-flex items-center cursor-pointer mr-3">
                  <input type="radio" name="gender" value={gender.toLowerCase()} className="w-5 h-5 accent-primary outline-secondary" />
                  <label className="ml-2 text-secondary/75 font-normal">{gender}</label>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px] " >
          <div className="relative w-full ">
            <input type="text" placeholder="Date of Birth"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
            />
          </div>
          <div className="relative w-full ">
            <input type="text" placeholder="Nationality"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
            />
          </div>
          <div className="relative w-full ">
            <input type="text" placeholder="Current Location"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
            />
          </div>
          <div className="relative w-full ">
            <input type="text" placeholder="Work Experience"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
            />
          </div>

        </motion.div>


        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 gap-y-4 lg:gap-y-[30px] " >
          <div className="relative w-full ">
            <textarea placeholder="Cover Letter"
              className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full resize-none"
            />
          </div>
          <div className="w-full">
            <label htmlFor="file-upload" > <span className="text-16 text-secondary/50 font-normal leading-[1.4] block mb-3">Upload Resume</span>
            <div className="cursor-pointer bg-light-gray p-6 shadow-sm flex items-center  w-full">
              <div className="text-sm text-gray-700 flex items-center justify-left gap-4">
                <Image src={assets.note} alt="note" />
                <p>
                  {fileName || (
                    <span className="text-secondary/50 font-normal font-400 text-[16px]">
                      Max. 10 MB. pdf, doc, docx
                    </span>
                  )}
                </p>
              </div>
              <input id="file-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
            </div>
            </label>
            <motion.button variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 flex w-[150px] cursor-pointer overflow-hidden group transition duration-300 ml-auto" >
              <div className="bg-primary text-white text-[16px] font-[400] px-5 py-4 transition duration-300  ">
                SUBMIT
              </div>
              <div className="flex min-w-[100px] overflow-hidden">
                <div className="bg-black w-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition duration-300 transform group-hover:-translate-x-[50px]">
                  <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
                </div>
                <div className="bg-primary w-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition duration-300  transform group-hover:-translate-x-[50px]">
                  <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
                </div>
              </div>
            </motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WantToJoin;
