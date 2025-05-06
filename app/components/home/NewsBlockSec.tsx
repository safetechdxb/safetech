import ArrowBtn from "../common/ArrowBtn";
import NewsBlock from "../common/NewsBlock";
import SubTitle from "../common/SubTitle";

interface newsData {
  id: number;
  type: string;
  imageSrc: string;
  date: string;
  title: string;
  desc: string;
  categories: string[];
  readMoreLink: string;
}
interface NewsBlockSecProps {
  latestNews: newsData[]; // Replace 'any[]' with the appropriate type for your news data
}

const NewsBlockSec = ({ latestNews }: NewsBlockSecProps) => {
  return (
    <section className='py-140'>
      <div className="container">
        <div className="flex flex-wrap justify-between items-center mb-10 lg:mb-20">
          <div className="relative">
            <SubTitle titleText="Recent News" color="text-secondary" />
          </div>
          <ArrowBtn btnText="More News" btnLInk="#" border={true} />
        </div>
        <NewsBlock latestNews={latestNews} />
      </div>
    </section>
   );
}

export default NewsBlockSec;