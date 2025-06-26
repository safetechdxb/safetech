
import Index from '@/app/components/safepods'
import React from 'react'

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
