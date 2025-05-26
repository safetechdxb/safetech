import { NextRequest, NextResponse } from "next/server";
import Resource from "@/models/Resource";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if(!isAdmin){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const body = await req.json();
        if (!body) {
            return NextResponse.json({ error: "Images is required" }, { status: 400 });
        }
        const resource = await Resource.findOne({});
        if(resource){
            const resourceCategory = resource.categories.find((category:{_id:string, category:string})=>category._id == id);
            if(resourceCategory){
                resourceCategory.files = body;
                await resource.save();
                return NextResponse.json({ message: "resource updated successfully" }, { status: 200 });
            }
        }else{
            return NextResponse.json({ message: "Error updating resource" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error adding resource", error);
        return NextResponse.json({ error: "Error adding resource" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const resource = await Resource.findOne({});
        if(resource){
            const resourceCategory = resource.categories.find((category:{_id:string, category:string})=>category._id == id);
            return NextResponse.json({ data: resourceCategory }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error fetching resource" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error fetching resource" }, { status: 500 });
    }
}
