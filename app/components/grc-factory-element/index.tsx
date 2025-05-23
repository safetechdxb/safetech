import InnerBanner from "../common/InnerBanner"
import { assets } from "@/public/assets/assets"
import Main from "./Main"
import AccSec from "./AccSec"
import KeyAdvSec from "./KeyAdvSec"
import DigSec from "./DigSec"
export default function index() {
  return (
    <>
      <InnerBanner pageTitle="GRC FACTORY" bannerBg={assets.precastBnr} />
      <Main/>
      <KeyAdvSec/>
      <AccSec/>
      <DigSec/>
    </>
  )
}
