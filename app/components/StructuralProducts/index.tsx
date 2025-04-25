
import React from "react";
import { doc,slide,application } from "./data";
import ImageText from "./sections/ImageText";
import InnerBanner from "../common/InnerBanner";
import ProductSlide from "./sections/ProductSlide";
import Applications from "./sections/Applications";
import MoreProducts from "./sections/MoreProducts";
export default function Index() {
  return (
    <>

      <InnerBanner pageTitle={"Structural  Products"} isDetailPage={true} />
      <ImageText data={doc.data} />
      <ProductSlide data={slide.data} />
      <Applications data={application.data} />
      <MoreProducts />

    </>
  );
}
