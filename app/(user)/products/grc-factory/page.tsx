import React from 'react'
import Index from '@/app/components/grc-factory'
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const response = await fetch(`${process.env.BASE_URL}/api/admin/products/grc-factory`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "SafeTech";
  const metadataDescription =
    data?.data?.metaDescription || "SafeTech";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default async function page() {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/products/grc-factory`,{
        next: {
            revalidate: 60,
        }
    });
    const data = await response.json();
  return (
    <>
      <Index data={data.data}/>
    </>
  )
}
