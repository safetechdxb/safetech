import Index from '@/app/components/precast-concrete-element'
import React from 'react'
import { Metadata } from 'next';

export async function generateMetadata({params}: {params: Promise<{elements: string}>}): Promise<Metadata> {
  const {elements} = await params;
  const response = await fetch(`${process.env.BASE_URL}/api/admin/products/precast-concrete/elements?slug=${elements}`, { next: { revalidate: 60 } });
  const data = await response.json();

  const metadataTitle = data?.data?.metaTitle || "SafeTech";
  const metadataDescription =
    data?.data?.metaDescription || "SafeTech";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}



export default async function page({params}: {params: Promise<{elements: string}>}) {
  const {elements} = await params;
    const elementResponse = await fetch(`${process.env.BASE_URL}/api/admin/products/precast-concrete/elements?slug=${elements}`,{
        next: {
            revalidate: 60,
        }
    });
    const productResponse = await fetch(`${process.env.BASE_URL}/api/admin/products/precast-concrete`,{
      next: {
          revalidate: 60,
      }
  });

    const elementData = await elementResponse.json();
    const productData = await productResponse.json();
  return (
    <div>
      <Index elementData={elementData.data} productData={productData.data}/>
    </div>
  )
}
