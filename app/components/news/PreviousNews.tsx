import { useState, useRef, useEffect } from "react";
import SubTitle from "../common/SubTitle";
import { newsEvents } from "./data";
import NewsBox from "../news/NewsBox";

interface PreviousNewsProps {
  previousNews: typeof newsEvents;
}

const PreviousNews: React.FC<PreviousNewsProps> = ({ previousNews }) => {
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
    <section className="py-[140px] bg-light-gray">
      <div className="container">
        <div className="relative mb-10">
          <SubTitle titleText="Previous News" color="text-secondary" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {previousNews.map((news, index) => {
            const isVisible = showAll || index < initialCount;
            return (
              <div
                key={news.id}
                ref={index === 0 ? firstBoxRef : null}
                className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"
                  }`}
              >
                <NewsBox
                  newsImage={news.imageSrc}
                  newsTitle={news.title}
                  newsCategory={news.categories}
                  newsDate={news.date}
                  pageLink={news.readMoreLink}
                />
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-10 text-center flex justify-center">
            <button
              onClick={handleToggle}
              className="flex bg-primary text-white hover:bg-opacity-80 transition group"
            >
              <span className="px-4 py-2 uppercase font-normal text-16 leading-normal border-r border-r-primary group-hover:border-white/20">
                {showAll ? "Show Less" : "Show More"}
              </span>
              <span className="bg-secondary px-3 py-2 flex items-center justify-center group-hover:bg-primary transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-move-down transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                >
                  <path d="M8 18L12 22L16 18" />
                  <path d="M12 2V22" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousNews;
