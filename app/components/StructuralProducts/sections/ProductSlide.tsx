"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";
import SubTitle from "../../common/SubTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
interface PlatformsItem {
  id: number;
  image: string | StaticImageData;
  title: string;
  desc: string;
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
}
const ProductSlide: React.FC<PlatformsSectionProps> = ({ data }) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const conRefs = useRef(new Map());
  const swiperRef = useRef<SwiperType | null>(null);
  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="py-[50px] md:py-[70px] xl:py-[140px] bg-black overflow-hidden relative">
      <div className="container">
        <div className="relative tracking-[3px] max-w-[55ch] mb-5 lg:mb-[80px]">
          <SubTitle titleText="Products" color="text-white" />
        </div>
        <div className="flex ">
          <Swiper className="swpstss" modules={[Navigation, Pagination]} spaceBetween={0}
            // loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 0 },
              410: { slidesPerView: 2, spaceBetween: 0 },
              700: { slidesPerView: 3, spaceBetween: 0 },
              1300: { slidesPerView: 4, spaceBetween: 0 },
              1500: { slidesPerView: 6, spaceBetween: 0 },
            }}
            slidesPerGroup={1}
            speed={1000}
            pagination={false}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data.map((slide, index) => (

              <SwiperSlide key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(index)}
                className={`swiper-slide h-full hrcd relative bg-center bg-cover !transition-all duration-700 ${hoveredIndex === index ? "hovered-slide" : ""
                  } ${hoveredIndex !== null && hoveredIndex !== index ? "sibling-slide" : ""}`} >
                <motion.div variants={slideVariants} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="h-full lg:h-[461px]" >
                  <Image src={slide.image} alt="" width={463} height={461} className="w-full h-full object-cover" />
                  <div className="p-5 transition-all duration-500 ease-in-out w-full absolute bottom-0 z-10">
                    <h3 className="text-20 font-semibold leading-[1.2] uppercase max-w-[15ch] text-white transition-all duration-500 w-full delay-200 ">
                      {slide.title}
                    </h3>
                    <div className="text-white overflow-hidden relative top-2 text-[16px] leading-[1.3] transition-all duration-500 ease-in-out max-w-[3xl]"
                      style={{
                        maxHeight:
                          hoveredIndex === index
                            ? `${conRefs.current.get(slide.id)?.scrollHeight || 0}px`
                            : "0px",
                      }}
                      ref={(el) => {
                        if (el) {
                          conRefs.current.set(slide.id, el);
                        } else {
                          conRefs.current.delete(slide.id); // Clean up if the element is removed
                        }
                      }}
                    >
                      <p className="transition-all duration-500 delay-0 block text-white xl:min-w-[368px]">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </section>
  );
};

export default ProductSlide;
