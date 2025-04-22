import ArrowBtn from "../common/ArrowBtn";
import NewsBlock from "../common/NewsBlock";
import SubTitle from "../common/SubTitle";

interface NewsBlockSecProps {
  latestNews: any[]; // Replace 'any[]' with the appropriate type for your news data
}

const NewsBlockSec = ({ latestNews }: NewsBlockSecProps) => {
  return ( 
    <section className='py-[140px]'>
      <div className="container">
        <div className="relative flex justify-between items-center mb-20">
          <SubTitle titleText="Latest News" color="text-secondary" />
          <ArrowBtn btnText="View All" />
        </div>
        <NewsBlock latestNews={latestNews} />
      </div>
    </section>
   );
}
 
export default NewsBlockSec;