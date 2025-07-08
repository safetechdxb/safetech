import Index from "@/app/components/Certifications/index";
import { Metadata } from "next";
import React from "react";


export async function generateMetadata(): Promise<Metadata> {

  const response = await fetch(`${process.env.BASE_URL}/api/admin/certifications`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "SafeTech";
  const metadataDescription =
    data?.data?.metaDescription || "SafeTech";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}



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
