import Index from '@/app/components/precast-pre-stressed-element'
import React from 'react'
import SecondTemplate from '@/app/components/grc-factory-element'

export default async function page({params}: {params: Promise<{elements: string}>}) {

  const {elements} = await params;
  const elementResponse = await fetch(`${process.env.BASE_URL}/api/admin/products/precast-prestressed/elements?slug=${elements}`,{
    next: {
        revalidate: 60,
    }
});

const elementData = await elementResponse.json();

if(elementData.data.forthSectionStyle == "with-weight"){
  return (
    <>
      <Index elementData={elementData.data}/>
    </>
  )
}else{
  return (
    <>
      <SecondTemplate elementData={elementData.data}/>
    </>
  )
}

}
