import InnerBanner from "../common/InnerBanner";
import BlogsList from "./BlogsList";
import { Blog } from "@/types/Blog";

const Index = ({data}: {data: Blog}) => {
  return ( 
    <main>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner}/>
      <BlogsList data={data}/>
    </main>
   );
}
 
export default Index;