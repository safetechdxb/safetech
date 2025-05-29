import InnerBanner from "../common/InnerBanner";
import PageWrapper from "./PageWrapper";
import { IndiNews } from "@/types/IndiNews";
import { News } from "@/types/News";

const Index = ({data,allNews}: {data: IndiNews,allNews: News}) => {
  return ( 
    <main>
      <InnerBanner pageTitle={data.title} isBlogDetails={true} category={data.category} date={data.createdAt} />
      <PageWrapper data={data} allNews={allNews}/>
    </main>
   );
}
 
export default Index;