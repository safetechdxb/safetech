
import React from "react";
// import { boxcontent } from "./data";
import InnerBanner from "../common/InnerBanner";
import Certificates from "./sections/Certificates";
import { Certifications } from "@/public/types/certifications";

export default function Index({data}:{data:Certifications}) {
  return (
    <>

      <InnerBanner pageTitle={data.pageTitle} />
      <Certificates data={data} />

    </>
  );
}
