"use client";

import Image, { StaticImageData } from "next/image";
import SubTitle from "../../common/SubTitle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface PlatformsItem {
  id: number;
  image: StaticImageData;
  title: string;
  paragraphs: string;
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
  title: string;
  description: string;
}
const Benifits: React.FC<PlatformsSectionProps> = ({
  data,
  title,
  description,
}) => {
  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px] bg-black overflow-hidden relative">
      <div className="container">
        <div className="relative tracking-[3px]   mb-3 lg:mb-[30px]">
          <SubTitle titleText={title} color="text-white" />
        </div>
        <div className="mb-6 lg:mb-[60px]">
          <p className="text-white text-20 font-normal leading-[1.6] opacity-90 max-w-[60ch]">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="px-6 py-8 lg:pl-6  lg:pr-3 lg:py-12 bg-white hover:bg-primary group    transition-all duration-500  justify-center "
            >
              <div className="mb-5 pb-5 lg:mb-10 lg:pb-10 border-b border-[#F5F5F5] group-hover:border-white transition-all duration-500">
                <div className=" w-[45px] h-[45px] lg:w-[80px] lg:h-[80px]  bg-primary group-hover:bg-white relative flex items-center justify-center transition-all duration-500 ">
                  <Image src={item.image} alt="" className=" brightness-[0] invert-[1] group-hover:brightness-[1]  group-hover:invert-[0]" />
                </div>
              </div>
              <h3 className="text-20 font-semibold text-[#101010] group-hover:text-white mb-5 transition-all duration-500">
                {item.title}
              </h3>
              <p className="text-20 font-normal  text-secondary leading-[1.6] group-hover:text-white transition-all duration-500">
                {item.paragraphs}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
