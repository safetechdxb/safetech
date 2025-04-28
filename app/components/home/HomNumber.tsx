"use client"
import { numberSvgs } from "./data";
import Image from "next/image"
const HomNumberSec = () => {
  // const [touched, setTouched] = useState(false)
  return (
    <section className='pt-140 bg-secondary'>
      <div className="container">
        <div className="lg:w-[50%] flex flex-col gap-5 pb-20">
          <h2 className="text-32 font-bold leading-[1] text-white uppercase w-fit">Precast concreat solutions - </h2>
          <h2 className="text-32 font-bold leading-[1] text-white uppercase w-fit self-end">The future of construction</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-b border-white/10">
        {numberSvgs.map((item, index) => (
          <div key={index} className="flex flex-col justify-between h-[20em] lg:h-[40em] py-10 border-b lg:border-b-0 border-r border-white/10 last:border-r-0 overflow-hidden 
          relative group transition-all duration-300" >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 z-[1] group-[data-touched]:opacity-20" >
              <Image src={item.bg} alt="" width={400} height={400} className="object-cover w-full h-full absolute top-0 left-0 " />
            </div>
            {/* <img src={item.svg} alt="" className="object-contain w-fit h-[80px] md:h-[100px]" /> */}
            <div className="relative w-fit flex justify-center items-center z-10">
              <Image src={item.svg} alt="" width={60} height={60} className="object-contain h-24 w-auto lg:h-auto lg:w-fit group-hover:opacity-0 transition-opacity duration-300" />

              {/* Filled SVG (only visible on hover) */}
              <Image src={item.svgfill} alt="" width={60} height={60} className="object-contain w-full h-full absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            <div className="reltive z-10 px-4 lg:px-[32px]">
              <h3 className="text-white text-22 uppercase font-semibold absolute left-4 lg:left-[32px] bottom-10 group-hover:bottom-32 z-20 duration-300 transition-all">{item.title}</h3>
              <p className="text-white text-16 font-normal opacity-0 group-hover:opacity-100 line-clamp-3">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default HomNumberSec;