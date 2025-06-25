"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import AdminItemContainer from '@/app/components/AdminInnerContainer/AdminItemContainer';

interface SystemFormProps {

    metaTitle: string;
    metaDescription: string;
    aboutSection: {
        title: string;
        description: string;
        image: string;
        imageAlt:string;
        items: {
            number: string;
            value: string;
        }[];
    };
    banners: {
        image: string;
        imageAlt: string;
        title: string;
        description: string;
    }[];
    products: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
            url: string;
            title: string;
            description: string;
        }[];
    };
    facilities: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[];
    };
    clients: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
        }[];
    };

}

const HomePage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<SystemFormProps>();

    const { fields: bannerFields, append: bannerAppend, remove: bannerRemove } = useFieldArray({
        control,
        name: "banners"
    });

    const { fields: aboutSectionFields, append: aboutSectionAppend, remove: aboutSectionRemove } = useFieldArray({
        control,
        name: "aboutSection.items"
    });


    const { fields: productsFields, append: productsAppend, remove: productsRemove } = useFieldArray({
        control,
        name: "products.items"
    });

    const { fields: facilitiesFields, append: facilitiesAppend, remove: facilitiesRemove } = useFieldArray({
        control,
        name: "facilities.items"
    });

    const { fields: clientsFields, append: clientsAppend, remove: clientsRemove } = useFieldArray({
        control,
        name: "clients.items"
    });


    const handleAddHome = async (data: SystemFormProps) => {
        try {
            const response = await fetch(`/api/admin/home`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding home", error);
        }
    }

    const fetchHomeData = async () => {
        try {
            const response = await fetch(`/api/admin/home`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("aboutSection", data.data.aboutSection);
                setValue("aboutSection.items", data.data.aboutSection.items);
                setValue("banners", data.data.banners);
                setValue("facilities", data.data.facilities);
                setValue("facilities.items", data.data.facilities.items);
                setValue("clients", data.data.clients);
                setValue("clients.items", data.data.clients.items);
                setValue("products", data.data.products);
                setValue("products.items", data.data.products.items);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching home data", error);
        }
    }



    useEffect(() => {
        fetchHomeData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddHome)}>

            <AdminItemContainer>
            <Label main>Banner Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-5'>
                <Label >Banners</Label>
                    <div className='border p-2 rounded-md'>
                    {bannerFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b py-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => bannerRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`banners.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.banners?.[index]?.image && <p className='text-red-500'>{errors.banners?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`banners.${index}.imageAlt`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`banners.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.banners?.[index]?.title && <p className='text-red-500'>{errors.banners?.[index]?.title.message}</p>}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Description</Label>
                                    <Textarea placeholder='Description' {...register(`banners.${index}.description`)} />
                                    {errors.banners?.[index]?.description && <p className='text-red-500'>{errors.banners?.[index]?.description.message}</p>}
                                </div>

                            </div>
                            

                        </div>
                    ))}
                    </div>

                    <div className='flex justify-end'>
                        <Button type='button' className="cursor-pointer" addItem onClick={() => bannerAppend({ image: "", imageAlt: "", title: "", description: "" })}>Add Item</Button>
                    </div>

                </div>
                </AdminItemContainer>


                    <AdminItemContainer>
                <Label main>About Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("aboutSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.aboutSection?.title && <p className='text-red-500'>{errors.aboutSection?.title.message}</p>}
                        </div>
                        <div>
                                                <Label className="text-sm font-bold">Description</Label>
                                                <Controller name="aboutSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                                    return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                                                }} />
                                            </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Image</Label>
                            <Controller
                                name="aboutSection.image"
                                control={control}
                                rules={{ required: "Image is required" }}
                                render={({ field }) => (
                                    <ImageUploader
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.aboutSection?.image && <p className='text-red-500'>{errors.aboutSection?.image.message}</p>}
                        </div>
                    </div>

                            <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>

                    <div className='grid grid-cols-3 gap-2'>
                    {aboutSectionFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative p-2 border-r'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => aboutSectionRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Number</Label>
                                    <Input type='text' placeholder='Number' {...register(`aboutSection.items.${index}.number`)} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Value</Label>
                                    <Input type='text' placeholder='Value' {...register(`aboutSection.items.${index}.value`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.aboutSection?.items?.[index]?.value && <p className='text-red-500'>{errors.aboutSection?.items?.[index]?.value.message}</p>}
                                </div>
                            </div>

                        </div>
                    ))}
                    </div>

                    <div className='flex justify-end'>
                        <Button type='button' className="cursor-pointer" addItem onClick={() => aboutSectionAppend({ number: "", value: "" })}>Add Item</Button>
                    </div>

                </div>
                </div>

                
                </div>

                </AdminItemContainer>


<AdminItemContainer>
                <Label main>Products Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`products.title`)} />
                                </div>
                            </div>
                            <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {productsFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => productsRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`products.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.products?.items?.[index]?.image && <p className='text-red-500'>{errors.products?.items?.[index]?.image.message}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`products.items.${index}.imageAlt`)} />
                                </div>
                                
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`products.items.${index}.title`, {
                                        required: "Title is required"
                                    })} />
                                    {errors.products?.items?.[index]?.title && <p className='text-red-500'>{errors.products?.items?.[index]?.title.message}</p>}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Description</Label>
                                    <Textarea placeholder='Description' {...register(`products.items.${index}.description`)} />
                                    {errors.products?.items?.[index]?.description && <p className='text-red-500'>{errors.products?.items?.[index]?.description.message}</p>}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>URL</Label>
                                    <Input type='text' placeholder='URL' {...register(`products.items.${index}.url`)} />
                                </div>

                            </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' className="wcursor-pointer" addItem onClick={() => productsAppend({ image: "", imageAlt: "", title: "", description: "", url: "" })}>Add Item</Button>
                    </div>
                </div>

                
                </div>
                </AdminItemContainer>


                <AdminItemContainer>
                <Label main>Facilities Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`facilities.title`)} />
                                </div>
                            </div>
                            <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md flex flex-col gap-5'>


                    {facilitiesFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5 last:border-b-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => facilitiesRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`facilities.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.facilities?.items?.[index]?.image && <p className='text-red-500'>{errors.facilities?.items?.[index]?.image.message}</p>}
                                    <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`facilities.items.${index}.imageAlt`)} />
                                </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Title</Label>
                                    <Input type='text' placeholder='Title' {...register(`facilities.items.${index}.title`)} />
                                </div>
                                <div>
                                                <Label className="text-sm font-bold">Description</Label>
                                                <Controller name={`facilities.items.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                                    return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                                                }} />
                                            </div>
                                </div>
                            </div>

                        </div>
                    ))}

                   

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' className="cursor-pointer" addItem onClick={() => facilitiesAppend({ image: "", imageAlt: "", title: "", description: "" })}>Add Item</Button>
                    </div>
                </div>

                
                </div>
                </AdminItemContainer>

<AdminItemContainer>
                <Label main>Clients Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("clients.title", {
                                required: "Title is required"
                            })} />
                            {errors.clients?.title && <p className='text-red-500'>{errors.clients?.title.message}</p>}
                        </div>
                    </div>

                            <div>
                    <Label className='font-bold'>Items</Label>
                <div className='border p-2 rounded-md grid grid-cols-2 gap-5'>


                    {clientsFields.map((field, index) => (
                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-r pb-5 pr-5 last:border-b-0 even:border-r-0'>
                            <div className='absolute top-2 right-2'>
                                <RiDeleteBinLine onClick={() => clientsRemove(index)} className='cursor-pointer text-red-600' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Image</Label>
                                    <Controller
                                        name={`clients.items.${index}.image`}
                                        control={control}
                                        rules={{ required: "Logo is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.clients?.items?.[index]?.image && <p className='text-red-500'>{errors.clients?.items?.[index]?.image.message}</p>}
                                </div>
                                
                            </div>
                            <div className='flex flex-col gap-2'>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`clients.items.${index}.imageAlt`)} />
                                </div>

                        </div>
                    ))}

                    

                </div>
                <div className='flex justify-end mt-2'>
                        <Button type='button' className="cursor-pointer" addItem onClick={() => clientsAppend({ image: "", imageAlt: "" })}>Add Item</Button>
                    </div>
                </div>

                
                </div>
                </AdminItemContainer>


                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center'>
                    <Button type='submit' className='w-full cursor-pointer'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default HomePage