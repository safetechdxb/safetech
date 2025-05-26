import InnerBanner from "../common/InnerBanner"
import { assets } from "@/public/assets/assets"
import Main from "./Main"
import ShortBnr from "./ShortBnr"
import ElementsList from "./ElementsList"
export default function index() {
  return (
    <>
      <InnerBanner pageTitle="Precast Pre Stressed" bannerBg={assets.precastBnr} />
      <Main/>
      <ShortBnr/>
      <ElementsList/>
    </>
  )
}
