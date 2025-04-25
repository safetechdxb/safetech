
import React from "react";
import { boxcontent } from "./data";
import InnerBanner from "../common/InnerBanner";
import Certificates from "./sections/Certificates";
export default function Index() {
  return (
    <>

      <InnerBanner pageTitle={"CERTIFICATIONS"}   />
     <Certificates data={boxcontent.data} />

    </>
  );
}
