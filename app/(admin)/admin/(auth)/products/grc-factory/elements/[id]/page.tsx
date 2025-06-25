"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiAiGenerateText, RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import { useParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminItemContainer from '@/app/components/AdminInnerContainer/AdminItemContainer';


interface GrcFactoryPageElements {

    metaTitle: string;
    metaDescription: string;
    banner: string;
    bannerAlt: string;
    pageTitle: string;
    slug:string;
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
    secondSectionItems: {
        title: string;
        description: string;
    }[];
    thirdSection: {
        title: string;
        description: string;
    };
    thirdSectionItems: {
        image: string;
        imageAlt: string;
        title: string;
        description: string;
    }[];
    forthSectionStyle:string;
    forthSection:{
        title:string;
        description:string;
        image:string;
        imageAlt:string;
        column1Title:string;
        column2Title:string;
    }
    forthSectionItems:{
        column1Value:string;
        column2Value:string;
    }[]
}

const GrcFactoryPageElements = () => {

    const { id } = useParams();

    const { register, handleSubmit, setValue, control, formState: { errors },watch } = useForm<GrcFactoryPageElements>();

    const { fields: secondSectionItems, append: appendSecondSectionItems, remove: removeSecondSectionItems } = useFieldArray({
        control,
        name: "secondSectionItems"
    });

    const { fields: thirdSectionItems, append: appendThirdSectionItems, remove: removeThirdSectionItems } = useFieldArray({
        control,
        name: "thirdSectionItems"
    });

    const { fields: forthSectionItems, append: appendForthSectionItems, remove: removeForthSectionItems } = useFieldArray({
        control,
        name: "forthSectionItems"
    });

    const handleAddGrcFactoryElement = async (data: GrcFactoryPageElements) => {
        try {
            const response = await fetch(`/api/admin/products/grc-factory/elements?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ ...data }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding element", error);
        }
    }

    const fetchElementData = async () => {
        try {
            const response = await fetch(`/api/admin/products/grc-factory/elements?id=${id}`);
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
                setValue("secondSectionItems", data.data.secondSection.items);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSectionItems", data.data.thirdSection.items);
                setValue("forthSection", data.data.forthSection);
                setValue("forthSectionItems", data.data.forthSection.items);
                setValue("forthSectionStyle", data.data.forthSectionStyle);
                setValue("slug", data.data.slug);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching commitment data", error);
        }
    }



    useEffect(() => {
        fetchElementData();
    }, []);


        useEffect(()=>{
            if(watch("slug") === undefined) return;
            const slug = watch("slug").replace(/\s+/g, '-');
            setValue("slug", slug);
        },[watch("slug")])
    
        const handleAutoGenerate = () => {
          const name = watch("pageTitle");
          if (!name) return;
          const slug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
          setValue("slug", slug);
        };



    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddGrcFactoryElement)}>


                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col gap-2'>
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
                    <div className='flex flex-col gap-1'>
                                                                <Label oneInput>
                                                                    Slug
                                                                    <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer w-fit mt-1' onClick={handleAutoGenerate}>
                                                                        <p>Auto Generate</p>
                                                                        <RiAiGenerateText />
                                                                    </div>
                                                                    </Label>
                                                                <Input type='text' placeholder='Product Slug' {...register("slug", { required: "Slug is required",pattern: {
                                                value: /^[a-z0-9]+(-[a-z0-9]+)*$/,
                                                message: "Slug must contain only lowercase letters, numbers, and hyphens (no spaces)"
                                              } })} />
                                                                {errors.slug && <p className='text-red-500'>{errors.slug.message}</p>}
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
                        <div>
                            <Label className='font-bold'>Image</Label>
                            <Controller
                                name="secondSection.image"
                                control={control}
                                render={({ field }) => (
                                    <ImageUploader
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <Label className='font-bold'>Alt Tag</Label>
                            <Input type='text' placeholder='Alt Tag' {...register("secondSection.imageAlt")} />
                        </div>
                    </div>



                    <div className='rounded-md flex flex-col gap-5'>

                        <Label className='font-bold'>Items</Label>
                        <div className='border p-2 rounded-md'>
                        {secondSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5 pt-3 last:border-b-0'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeSecondSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`secondSectionItems.${index}.title`, {
                                                required: "Title is required"
                                            })} />
                                            {errors.secondSectionItems?.[index]?.title && <p className='text-red-500'>{errors.secondSectionItems?.[index]?.title.message}</p>}
                                        </div>
                                        
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Description</Label>
                                            <Controller
                                                name={`secondSectionItems.${index}.description`}
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
                        ))}
                        </div>

                        <div className='flex justify-end'>
                            <Button type='button' className="cursor-pointer" addItem onClick={() => appendSecondSectionItems({ title: "", description: "" })}>Add Item</Button>
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
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b pb-5 pt-3 last:border-b-0'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeThirdSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>

                                <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Image</Label>
                                            <Controller
                                                name={`thirdSectionItems.${index}.image`}
                                                control={control}
                                                rules={{ required: "Image is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            {errors.thirdSectionItems?.[index]?.image && <p className='text-red-500'>{errors.thirdSectionItems?.[index]?.image.message}</p>}
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Image Alt</Label>
                                            <Input type='text' placeholder='Image Alt' {...register(`thirdSectionItems.${index}.imageAlt`)} />
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`thirdSectionItems.${index}.title`)} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Description</Label>
                                            <Controller
                                                name={`thirdSectionItems.${index}.description`}
                                                control={control}
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
                            <Button type='button' className="cursor-pointer" addItem onClick={() => appendThirdSectionItems({image:"", imageAlt:"", title: "", description: "" })}>Add Item</Button>
                        </div>

                    </div>

                </div>

                </AdminItemContainer>


                <AdminItemContainer>
                <div className='p-5'>
                <div className='flex justify-between items-center'>
                <Label generalSection>Fourth Section</Label>
                <div className='flex flex-col gap-2 w-1/2'>
                    <Controller
                        name="forthSectionStyle"
                        control={control}
                        rules={{ required: "Style is required" }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultValue=""
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Style" />
                                </SelectTrigger>
                                <SelectContent>
                                        <SelectItem value="with-weight">
                                            With weight
                                        </SelectItem>
                                        <SelectItem value="with-image">
                                            With image
                                        </SelectItem>
                                        <SelectItem value="none">
                                            None
                                        </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />

                </div>
                </div>

                {watch("forthSectionStyle") === "with-weight" ? (
                <div className='rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("forthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.forthSection?.title && <p className='text-red-500'>{errors.forthSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Column 1 Title</Label>
                            <Input type='text' placeholder='Column 1 Title' {...register("forthSection.column1Title", {
                                required: "Column 1 Title is required"
                            })} />
                            {errors.forthSection?.column1Title && <p className='text-red-500'>{errors.forthSection?.column1Title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Column 2 Title</Label>
                            <Input type='text' placeholder='Column 2 Title' {...register("forthSection.column2Title", {
                                required: "Column 2 Title is required"
                            })} />
                            {errors.forthSection?.column2Title && <p className='text-red-500'>{errors.forthSection?.column2Title.message}</p>}
                        </div>
                        
                    </div>



                    <div className='rounded-md flex flex-col gap-5'>

                        <Label className='font-bold'>Items</Label>
                        <div className='border p-2 rounded-md'>
                        {forthSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-1 gap-2 relative border p-2 rounded-md'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => removeForthSectionItems(index)} className='cursor-pointer text-red-600' />
                                </div>
                                <div className='grid grid-cols-2 gap-2 w-full'>

                                    
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Column 1 Value</Label>
                                            <Input type='text' placeholder='Column 1 Value' {...register(`forthSectionItems.${index}.column1Value`)} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Column 2 Value</Label>
                                            <Input type='text' placeholder='Column 2 Value' {...register(`forthSectionItems.${index}.column2Value`)} />
                                        </div>
                                    
                                </div>

                            </div>
                        ))}
                        </div>
                        <div className='flex justify-end'>
                            <Button type='button' className="cursor-pointer" addItem onClick={() => appendForthSectionItems({column1Value:"", column2Value:"" })}>Add Item</Button>
                        </div>

                    </div>

                </div> ) : 
                

                (watch("forthSectionStyle") === "with-image" ? (

                    <div className='border p-2 rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("forthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.forthSection?.title && <p className='text-red-500'>{errors.forthSection?.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Description</Label>
                            <Textarea placeholder='Description' {...register("forthSection.description", {
                                required: "Description is required"
                            })} />
                            {errors.forthSection?.description && <p className='text-red-500'>{errors.forthSection?.description.message}</p>}
                        </div>
                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Image</Label>
                                            <Controller
                                                name={`forthSection.image`}
                                                control={control}
                                                rules={{ required: "Image is required" }}
                                                render={({ field }) => (
                                                    <ImageUploader
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            {errors.forthSection?.image && <p className='text-red-500'>{errors.forthSection?.image.message}</p>}
                                        </div>
                                        
                                        <div className='flex flex-col gap-1'>
                            <Label className='font-bold'>Alt tag</Label>
                            <Input type='text' placeholder='Alt tag' {...register("forthSection.imageAlt")} />
                            {errors.forthSection?.imageAlt && <p className='text-red-500'>{errors.forthSection?.imageAlt.message}</p>}
                        </div>

                        
                    </div>
                    </div>
                ) : (
                watch("forthSectionStyle") === "none" ? <div>This section will be hidden</div> : null
                ))}

                </div>

                </AdminItemContainer>


                <div className='flex flex-col gap-2'>
                    <Label className='font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center'>
                    <Button type='submit' className='w-full cursor-pointer'>Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default GrcFactoryPageElements