import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import ElementsList from "./ElementsList"
import BuildingSystems from "./BuildingSystems"
import Benifits from "./Benifits"
import { PrecastConcrete } from "@/types/PrecastConcrete"
export default function index({data}: {data: PrecastConcrete}) {
  return (
    <>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner} />
      <Main data={data}/>
      <ElementsList data={data}/>
      <BuildingSystems data={data}/>
      <Benifits data={data}/>
    </>
  )
}
