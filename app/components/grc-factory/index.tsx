import InnerBanner from "../common/InnerBanner"
import { assets } from "@/public/assets/assets"
import Main from "./Main"
import ElementsList from "./ElementsList"
import AccSec from "./AccSec"
export default function index() {
  return (
    <>
      <InnerBanner pageTitle="GRC FACTORY" bannerBg={assets.precastBnr} />
      <Main/>
      <ElementsList/>
      <AccSec/>
    </>
  )
}
