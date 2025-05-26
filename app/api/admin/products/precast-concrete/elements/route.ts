import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import PrecastConcrete from "@/models/PrecastConcrete";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const id = request.nextUrl.searchParams.get("id");
        const product = await PrecastConcrete.findOne({});
        if(product){
            const element = product.elementsSection.items.find((item: { _id: string }) => item._id == id);
            if(element){
                return NextResponse.json({ data: element }, { status: 200 });
            }
        }
        return NextResponse.json({ message: "Error fetching element" }, { status: 500 });
    } catch (error) {
        console.log("Error in fetching element", error);
        return NextResponse.json({ message: "Error fetching element" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const body = await request.json();
        const product = await PrecastConcrete.findOne({});
        if(product){
            const element = product.elementsSection.items.find((item: { _id: string }) => item._id == id);
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
