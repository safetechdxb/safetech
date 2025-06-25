import Image from "next/image";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
interface CarouselTypeTwoItemProps {
  image: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  isActive:boolean
  hideDesc?:boolean
}
const CarouselTypeTwoItem = ({ image, imageAlt, title, description,isActive,hideDesc }: CarouselTypeTwoItemProps) => {
  const [descHeight, setDescHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);
  const shouldShow = (isActive && !hideDesc) || isHovered;


  useEffect(() => {
    if (descRef.current && shouldShow) {
      setDescHeight(descRef.current.scrollHeight );
    } else {
      setDescHeight(0);
    }
  }, [isActive, hideDesc, isHovered]);
  return (
    <div onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className="relative overflow-hidden group flex flex-col justify-end h-[200px] md:h-[350px] lg:h-[300px] xl:h-[463px] transition-all duration-300 ease-in-out primary-grd-type-two">
      <div className="absolute inset-0 z-10 h-full w-full primary-grd-type-two opacity-70 bg-gradient-to-b from-secondary/10 to-secondary/100 group-hover:opacity-0 transition-all duration-300"></div>
      <Image src={image} alt={imageAlt} width={500} height={500} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
      {/* <div className={`px-4 z-30 text-white absolute left-0 group-hover:relative group-hover:bottom-0 group-hover:translate-y-0 transition-all duration-700 type-two-carousel-title
         ${isActive && !hideDesc ? 'translate-y-0 relative bottom-0 pb-4 ' : 'translate-y-full bottom-14 pb-4 '}`}> */}
      <div className={`px-4 lg:px-30p z-30 text-white pb-4 lg:pb-6`}>
        <h3 className={`text-24 font-semibold`}>{title}</h3>
      </div>
      {/* <div className={`px-4 pb-4 relative z-30 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ${isActive && !hideDesc ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 '}`}> */}
      {/* <div
        ref={descRef}
        style={{ height: descHeight, overflow: 'hidden', transition: 'height 0.5s ease, opacity 0.4s ease' }}
        className={`px-4 pb-4 relative z-30 text-white ${isActive && !hideDesc ? 'opacity-100' : 'opacity-0'
          }`}
      > */}
      {/* <div
        ref={descRef}
        style={{
          height: descHeight,
          overflow: "hidden",
          transition: "height 0.5s ease, opacity 0.4s ease",
        }}
        className={`px-4 pb-4 relative z-30 text-white ${shouldShow ? "opacity-100" : "opacity-0"
          }`}
      > */}
      <div
        ref={descRef}
        style={{
          height: descHeight,
          overflow: "hidden",
          transition: "height 0.5s ease, opacity 0.4s ease",
        }}
        className={`px-4 lg:px-30p pb-4 relative z-30 text-white ${shouldShow ? "opacity-100" : "opacity-0"
          }`}
      >
        <p className={`text-20 font-normal leading-[1.5] group-hover:opacity-100 lg:max-w-[250px] ${isActive && !hideDesc ? 'opacity-100' : 'opacity-0'} overflow-hidden transition-all duration-700`}>{description}</p>
      </div>
    </div>
  );
}

export default CarouselTypeTwoItem;