import ArrowBtn from "../common/ArrowBtn";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import SubTitle from "../common/SubTitle";
const OurCompany = () => {
  return (
    <section className="my-[140px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4em] lg:gap-15">
          <div className="flex flex-col lg:pr-15">
            <div className="flex align-center gap-[3em] relative mb-6 lg:mb-20">
              <SubTitle titleText="Our Company" color="text-secondary" />
            </div>
            <p className="text-20 font-normal text-secondary/75 leading-[1.3]">At Safe Tech, we recognize the importance of customized solutions for various project types. Whether it&apos;s commercial spaces, residential developments, industrial facilities, accommodations, or boundary walls, we are committed to meeting the specific requirements of each project. Our team takes pride in contributing to a diverse range of developments, ensuring that every construction is built to last and enhances the spaces where people live, work, and thrive. </p>
            <ArrowBtn btnText="About Us" btnLInk="#" border={true} />
            <div className="pt-10 lg:pt-20">
              <div className="bg-secondary w-[231px] h-[40px] relative group">
                <div className="absolute top-0 right-0 w-[80px] h-[40px] bg-white group ">
                  <div className="w-[80px] h-[40px] bg-secondary "></div>
                  <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-primary group-hover:right-[-50%] duration-200 transition-all"></div>
                </div>
              </div>
              <div className="bg-secondary px-[40px]">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99667 20V17.9558H16.6526L0 1.30197L1.43028 0L18.0816 16.5243V6.87087H20.1258V20H6.99667Z" fill="#E11F27" />
                </svg>
                <div className="grid grid-cols-1 lg:grid-cols-3 py-[40px]">
                  <div className="relative group flex items-center flex-col first:block">
                    <div>
                      <small className="text-white opacity-50 uppercase">Establishment year</small>
                      <h3 className="text-white text-52 font-semibold">2024</h3>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-[1px] bg-primary group-last:hidden"></div>
                  </div>
                  <div className="relative group flex items-center flex-col first:block">
                    <div>
                      <small className="text-white opacity-50 uppercase">Work force</small>
                    <h3 className="text-white text-52 font-semibold">11000</h3>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-[1px] bg-primary group-last:hidden"></div>
                  </div>
                  <div className="relative group flex items-center flex-col first:block">
                    <div>
                      <small className="text-white opacity-50 uppercase">On-going projects</small>
                    <h3 className="text-white text-52 font-semibold">21</h3>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-[1px] bg-primary group-last:hidden"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="relative h-full">
              <div className="absolute top-[-40px] left-0 w-[40px] h-[80px] bg-white group">
                <div className="w-[40px] h-[40px] bg-secondary "></div>
                <div className="absolute top-0 left-0 w-[40px] h-[40px] bg-primary group-hover:top-[50%] duration-200 transition-all"></div>
              </div>
              <Image src={assets.OurCompany} className="w-full h-full" alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default OurCompany;