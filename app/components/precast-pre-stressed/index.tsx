import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import ShortBnr from "./ShortBnr"
import ElementsList from "./ElementsList"
import { PrecastPrestressed } from "@/types/PrecastPrestressed"

export default function index({data}: {data: PrecastPrestressed}) {
  return (
    <>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner} />
      <Main data={data}/>
      <ShortBnr data={data}/>
      <ElementsList data={data}/>
    </>
  )
}
