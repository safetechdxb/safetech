import SubTitle from "../common/SubTitle";
import ArrowBtn from "../common/ArrowBtn";
import Image from "next/image";
import { safePodsData } from "./data";
const GallerySec = () => {
  return ( 
    <section className="py-140 bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-y-4 lg:gap-0 mb-10 md:mb-8 2xl:mb-20">
          <div className="relative ">
            <SubTitle titleText={"Gallery"} color="text-secondary" />
          </div>
          <ArrowBtn btnText="More Gallery" btnLInk="#" border={true} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-[250px] xl:auto-rows-[510px]">
          {safePodsData.galleryData.items.map((item, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image src={item.image} alt={item.imageAlt} width={500} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default GallerySec;