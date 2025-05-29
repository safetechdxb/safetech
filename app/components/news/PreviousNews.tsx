import { useState, useRef, useEffect } from "react";
import SubTitle from "../common/SubTitle";
import NewsBox from "../news/NewsBox";
import { motion } from "framer-motion";
// import Image from "next/image";
interface PreviousNewsProps {
  previousNews: {
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  thumbnailAlt: string;
  coverImage: string;
  coverImageAlt: string;
  category: string;
  images: string[];
  createdAt: string;
  metaTitle: string;
  metaDescription: string;
  }[]
}

const PreviousNews: React.FC<PreviousNewsProps> = ({previousNews}) => {
  const [showAll, setShowAll] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);
  const initialCount = 6;
  const hasMore = previousNews.length > initialCount;
  // const visibleNews = showAll ? previousNews : previousNews.slice(0, initialCount);
  const firstBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasToggled && !showAll && firstBoxRef.current) {
      firstBoxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAll, hasToggled]);

  const handleToggle = () => {
    setHasToggled(true); // only set after user action
    setShowAll(prev => !prev);
  };

  return (
    <section className="py-140 bg-light-gray">
      <div className="container">
        <div className="relative mb-10">
          <SubTitle titleText="Previous News" color="text-secondary" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {previousNews.map((news, index) => {
            const isVisible = showAll || index < initialCount;
            return (
              <div key={index} ref={index === 0 ? firstBoxRef : null}
                className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"
                  }`} >
                <NewsBox
                  newsId={index}
                  newsImage={news.thumbnail}
                  newsTitle={news.title}
                  newsCategory={news.category}
                  newsDate={news.createdAt}
                  pageLink={`news/${news.slug}`}
                />
              </div>
            );
          })}
        </div>
        {hasMore && (
          <div className="lg:mt-10 text-center flex justify-center">
            <motion.button
              onClick={handleToggle}
              className="flex bg-primary text-white hover:bg-opacity-80 transition h-[50px] overflow-hidden group" >
              <span className="px-4 py-2 uppercase font-normal text-16 leading-normal border-r border-r-primary group-hover:border-white/20 flex items-center justify-center">
                {showAll ? "Show Less" : "Show More"}
              </span>
              <div className="flex flex-col relative overflow-hidden">
                <div className={`bg-black w-[50px] h-[50px] text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 
                  ${showAll ? "group-hover:translate-y-[-50px]" : "group-hover:translate-y-[50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" /> <path d="M12 2V22" />
                  </svg>
                </div>
                <div className={`bg-primary w-[50px] h-[50px] absolute  left-0 z-20 text-white text-[16px] font-[400] px-4 py-4 flex items-center justify-center transition-all duration-300 group-hover:top-0 ${showAll ? "top-[50px]" : "top-[-50px]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-move-down transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} >
                    <path d="M8 18L12 22L16 18" /> <path d="M12 2V22" />
                  </svg>
                </div>
              </div>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousNews;
