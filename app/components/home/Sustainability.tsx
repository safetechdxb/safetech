import { assets } from "@/public/assets/assets";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import ArrowBtn from "../common/ArrowBtn";
const Sustainability = () => {
  return (
    <section className="py-[140px] relative" style={{
      backgroundImage: `url(${assets.forestBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-black/80 w-full h-full"></div>
      <div className="container relative z-3">
        <div className="relative">
          <SubTitle titleText="Sustainability" color="text-white" />
        </div>
        <div className="w-1/2 ml-auto pt-4 flex flex-col gap-20">
          <div >
            <p className="text-white text-24 leading-[1.3]">At Safe Tech, sustainability is at the heart of everything we do. As a proud subsidiary of United Engineering Construction Company LLC (UNEC), we are dedicated to developing construction solutions that are both innovative and environmentally friendly. Our product range—including precast, prestressed, hollow core, GRC, and troughs—is designed with sustainability in mind, ensuring that each project we undertake helps pave the way for a greener future. </p>
          </div>
          <ul className="">
            <li className="flex gap-3 items-center mb-4 last:mb-0">
              <Image src={assets.Leaf} alt="Sustainability Image 1" className="" />
              <p className="text-white text-24 leading-[1.3]">Reduce carbon footprint through precast technologies.</p>
            </li>
            <li className="flex gap-3 items-center mb-4 last:mb-0">
              <Image src={assets.Leaf} alt="Sustainability Image 1" className="" />
              <p className="text-white text-24 leading-[1.3]">Reduce carbon footprint through precast technologies.</p>
            </li>
            <li className="flex gap-3 items-center mb-4 last:mb-0">
              <Image src={assets.Leaf} alt="Sustainability Image 1" className="" />
              <p className="text-white text-24 leading-[1.3]">Reduce carbon footprint through precast technologies.</p>
            </li>
          </ul>
          <div className="brightness-0 invert">
            <ArrowBtn btnText="More About Sustainability" btnLInk="#" border={true} />
          </div>
          </div>
        </div>
    </section>
  );
}

export default Sustainability;