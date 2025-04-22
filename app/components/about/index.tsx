import InnerBanner from "../common/InnerBanner";
import AboutDesc from "./AboutDesc";
import { assets } from "@/public/assets/assets";
const Index = () => {
  return ( 
    <main>
      <InnerBanner pageTitle={"About Us"} bannerBg={assets.aboutBnr}/>
      <AboutDesc/>
    </main>
   );
}
 
export default Index;