"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface InnerBannerProps {
  pageTitle: string;
  bannerBg: string | StaticImageData;
  font48?: boolean;
}

const InnerBanner = ({pageTitle, bannerBg,font48}:InnerBannerProps) => {
  return (
    <section className="relative w-full h-[540px] bg-[#000]">
      <Image src={bannerBg} alt="About Us" width={1920} height={540} className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
      <div className="container relative z-2 h-full">
        <div className="flex flex-col justify-end h-full pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
>
          <h1 className={`text-white font-bold uppercase ${font48 ? 'text-48' : 'text-96'}`}>{pageTitle}</h1>
        </motion.div>
        </div>

<motion.div
  className="absolute bottom-[-40px] right-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <div className="w-10 h-20 bg-white relative z-20 group">
    <div className="w-10 h-10 bg-black absolute bottom-0 left-0"></div>
    <div className="w-10 h-10 bg-primary absolute bottom-0 left-0 group-hover:bottom-[50%] transition-all duration-200"></div>
  </div>
</motion.div>
      </div>
    </section>
  );
}

export default InnerBanner;