import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/verifyAdmin";

interface BlogData {
    _id: string;
    title: string;
    slug: string;
    content: string;
    images: string[];
    category: string;
    metaTitle: string;
    metaDescription: string;
    thumbnail: string;
    thumbnailAlt: string;
    coverImage: string;
    coverImageAlt: string;
}

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const {title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt} = await req.json();
        const blog = await Blog.findOne({})
        if(blog){
            blog.blogs.push({title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt})
            await blog.save()
            return NextResponse.json({message: "Blog added successfully"},{status: 200});
        }
        else{
            return NextResponse.json({message: "Error in adding blog"},{status: 500});
        }
    } catch (error) {
        console.log("Error in adding blog",error);
        return NextResponse.json({message: "Error in adding blog"},{status: 500});
    }
}

export async function PATCH(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");
        const {title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt} = await req.json();
        const blog = await Blog.findOne({})
        if(blog){
            blog.blogs = blog.blogs.map((blog:BlogData) => {
                if(blog._id.toString() === id){
                    return {title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt}
                }
                return blog
            })
            await blog.save()
            return NextResponse.json({message: "Blog updated successfully"},{status: 200});
        }
        else{
            return NextResponse.json({message: "Error in updating blog"},{status: 500});
        }
    } catch (error) {
        console.log("Error in updating blog",error);
        return NextResponse.json({message: "Error in updating blog"},{status: 500});
    }
}

export async function GET(req:NextRequest) {
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");
        const slug = searchParams.get("slug");
        const blog = await Blog.findOne({});
        if(slug){
            if(blog){
                const blogData = blog.blogs.find((blog:BlogData) => blog.slug === slug)
                return NextResponse.json({message: "Blog fetched successfully",data: blogData},{status: 200});
            }else{
                return NextResponse.json({message: "Error in fetching blog"},{status: 500}); 
            }
        }else if(id){
            if(blog){
                const blogData = blog.blogs.find((blog:BlogData) => blog._id.toString() === id)
                return NextResponse.json({message: "Blog fetched successfully",data: blogData},{status: 200});
            }else{
                return NextResponse.json({message: "Error in fetching blog"},{status: 500}); 
            }
        }else{
            if(blog){
                return NextResponse.json({message: "Blogs fetched successfully",data: blog},{status: 200});
            }
            else{
                return NextResponse.json({message: "Error in fetching blogs"},{status: 500});
            }
        }

    } catch (error) {
        console.log("Error in fetching blogs",error);
        return NextResponse.json({message: "Error in fetching blogs"},{status: 500});
    }
}

export async function DELETE(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");
        if(id){
            const blog = await Blog.findOne({})
            if(blog){
                blog.blogs = blog.blogs.filter((blog:BlogData) => blog._id.toString() !== id)
                await blog.save()
                return NextResponse.json({message: "blog deleted successfully"},{status: 200});
            }else{
                return NextResponse.json({message: "Error in deleting blog"},{status: 500});
            }
        }else{
            return NextResponse.json({message: "Error in deleting blog"},{status: 500});
        }   
    } catch (error) {
        console.log("Error in deleting blog",error);
        return NextResponse.json({message: "Error in deleting blog"},{status: 500});
    }
}
