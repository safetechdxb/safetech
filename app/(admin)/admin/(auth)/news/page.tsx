"use client"

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MdDelete, MdEdit } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ImageUploader } from "@/components/ui/image-uploader";
import AdminItemContainer from "@/app/components/AdminInnerContainer/AdminItemContainer";


export default function News() {

  const [oldCategory, setOldCategory] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [newsList, setNewsList] = useState<{_id: string, title: string, thumbnail: string}[]>([]);
  const [categoryList, setCategoryList] = useState<{_id: string, name: string}[]>([]);
  const [metaTitle, setMetaTitle] = useState<string>("");
  const [metaDescription, setMetaDescription] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const [bannerAlt, setBannerAlt] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("");
  const router = useRouter();


  const handleFetchNews = async() => {
    try {
      const response = await fetch("/api/admin/news");
      if(response.ok) {
        const data = await response.json();
        setNewsList(data.data.news);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching news", error);
    }
  }
  
  const handleAddCategory = async() => {
    try {
      const response = await fetch("/api/admin/news/category",{
        method: "POST",
        body: JSON.stringify({ name: category }),
      });
      if(response.ok) {
        const data = await response.json();
        setCategory("");
        alert(data.message);
        handleFetchCategory();
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error adding industry", error);
    }
  }

  const handleFetchCategory = async() => {
    try {
      const response = await fetch("/api/admin/news/category");
      if(response.ok) {
        const data = await response.json();
        setCategoryList(data.data);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching category", error);
    }
  }

  const handleFetchMeta = async() => {
    try {
      const response = await fetch("/api/admin/news/intrometa");
      if(response.ok) {
        const data = await response.json();
        setMetaTitle(data.data.metaTitle);
        setMetaDescription(data.data.metaDescription);
        setPageTitle(data.data.pageTitle);
        setBanner(data.data.banner);
        setBannerAlt(data.data.bannerAlt);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching details", error);
    }
  }

  const handleEditCategory = async(id: string) => {
    try {
      const response = await fetch(`/api/admin/news/category?id=${id}`,{
        method: "PATCH",
        body: JSON.stringify({ name: category ,  oldName: oldCategory }),
      });
      if(response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchCategory();
        setOldCategory("");
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error editing category", error);
    }
  }

  const handleDeleteCategory = async(id: string) => {
    try {
      const response = await fetch(`/api/admin/news/category?id=${id}`,{
        method: "DELETE",
      });
      if(response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchCategory();
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting category", error);
    }
  }


  const handleDeleteNews = async(id: string) => {
    try {
      const response = await fetch(`/api/admin/news?id=${id}`,{
        method: "DELETE",
      });
      if(response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchNews();
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting news", error);
    }
  }

  const submitMetaSection = async() => {
    try {
      const response = await fetch("/api/admin/news/intrometa",{
        method: "POST",
        body: JSON.stringify({ metaTitle, metaDescription, banner, bannerAlt,pageTitle }),
      });
      if(response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchNews();
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
        console.log("Error saving details", error);
    }
  }

  useEffect(()=>{ 
    handleFetchMeta();
    handleFetchCategory();
    handleFetchNews();
  },[])

  return (
    <div className="h-fit grid grid-cols-1 gap-5">
      <AdminItemContainer>
                              <div className="h-fit w-full p-5 border-gray-300 rounded-md mt-5">
                                  <div className="flex justify-between border-b-2 pb-2">
                                      <Label generalSection>Meta Section</Label>
                                      <Button onClick={submitMetaSection}>Save</Button>
                                  </div>
                                  <div className="mt-2 grid grid-cols-2 gap-2  h-fit">
                                    <div className="flex flex-col gap-2">
                                    <div>
                                      <Label>Banner</Label>
                                      <ImageUploader onChange={(url) => setBanner(url)} value={banner}/>
                                    </div>
                                    <div>
                                          <Label>Banner Alt</Label>
                                          <Input type="text" value={bannerAlt} onChange={(e) => setBannerAlt(e.target.value)} />
                                      </div>
                                      </div>
                                      <div className="flex flex-col gap-2">
                                      <div>
                                          <Label>Page Title</Label>
                                          <Input type="text" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} />
                                      </div>
                                      <div>
                                          <Label>Meta title</Label>
                                          <Input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
                                      </div>
                                      
                                      <div>
                                          <Label>Meta Description</Label>
                                          <Input type="text" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
                                      </div>
                                      </div>
                                  </div>
                              </div>
                              </AdminItemContainer>

<AdminItemContainer>
        <div className="h-[300px] w-full p-5 border-gray-300 rounded-md overflow-y-hidden">
          <div className="flex justify-between border-b-2 pb-2">
            <Label generalSection>Category</Label>
            <Dialog>
              <DialogTrigger className="bg-primary text-white px-3 py-1 rounded-md font-semibold" onClick={()=>setCategory("")}>Add Category</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Category</DialogTitle>
                  <DialogDescription>
                    <Input type="text" placeholder="Category Name" value={category} onChange={(e) => setCategory(e.target.value)} />
                  </DialogDescription>
                </DialogHeader>
                <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddCategory}>Save</DialogClose>
              </DialogContent>

            </Dialog>
          </div>
          <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-3/4">
            {categoryList?.map((item)=>(
              <div className="flex justify-between border p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
              <div>
                {item.name}
              </div>
              <div className="flex gap-5">
              <Dialog>
              <DialogTrigger onClick={()=>{setCategory(item.name); setOldCategory(item.name)}}><MdEdit/></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Category</DialogTitle>
                  <DialogDescription>
                    <Input type="text" placeholder="Category Name" value={category} onChange={(e) => setCategory(e.target.value)} />
                  </DialogDescription>
                </DialogHeader>
                <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleEditCategory(item._id)}>Save</DialogClose>
              </DialogContent>

            </Dialog>



                <Dialog>
              <DialogTrigger><MdDelete/></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <div className="flex gap-2">
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleDeleteCategory(item._id)}>Yes</DialogClose>
                </div>

              </DialogContent>

            </Dialog>

              </div>
            </div>
            ))}
            
          </div>
        </div>
        </AdminItemContainer>



<AdminItemContainer>
      <div className="h-[300px] w-full p-5 border-gray-300 rounded-md overflow-y-hidden">
        <div className="flex justify-between border-b-2 pb-2">
          <Label generalSection>News</Label>
          <Button onClick={()=>router.push("/admin/news/add")}>Add News</Button>
        </div>
        <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-3/4">
          {newsList?.map((item)=>(
            <div className="flex justify-between border p-1 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300 h-32" key={item._id}>
            <div className="h-24">
              <div className="flex gap-2 items-center h-full">
                <Image src={item.thumbnail} alt={item.title} width={100} height={100} className="h-full object-cover"/>
                {item.title}
              </div>
            </div>
            <div className="flex gap-5">
              <MdEdit onClick={()=>router.push(`/admin/news/edit/${item._id}`)}/>
              
              <Dialog>
              <DialogTrigger><MdDelete/></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <div className="flex gap-2">
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleDeleteNews(item._id)}>Yes</DialogClose>
                </div>

              </DialogContent>

            </Dialog>
            </div>
          </div>
          ))}
                      
          
        </div>
      </div>
      </AdminItemContainer>
    </div>
  );
}

