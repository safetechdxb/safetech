
import React from "react";
import { address ,gitouch} from "./data";
import InnerBanner from "../common/InnerBanner";
import { assets } from "@/public/assets/assets";
import Contact from "./sections/Contact";
import GetInTouch from "./sections/GetInTouch";
export default function Index() {
  return (
    <>

      <InnerBanner pageTitle={"Contact"} bannerBg={assets.conbanner} />
     <Contact data={address.data} title="We're available to assist you and address any inquiries you may have." />
      <GetInTouch title={gitouch.title} description={gitouch.description} />
    </>
  );
}
