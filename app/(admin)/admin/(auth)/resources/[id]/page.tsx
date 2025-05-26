"use client"

import { ImageUploader } from '@/components/ui/image-uploader';
import { Label } from '@radix-ui/react-label';
import React, { useEffect } from 'react'
import { useForm,useFieldArray, Controller } from "react-hook-form";
import { RiDeleteBinLine } from 'react-icons/ri';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FileUploader } from '@/components/ui/file-uploader';
import { useRouter,useParams } from 'next/navigation'

interface Certifications {
    files: {
        title: string;
        file: string;
    }[];
}

const page = () => {
    const router = useRouter();
            const { id } = useParams();

    const { control, register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<Certifications>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "files"
    });

    const onSubmit = async () => {
        try {
            const response = await fetch(`/api/admin/resources?id=${id}`, {
                method: "POST",
                body: JSON.stringify(getValues("files")),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                router.push("/admin/resources");
            }
        } catch (error) {
            console.log("Error adding resource", error);
        }
    };

    const fetchResourceData = async () => {
        try {
            const response = await fetch(`/api/admin/resources?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("files", data.data.files);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching resource data", error);
        }
    }

    useEffect(() => {
        fetchResourceData();
    }, []);

  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-lg font-semibold'>Files</h1>
        <div className='border-2 p-2 rounded-md flex flex-col gap-5'>


                    {fields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>File</Label>
                                    <Controller
                                        name={`files.${index}.file`}
                                        control={control}
                                        rules={{ required: "File is required" }}
                                        render={({ field }) => (
                                            <FileUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.files?.[index]?.file && <p className='text-red-500'>{errors.files?.[index]?.file.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`files.${index}.title`)} />
                                </div>
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button type='button' className="w-full cursor-pointer" onClick={() => append({ file: "", title: "" })}>Add Item</Button>
                    </div>

                </div>

                <Button type='submit' onClick={handleSubmit(onSubmit)} className='w-fit mx-auto'>Submit</Button>
    </div>
  )
}

export default page