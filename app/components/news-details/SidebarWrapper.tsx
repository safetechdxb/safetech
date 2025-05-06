"use client"
import { motion } from "framer-motion";
import { moveLeft } from "../motionVarients";
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { newsEvents } from "../news/data";
const SidebarWrapper = () => {
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')      // Remove special characters
      .replace(/\s+/g, '-')              // Replace spaces with -
      .replace(/-+/g, '-');              // Remove multiple dashes
  };
  return (
    <aside>
      <h3 className="text-[#333333] text-16 font-normal mb-[10px]">Share</h3>
      <div>
        <ul className="flex border-1 border-primary w-fit mb-10">
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.sharePrimary} alt="Facebook" width={12} height={16.62} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.facebookPrimary} alt="LinkedIn" width={12} height={15.71} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.linkedinPrimary} alt="Instagram" width={14} height={14} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
          <li className="border-r cursor-pointer border-primary last:border-0 flex justify-center items-center w-10 h-10 hover:bg-primary transition-all duration-200 group"><Link href="#"><Image src={assets.instagramPrimary}
            alt="Twitter" width={12} height={10.6} className="flex w-auto fill-primary group-hover:brightness-0 group-hover:invert" /></Link></li>
        </ul>
        <div>
          <h3 className="text-20 font-semibold leading-[1.3] text-[#333333] mb-5">Breaking News</h3>
          <div>
            {newsEvents.filter(news => news.breaking).map((news) => (
              <motion.div variants={moveLeft(news.id * 0.3)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }} key={news.id} className="flex flex-col mb-5">
                <Link href={`${slugify(news.title)}`}>
                  <Image src={news.imageSrc} alt={news.title} width={390} height={240} className="w-full h-[240px] object-cover mb-4" />
                </Link>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase">{news.categories.map((category) => category).join(", ")}</p>
                  <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase">{news.date}</p>
                </div>
                <div>
                  <Link href={`${slugify(news.title)}`}>
                    <h4 className="text-20 font-semibold leading-[1.3]">{news.title}</h4>
                  </Link>
                </div>
              </motion.div> 
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarWrapper;