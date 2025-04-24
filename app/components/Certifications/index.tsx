
import React from "react";
import { boxcontent } from "./data";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import Certificates from "./sections/Certificates";
export default function Index() {
  return (
    <>

      <InnerBanner pageTitle={"CERTIFICATIONS"} bannerBg={assets.gbanner}  />
     <Certificates data={boxcontent.data} />

    </>
  );
}
