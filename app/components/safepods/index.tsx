import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import KeyAdvSec from "./KeyAdvSec"
import { SafePodsData } from "@/types/SafePods"
import ModularSolutions from "./ModularSolutions"
import ProductionProcess from "./ProductionProcess"
import GallerySec from "./GallerySec"
export default function index({data}:{data:SafePodsData}) {
  return (
    <>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner} />
      <Main data={data} />
      <ModularSolutions data={data}/>
       <KeyAdvSec data={data}/>
       <ProductionProcess data={data} />
       <GallerySec data={data}/>
    </>
  )
}
