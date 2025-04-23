import InnerBanner from "../common/InnerBanner";
import AboutDesc from "./AboutDesc";
import Achievements from "./Achievements";
import VisionMission from "./VisionMission";
import { assets } from "@/public/assets/assets";
const Index = () => {
  return ( 
    <main>
      <InnerBanner pageTitle={"About Us"} bannerBg={assets.aboutBnr}/>
      <AboutDesc/>
      <VisionMission/>
      <Achievements/>
    </main>
   );
}
 
export default Index;