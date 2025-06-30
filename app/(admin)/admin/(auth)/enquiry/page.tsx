"use client"

import AdminItemContainer from '@/app/components/AdminInnerContainer/AdminItemContainer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { MdDelete } from 'react-icons/md'
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { Textarea } from '@/components/ui/textarea'

const EnquiryPage = () => {

    const [enquiry, setEnquiry] = useState<{_id: string, name: string, email: string, phone: string, subject: string, message: string}[]>([]);

    const handleFetchEnquiry = async() => {
        try {
            const response = await fetch("/api/admin/enquiry");
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
            const response = await fetch(`/api/admin/enquiry?id=${id}`,{
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
                <Label generalSection>Enquiries</Label>
            </div>
            <div className='p-5 flex flex-col gap-2'>
            {enquiry.length > 0 ? enquiry.map((item)=>(
                <div className='flex justify-between items-center border rounded-md py-1 px-2 hover:bg-gray-100  hover:shadow-md transform  transition-all' key={item._id}>
                <div>
                    <p>{item.email}</p>
                </div>
                <div className='flex gap-8 items-center'>
                    <Dialog>
                        <DialogTrigger><HiMiniViewfinderCircle className='text-lg cursor-pointer' /></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>View Details</DialogTitle>
                                <DialogDescription className='flex flex-col gap-2 h-[300px] overflow-y-scroll'>
                                    <Label>Name</Label>
                                    <Input type="text" placeholder="Name" readOnly value={item.name}/>
                                    <Label>Email</Label>
                                    <Input type="text" placeholder="Email" readOnly value={item.email}/>
                                    <Label>Phone</Label>
                                    <Input type="text" placeholder="Phone" readOnly value={item.phone}/>
                                    <Label>Subject</Label>
                                    <Input type="text" placeholder="Subject" readOnly value={item.subject}/>
                                    <Label>Message</Label>
                                    <Textarea placeholder="Message" readOnly value={item.message}/>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md">Close</DialogClose>
                        </DialogContent>

                    </Dialog>


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

export default EnquiryPage