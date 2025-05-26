import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import mongoose from "mongoose";

export async function GET() {
    try {
        await connectDB();
        const blog = await Blog.findOne({});
        if(blog){
            const categoryData = blog.categories;
            return NextResponse.json({ success: true, data: categoryData }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "Error fetching category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching category" }, { status: 500 });
    }
} 

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const { name } = await req.json();
        const blog = await Blog.findOne({});
        if(blog){
            blog.categories.push({name});
            await blog.save();
            return NextResponse.json({ message: "category added successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error adding category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error adding category" }, { status: 500 });
    }
} 

export async function PATCH(req:NextRequest) {
    const session = await mongoose.startSession();
    try {
        await connectDB();
        session.startTransaction();
        const { name,oldName } = await req.json();
        const blog = await Blog.findOne({});
        if(blog){
            blog.blogs.map(async (blog:{category:string}) => {
                if(blog.category === oldName){
                    blog.category = name;
                }
            });
            await blog.save();
            const category = blog.categories.find((category:{name:string}) => category.name === oldName);
            if(category){
                category.name = name;
                await blog.save();
                await session.commitTransaction();
                return NextResponse.json({ message: "Category updated successfully" }, { status: 200 });
            }else{
                await session.abortTransaction();
                return NextResponse.json({ message: "Error updating category" }, { status: 500 });
            }
        }else{
            await session.abortTransaction();
            return NextResponse.json({ message: "Error updating category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        await session.abortTransaction();
        return NextResponse.json({ message: "Error updating category" }, { status: 500 });
    }finally{
        await session.endSession();
    }
}

export async function DELETE(req:NextRequest) {
    const session = await mongoose.startSession();
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        session.startTransaction();
        
        const blog = await Blog.findOne({});
        if(blog){
            const deletedCategory = blog.categories.find((category:{_id:string}) => category._id == id);
            if(deletedCategory){
                blog.blogs.map(async (blog:{category:string}) => {
                    if(blog.category === deletedCategory.name){
                        blog.category = "";
                    }
                });
                blog.categories = blog.categories.filter((category:{_id:string}) => category._id != id);
                await blog.save();
                await session.commitTransaction();
                return NextResponse.json({ message: "Category deleted successfully" }, { status: 200 });
            }else{
                await session.abortTransaction();
                return NextResponse.json({ message: "Error deleted category" }, { status: 500 });
            }
        }else{
            await session.abortTransaction();
            return NextResponse.json({ message: "Error deleted category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        await session.abortTransaction();
        return NextResponse.json({ message: "Error deleted category" }, { status: 500 });
    }finally{
        await session.endSession();
    }
}
