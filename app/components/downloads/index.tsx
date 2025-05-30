
import React from "react";
import List from "./sections/List";
// import { doc } from "./data";
import InnerBanner from "../common/InnerBanner";
// import { assets } from "@/public/assets/assets";
import { downloadsData } from "@/public/types/downloads";
export default function Index({data}:{data:downloadsData}) {
  return (
    <>
      <InnerBanner pageTitle={data.pageTitle} bannerBg={data.banner} />
      <List data={data} />
    </>
  );
} 


