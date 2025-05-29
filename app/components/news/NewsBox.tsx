"use client"
import {motion} from 'framer-motion'
import { moveUp } from '../motionVarients';
import Image from "next/image";
import { StaticImageData } from "next/image";
import ArrowBtn from "../common/ArrowBtn";
import Link from 'next/link';

interface NewsBoxProps {
  newsId:number;
  newsImage: string | StaticImageData;
  newsTitle: string;
  newsCategory: string;
  newsDate: string;
  pageLink: string;
}
const NewsBox = ({newsId,newsImage,newsTitle,newsCategory,newsDate,pageLink}:NewsBoxProps) => {
  return ( 
    <motion.div variants={moveUp(newsId * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex-col overflow-hidden">
      <div className="news-crd__head relative mb-4">
        <Link href={pageLink}> 
        <Image src={newsImage} className="w-full h-[260px] object-cover" alt="news" width={300} height={300} />
        </Link>
        <div className="bg-secondary absolute top-0 left-2 p-2">
          <h4 className="text-white text-14 leading-normal uppercase font-semibold mb-0">{new Date(newsDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</h4>
        </div>
      </div>
      <div className="news-crd__body pt-2 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {/* <Image src={tagIcon} width={20} height={20} alt="categories" className="w-[15px] h-[15px] xl:w-[18px] xl:h-[18px]" /> */}
          <div className="news__category list-none text-black/50 uppercase font-semibold text-14 leading-normal flex gap-1 xxl:gap-3 opacity-75">
              <div>
                <a href="#" className="min-w-max">
                  {newsCategory} 
                </a>
              </div>

          </div>
        </div>
        <Link href={pageLink}>
        <h3 className="text-20 text-black font-semibold leading-[1.3] mb-2 lg:mb-3 overflow-hidden text-ellipsis display-webkit-box line-clamp-3 webkit-box-orient-vertical max-w-[80%]"> {newsTitle}</h3>
          </Link>
        {/* <PrimaryArrowBtn btntitle="Read more" btnLink={`article`} /> */}
        <div className="mt-auto pb-5">
          <ArrowBtn btnText="Read More" btnLInk={pageLink} />
        </div>
      </div>
    </motion.div>
   );
}
 
export default NewsBox;