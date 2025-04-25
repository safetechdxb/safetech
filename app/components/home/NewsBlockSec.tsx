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
    <section className='py-[140px]'>
      <div className="container">
        <div className="relative flex justify-between items-center mb-20">
          <SubTitle titleText="Recent News" color="text-secondary" />
          <ArrowBtn btnText="View All" btnLInk="#" border={true} />
        </div>
        <NewsBlock latestNews={latestNews} />
      </div>
    </section>
   );
}

export default NewsBlockSec;