
import Index from '@/app/components/safepods'
import React from 'react'
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const response = await fetch(`${process.env.BASE_URL}/api/admin/products/safe-podes`, { next: { revalidate: 60 } });
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
  const response = await fetch(`${process.env.BASE_URL}/api/admin/products/safe-podes`,{
    next: {
        revalidate: 60,
    }
});
const data = await response.json();
  return (
    <main>
      <Index data={data.data}/>
    </main>
  )
}
