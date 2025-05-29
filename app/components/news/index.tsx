import InnerBanner from "../common/InnerBanner";
import NewsFilter from "./NewsFilter";
import { News } from "@/types/News";

const Index = ({data}: {data: News}) => {
  return ( 
    <>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner}  />
      <NewsFilter data={data}/>
    </>
   );
}
 
export default Index;