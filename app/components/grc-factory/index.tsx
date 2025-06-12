import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import ElementsList from "./ElementsList"
// import AccSec from "./AccSec"
import { GrcFactory } from "@/types/GrcFactory"

export default function index({data}: {data: GrcFactory}) {
  return (
    <>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner} />
      <Main data={data}/>
      <ElementsList data={data}/>
      {/* <AccSec data={data}/> */}
    </>
  )
}
