
import React from "react";
import Index from "@/app/components/downloads";

const page = async() => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/resources`, { next: { revalidate: 60 } });
  const data = await response.json();
  console.log(data)
  return (
    <>
      <Index data={data.data} />
    </>
  );
};
export default page;
