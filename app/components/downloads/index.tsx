
import React from "react";
import List from "./sections/List";
import { doc } from "./data";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
export default function Index() {
  return (
    <>
      <InnerBanner pageTitle={"Downloads"} bannerBg={assets.resourcebanner} />
      <List data={doc.data} />
    </>
  );
} 


