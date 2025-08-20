"use client";

import Image from "next/image";
import SubTitle from "../../common/SubTitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { assets } from "@/public/assets/assets";
import { contactData } from "@/public/types/contactData";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { contactFormSchema } from "@/shemas/contactSchema";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from "react";

type ContactFormProps = z.infer<typeof contactFormSchema>


const GetInTouch = ({ data }: { data: contactData }) => {

  const [phoneIsFocused, setPhoneIsFocused] = useState(false);
  const recaptcha = useRef<ReCAPTCHA>(null)
    const [error,setError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit: SubmitHandler<ContactFormProps> = async (data) => {
    try {
      const captchaValue = recaptcha?.current?.getValue()
            if (!captchaValue) {
              setError("Please verify yourself to continue")
              return;
      }
      setError("")
      const response = await fetch("/api/admin/enquiry", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        reset();
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again");
    }
  };



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

        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-[140px] mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px] " >
            <div className="relative w-full ">
              <input type="text" placeholder="Name" {...register("name")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>}
            </div>
            <div className="relative w-full ">
              {/* <input type="tel" placeholder="Phone" {...register("phone")} onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
              }}
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" /> */}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    country="ae"
                    value={field.value as string}
                    onChange={field.onChange}
                    onFocus={() => setPhoneIsFocused(true)}
                    onBlur={() => setPhoneIsFocused(false)}
                    placeholder="Phone Number"
                    containerClass="w-full py-[17px]"
                    inputStyle={{
                      paddingLeft: "46px", // px-1
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${phoneIsFocused ? "#E11F27" : "rgba(0, 0, 0, 0.5)"}`, // #0066ff = primary color // border-secondary/80
                      outline: "none",
                      boxShadow: "none",
                      width: "100%",
                      fontFamily: "inherit",
                      color: "#595959", // text-secondary
                      fontSize: "16px",
                      fontWeight: "400", // font-normal
                      paddingTop: "16px",
                      paddingBottom: "26px",
                      paddingRight: "24px", // pr-6
                      borderRadius: 0,
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      paddingTop: "16px",
                      paddingBottom: "24px",
                      paddingLeft: "8px",
                    }}
                  />
                )}
              />

              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>}
            </div>
            <div className="relative w-full ">
              <input type="email" placeholder="Email" {...register("email")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
            </div>
            <div className="relative w-full">
              <input type="text" placeholder="Subject" {...register("subject")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-secondary/80 focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 text-16 font-normal py-[16px] pr-6 w-full" />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject?.message}</p>}
            </div>
          </motion.div>
          <motion.div
            className="" >
            <div className="relative w-full ">
              <textarea placeholder="Message" {...register("message")} className="px-1 appearance-none bg-transparent lg:h-[178px]
             border-0 border-b border-secondary focus:outline-none focus:ring-0 focus:border-primary text-secondary placeholder:text-secondary/75 font-normal text-16 
             py-[16px] pr-6 w-full resize-none"/>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>}
            </div>

<div className="w-full flex justify-end mb-5">
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} ref={recaptcha} className='mt-5'/>
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            
            <div className="w-full ">
              <button type="submit" disabled={isSubmitting} className="mt-2 flex w-[215px] cursor-pointer overflow-hidden group transition duration-300 ml-auto">
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
      </div>
    </section>
  );
};

export default GetInTouch;
