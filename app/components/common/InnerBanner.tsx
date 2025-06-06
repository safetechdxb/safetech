"use client"
import {motion} from "framer-motion";
import { moveUp } from "../motionVarients";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {assets} from "@/public/assets/assets";
import moment from "moment";

interface InnerBannerProps {
  pageTitle: string;
  bannerBg?: string | StaticImageData;
  isBlogDetails?: boolean;
  isDetailPage?:boolean;
  category?: string;
  date?: string;
}

const InnerBanner = ({pageTitle, bannerBg, isBlogDetails, category, date, isDetailPage}:InnerBannerProps) => {
  return (
    <section className="relative w-full h-[50dvh] lg:h-[540px] bg-secondary">
      {
        bannerBg && (
          <Image src={bannerBg} alt="About Us" width={1920} height={540} className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" />
        )
      }
      <div className={`absolute top-0 left-0 w-full h-full ${bannerBg ?"bg-secondary/75":""} z-1`}></div>
      <div className="container relative z-2 h-full">
        <div className="flex flex-col justify-end h-full pb-10 lg:pb-20">
          {
            !isDetailPage && !isBlogDetails &&(
              <motion.h1 variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} className={`text-white uppercase text-96 font-semibold leading-[1.3]`}>{pageTitle}</motion.h1>
            )
          }
          {
            isDetailPage && (
              <motion.h1 variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} className={`text-white uppercase text-48 max-w-6xl font-semibold leading-[1.3] ws-sm`}>{pageTitle}</motion.h1>
            )
          }
          {
            isBlogDetails && (
              <motion.h1 variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} className={`text-white text-48 max-w-6xl font-semibold leading-[1.3] mb-7 `}>{pageTitle}</motion.h1>
            )
          }
          {isBlogDetails && (
            <div className="flex items-center gap-8 text-white text-16 font-medium">
              <div className="flex items-center gap-2">
                <Image src={assets.technologyIcon} alt=""></Image>
                <p className="text-20 font-semibold text-white/75 uppercase">{category}</p>
                </div>
              <div className="flex items-center gap-2">
                <Image src={assets.calenderPrimary} alt=""></Image>
                <p className="text-20 font-semibold text-white/75 uppercase">{moment(date).format("MMM D, YYYY")}</p>
              </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-[-40px] right-0">
          <div className="w-10 h-20 bg-white relative z-20 group">
            <div className="w-10 h-10 bg-black absolute bottom-0 left-0"></div>
            <div className="w-10 h-10 bg-primary absolute bottom-0 left-0 group-hover:bottom-[50%] transition-all duration-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerBanner;