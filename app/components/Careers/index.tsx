
import React from "react";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import {join } from "./data";
import SingleImageText from "./sections/SingleImageText";
import Benifits from "./sections/Benifits";
import Openings from "./sections/Openings";
import WantToJoin from "./sections/WantToJoin";
import { careers } from "@/public/types/careers";
export default function Index({data}:{data:careers}) {
  return (
    <>
      <InnerBanner pageTitle={"Career"} bannerBg={assets.aboutBnr} />
      <SingleImageText data={data} />
      <Benifits data={data} />
      <Openings data={data} />
      <WantToJoin title={join.title} description={join.description} />
    </>
  );
}
