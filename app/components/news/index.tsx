import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import NewsFilter from "./NewsFilter";
const Index = () => {
  return ( 
    <>
      <InnerBanner pageTitle="News" bannerBg={assets.newsBnr}  />
      <NewsFilter />
    </>
   );
}
 
export default Index;