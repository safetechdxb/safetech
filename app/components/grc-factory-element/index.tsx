import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import AccSec from "./AccSec"
import KeyAdvSec from "./KeyAdvSec"
import DigSec from "./DigSec"
import { PrecastPreStressedElement } from "@/types/PrecastPreStressedElement"

export default function index({elementData}: {elementData: PrecastPreStressedElement}) {
  return (
    <>
      <InnerBanner pageTitle={elementData.pageTitle} bannerBg={elementData.banner} />
      <Main data={elementData}/>
      <KeyAdvSec data={elementData}/>
      <AccSec data={elementData}/>
      <DigSec data={elementData}/>
    </>
  )
}
