import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import PrecastPrestressed from "@/models/PrecastPrestressed";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
try {
    const body = await request.json();
    await connectDB();
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const precastConcrete = await PrecastPrestressed.findOne({});
    if(precastConcrete){
        precastConcrete.productSlug = body.productSlug;
        precastConcrete.banner = body.banner;
        precastConcrete.bannerAlt = body.bannerAlt;
        precastConcrete.pageTitle = body.pageTitle;
        precastConcrete.metaTitle = body.metaTitle;
        precastConcrete.metaDescription = body.metaDescription;
        precastConcrete.firstSection = body.firstSection;
        precastConcrete.secondSection = body.secondSection;
        precastConcrete.elementsSection = body.elementsSection;
        precastConcrete.elementsSection.items = body.elementsSectionItems;
        await precastConcrete.save();
        return NextResponse.json({ message: "Precast Prestressed updated successfully" }, { status: 200 });
    }
    return NextResponse.json({ message: "Error updating precast prestressed" }, { status: 500 });
    
} catch (error) {
    console.log("Error in adding product", error);
    return NextResponse.json({ error: "Error adding product" }, { status: 500 });
}
}

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const precastConcrete = await PrecastPrestressed.findOne({});
        if (!precastConcrete) {
            return NextResponse.json({ message: "Precast Prestressed not found" }, { status: 404 });
        }
        return NextResponse.json({ data: precastConcrete }, { status: 200 });
    } catch (error) {
        console.log("Error in adding about", error);
        return NextResponse.json({ error: "Error adding about" }, { status: 500 });
    }
}
