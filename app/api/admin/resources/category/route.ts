import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Resource from "@/models/Resource";

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const { name } = await req.json();
        const resource = await Resource.findOne({})
        if(resource){
            resource.categories.push({ category: name, files: [] });
            await resource.save();
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
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const { name } = await req.json();
        const resource = await Resource.findOne({});
        if(resource){
            const category = resource.categories.find((category:{_id:string, category:string})=>category._id == id);
            if(category){
                category.category = name;
                await resource.save();
                return NextResponse.json({ message: "category updated successfully" }, { status: 200 });
            }
        }else{
            return NextResponse.json({ message: "Error updating category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error updating category" }, { status: 500 });
    }
}

export async function DELETE(req:NextRequest) {
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const resource = await Resource.findOne({});
        if(resource){
            resource.categories = resource.categories.filter((category:{_id:string, category:string})=>category._id != id);
            await resource.save();
            return NextResponse.json({ message: "category deleted successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error deleting category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error deleting category" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const resource = await Resource.findOne({});
        if(resource){
            return NextResponse.json({ data: resource.categories }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error fetching category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error fetching category" }, { status: 500 });
    }
}
