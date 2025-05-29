import Index from "@/app/components/Careers/index";
import React from "react";

const page = async() => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/careers`, { next: { revalidate: 60 } });
  const data = await response.json(); 
  return (
    <>
      <Index data={data.data} />
    </>
  );
};
export default page;
