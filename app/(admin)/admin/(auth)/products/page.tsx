import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
        <Link href='/admin/products/precast-concrete'><div className='col-span-1'>
            <div className='flex flex-col gap-4 border p-4 hover:shadow-md cursor-pointer rounded-lg'>
                <h4>Precast concrete</h4>
            </div>
        </div></Link>
        <Link href='/admin/products/precast-prestressed'><div className='col-span-1'>
        <div className='flex flex-col gap-4 border p-4 hover:shadow-md cursor-pointer rounded-lg'>
                <h4>Precast prestressed</h4>
            </div>
        </div></Link>
        <Link href='/admin/products/grc-factory'><div className='col-span-1'>
        <div className='flex flex-col gap-4 border p-4 hover:shadow-md cursor-pointer rounded-lg'>
                <h4>GRC factory</h4>
            </div>
        </div></Link>
        <Link href='/admin/products/bathroom-pod'><div className='col-span-1'>
        <div className='flex flex-col gap-4 border p-4 hover:shadow-md cursor-pointer rounded-lg'>
                <h4>Bathroom pode</h4>
            </div>
        </div></Link>
    </div>
  )
}

export default page