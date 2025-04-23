"use client";

import Image, { StaticImageData } from "next/image";
import SubTitle from "../../common/SubTitle";





interface PlatformsItem {
  id: number;
  title: string;
  paragraphs: string[];
  image: string | StaticImageData;
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
}
const ImageText: React.FC<PlatformsSectionProps> = ({ data }) => {

  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px] bg-off-white overflow-hidden relative">
      <div className="container">
      <div className="lg:flex items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-[34px] xl:pr-[134px]">
          <div className="flex gap-5 items-center"  >
              <div className="relative w-full  mx-auto">
              {data.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 mb-6 lg:mb-0">
                  <figure >
                    <Image
                      src={item.image}
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </figure>
                  <div className="absolute bottom-[-15px] right-0 lg:right-[auto] lg:bottom-[-40px] lg:left-0">
                <div className="w-10 h-20 bg-white relative z-20 group">
                  <div className="w-10 h-10 bg-black absolute top-0 left-0 "></div>
                  <div className="w-10 h-10 bg-primary absolute top-0 left-0 group-hover:top-[50%] transition-all duration-200"></div>
                </div>
              </div>
                </div>
              ))}
            </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pr-0 lg:pr-[44px] mt-6 lg:mt-0 ">
          {data.map((item) => (
            <div key={item.id}>
              <div className="relative tracking-[3px] max-w-[55ch] mb-4 lg:mb-10">
              <SubTitle titleText={item.title} color="text-black" />
                </div>
                {item.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-20 text-secondary mb-4 last:mb-0 leading-[1.3]">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
