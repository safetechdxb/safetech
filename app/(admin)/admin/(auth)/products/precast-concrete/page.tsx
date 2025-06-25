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

interface PrecastConcreteFormProps {

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
    thirdSection: {
        title: string;
        description: string;
    };
    thirdSectionItems: {
        title: string;
        logo: string;
        logoAlt: string;
        description: string;
    }[];

    fourthSection: {
        title: string;
    };
    fourthSectionItems: {
        title: string;
        image: string;
        imageAlt: string;
        description: string;
    }[];
}

const PrecastConcretePage = () => {

    const pathname = usePathname();
    const productSlug = pathname.split('/products/')[1];
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<PrecastConcreteFormProps>();

    const { fields: elementsSectionItems, append: appendElementsSectionItems, remove: removeElementsSectionItems } = useFieldArray({
        control,
        name: "elementsSectionItems"
    });

    const { fields: thirdSectionItems, append: appendThirdSectionItems, remove: removeThirdSectionItems } = useFieldArray({
        control,
        name: "thirdSectionItems"
    });

    const { fields: fourthSectionItems, append: appendFourthSectionItems, remove: removeFourthSectionItems } = useFieldArray({
        control,
        name: "fourthSectionItems"
    });


    const handleAddPrecastConcrete = async (data: PrecastConcreteFormProps) => {
        try {
            const response = await fetch(`/api/admin/products/precast-concrete`, {
                method: "PATCH",
                body: JSON.stringify({ ...data, productSlug }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding precast concrete", error);
        }
    }

    const fetchPrecastConcreteData = async () => {
        try {
            const response = await fetch(`/api/admin/products/precast-concrete`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("elementsSection", data.data.elementsSection);
                setValue("elementsSectionItems", data.data.elementsSection.items);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSectionItems", data.data.thirdSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSectionItems", data.data.fourthSection.items);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching precast concrete data", error);
        }
    }



    useEffect(() => {
        fetchPrecastConcreteData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddPrecastConcrete)}>


                <div className='grid grid-cols-2 gap-2'>
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
                    <div className='flex flex-col gap-2'>
                    <div>
                        <Label oneInput>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                    </div>
                    <div>
                        <Label oneInput>Page Title</Label>
                        <Input type='text' placeholder='Page Title' {...register("pageTitle")} />
                    </div>
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
                        <div className='grid grid-cols-2 gap-2'>
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
                        <div className="border p-2 rounded-md">
                        {elementsSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5 pt-3 last:border-b-0'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeElementsSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>
                                    <div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Image</Label>
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
                                            <Label className='font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`elementsSectionItems.${index}.imageAlt`)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`elementsSectionItems.${index}.title`, {
                                                required: "Title is required"
                                            })} />
                                            {errors.elementsSectionItems?.[index]?.title && <p className='text-red-500'>{errors.elementsSectionItems?.[index]?.title.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Description</Label>
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


<AdminItemContainer>
                <Label main>Third Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("thirdSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("thirdSection.description")} />
                        </div>
                    </div>



                    <div className='rounded-md flex flex-col gap-5'>

                        <Label className='font-bold'>Items</Label>
                        <div className='border p-2 rounded-md'>
                        {thirdSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pt-3 pb-5 last:border-b-0'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeThirdSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>
                                    <div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Logo</Label>
                                            <Controller
                                                name={`thirdSectionItems.${index}.logo`}
                                                control={control}
                                                rules={{ required: "Logo is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        isLogo
                                                    />
                                                )}
                                            />
                                            {errors.thirdSectionItems?.[index]?.logo && <p className='text-red-500'>{errors.thirdSectionItems?.[index]?.logo.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`thirdSectionItems.${index}.logoAlt`)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`thirdSectionItems.${index}.title`, {
                                                required: "Title is required"
                                            })} />
                                            {errors.thirdSectionItems?.[index]?.title && <p className='text-red-500'>{errors.thirdSectionItems?.[index]?.title.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Description</Label>
                                            <Controller
                                                name={`thirdSectionItems.${index}.description`}
                                                control={control}
                                                rules={{ required: "Description is required" }}
                                                render={({ field }) => (
                                                    <Textarea
                                                        placeholder='Description'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                            {errors.thirdSectionItems?.[index]?.description && <p className='text-red-500'>{errors.thirdSectionItems?.[index]?.description.message}</p>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        </div>
                        <div className='flex justify-end'>
                            <Button type='button' className="cursor-pointer" addItem onClick={() => appendThirdSectionItems({ logo: "", logoAlt: "", title: "", description: "" })}>Add Item</Button>
                        </div>

                    </div>

                </div>

                </AdminItemContainer>

<AdminItemContainer>
                <Label main>Fourth Section</Label>
                <div className='p-5 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("fourthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.fourthSection?.title && <p className='text-red-500'>{errors.fourthSection?.title.message}</p>}
                        </div>
                    </div>



                    <div className='rounded-md flex flex-col gap-5'>

                        <Label className='font-bold'>Items</Label>
                        <div className='border p-2 rounded-md'>
                        {fourthSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5 last:border-b-0'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeFourthSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>
                                    <div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Image</Label>
                                            <Controller
                                                name={`fourthSectionItems.${index}.image`}
                                                control={control}
                                                rules={{ required: "Image is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            {errors.fourthSectionItems?.[index]?.image && <p className='text-red-500'>{errors.fourthSectionItems?.[index]?.image.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`fourthSectionItems.${index}.imageAlt`)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`fourthSectionItems.${index}.title`)} />
                                        </div>
                                        <div>
                                            <Label className='font-bold'>Description</Label>
                                            <Controller
                                                name={`fourthSectionItems.${index}.description`}
                                                control={control}
                                                rules={{ required: "Description is required" }}
                                                render={({ field }) => (
                                                    <Textarea
                                                        placeholder='Description'
                                                        {...field}
                                                    />
                                                )}
                                            />
                                            {errors.fourthSectionItems?.[index]?.description && <p className='text-red-500'>{errors.fourthSectionItems?.[index]?.description.message}</p>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        </div>

                        <div className='flex justify-end'>
                            <Button type='button' className="cursor-pointer" addItem onClick={() => appendFourthSectionItems({ image: "", imageAlt: "", title: "", description: "" })}>Add Item</Button>
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

export default PrecastConcretePage