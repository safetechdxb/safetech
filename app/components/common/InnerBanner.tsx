import Image from "next/image";
import { StaticImageData } from "next/image";
import {assets} from "@/public/assets/assets";
interface InnerBannerProps {
  pageTitle: string;
  bannerBg?: string | StaticImageData;
  isBlogDetails?: boolean;
  category?: string;
  date?: string;
}

const InnerBanner = ({pageTitle, bannerBg, isBlogDetails, category, date}:InnerBannerProps) => {
  return (
    <section className="relative w-full h-[540px] bg-[#000]">
      {
        bannerBg && (
          <Image src={bannerBg} alt="About Us" width={1920} height={540} className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" />
        )
      }
      <div className={`absolute top-0 left-0 w-full h-full bg-secondary ${bannerBg?"opacity-50":""} z-1`}></div>
      <div className="container relative z-2 h-full">
        <div className="flex flex-col justify-end h-full pb-20">
          <h1 className={`text-white mb-7 ${isBlogDetails ? "text-48 max-w-6xl font-semibold leading-[1.3]" :"text-96 font-bold"}`}>{pageTitle}</h1>
          {isBlogDetails && (
            <div className="flex items-center gap-8 text-white text-16 font-medium">
              <div className="flex items-center gap-2">
                <Image src={assets.technologyIcon} alt=""></Image>
                <p className="text-20 font-semibold text-white/75">{category}</p>
                </div>
              <div className="flex items-center gap-2">
                <Image src={assets.calenderPrimary} alt=""></Image>
                <p className="text-20 font-semibold text-white/75">{date}</p>
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