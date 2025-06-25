import { NextRequest, NextResponse } from "next/server";
import PrecastConcrete from "@/models/PrecastConcrete";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import PrecastPrestressed from "@/models/PrecastPrestressed";
import GrcFactory from "@/models/GrcFactory";

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const slug = request.nextUrl.searchParams.get("slug");

        console.log(slug)

        
        if(slug=="precast-concrete"){
           const product = await PrecastConcrete.findOne({}); 
           return NextResponse.json({ data: product.elementsSection.items }, { status: 200 });
        }

        if(slug=="precast-prestressed"){
            const product = await PrecastPrestressed.findOne({}); 
            return NextResponse.json({ data: product.elementsSection.items }, { status: 200 });
         }

         if(slug=="grc-factory"){
            const product = await GrcFactory.findOne({}); 
            return NextResponse.json({ data: product.elementsSection.items }, { status: 200 });
         }

    } catch (error) {
        console.log("Error in fetching elements", error);
        return NextResponse.json({ error: "Error fetching elements" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const body = await request.json();
        const product = await PrecastConcrete.findOne({});
        if(product){
            const element = product.elementsSection.items.find((item: { _id: string }) => item._id == body.id);
            if(element){
                element.metaTitle = body.metaTitle;
                element.metaDescription = body.metaDescription;
                element.banner = body.banner;
                element.bannerAlt = body.bannerAlt;
                element.pageTitle = body.pageTitle;
                element.firstSection = body.firstSection;
                element.secondSection = body.secondSection;
                element.secondSection.items = body.secondSectionItems;
                await product.save();
                return NextResponse.json({ message: "Element updated successfully" }, { status: 200 });
            }
        }
        
    } catch (error) {
        console.log("Error in updating elements", error);
        return NextResponse.json({ error: "Error updating elements" }, { status: 500 });
    }
}