"use client"

import { ImageUploader } from '@/components/ui/image-uploader';
import { Label } from '@/components/ui/label';
import React, { useEffect } from 'react'
import { useForm,useFieldArray, Controller } from "react-hook-form";
import { RiDeleteBinLine } from 'react-icons/ri';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AdminItemContainer from '@/app/components/AdminInnerContainer/AdminItemContainer';

interface Certifications {
    pageTitle: string;
    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    certifications: {
        title: string;
        image: string;
        imageAlt: string;
    }[];
}

const AdminCertifications = () => {

    const { control, register, handleSubmit, formState: { errors }, setValue, watch } = useForm<Certifications>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "certifications"
    });

    const onSubmit = async (data: Certifications) => {
        try {
            const response = await fetch("/api/admin/certifications", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                fetchCertifications();
            }
        } catch (error) {
            console.log("Error adding certifications", error);
        }
    };

    const fetchCertifications = async () => {
        try {
            const response = await fetch("/api/admin/certifications");
            if (response.ok) {
                const data = await response.json();
                setValue("certifications", data.data.certifications);
                setValue("pageTitle", data.data.pageTitle);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
            }
        } catch (error) {
            console.log("Error fetching certifications", error);
        }
    };

    useEffect(() => {
        fetchCertifications();
    }, []);

  return (
    <div className='flex flex-col gap-5'>
        <div className="h-fit w-full">
                                          
                                          <div className=" grid grid-cols-2 gap-2  h-fit">
                                            <div className='flex flex-col gap-2'>
                                            <div>
                                              <Label oneInput>Banner</Label>
                                              <ImageUploader onChange={(url)=>setValue("banner",url)} value={watch("banner")}/>
                                            </div>
                                            <div>
                                                  <Label oneInput>Banner Alt</Label>
                                                  <Input type="text" {...register("bannerAlt")}/>
                                              </div>
                                              </div>
                                              <div className='flex flex-col gap-2'>
                                              <div>
                                                  <Label oneInput>Page Title</Label>
                                                  <Input type="text" {...register("pageTitle",{required:"Page title is required"})}/>
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
                                      </div>

                                <AdminItemContainer>    
        <Label main>Certifications</Label>
        <div className='p-5 rounded-md grid grid-cols-2 gap-5'>


                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-r pb-5 pr-5 last:border-b-0 even:border-r-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`certifications.${index}.image`}
                                        control={control}
                                        rules={{ required: "Logo is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.certifications?.[index]?.image && <p className='text-red-500'>{errors.certifications?.[index]?.image.message}</p>}
                                </div>
                                
                            </div>
                            <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`certifications.${index}.imageAlt`)} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`certifications.${index}.title`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mb-5 mr-5'>
                        <Button type='button' className="cursor-pointer" addItem onClick={() => append({ image: "", imageAlt: "", title: "" })}>Add Item</Button>
                    </div>
                </AdminItemContainer>  

                <Button type='submit' onClick={handleSubmit(onSubmit)} className='w-full mx-auto cursor-pointer'>Submit</Button>
    </div>
  )
}

export default AdminCertifications