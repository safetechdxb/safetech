"use client"

import { ImageUploader } from '@/components/ui/image-uploader';
import { Label } from '@radix-ui/react-label';
import React, { useEffect } from 'react'
import { useForm,useFieldArray, Controller } from "react-hook-form";
import { RiDeleteBinLine } from 'react-icons/ri';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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

const page = () => {

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
                                          
                                          <div className=" grid grid-cols-1 gap-2  h-fit">
                                            <div>
                                              <Label>Banner</Label>
                                              <ImageUploader onChange={(url)=>setValue("banner",url)} value={watch("banner")}/>
                                            </div>
                                            <div>
                                                  <Label>Banner Alt</Label>
                                                  <Input type="text" {...register("bannerAlt")}/>
                                              </div>
                                              <div>
                                                  <Label>Page Title</Label>
                                                  <Input type="text" {...register("pageTitle",{required:"Page title is required"})}/>
                                              </div>
                                              <div>
                                                  <Label>Meta title</Label>
                                                  <Input type="text" {...register("metaTitle")}/>
                                              </div>
                                              <div>
                                                  <Label>Meta Description</Label>
                                                  <Input type="text" {...register("metaDescription")}/>
                                              </div>
                                          </div>
                                      </div>
        <h1 className='text-lg font-semibold'>Certifications</h1>
        <div className='border-2 p-2 rounded-md flex flex-col gap-5'>


                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
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

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => append({ image: "", imageAlt: "", title: "" })}>Add Item</Button>
                    </div>

                </div>

                <Button type='submit' onClick={handleSubmit(onSubmit)} className='w-fit mx-auto'>Submit</Button>
    </div>
  )
}

export default page