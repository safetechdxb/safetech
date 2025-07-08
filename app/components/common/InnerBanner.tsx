"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { assets } from "@/public/assets/assets";
import moment from "moment";
import Breadcrumb from "./BreadCrumb";

interface InnerBannerProps {
  pageTitle: string;
  bannerBg?: string | StaticImageData;
  isBlogDetails?: boolean;
  isDetailPage?: boolean;
  category?: string;
  date?: string;
}

const InnerBanner = ({ pageTitle, bannerBg, isBlogDetails, category, date, isDetailPage }: InnerBannerProps) => {
  return (
    <section className="relative w-full h-[60vh] min-h-max lg:h-[540px] bg-secondary">
      {
        bannerBg && (
          <Image src={bannerBg} alt="About Us" width={1920} height={540} className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" />
        )
      }
      <div className={`absolute top-0 left-0 w-full h-full ${bannerBg ? "bg-secondary/75" : ""} z-1`}></div>
      <div className="container relative z-2 h-full">
        <div className="flex flex-col justify-end h-full pb-10 ">
          {
            !isDetailPage && !isBlogDetails && (
              <motion.h1 variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} className={`text-white uppercase lg:text-96 text-32 font-semibold leading-[1.3]`}>{pageTitle}</motion.h1>
            )
          }
          {
            isDetailPage && (
              <motion.h1 variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} className={`text-white uppercase text-48 
                max-w-6xl font-semibold leading-[1.3] ws-sm`}>{pageTitle}</motion.h1>
            )
          }
          {
            isBlogDetails && (
              <motion.h1 variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} className={`text-white text-48 max-w-6xl
                 font-semibold leading-[1.3] mb-7 `}>{pageTitle}</motion.h1>
            )
          }
          {/* <ul className="flex items-center gap-4 text-white text-16 font-medium uppercase pt-6 lg:pt-10">
            <li className="flex items-center gap-4 text-15 leading-[1.2] font-normal group">products <span className="group-last:hidden"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.64667L5.94949 6.45378L1 11.3533" stroke="#E11F27" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
            </li>
            <li className="flex items-center gap-4 text-15 leading-[1.2] font-normal group">Precast concrete <span className="group-last:hidden"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.64667L5.94949 6.45378L1 11.3533" stroke="#E11F27" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
              </li>
            <li className="flex items-center gap-4 text-15 leading-[1.2] font-normal group">Precast Wall panels <span className="group-last:hidden"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.64667L5.94949 6.45378L1 11.3533" stroke="#E11F27" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg></span></li>
          </ul> */}
          <Breadcrumb/>
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
        <div className="absolute lg:bottom-[-40px] bottom-[-32px] right-0">
          <div className=" lg:w-10 lg:h-20 h-16 w-8 bg-white relative z-20 group">
            <div className=" lg:w-10 lg:h-10 h-8 w-8 bg-black absolute bottom-0 left-0"></div>
            <div className=" lg:w-10 lg:h-10 h-8 w-8 bg-primary absolute bottom-0 left-0 group-hover:bottom-[50%] transition-all duration-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerBanner;