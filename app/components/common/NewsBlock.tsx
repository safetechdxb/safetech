"use client"
import {motion} from 'framer-motion';
import { moveUp } from '../motionVarients';
import Image from "next/image";
// import tagIcon from "@/public/assets/images/News/pin.svg";

import Link from "next/link";
import ArrowBtn from "./ArrowBtn";

interface latestNews {

  id: number;
  imageSrc: string;
  date: string;
  title: string;
  desc: string;
  categories: string[];
  readMoreLink: string;

}

interface latestNewsProps {

  latestNews: latestNews[];
}



const NewsBlock = ({ latestNews }: latestNewsProps) => {
  if (!latestNews || latestNews.length === 0) {
    return <p>No news available at the moment.</p>;
  }
  return (
    <>
      <div className="news-crd__wrapper">
        {latestNews.map((news, index) => (
          <motion.div variants={moveUp(news.id * 0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} key={news.id} className={`news-crd overflow-hidden ${index === 0 ? "news-crd__big relative" : "news-crd__small"}`}>
            {index === 0 ? (
              // Large Featured News Card
              <>
                <div className="news-crd__head relative overflow-hidden">
                  <Image src={news.imageSrc} className="w-full h-full flex" alt="news" width={500} height={500} />
                  <div className="bg-secondary absolute top-0 left-2 p-2">
                      <h4 className="text-white text-14 leading-normal uppercase font-semibold mb-0"> {new Date(news.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}</h4>
                  </div>
                </div>
                {/* <Image  src={news.imageSrc} className="w-full h-full absolute top-0 left-0 -z-10 object-cover" alt="news" fill objectFit="cover" /> */}
                <div className="news-crd__content font-helvetica pt-4">
                  {/* <h4 className="text-black text-font14 opacity-75 leading-normal mb-3 uppercase font-bold">{news.date}</h4> */}
                  {/* <h3 className="text-font20 xl:text-font28 text-Darkgreen font-bold leading-[1.3] mb-2 lg:mb-5 overflow-hidden text-ellipsis display-webkit-box line-clamp-2 webkit-box-orient-vertical" dangerouslySetInnerHTML={{ __html: news.title }}></h3> */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {/* <Image src={tagIcon} width={20} height={20} alt="categories" className="w-[15px] h-[15px] xl:w-[18px] xl:h-[18px]" /> */}
                    <ul className="news__category list-none text-black/50 uppercase font-semibold text-14 leading-normal flex gap-3">
                      {news.categories.map((category, index) => (
                        <li key={index}>
                          <Link href="#" className="min-w-max">
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-20 text-black font-semibold leading-[1.3] mb-2 overflow-hidden text-ellipsis helvetica display-webkit-box line-clamp-2 webkit-box-orient-vertical">{news.title}</h3>
                  <p className="text-16 leading-normal text-black/75 max-w-[75%] font-normal mb-5 overflow-hidden text-ellipsis display-webkit-box line-clamp-4 webkit-box-orient-vertical">{news.desc}</p>
                  {/* <PrimaryArrowBtn btntitle="Read more" btnLink={`article`} /> */}
                  <ArrowBtn btnText="Read More" btnLInk="#" border={false} />
                </div>
              </>
            ) : (
              // Small News Cards
              <>
                <div className="news-crd__head relative">
                  <Image src={news.imageSrc} className="w-full h-full object-cover" alt="news" width={300} height={300} quality={100}  />
                  <div className="bg-secondary absolute top-0 left-2 p-2">
                      <h4 className="text-white text-14 leading-normal uppercase font-semibold mb-0"> {new Date(news.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}</h4>
                  </div>
                </div>
                <div className="news-crd__body pt-2 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {/* <Image src={tagIcon} width={20} height={20} alt="categories" className="w-[15px] h-[15px] xl:w-[18px] xl:h-[18px]" /> */}
                    <ul className="news__category list-none text-black/50 uppercase font-semibold text-14 leading-normal flex gap-1 xxl:gap-3 opacity-75">
                      {news.categories.map((category, index) => (
                        <li key={index}>
                          <a href="#" className="min-w-max">
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-20 text-black font-semibold leading-[1.3] mb-2 lg:mb-3
                  overflow-hidden text-ellipsis display-webkit-box line-clamp-3 webkit-box-orient-vertical max-w-[80%]"> {news.title}</h3>
                  {/* <PrimaryArrowBtn btntitle="Read more" btnLink={`article`} /> */}
                  <div className="mt-auto pb-5">
                    <ArrowBtn btnText="Read More" btnLInk="#" border={false} />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default NewsBlock;
