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
import { submitCareerForm } from "../../action";
import { useActionState } from "react";
import { useEffect, useRef } from "react";


const initialState = { success: false, errors: {} as Record<string, string> };

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

  const [state, formAction] = useActionState(submitCareerForm, initialState);

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset(); // Clear all fields
    }
  }, [state.success]);
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
      setFileName("");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File must be smaller than 10MB.");
      e.target.value = "";
      setFileName("");
      return;
    }

    setFileName(file.name);
  };

  return (
    <section className="py-140 overflow-hidden relative">
      <div className="container">
        <div className="relative tracking-[3px] mb-3 md:mb-5 lg:mb-30p">
          <SubTitle titleText={title} color="text-black" />
        </div>
        <div className="mb-6 lg:mb-15">
          <motion.div className="mb-6 lg:mb-[60px]" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} >
            <p className="text-secondary text-20 font-normal leading-[1.6] opacity-90 max-w-[60ch]">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Reusable animation wrapper for fields */}
        <form action={formAction} ref={formRef}>
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px]">

            <div className="relative w-full">
              <input type="text" placeholder="First Name" name="firstName"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.firstName && <p className="text-red-500 text-sm mt-1">{state.errors.firstName}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Last Name" name="lastName"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.lastName && <p className="text-red-500 text-sm mt-1">{state.errors.lastName}</p>}
            </div>
            <div className="relative w-full ">
              <input type="email" placeholder="Email" name="email"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>
            <div className="relative w-full ">
              <input type="tel" placeholder="Phone Number" name="phone" inputMode="tel" pattern="[\d+\-\s\(\)]{7,}"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.phone && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1  w-full mb-4 lg:mb-[30px]" >
            <div className="relative w-full flex gap-4 items-center mt-2">
              <p className="text-[16px] text-secondary/50 font-normal">Gender</p>
              <div className="flex gap-4">
                {["Male", "Female", "Others"].map((gender, i) => (
                  <div key={i} className="inline-flex items-center cursor-pointer mr-3">
                    <input type="radio" name="gender" value={gender.toLowerCase()} className="w-5 h-5 accent-primary outline-secondary" />
                    <label className="ml-2 text-secondary/75 font-normal">{gender}</label>
                  </div>
                ))}
                {state.errors?.gender && <p className="text-red-500 text-sm mt-1">{state.errors.gender}</p>}
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px] " >
            <div className="relative w-full ">
              <input type="text" placeholder="Date of Birth" name="dob"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {state.errors?.dob && <p className="text-red-500 text-sm mt-1">{state.errors.dob}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Nationality" name="nationality"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {state.errors?.nationality && <p className="text-red-500 text-sm mt-1">{state.errors.nationality}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Current Location" name="currentNation"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {state.errors?.currentNation && <p className="text-red-500 text-sm mt-1">{state.errors.currentNation}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Work Experience" name="experience"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {state.errors?.experience && <p className="text-red-500 text-sm mt-1">{state.errors.experience}</p>}
            </div>

          </motion.div>


          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 gap-y-4 lg:gap-y-[30px] " >
            <div className="relative w-full ">
              <textarea placeholder="Cover Letter" name="coverLetter"
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full resize-none lg:h-140"
              />
              {state.errors?.coverLetter && <p className="text-red-500 text-sm mt-1">{state.errors.coverLetter}</p>}
            </div>
            <div className="w-full lg:h-140 ">
              <label htmlFor="file-upload" className="h-full flex flex-col justify-end"> <span className="text-16 text-secondary/50 font-normal leading-[1.4] block mb-3">Upload Resume</span>
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
                  <input name="file" id="file-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                  {state.errors?.file && <p className="text-red-500 text-sm mt-1">{state.errors.file}</p>}
                </div>
              </label>
            </div>


          </motion.div>
          <div className="w-full flex justify-end">
            <motion.button type="submit" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex w-[150px] cursor-pointer overflow-hidden group transition duration-300 ml-auto" >
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
        </form>
        {state.success && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
      </div>
    </section>
  );
};

export default WantToJoin;