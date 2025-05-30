"use client"

import { ImageUploader } from '@/components/ui/image-uploader'
import { Label } from '@radix-ui/react-label'
import React, { useEffect } from 'react'
import { useForm, useFieldArray, Controller, SubmitHandler } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Input } from '@/components/ui/input';

interface GalleryImage {
    image: string;
    imageAlt: string;
    title: string;
}

interface GalleryForm {
    images: GalleryImage[];
}

const IndiGallery = () => {
    const router = useRouter();
    const { id } = useParams();

    const { register, handleSubmit, setValue, control,formState: { errors } } = useForm<GalleryForm>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "images"
    });


    const fetchGalleryData = async () => {
        try {
            const response = await fetch(`/api/admin/gallery?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("images", data.data.images);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching gallery data", error);
        }
    }


    const handleAddGallery: SubmitHandler<GalleryForm> = async (data) => {
        try {
            const response = await fetch(`/api/admin/gallery?id=${id}`, {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                router.push("/admin/gallery");
            }
        } catch (error) {
            console.log("Error in adding gallery", error);
        }
    }

    useEffect(() => {
        fetchGalleryData();
    }, []);


    return (
        <div>
            <div className='flex justify-between items-center'>
                <Label className="block text-sm pl-2 ">Images</Label>
                <div>
                    <Button type='button' className="w-full cursor-pointer" onClick={() => append({ image: "", imageAlt: "", title: "" })}>Add Item</Button>
                </div>
            </div>
            <form onSubmit={handleSubmit(handleAddGallery)} className="mt-4 grid grid-cols-1 gap-4">
                <div className='grid grid-cols-3 gap-2'>
                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-1 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`images.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.images?.[index]?.image && <p className='text-red-500'>{errors.images?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`images.${index}.imageAlt`)} />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`images.${index}.title`)} />
                                    {errors.images?.[index]?.title && <p className='text-red-500'>{errors.images?.[index]?.title.message}</p>}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className='flex justify-center'>
                    <Button type="submit">Submit</Button>
                </div>


            </form>





        </div>
    )
}

export default IndiGallery