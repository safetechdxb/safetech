import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const { metaTitle, metaDescription, banner, bannerAlt,pageTitle } = await req.json();
        const blog = await Blog.findOne({});
        if(blog){
            blog.metaTitle = metaTitle;
            blog.metaDescription = metaDescription;
            blog.banner = banner;
            blog.bannerAlt = bannerAlt;
            blog.pageTitle = pageTitle;
            await blog.save();
            return NextResponse.json({ message: "Details saved successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error saving  details" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error saving intro meta details", error);
        return NextResponse.json({ message: "Error saving intro meta details" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const blog = await Blog.findOne({});
        if(blog){
            return NextResponse.json({ success: true, data: blog }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "Error fetching details" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error fetching details", error);
        return NextResponse.json({ success: false, message: "Error fetching details" }, { status: 500 });
    }
}

    