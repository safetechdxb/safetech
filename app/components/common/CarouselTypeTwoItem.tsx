import Image from "next/image";
import { StaticImageData } from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

interface CarouselTypeTwoItemProps {
  image: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  isActive: boolean;
  hideDesc?: boolean;
  isHovered?: boolean;
  index: number;
  setHoveredIndex: (index: number | null) => void;
  activeSlideWidth: number;
  activeSlideRef?: React.RefObject<HTMLDivElement | null>;
}

const CarouselTypeTwoItem = ({
  image,
  imageAlt,
  title,
  description,
  isActive,
  hideDesc,
  index,
  isHovered,
  setHoveredIndex,
  activeSlideWidth,
  activeSlideRef,
}: CarouselTypeTwoItemProps) => {
  
  const [descHeight, setDescHeight] = useState(0);
  // const visibleRef = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  // const activeSlideRef = useRef<HTMLDivElement>(null);

  const shouldShow = (isActive && !hideDesc) || isHovered;



  useLayoutEffect(() => {
    if (!hiddenRef.current || activeSlideWidth === 0) return;

    hiddenRef.current.style.width = `${activeSlideWidth}px`;
    const height = hiddenRef.current.offsetHeight;
    setDescHeight(height);
  }, [activeSlideWidth, description]);

  


  return (
    <>
      {/* Hidden measurement div (outside main layout!) */}
      <div
        ref={hiddenRef}
        className="invisible fixed top-0 left-0  px-4 lg:px-30p text-20 font-normal leading-[1.5] pointer-events-none"
      >
        <p>{description}</p>
      </div>

      {/* Actual Carousel Item */}
      <div
        ref={isActive ? activeSlideRef : undefined}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="relative overflow-hidden group flex flex-col justify-end pb-4 md:pb-6 xxl:pb-0 h-[300px] md:h-[350px] lg:h-[300px] xl:h-[463px] transition-all duration-300 ease-in-out primary-grd-type-two"
      >
        <div className="absolute inset-0 z-10 h-full w-full primary-grd-type-two opacity-70 bg-gradient-to-b from-secondary/10 to-secondary/100 group-hover:opacity-0 transition-all duration-300"></div>

        <Image
          src={image}
          alt={imageAlt}
          width={500}
          height={500}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        <div className="px-4 lg:px-30p z-30 text-white pb-4 lg:pb-6">
          <h3 className="text-24 font-medium">{title}</h3>
        </div>

        <div
          style={{
            height: shouldShow ? `${descHeight}px` : "0px",
            overflow: "hidden",
            transition: "height 0.4s ease, opacity 0.4s ease",
          }}
          className={`px-4 lg:px-30p relative z-30 text-white`}
        >
          <p className={`text-20 font-[300] mb-0 md:pb-0 leading-[1.5] transition-opacity duration-400 line-clamp-5 ${shouldShow ? 'opacity-100' : 'opacity-0'}`}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CarouselTypeTwoItem;
