"use client"

import AdminItemContainer from '@/app/components/AdminInnerContainer/AdminItemContainer'
import { Input } from '@/components/ui/input'
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
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { Textarea } from '@/components/ui/textarea'
import { FaFilePdf } from "react-icons/fa6";
import Link from 'next/link'

const JobRequests = () => {

    const [jobRequests, setJobRequests] = useState<{_id: string, firstName: string, lastName: string, email: string,gender: string, phone: string, dob: string, nationality: string, currentLocation: string, experience: string, coverLetter: string, file: string, position: string}[]>([]);

    const handleFetchJobRequests = async() => {
        try {
            const response = await fetch("/api/admin/job-requests");
            if(response.ok) {
                const data = await response.json();
                console.log(data)
                setJobRequests(data.data);
            }
        } catch (error) {
            console.log("Error fetching job requests", error);
        }
    }

    const handleDeleteJobRequest = async(id: string) => {
        try {
            const response = await fetch(`/api/admin/job-requests?id=${id}`,{
                method: "DELETE",
            });
            if(response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchJobRequests();
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting job request", error);
        }
    }

    useEffect(()=>{
        handleFetchJobRequests();
    },[])

  return (
    <AdminItemContainer>
            <div className='flex justify-between items-center p-5'>
                <Label generalSection>Job Requests</Label>
            </div>
            <div className='p-5 flex flex-col gap-2'>
            {jobRequests.length > 0 ? jobRequests.map((item)=>(
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
                                <div className='flex flex-col gap-2 h-[300px] overflow-y-scroll'>
                                    <div className='flex gap-2'>
                                    <Label>Applied for : </Label>
                                    <span className='font-semibold'>{item.position}</span>
                                    </div>
                                <Label>First Name</Label>
                                <Input type="text" placeholder="First Name" readOnly value={item.firstName}/>
                                <Label>Last Name</Label>
                                <Input type="text" placeholder="Last Name" readOnly value={item.lastName}/>
                                <Label>Email</Label>
                                <Input type="text" placeholder="Email" readOnly value={item.email}/>
                                <Label>Phone</Label>
                                <Input type="text" placeholder="Phone" readOnly value={item.phone}/>
                                <Label>Gender</Label>
                                <Input type="text" placeholder="Gender" readOnly value={item.gender}/>
                                <Label>DOB</Label>
                                <Input type="text" placeholder="DOB" readOnly value={item.dob}/>
                                <Label>Nationality</Label>
                                <Input type="text" placeholder="Nationality" readOnly value={item.nationality}/>
                                <Label>Current Location</Label>
                                <Input type="text" placeholder="Current Location" readOnly value={item.currentLocation}/>
                                <Label>Experience</Label>
                                <Input type="text" placeholder="Experience" readOnly value={item.experience}/>
                                <Label>Cover Letter</Label>
                                <Textarea placeholder="Cover Letter" readOnly value={item.coverLetter}/>
                                <Label>Resume</Label>
                                <Link href={item.file} target='_blank' rel="noopener noreferrer">
                                <FaFilePdf className='text-lg cursor-pointer' />
                                </Link>
                                
                                </div>
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
                                      <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleDeleteJobRequest(item._id)}>Yes</DialogClose>
                                    </div>
                    
                                  </DialogContent>
                    
                                </Dialog>   


                    
                </div>
            </div>
            )): <div className='flex justify-center items-center h-full'><p>No job requests currently</p></div>}
            </div>
            </AdminItemContainer>
  )
}

export default JobRequests