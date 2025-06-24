import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import KeyAdvSec from "./KeyAdvSec"
import { safePodsData } from "./data"
import ModularSolutions from "./ModularSolutions"
import ProductionProcess from "./ProductionProcess"
import GallerySec from "./GallerySec"
export default function index() {
  return (
    <>
      <InnerBanner pageTitle={"SafePods MODULAR UNITS"} bannerBg={safePodsData.image} />
      <Main />
      <ModularSolutions/>
       <KeyAdvSec />
       <ProductionProcess data={safePodsData.carouselData} />
       <GallerySec/>
      {/*<AccSec data={safePodsData}/>
      <DigSec data={safePodsData}/>  */}
    </>
  )
}
