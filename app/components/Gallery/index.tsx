
import React from "react";
import InnerBanner from "../common/InnerBanner";
import ImageList from "./sections/ImageList";
import { Gallery } from "@/types/Gallery";

export default function Index({data}:{data:Gallery}) {
  return (
    <>

      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner} />
      <ImageList data={data} />

    </>
  );
}
