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

interface AboutFormProps {

    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    firstSection: {
        mainTitle: string;
        firstTitle: string;
        secondTitle: string;
        description: string;
        image: string;
        imageAlt: string;
    };
    firstSectionItems: {
        title: string;
        logo: string;
        logoAlt: string;
    }[];
    secondSection: {
        vision: {
            logo: string;
            logoAlt: string;
            description: string;
        };
        mission: {
            logo: string;
            logoAlt: string;
            description: string;
        };
    };
    thirdSection: {
        title: string;
        description: string;
    };
    thirdSectionItems: {
        number: string;
        logo: string;
        logoAlt: string;
        value: string;
    }[];

    fourthSection: {
        title: string;
        description: string;
    };
    fourthSectionItems: {
        title: string;
        logo: string;
        logoAlt: string;
        description: string;
    }[];
    fifthSection: {
        title: string;
        description: string;
    };
    fifthSectionItems: {
        title: string;
        logo: string;
        logoAlt: string;
        image: string;
        imageAlt: string;
        description: string;
    }[];
    accreditations: {
        logo: string;
        logoAlt: string;
    }[];
    sustainablity: {
        image: string;
        imageAlt: string;
        description: string;
    };
}

const AboutPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<AboutFormProps>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "accreditations"
    });


    const { fields: thirdSectionItems, append: appendThirdSectionItems, remove: removeThirdSectionItems } = useFieldArray({
        control,
        name: "thirdSectionItems"
    });

    const { fields: fourthSectionItems, append: appendFourthSectionItems, remove: removeFourthSectionItems } = useFieldArray({
        control,
        name: "fourthSectionItems"
    });

    const { fields: fifthSectionItems, append: appendFifthSectionItems, remove: removeFifthSectionItems } = useFieldArray({
        control,
        name: "fifthSectionItems"
    });

    const handleAddAbout = async (data: AboutFormProps) => {
        try {
            const response = await fetch(`/api/admin/about`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding about", error);
        }
    }

    const fetchAboutData = async () => {
        try {
            const response = await fetch(`/api/admin/about`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setValue("banner", data.data.banner);
                setValue("bannerAlt", data.data.bannerAlt);
                setValue("pageTitle", data.data.pageTitle);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection", data.data.secondSection);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSectionItems", data.data.thirdSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSectionItems", data.data.fourthSection.items);
                setValue("fifthSection", data.data.fifthSection);
                setValue("fifthSectionItems", data.data.fifthSection.items);
                setValue("accreditations", data.data.accreditations);
                setValue("sustainablity", data.data.sustainablity);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching commitment data", error);
        }
    }



    useEffect(() => {
        fetchAboutData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddAbout)}>


                <div className='flex flex-col gap-2'>
                    <div>
                        <Label className="pl-3 font-bold">Banner</Label>
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
                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                        <Input type='text' placeholder='Alt Tag' {...register("bannerAlt")} />
                    </div>
                    <div>
                        <Label className='pl-3 font-bold'>Page Title</Label>
                        <Input type='text' placeholder='Page Title' {...register("pageTitle")} />
                    </div>
                </div>

                <Label className='pl-3 font-bold border-b p-2 text-lg'>First Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Main Title</Label>
                            <Input type='text' placeholder='Main Title' {...register("firstSection.mainTitle", {
                                required: "Title is required"
                            })} />
                            {errors.firstSection?.mainTitle && <p className='text-red-500'>{errors.firstSection?.mainTitle.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>First Title</Label>
                            <Input type='text' placeholder='First Title' {...register("firstSection.firstTitle", {
                                required: "Title is required"
                            })} />
                            {errors.firstSection?.firstTitle && <p className='text-red-500'>{errors.firstSection?.firstTitle.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Second Title</Label>
                            <Input type='text' placeholder='Second Title' {...register("firstSection.secondTitle", {
                                required: "Title is required"
                            })} />
                            {errors.firstSection?.secondTitle && <p className='text-red-500'>{errors.firstSection?.secondTitle.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("firstSection.description")} />
                        </div>
                        <div>
                            <Label className='pl-3 font-bold'>Image</Label>
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
                            <Label className='pl-3 font-bold'>Alt Tag</Label>
                            <Input type='text' placeholder='Alt Tag' {...register("firstSection.imageAlt")} />
                        </div>
                    </div>

                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Second Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>

                        <div className='grid grid-cols-2 gap-5'>

                            <div className='border p-2 rounded-md flex flex-col gap-2'>
                                <Label className='pl-3 font-bold text-md underline'>Mission</Label>
                                <div>
                                    <Label className='pl-3 font-bold'>Logo</Label>
                                    <Controller
                                        name="secondSection.mission.logo"
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.secondSection?.mission?.logo && (
                                        <p className="text-red-500">{errors.secondSection?.mission?.logo.message}</p>
                                    )}
                                </div>
                                <div>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register("secondSection.mission.logoAlt")} />
                                </div>
                                <div>
                                    <Label className='pl-3 font-bold'>Description</Label>
                                    <Textarea placeholder='Description' {...register("secondSection.mission.description")} />
                                </div>
                            </div>


                            <div className='border p-2 rounded-md flex flex-col gap-2'>
                                <Label className='pl-3 font-bold text-md underline'>Vision</Label>
                                <div>
                                    <Label className='pl-3 font-bold'>Logo</Label>
                                    <Controller
                                        name="secondSection.vision.logo"
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.secondSection?.vision?.logo && (
                                        <p className="text-red-500">{errors.secondSection?.vision?.logo.message}</p>
                                    )}
                                </div>
                                <div>
                                    <Label className='pl-3 font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register("secondSection.vision.logoAlt")} />
                                </div>
                                <div>
                                    <Label className='pl-3 font-bold'>Description</Label>
                                    <Textarea placeholder='Description' {...register("secondSection.vision.description")} />
                                </div>
                            </div>




                        </div>

                    </div>

                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Third Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("thirdSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("thirdSection.description")} />
                        </div>
                    </div>



                    <div className='border p-2 rounded-md flex flex-col gap-5'>

                        <Label className='pl-2 font-bold'>Items</Label>
                        {thirdSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border p-2 rounded-md'>
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
                                            <Label className='pl-3 font-bold'>Number</Label>
                                            <Input type='text' placeholder='Number' {...register(`thirdSectionItems.${index}.number`)} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Value</Label>
                                            <Input type='text' placeholder='Value' {...register(`thirdSectionItems.${index}.value`)} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                        <div>
                            <Button type='button' className="w-full cursor-pointer" onClick={() => appendThirdSectionItems({ logo: "", logoAlt: "", number: "", value: "" })}>Add Item</Button>
                        </div>

                    </div>

                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Fourth Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("fourthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.fourthSection?.title && <p className='text-red-500'>{errors.fourthSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("fourthSection.description")} />
                        </div>
                    </div>



                    <div className='border p-2 rounded-md flex flex-col gap-5'>

                        <Label className='pl-2 font-bold'>Items</Label>
                        {fourthSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border p-2 rounded-md'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeFourthSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>
                                    <div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Logo</Label>
                                            <Controller
                                                name={`fourthSectionItems.${index}.logo`}
                                                control={control}
                                                rules={{ required: "Logo is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            {errors.fourthSectionItems?.[index]?.logo && <p className='text-red-500'>{errors.fourthSectionItems?.[index]?.logo.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`fourthSectionItems.${index}.logoAlt`)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`fourthSectionItems.${index}.title`)} />
                                        </div>
                                        <div>
                                            <Label className='pl-3'>Description</Label>
                                            <Controller name={`fourthSectionItems.${index}.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                                return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                                            }} />
                                            {errors.fourthSectionItems?.[index]?.description && <p className='text-red-500'>{errors.fourthSectionItems?.[index]?.description.message}</p>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                        <div>
                            <Button type='button' className="w-full cursor-pointer" onClick={() => appendFourthSectionItems({ logo: "", logoAlt: "", title: "", description: "" })}>Add Item</Button>
                        </div>

                    </div>

                </div>


                <Label className='pl-3 font-bold border-b p-2 text-lg'>Fifth Section</Label>
                <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("fifthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.fifthSection?.title && <p className='text-red-500'>{errors.fifthSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='pl-3 font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("fifthSection.description")} />
                        </div>
                    </div>



                    <div className='border p-2 rounded-md flex flex-col gap-5'>


                        <Label className='pl-2 font-bold'>Items</Label>
                        {fifthSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border p-2 rounded-md'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeFifthSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Logo</Label>
                                            <Controller
                                                name={`fifthSectionItems.${index}.logo`}
                                                control={control}
                                                rules={{ required: "Logo is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            {errors.fifthSectionItems?.[index]?.logo && <p className='text-red-500'>{errors.fifthSectionItems?.[index]?.logo.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`fifthSectionItems.${index}.logoAlt`)} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Image</Label>
                                            <Controller
                                                name={`fifthSectionItems.${index}.image`}
                                                control={control}
                                                rules={{ required: "Image is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            {errors.fifthSectionItems?.[index]?.image && <p className='text-red-500'>{errors.fifthSectionItems?.[index]?.image.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`fifthSectionItems.${index}.imageAlt`)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`fifthSectionItems.${index}.title`)} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='pl-3 font-bold'>Description</Label>
                                            <Textarea placeholder='Description' {...register(`fifthSectionItems.${index}.description`)} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                        <div>
                            <Button type='button' className="w-full cursor-pointer" onClick={() => appendFifthSectionItems({ logo: "", logoAlt: "", title: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
                        </div>

                    </div>

                </div>


                <div>
                    <div className='flex border-b mb-5'>
                        <Label className='pl-3 font-bold text-lg'>Accreditations</Label>
                    </div>
                    <div className='border p-2 rounded-md flex flex-col gap-5'>


                        {fields.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-2 gap-2 relative border p-2 rounded-md'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className='pl-3 font-bold'>Logo</Label>
                                        <Controller
                                            name={`accreditations.${index}.logo`}
                                            control={control}
                                            rules={{ required: "Logo is required" }}
                                            render={({ field }) => (
                                                <ImageUploader
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            )}
                                        />
                                        {errors.accreditations?.[index]?.logo && <p className='text-red-500'>{errors.accreditations?.[index]?.logo.message}</p>}
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Label className='pl-3 font-bold'>Alt Tag</Label>
                                        <Input type='text' placeholder='Alt Tag' {...register(`accreditations.${index}.logoAlt`)} />
                                    </div>
                                </div>

                            </div>
                        ))}

                        <div>
                            <Button type='button' className="w-full cursor-pointer" onClick={() => append({ logo: "", logoAlt: "" })}>Add Item</Button>
                        </div>

                    </div>
                </div>


                <div>
                    <div className='flex border-b mb-5'>
                        <Label className='pl-3 font-bold text-lg'>Sustainablity</Label>
                    </div>
                    <div className='border p-2 rounded-md flex flex-col gap-5'>

                        <div className='flex flex-col gap-2'>
                            <Label className='pl-3 font-bold'>Image</Label>
                            <Controller
                                name={`sustainablity.image`}
                                control={control}
                                rules={{ required: "Image is required" }}
                                render={({ field }) => (
                                    <ImageUploader
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.sustainablity?.image && <p className='text-red-500'>{errors.sustainablity?.image.message}</p>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label className='pl-3 font-bold'>Alt Tag</Label>
                            <Input type='text' placeholder='Alt Tag' {...register(`sustainablity.imageAlt`)} />
                        </div>

                        <div>
                            <Label className='pl-3'>Description</Label>
                            <Controller name={`sustainablity.description`} control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                            }} />
                            {errors.sustainablity?.description && <p className='text-red-500'>{errors.sustainablity?.description.message}</p>}
                        </div>


                    </div>
                </div>




                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='pl-3 font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center'>
                    <Button type='submit'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default AboutPage