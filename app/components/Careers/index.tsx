
import React from "react";
import InnerBanner from "../common/InnerBanner";
import {join } from "./data";
import SingleImageText from "./sections/SingleImageText";
import Benifits from "./sections/Benifits";
import Openings from "./sections/Openings";
import WantToJoin from "./sections/WantToJoin";
import { careers } from "@/public/types/careers";
export default function Index({data}:{data:careers}) {
  return (
    <>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner} />
      <SingleImageText data={data} />
      <Benifits data={data} />
      <Openings data={data} />
      <WantToJoin title={join.title} description={join.description} />
    </>
  );
}
