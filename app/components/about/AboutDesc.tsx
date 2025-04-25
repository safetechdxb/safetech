import SubTitle from "../common/SubTitle";
import { aboutMainDesc } from "./data";
import Image from "next/image";
const AboutDesc = () => {
  return ( 
    <section className="py-[140px] bg-light-gray">
      <div className="container">
        <div className="flex gap-10 lg:gap-15 items-center">
          <div className="w-full lg:w-1/2 lg:pr-20">
            <div className="relative">
              <Image src={aboutMainDesc.mainImg} alt="Our Company" width={400} height={400} className="w-full"></Image>
              <div className="absolute bottom-[-40px] left-0">
                <div className="w-10 h-20 bg-white relative z-20 group">
                  <div className="w-10 h-10 bg-black absolute top-0 left-0 "></div>
                  <div className="w-10 h-10 bg-primary absolute top-0 left-0 group-hover:top-[50%] transition-all duration-200"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="relative mb-10">
              <SubTitle titleText={aboutMainDesc.title} color="text-secondary" />
            </div>
              <h2 className="text-32 font-semibold text-primary mb-6 leading-[1.5] lg:max-w-[60%]">{aboutMainDesc.subTitle}<span className="text-black">{aboutMainDesc.subTitleSpan}</span> </h2>
              <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-5">{aboutMainDesc.desc}</p>
              <p className="text-20 leading-[1.3] font-normal text-secondary/75 text-body-color mb-0">{aboutMainDesc.desc2}</p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default AboutDesc;