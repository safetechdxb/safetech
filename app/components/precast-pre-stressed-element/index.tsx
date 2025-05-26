import InnerBanner from "../common/InnerBanner"
import Main from "./Main"
import FeaturesSec from "./FeaturesSec"
import DiagramSlide from "./DiagramSlide"
import WeightsSec from "./WeightsSec"



export default function index() {
  return (
    <>
      <InnerBanner pageTitle="Hollowcore Slabs" />
      <Main />
      <FeaturesSec/>
      <DiagramSlide/>
      <WeightsSec/>
    </>
  )
}
