
import React from "react";
import Index from "@/app/components/downloads";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const response = await fetch(`${process.env.BASE_URL}/api/admin/resources`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "SafeTech";
  const metadataDescription =
    data?.data?.metaDescription || "SafeTech";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

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
