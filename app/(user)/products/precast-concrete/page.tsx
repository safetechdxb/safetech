import React from 'react'
import Index from '@/app/components/precast-concrete'

export default async function page() {
    const response = await fetch(`${process.env.BASE_URL}/api/admin/products/precast-concrete`,{
        next: {
            revalidate: 60,
        }
    });
    const data = await response.json();
  return (
    <div>
      <Index data={data.data}/>
    </div>
  )
}
