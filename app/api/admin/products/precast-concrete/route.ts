import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import PrecastConcrete from "@/models/PrecastConcrete";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
try {
    const body = await request.json();
    await connectDB();
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const precastConcrete = await PrecastConcrete.findOne({});
    if(precastConcrete){
        precastConcrete.productSlug = body.productSlug;
        precastConcrete.banner = body.banner;
        precastConcrete.bannerAlt = body.bannerAlt;
        precastConcrete.pageTitle = body.pageTitle;
        precastConcrete.metaTitle = body.metaTitle;
        precastConcrete.metaDescription = body.metaDescription;
        precastConcrete.firstSection = body.firstSection;
        precastConcrete.elementsSection = body.elementsSection;
        precastConcrete.elementsSection.items = body.elementsSectionItems;
        precastConcrete.thirdSection = body.thirdSection;
        precastConcrete.thirdSection.items = body.thirdSectionItems;
        precastConcrete.fourthSection = body.fourthSection;
        precastConcrete.fourthSection.items = body.fourthSectionItems;
        await precastConcrete.save();
        return NextResponse.json({ message: "Precast Concrete updated successfully" }, { status: 200 });
    }
    return NextResponse.json({ message: "Error updating precast concrete" }, { status: 500 });
    
} catch (error) {
    console.log("Error in adding about", error);
    return NextResponse.json({ error: "Error adding about" }, { status: 500 });
}
}

export async function GET() {
    try {
        await connectDB();
        const precastConcrete = await PrecastConcrete.findOne({});
        if (!precastConcrete) {
            return NextResponse.json({ message: "Precast Concrete not found" }, { status: 404 });
        }
        return NextResponse.json({ data: precastConcrete }, { status: 200 });
    } catch (error) {
        console.log("Error in adding about", error);
        return NextResponse.json({ error: "Error adding about" }, { status: 500 });
    }
}
