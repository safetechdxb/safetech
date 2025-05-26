import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Resource from "@/models/Resource";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if(!isAdmin){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { banner, bannerAlt, pageTitle, metaTitle, metaDescription } = await req.json();
        const resource = await Resource.create({
            banner,
            bannerAlt,
            pageTitle,
            metaTitle,
            metaDescription,
        });
        if(resource){
            // resource.banner = banner;
            // resource.bannerAlt = bannerAlt;
            // resource.pageTitle = pageTitle;
            // resource.metaTitle = metaTitle;
            // resource.metaDescription = metaDescription;
            // await resource.save();
            return NextResponse.json({ message: "meta section updated successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error updating meta section" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error updating meta section", error)
        return NextResponse.json({ message: "Error updating meta section" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const resource = await Resource.findOne({});
        if(resource){
            return NextResponse.json({ data: resource }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error fetching meta section" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error fetching meta section", error)
        return NextResponse.json({ message: "Error fetching meta section" }, { status: 500 });
    }
}
