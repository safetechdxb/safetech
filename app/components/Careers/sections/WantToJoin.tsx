"use client";

import Image from "next/image";
import SubTitle from "../../common/SubTitle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion, easeOut } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/public/assets/assets";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { careerFormSchema } from "@/shemas/careerSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useJobSelectContext } from "@/app/contexts/jobSelectContext";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReCAPTCHA from 'react-google-recaptcha';

type CareerFormProps = z.infer<typeof careerFormSchema>

interface PlatformsSectionProps {
  title: string;
  description: string;
  openings: {
    title: string;
    mode: string;
    jobType: string;
  }[];
}
const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};
const WantToJoin: React.FC<PlatformsSectionProps> = ({
  title,
  description,
  openings,
}) => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(careerFormSchema),
  })


  const { jobSelect } = useJobSelectContext();
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const recaptcha = useRef<ReCAPTCHA>(null)
  const [error, setError] = useState("")



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
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

    setValue("file", file, { shouldValidate: true });
    setFileName(file.name);
  };

  const onSubmit: SubmitHandler<CareerFormProps> = async (data) => {
    const captchaValue = recaptcha?.current?.getValue()
    if (!captchaValue) {
      setError("Please verify yourself to continue")
      return;
    }
    setError("")
    if (fileName) {
      const fileFormData = new FormData();
      fileFormData.append("file", file as File);
      fileFormData.append("fileType", "file");
      const fileResponse = await fetch("/api/admin/upload", {
        method: "POST",
        body: fileFormData,
      });
      if (fileResponse.status == 200) {
        const fileData = await fileResponse.json();
        const formData = new FormData();
        formData.append("file", fileData.url);
        formData.append("fileType", "file");
        formData.append("position", data.position);
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        formData.append("phone", data.phone as unknown as string);
        formData.append("gender", data.gender);
        formData.append("dob", data.dob);
        formData.append("nationality", data.nationality);
        formData.append("currentLocation", data.currentLocation);
        formData.append("experience", data.experience as unknown as string);
        formData.append("coverLetter", data.coverLetter);
        const formResponse = await fetch("/api/admin/careers", {
          method: "POST",
          body: formData,
        });
        if (formResponse.ok) {
          const formdata = await formResponse.json();
          alert(formdata.message);
          reset();
          setValue("position", "");
          setFileName("");
        }
      }
    }
  };

  useEffect(() => {
    if (jobSelect) {
      setValue("position", jobSelect, { shouldValidate: true });
    }
  }, [jobSelect]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "auto";
    }
  }, [open]);


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
        <form onSubmit={handleSubmit(onSubmit)} id="wantToJoin">
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px]">

            <div className="relative w-full">
              <input type="text" placeholder="First Name" {...register("firstName")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName?.message}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Last Name" {...register("lastName")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName?.message}</p>}
            </div>
            <div className="relative w-full ">
              <input type="email" placeholder="Email" {...register("email")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
            </div>
            <div className="relative w-full py-[16px]">
              {/* <input type="tel" placeholder="Phone Number" {...register("phone")} inputMode="tel" pattern="[\d+\-\s\(\)]{7,}"
                className="pl-31 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full" /> */}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    country="ae"
                    value={field.value as string}
                    onChange={phone => field.onChange(phone)}
                    placeholder="Phone Number"
                    containerClass="w-full"
                    inputStyle={{ // equivalent to pl-31 (31 * 4px = 124px)
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid #e4e5e4", // matches border-[#ieieie]
                      outline: "none",
                      boxShadow: "none",
                      width: "100%",
                      fontFamily: "inherit",
                      color: "#595959", // replace with your theme value
                      fontSize: "16px",
                      fontWeight: "400",
                      paddingTop: "16px",
                      paddingBottom: "25px", // equivalent to pr-6
                      borderRadius: 0,
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      paddingTop: "16px",
                      paddingBottom: "25px",
                      paddingLeft: "8px",
                    }}
                  />
                )}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid lg:grid-cols-2  w-full mb-4 lg:mb-[30px] gap-x-22" >
            <div className="relative w-full lg:flex lg:gap-4 lg:items-center mt-2 flex gap-y-2 flex-col lg:flex-row">
              <p className="text-[16px] text-secondary/50 font-normal">Gender</p>
              <div className="flex lg:gap-4">
                {["Male", "Female", "Others"].map((gender, i) => (
                  <Controller
                    key={i}
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <div className="inline-flex items-center cursor-pointer mr-3">
                        <input type="radio" {...field} value={gender.toLowerCase()} className="w-5 h-5 accent-primary outline-secondary" />
                        <label className="ml-2 text-secondary/75 font-normal lg:text-[16px] text-[12px]">{gender}</label>
                      </div>
                    )}
                  />
                ))}
              </div>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender?.message}</p>}
            </div>

            <div className="relative w-full lg:flex lg:gap-4 lg:items-center mt-2 flex gap-y-2 flex-col lg:flex-row">
              <p className="text-[16px] text-secondary/50 font-normal">Position</p>
              <div className="flex gap-4 w-full">
                <Controller
                  name="position"
                  control={control}
                  rules={{ required: "Position is required" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      value={field.value as string}
                      defaultValue=""
                      open={open}
                      onOpenChange={setOpen}
                    >
                      <SelectTrigger className="w-full border-0 border-b border-[#e4e5e4] outline-none focus:outline-none focus:ring-0 focus:border-b shadow-none rounded-none">
                        <SelectValue
                          placeholder="Select Position"
                          className="text-secondary"
                        />
                      </SelectTrigger>

                      <SelectContent className="border-none shadow-none outline-none ring-0 focus:ring-0 focus:outline-none">
                        {openings.map((opening, i) => (
                          <SelectItem
                            key={i}
                            value={opening.title}
                            className="text-secondary focus:bg-transparent focus:outline-none focus:ring-0 focus:border-none hover:bg-gray-100"
                          >
                            {opening.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                  )}
                />
              </div>
              {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position?.message}</p>}
            </div>
          </motion.div>


          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 mb-4 lg:mb-7 gap-y-4 lg:gap-y-[30px] " >
            <div className="relative w-full ">
              <input type="text" placeholder="Date of Birth" {...register("dob")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob?.message}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Nationality" {...register("nationality")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality?.message}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Current Location" {...register("currentLocation")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {errors.currentLocation && <p className="text-red-500 text-sm mt-1">{errors.currentLocation?.message}</p>}
            </div>
            <div className="relative w-full ">
              <input type="text" placeholder="Work Experience" {...register("experience")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full"
              />
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience?.message}</p>}
            </div>

          </motion.div>


          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-20 gap-y-4 lg:gap-y-[30px] " >
            <div className="relative w-full ">
              <textarea placeholder="Cover Letter" {...register("coverLetter")}
                className="px-1 appearance-none bg-transparent border-0 border-b border-[#ieieie] focus:outline-none focus:ring-0 focus:border-primary text-secondary text-16 font-normal py-[16px] pr-6 w-full resize-none lg:h-140"
              />
              {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter?.message}</p>}
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
                  <input {...register("file")} id="file-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                  {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file?.message}</p>}
                </div>
              </label>
            </div>


          </motion.div>

<div className="w-full flex justify-end">
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} ref={recaptcha} className='mt-5'/>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
</div>

          <div className="w-full flex justify-end">
            <motion.button disabled={isSubmitting} type="submit" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
              className={`mt-8 flex w-[150px] ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} overflow-hidden group transition duration-300 ml-auto`} >
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
        {/* {success && <p className="text-green-500 mt-4">Form submitted successfully!</p>} */}
      </div>
    </section>
  );
};

export default WantToJoin;