
import React from "react";
import List from "./sections/List";
import { doc } from "./data";
export default function Index() {
  return (
    <>
     <List data={doc.data} />

    </>
  );
}
