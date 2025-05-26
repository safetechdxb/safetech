"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { CiLogin } from "react-icons/ci";
import Image from 'next/image';

const AdminProducts = () => {

    const [loading, setLoading] = useState<boolean>(false)
const [elemList, setElemList] = useState<{_id: string, title: string, image: string, imageAlt: string, description: string}[]>([])
const [selectedProduct, setSelectedProduct] = useState<string>("")

    const handleSelectProduct = async (product: string) => {
        try {
            setLoading(true)
            setSelectedProduct(product)
            const response = await fetch(`/api/admin/products/elements?slug=${product}`);
            if (response.ok) {
                const data = await response.json();
                setElemList(data.data)
            }
        } catch (error) {
            console.log("Error in selecting product", error);
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className='flex flex-col h-3/4 justify-between'>
    <div className='grid grid-cols-4 gap-4  h-1/2'>
        <div className='col-span-1'>
            <div className='flex justify-between items-center border p-4 hover:shadow-md cursor-pointer rounded-lg' onClick={() => handleSelectProduct("precast-concrete")}>
                <h4>Precast concrete</h4>
                <Link href='/admin/products/precast-concrete'><CiLogin /></Link>
            </div>
        </div>
        <div className='col-span-1'>
        <div className='flex justify-between items-center border p-4 hover:shadow-md cursor-pointer rounded-lg' onClick={() => handleSelectProduct("precast-prestressed")}>
                <h4>Precast prestressed</h4>
                <Link href='/admin/products/precast-prestressed'><CiLogin /></Link>
            </div>
        </div>
        <div className='col-span-1'>
        <div className='flex justify-between items-center border p-4 hover:shadow-md cursor-pointer rounded-lg' onClick={() => handleSelectProduct("grc-factory")}>
                <h4>GRC factory</h4>
                <Link href='/admin/products/grc-factory'><CiLogin /></Link>
            </div>
        </div>
        <div className='col-span-1'>
        <div className='flex justify-between items-center border p-4 hover:shadow-md cursor-pointer rounded-lg' onClick={() => handleSelectProduct("bathroom-pod")}>
                <h4>Bathroom pode</h4>
                <Link href='/admin/products/bathroom-pod'><CiLogin /></Link>
            </div>
        </div>
    </div>

    <div className='flex flex-col gap-5  h-full text-center border-t pt-20'>
        {!selectedProduct && <h3>Select a product to view / edit its elements</h3>}
        {loading && <h3>Loading...</h3>}
        {!loading && elemList.length > 0 && <div className='grid grid-cols-4'>
            {elemList.map((item) => (
                <div key={item._id} className='flex flex-col gap-2 items-center border p-4 hover:shadow-md cursor-pointer rounded-lg'>
                    <Image src={item.image} alt={item.title} width={300} height={300}/>
                    <div className='flex justify-between items-center w-full'>
                    <h4>{item.title}</h4>
                    <Link href={`/admin/products/${selectedProduct}/elements/${item._id}`}><CiLogin /></Link>
                    </div>
                </div>
            ))}
        </div>}
    </div>

    </div>
  )
}

export default AdminProducts