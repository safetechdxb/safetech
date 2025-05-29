import Index from '@/app/components/grc-factory-element'
import React from 'react'
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
