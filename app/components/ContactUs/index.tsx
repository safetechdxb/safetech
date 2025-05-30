
import React from "react";
import {gitouch } from "./data";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import Contact from "./sections/Contact";
import GetInTouch from "./sections/GetInTouch";
import { contactData } from "@/public/types/contactData";
export default function Index({ data }: { data: contactData }) {
  return (
    <>

      <InnerBanner pageTitle={data.pageTitle} bannerBg={assets.conbanner} />
      <Contact data={data} />
      <GetInTouch title={gitouch.title} description={gitouch.description} />
    </>
  );
}
