import InnerBanner from "../common/InnerBanner"
import { assets } from "@/public/assets/assets"
import Main from "./Main"
import ElementsList from "./ElementsList"
import BuildingSystems from "./BuildingSystems"
import Benifits from "./Benifits"
export default function index() {
  return (
    <>
      <InnerBanner pageTitle="Precast Concrete" bannerBg={assets.precastBnr} />
      <Main/>
      <ElementsList/>
      <BuildingSystems/>
      <Benifits/>
    </>
  )
}
