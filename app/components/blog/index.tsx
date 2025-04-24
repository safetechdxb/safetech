import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import BlogsList from "./BlogsList";
const Index = () => {
  return ( 
    <main>
      <InnerBanner pageTitle={"Blog"} bannerBg={assets.blogBnr}/>
      <BlogsList/>
    </main>
   );
}
 
export default Index;