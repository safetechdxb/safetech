
import React from "react";
import { doc } from "./data";
import ImageText from "./sections/ImageText";
export default function Index() {
  return (
    <>
     <ImageText data={doc.data} />

    </>
  );
}
