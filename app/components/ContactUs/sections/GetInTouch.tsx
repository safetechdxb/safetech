"use client";

import Image from "next/image";
import SubTitle from "../../common/SubTitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { assets } from "@/public/assets/assets";
import { submitContactForm } from "../../action";
import { useActionState } from "react";
import { contactData } from "@/public/types/contactData";
import { useEffect, useRef } from "react";


const initialState = { success: false, errors: {} as Record<string, string> };


const GetInTouch = ({ data }: { data: contactData }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContactForm, initialState);
  
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset(); // Clear all fields
    }
  }, [state.success]);


  return (
    <section className="py-140 overflow-hidden relative" id="enq-form">
      <div className="container">
        <div className="relative tracking-[3px]   mb-3 lg:mb-[30px]">
          <SubTitle titleText={data.title} color="text-black" />
        </div>
        <div className="mb-6 lg:mb-[60px]">
          <p className="text-secondary text-20 font-normal leading-[1.6] opacity-90 max-w-[60ch]">
            {/* {data.description} */}
            Have a question or need assistance? Our team is here to help! Reach out to us, and we &apos; ll get back to you as soon as possible.
          </p>
        </div>

        <form action={formAction} ref={formRef}>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-[140px] mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px] " >
            <div className="relative w-full ">
              <input type="text" placeholder="Name" name="name"
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
            </div>
            <div className="relative w-full ">
              <input type="tel" placeholder="Phone" name="phone" onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
              }}
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.phone && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
            </div>
            <div className="relative w-full ">
              <input type="email" placeholder="Email" name="email"
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Subject" name="subject"
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" />
              {state.errors?.subject && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
            </div>
          </motion.div>
          <motion.div
            className="" >
            <div className="relative w-full ">
              <textarea placeholder="Message" name="message" className="px-1 appearance-none bg-transparent lg:h-[178px]
             border-0 border-b border-secondary focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 font-normal text-16 
             py-[16px] pr-6 w-full resize-none"/>
              {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
            </div>
            <div className="w-full ">
              <button type="submit" className="mt-2 flex w-[215px] cursor-pointer overflow-hidden group transition duration-300 ml-auto">
                <div className="bg-primary text-white text-[16px] font-[400] px-2 py-4 transition duration-300 min-w-[165px]">
                   Send Message </div>
                <div className="flex min-w-[100px] overflow-hidden">
                  <div className="bg-black w-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition duration-300 transform group-hover:-translate-x-[50px]">
                    <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
                  </div>
                  <div className="bg-primary w-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition duration-300  transform group-hover:-translate-x-[50px]">
                    <Image src={assets.arrowwhite} alt="arrow" width={16} height={16} />
                  </div>
                </div>
              </button>
              
            </div>
          </motion.div>
        </form>
        {/* Show validation errors */}
        {/* {Object.keys(state.errors).length > 0 && (
          <ul className="text-red-500 mt-4">
            {Object.entries(state.errors).map(([key, err], idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )} */}

        {/* Optional success message */}
        {state.success && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
      </div>
    </section>
  );
};

export default GetInTouch;
