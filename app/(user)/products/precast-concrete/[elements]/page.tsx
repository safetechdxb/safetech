import Index from '@/app/components/precast-concrete-element'
import React from 'react'

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
