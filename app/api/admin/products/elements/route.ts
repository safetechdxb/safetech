import { NextRequest, NextResponse } from "next/server";
import PrecastConcrete from "@/models/PrecastConcrete";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const slug = request.nextUrl.searchParams.get("slug");
        if(slug=="precast-concrete"){
           const product = await PrecastConcrete.findOne({}); 
           return NextResponse.json({ data: product.elementsSection.items }, { status: 200 });
        }
    } catch (error) {
        console.log("Error in fetching elements", error);
        return NextResponse.json({ error: "Error fetching elements" }, { status: 500 });
    }
}