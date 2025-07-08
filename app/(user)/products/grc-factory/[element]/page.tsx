import Index from '@/app/components/grc-factory-element'
import React from 'react'
import { Metadata } from 'next';

export async function generateMetadata({params}: {params: Promise<{element: string}>}): Promise<Metadata> {
  const {element} = await params;
  const response = await fetch(`${process.env.BASE_URL}/api/admin/products/grc-factory/elements?slug=${element}`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "SafeTech";
  const metadataDescription =
    data?.data?.metaDescription || "SafeTech";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default async function page({params}: {params: Promise<{element: string}>}) {

  const {element} = await params;
  const elementResponse = await fetch(`${process.env.BASE_URL}/api/admin/products/grc-factory/elements?slug=${element}`,{
    next: {
        revalidate: 60,
    }
});

const elementData = await elementResponse.json();

  return (
    <>
     <Index elementData={elementData.data}/> 
    </>
  )
}
