import InnerBanner from "../common/InnerBanner";
import AboutDesc from "./AboutDesc";
import Achievements from "./Achievements";
import VisionMission from "./VisionMission";
import ProductCategoriesList from "./ProductCategoriesList";
import ParentalCompaniesSec from "./ParentCompaniesSec";
import { assets } from "@/public/assets/assets";
import AccrSec from "./AccrSec";
const Index = () => {
  return ( 
    <main>
      <InnerBanner pageTitle={"About Us"} bannerBg={assets.aboutBnr}/>
      <AboutDesc/>
      <VisionMission/>
      <Achievements/>
      <ProductCategoriesList/>
      <ParentalCompaniesSec/>
      <AccrSec/>
    </main>
   );
}
 
export default Index;