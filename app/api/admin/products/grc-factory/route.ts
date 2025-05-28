import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import GrcFactory from "@/models/GrcFactory";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
try {
    const body = await request.json();
    await connectDB();
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const grcFactory = await GrcFactory.findOne({});
    if(grcFactory){
        grcFactory.productSlug = body.productSlug;
        grcFactory.banner = body.banner;
        grcFactory.bannerAlt = body.bannerAlt;
        grcFactory.pageTitle = body.pageTitle;
        grcFactory.metaTitle = body.metaTitle;
        grcFactory.metaDescription = body.metaDescription;
        grcFactory.firstSection = body.firstSection;
        grcFactory.elementsSection = body.elementsSection;
        grcFactory.elementsSection.items = body.elementsSectionItems;
        grcFactory.thirdSection = body.thirdSection;
        grcFactory.thirdSection.items = body.thirdSectionItems;
        await grcFactory.save();
        return NextResponse.json({ message: "GRC Factory updated successfully" }, { status: 200 });
    }
    return NextResponse.json({ message: "Error updating GRC Factory" }, { status: 500 });
    
} catch (error) {
    console.log("Error in adding GRC Factory", error);
    return NextResponse.json({ error: "Error adding GRC Factory" }, { status: 500 });
}
}

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const grcFactory = await GrcFactory.findOne({});
        if (!grcFactory) {
            return NextResponse.json({ message: "GRC Factory not found" }, { status: 404 });
        }
        return NextResponse.json({ data: grcFactory }, { status: 200 });
    } catch (error) {
        console.log("Error in adding GRC Factory", error);
        return NextResponse.json({ error: "Error adding GRC Factory" }, { status: 500 });
    }
}
