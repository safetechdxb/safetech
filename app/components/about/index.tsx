import InnerBanner from "../common/InnerBanner";
import AboutDesc from "./AboutDesc";
import Achievements from "./Achievements";
import VisionMission from "./VisionMission";
// import ProductCategoriesList from "./ProductCategoriesList";
import ParentalCompaniesSec from "./ParentCompaniesSec";
import AccrSec from "./AccrSec";
import FacilitiesEquipmentSec from "./FacilitiesEquipmentSec";
import Sustainability from "../home/Sustainability";
import { About } from "@/public/types/about";
const Index = ({data}:{data:About}) => {
  return ( 
    <main>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner}/>
      <AboutDesc data={data} />
      <VisionMission data={data}/>
      <Achievements data={data} />
      <FacilitiesEquipmentSec data={data}/>
      {/* <ProductCategoriesList/> */}
      <ParentalCompaniesSec data={data}/>
      <AccrSec data={data}/>
      <Sustainability data={data}/>
    </main>
   );
}
 
export default Index;