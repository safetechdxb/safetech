import { NextRequest, NextResponse } from "next/server";
import Gallery from "@/models/Gallery";
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
        const gallery = await Gallery.findOne({});
        if(gallery){
            const category = gallery.categories.find((category:{_id:string, category:string})=>category._id == id);
            if(category){
                category.images = body;
                await gallery.save();
                return NextResponse.json({ message: "gallery updated successfully" }, { status: 200 });
            }
        }else{
            return NextResponse.json({ message: "Error updating gallery" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error adding gallery", error);
        return NextResponse.json({ error: "Error adding gallery" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const gallery = await Gallery.findOne({});
        if(id){
            if(gallery){
            const category = gallery.categories.find((category:{_id:string, category:string})=>category._id == id);
            return NextResponse.json({ data: category }, { status: 200 });
            }
        }
        else{
            if(gallery){
                return NextResponse.json({ data: gallery }, { status: 200 });
            }else{
                return NextResponse.json({ message: "Error fetching gallery" }, { status: 500 });
            }
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error fetching gallery" }, { status: 500 });
    }
}
