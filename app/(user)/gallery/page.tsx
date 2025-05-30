import Index from "@/app/components/Gallery/index";
import React from "react";

const Gallery= async() => {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/gallery`,{
        next: {
            revalidate: 60,
        }
    });
    const data = await response.json();
  return (
    <>
      <Index data={data.data} />
    </>
  );
};
export default Gallery;
