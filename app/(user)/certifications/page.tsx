import Index from "@/app/components/Certifications/index";
import React from "react";

const Contact = async() => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/certifications`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <>
      <Index data={data.data} />
    </>
  );
};
export default Contact;
