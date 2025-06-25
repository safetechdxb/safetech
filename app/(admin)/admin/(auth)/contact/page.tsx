"use client"

import { ImageUploader } from '@/components/ui/image-uploader';
import { Label } from '@/components/ui/label';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Contact {
    pageTitle: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    map: string;
    location: string;
    address: string;
    email: string;
    phone: string;
}

const AdminContact = () => {

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<Contact>();


    const onSubmit = async (data: Contact) => {
        try {
            const response = await fetch("/api/admin/contact", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                fetchContact();
            }
        } catch (error) {
            console.log("Error adding contact", error);
        }
    };

    const fetchContact = async () => {
        try {
            const response = await fetch("/api/admin/contact");
            if (response.ok) {
                const data = await response.json();
                setValue("pageTitle", data.data.pageTitle);
                setValue("title", data.data.title);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("map", data.data.map);
                setValue("location", data.data.location);
                setValue("address", data.data.address);
                setValue("email", data.data.email);
                setValue("phone", data.data.phone);
            }
        } catch (error) {
            console.log("Error fetching contact", error);
        }
    };

    useEffect(() => {
        fetchContact();
    }, []);

  return (
    <div className='flex flex-col gap-5'>
        <div className="h-fit w-full">
                                          
                                          <div className=" grid grid-cols-1 gap-2  h-fit">
                                            <div className="grid grid-cols-2 gap-2">
                                            <div>
                                              <Label oneInput>Banner</Label>
                                              <ImageUploader onChange={(url)=>setValue("banner",url)} value={watch("banner")}/>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                            <div>
                                                  <Label oneInput>Banner Alt</Label>
                                                  <Input type="text" {...register("bannerAlt")}/>
                                              </div>
                                              <div>
                                                  <Label oneInput>Page Title</Label>
                                                  <Input type="text" {...register("pageTitle",{required:"Page title is required"})}/>
                                              {errors.pageTitle && <p className="text-red-500">{errors.pageTitle.message}</p>}
                                              </div>
                                              </div>
                                              </div>
                                              <div>
                                                  <Label oneInput>Title</Label>
                                                  <Input type="text" {...register("title",{required:"Title is required"})}/>
                                              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                                              </div>
                                              <div>
                                                  <Label oneInput>Map</Label>
                                                  <Input type="text" {...register("map",{required:"Map is required"})}/>
                                              {errors.map && <p className="text-red-500">{errors.map.message}</p>}
                                              </div>
                                              <div>
                                                  <Label oneInput>Location</Label>
                                                  <Input type="text" {...register("location",{required:"Location is required"})}/>
                                              {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                                              </div>
                                              <div>
                                                  <Label oneInput>Address</Label>
                                                  <Textarea {...register("address",{required:"Address is required"})}/>
                                              {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                                              </div>
                                              <div>
                                                  <Label oneInput>Email</Label>
                                                  <Input type="text" {...register("email",{required:"Email is required"})}/>
                                              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                              </div>
                                              <div>
                                                  <Label oneInput>Phone</Label>
                                                  <Input type="text" {...register("phone",{required:"Phone is required"})}/>
                                              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                              </div>
                                              <div>
                                                  <Label oneInput>Meta title</Label>
                                                  <Input type="text" {...register("metaTitle")}/>
                                              </div>
                                              <div>
                                                  <Label oneInput>Meta Description</Label>
                                                  <Input type="text" {...register("metaDescription")}/>
                                              </div>
                                          </div>
                                      </div>

                <Button type='submit' onClick={handleSubmit(onSubmit)} className='w-full mx-auto cursor-pointer'>Submit</Button>
    </div>
  )
}

export default AdminContact