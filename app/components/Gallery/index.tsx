
import React from "react";
import { doc } from "./data";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import ImageList from "./sections/ImageList";
export default function Index() {
  return (
    <>

      <InnerBanner pageTitle={"Gallery"} bannerBg={assets.gbanner}  />
     <ImageList data={doc.data} />

    </>
  );
}
