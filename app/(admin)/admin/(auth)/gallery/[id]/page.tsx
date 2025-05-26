"use client"

import { ImageUploader } from '@/components/ui/image-uploader'
import { Label } from '@radix-ui/react-label'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation';

const page = () => {
        const router = useRouter();
        const { id } = useParams();

        const [imageUrls, setImageUrls] = useState<string[]>([]);
        const { setValue,getValues } = useForm();
        const handleImageUpload = async (uploadedUrl: string) => {
            setImageUrls((prev) => [...prev, uploadedUrl]);
            setValue("images", [...imageUrls, uploadedUrl]);
        };
    
        const handleRemoveImage = (indexToRemove: number) => {
            setImageUrls((prev) => prev.filter((_, index) => index !== indexToRemove));
            setValue(
                "images",
                imageUrls.filter((_, index) => index !== indexToRemove)
            );
        }; 

        const fetchGalleryData = async () => {
            try {
                const response = await fetch(`/api/admin/gallery?id=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setValue("images", data.data.images);
                    setImageUrls(data.data.images);
                } else {
                    const data = await response.json();
                    alert(data.message);
                }
            } catch (error) {
                console.log("Error in fetching gallery data", error);
            }
        }


        const handleAddGallery = async () => {
            try {
                const response = await fetch(`/api/admin/gallery?id=${id}`, {
                    method: "POST",
                    body: JSON.stringify(getValues("images")),
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
                    <Label className="block text-sm pl-2 ">Images</Label>
                    <div className="mt-2">
                        <ImageUploader onChange={handleImageUpload} deleteAfterUpload={true} />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        {imageUrls.map((url, index) => (
                            <div key={index} className="relative h-40">
                                <Image
                                    src={url}
                                    alt={`Uploaded image ${index + 1}`}
                                    className="h-full w-full object-cover rounded-lg"
                                    width={100}
                                    height={100}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                    <Button type="submit" onClick={handleAddGallery}>Submit</Button>
                    </div>
                </div>
  )
}

export default page