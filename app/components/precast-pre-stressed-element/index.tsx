import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import FeaturesSec from "./FeaturesSec"
import DiagramSlide from "./DiagramSlide"
import WeightsSec from "./WeightsSec"
import { PrecastPreStressedElement } from "@/types/PrecastPreStressedElement"



export default function index({elementData}: {elementData: PrecastPreStressedElement}) {
  return (
    <>
      <InnerBanner pageTitle={elementData.pageTitle} bannerBg={elementData.banner}  />
      <Main data={elementData}/>
      <FeaturesSec data={elementData}/>
      <DiagramSlide data={elementData}/>
      <WeightsSec data={elementData}/>
      
    </>
  )
}
