"use client"

import AdminItemContainer from '@/app/components/AdminInnerContainer/AdminItemContainer'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { MdDelete } from 'react-icons/md'


const NewsLetterPage = () => {

    const [enquiry, setEnquiry] = useState<{_id: string, email: string}[]>([]);

    const handleFetchEnquiry = async() => {
        try {
            const response = await fetch("/api/admin/news-letter");
            if(response.ok) {
                const data = await response.json();
                console.log(data)
                setEnquiry(data.data);
            }
        } catch (error) {
            console.log("Error fetching enquiry", error);
        }
    }

    const handleDeleteEnquiry = async(id: string) => {
        try {
            const response = await fetch(`/api/admin/news-letter?id=${id}`,{
                method: "DELETE",
            });
            if(response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchEnquiry();
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting job request", error);
        }
    }

    useEffect(()=>{
        handleFetchEnquiry();
    },[])

  return (
    <AdminItemContainer>
            <div className='flex justify-between items-center p-5'>
                <Label generalSection>
                    Subscribers
                </Label>
            </div>
            <div className='p-5 flex flex-col gap-2'>
            {enquiry.length > 0 ? enquiry.map((item)=>(
                <div className='flex justify-between items-center border rounded-md py-1 px-2 hover:bg-gray-100  hover:shadow-md transform  transition-all' key={item._id}>
                <div>
                    <p>{item.email}</p>
                </div>
                <div className='flex gap-8 items-center'>
                    <Dialog>
                                  <DialogTrigger><MdDelete className='text-lg cursor-pointer' /></DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Are you sure?</DialogTitle>
                                    </DialogHeader>
                                    <div className="flex gap-2">
                                      <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                      <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleDeleteEnquiry(item._id)}>Yes</DialogClose>
                                    </div>
                    
                                  </DialogContent>
                    
                                </Dialog>   


                    
                </div>
            </div>
            )): <div className='flex justify-center items-center h-full'><p>No enquiries currently</p></div>}
            </div>
            </AdminItemContainer>
  )
}

export default NewsLetterPage