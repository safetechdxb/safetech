
import React from "react";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import { textimg, doc, benifits, join } from "./data";
import SingleImageText from "./sections/SingleImageText";
import Benifits from "./sections/Benifits";
import Openings from "./sections/Openings";
import WantToJoin from "./sections/WantToJoin";
export default function Index() {
  return (
    <>
      <InnerBanner pageTitle={"Career"} bannerBg={assets.aboutBnr} />
      <SingleImageText data={textimg.data} heading={"Why Join Safe Tech?"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad mim."} />
      <Benifits data={benifits.data} title={benifits.title} description={benifits.description} />
      <Openings data={doc.data} title={doc.title} />
      <WantToJoin title={join.title} description={join.description} />
    </>
  );
}
