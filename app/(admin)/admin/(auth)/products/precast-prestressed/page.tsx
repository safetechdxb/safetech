"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import { usePathname } from 'next/navigation';
import AdminItemContainer from '@/app/components/AdminInnerContainer/AdminItemContainer';

interface PrecastPrestressedFormProps {

    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    firstSection: {
        firstTitle: string;
        secondTitle: string;
        description: string;
        image: string;
        imageAlt: string;
    };
    secondSection: {
        title: string;
        description: string;
        image:string;
        imageAlt:string;
    };
    elementsSection: {
        title: string;
        description: string;
    };
    elementsSectionItems: {
        title: string;
        image: string;
        imageAlt: string;
        description: string;
    }[];
}

const PrecastPrestressedPage = () => {

    const pathname = usePathname();
    const productSlug = pathname.split('/products/')[1];
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<PrecastPrestressedFormProps>();

    const { fields: elementsSectionItems, append: appendElementsSectionItems, remove: removeElementsSectionItems } = useFieldArray({
        control,
        name: "elementsSectionItems"
    });


    const handleAddPrecastPrestressed = async (data: PrecastPrestressedFormProps) => {
        try {
            const response = await fetch(`/api/admin/products/precast-prestressed`, {
                method: "PATCH",
                body: JSON.stringify({ ...data, productSlug }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding product", error);
        }
    }

    const fetchProductData = async () => {
        try {
            const response = await fetch(`/api/admin/products/precast-prestressed`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection",data.data.secondSection);
                setValue("elementsSection", data.data.elementsSection);
                setValue("elementsSectionItems", data.data.elementsSection.items);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching product data", error);
        }
    }



    useEffect(() => {
        fetchProductData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddPrecastPrestressed)}>


                <div className='flex flex-col gap-2'>
                    <div>
                        <Label oneInput>Banner</Label>
                        <Controller
                            name="banner"
                            control={control}
                            rules={{ required: "Banner is required" }}
                            render={({ field }) => (
                                <ImageUploader
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        {errors.banner && (
                            <p className="text-red-500">{errors.banner.message}</p>
                        )}
                    </div>
                    <div>
                        <Label oneInput>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                    </div>
                    <div>
                        <Label oneInput>Page Title</Label>
                        <Input type='text' placeholder='Page Title' {...register("pageTitle")} />
                    </div>
                </div>

<AdminItemContainer>
                <Label main>First Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>First Title</Label>
                            <Input type='text' placeholder='First Title' {...register("firstSection.firstTitle", {
                                required: "Title is required"
                            })} />
                            {errors.firstSection?.firstTitle && <p className='text-red-500'>{errors.firstSection?.firstTitle.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Second Title</Label>
                            <Input type='text' placeholder='Second Title' {...register("firstSection.secondTitle", {
                                required: "Title is required"
                            })} />
                            {errors.firstSection?.secondTitle && <p className='text-red-500'>{errors.firstSection?.secondTitle.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("firstSection.description")} />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label className='font-bold'>Image</Label>
                            <Controller
                                name="firstSection.image"
                                control={control}
                                rules={{ required: "Image is required" }}
                                render={({ field }) => (
                                    <ImageUploader
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.firstSection?.image && (
                                <p className="text-red-500">{errors.firstSection?.image.message}</p>
                            )}
                        </div>
                        <div>
                            <Label className='font-bold'>Alt Tag</Label>
                            <Input type='text' placeholder='Alt Tag' {...register("firstSection.imageAlt")} />
                        </div>
                        </div>
                    </div>

                </div>
                </AdminItemContainer>

<AdminItemContainer>
                <Label main>Second Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("secondSection.description")} />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Image</Label>
                            <Controller
                                name="secondSection.image"
                                control={control}
                                rules={{ required: "Image is required" }}
                                render={({ field }) => (
                                    <ImageUploader
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.secondSection?.image && (
                                <p className="text-red-500">{errors.secondSection?.image.message}</p>
                            )}
                        </div>
                        <div>
                            <Label className='font-bold'>Alt Tag</Label>
                            <Input type='text' placeholder='Alt Tag' {...register("secondSection.imageAlt")} />
                        </div>
                        </div>
                    </div>

                </div>
                </AdminItemContainer>

<AdminItemContainer>
                <Label main>Elements Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("elementsSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.elementsSection?.title && <p className='text-red-500'>{errors.elementsSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("elementsSection.description")} />
                        </div>
                    </div>



                    <div className='rounded-md flex flex-col gap-5'>

                        <Label className='font-bold'>Items</Label>
                        <div className='border p-2 rounded-md'>
                        {elementsSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5 pt-3 last:border-b-0'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeElementsSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>
                                    <div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Image</Label>
                                            <Controller
                                                name={`elementsSectionItems.${index}.image`}
                                                control={control}
                                                rules={{ required: "Image is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            {errors.elementsSectionItems?.[index]?.image && <p className='text-red-500'>{errors.elementsSectionItems?.[index]?.image.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`elementsSectionItems.${index}.imageAlt`)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`elementsSectionItems.${index}.title`, {
                                                required: "Title is required"
                                            })} />
                                            {errors.elementsSectionItems?.[index]?.title && <p className='text-red-500'>{errors.elementsSectionItems?.[index]?.title.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Description</Label>
                                            <Controller
                                                name={`elementsSectionItems.${index}.description`}
                                                control={control}
                                                rules={{ required: "Description is required" }}
                                                render={({ field }) => (
                                                    <Textarea
                                                        placeholder='Description'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        </div>

                        <div className='flex justify-end'>
                            <Button type='button' className="cursor-pointer" addItem onClick={() => appendElementsSectionItems({ image: "", imageAlt: "", title: "", description: "" })}>Add Item</Button>
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

export default PrecastPrestressedPage