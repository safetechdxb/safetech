import Index from "@/app/components/Gallery/index";
import React from "react";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const response = await fetch(`${process.env.BASE_URL}/api/admin/gallery`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "SafeTech";
  const metadataDescription =
    data?.data?.metaDescription || "SafeTech";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

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
