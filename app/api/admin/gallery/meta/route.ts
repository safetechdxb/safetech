import connectDB from "@/lib/mongodb";
import Gallery from "@/models/Gallery";
import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const body = await req.json();
        const { banner, bannerAlt, pageTitle, metaTitle, metaDescription } = body;
        const response = await Gallery.findOneAndUpdate({},{
            banner,
            bannerAlt,
            pageTitle,
            metaTitle,
            metaDescription,
        });
        return NextResponse.json({
            message: "Meta section updated successfully",
            data: response,
        });
    } catch (error) {
        console.log("Error in updating meta section", error);
        return NextResponse.json({ error: "Error updating meta section" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const gallery = await Gallery.findOne({});
        if(gallery){
            return NextResponse.json({ data: gallery }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error fetching gallery" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error fetching gallery" }, { status: 500 });
    }
}
