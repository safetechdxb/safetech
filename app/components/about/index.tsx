import InnerBanner from "../common/InnerBanner";
import AboutDesc from "./AboutDesc";
import Achievements from "./Achievements";
import VisionMission from "./VisionMission";
// import ProductCategoriesList from "./ProductCategoriesList";
import ParentalCompaniesSec from "./ParentCompaniesSec";
import { assets } from "@/public/assets/assets";
import AccrSec from "./AccrSec";
import FacilitiesEquipmentSec from "./FacilitiesEquipmentSec";
import Sustainability from "../home/Sustainability";
const Index = () => {
  return ( 
    <main>
      <InnerBanner pageTitle={"About Us"} bannerBg={assets.aboutBnr}/>
      <AboutDesc/>
      <VisionMission/>
      <Achievements/>
      <FacilitiesEquipmentSec/>
      {/* <ProductCategoriesList/> */}
      <ParentalCompaniesSec/>
      <AccrSec/>
      <Sustainability/>
    </main>
   );
}
 
export default Index;