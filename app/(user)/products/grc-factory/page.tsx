import React from 'react'
import Index from '@/app/components/grc-factory'

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
