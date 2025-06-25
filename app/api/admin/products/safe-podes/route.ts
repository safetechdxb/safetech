import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import SafePods from "@/models/SafePods";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
try {
    const body = await request.json();
    await connectDB();
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const safePods = await SafePods.findOneAndUpdate({},body,{upsert:true})
    if(!safePods){
        return NextResponse.json({ message: "Safe Podes not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Safe Podes updated successfully" }, { status: 200 });
    
} catch (error) {
    console.log("Error in adding safe podes", error);
    return NextResponse.json({ error: "Error adding safe podes" }, { status: 500 });
}
}

export async function GET() {
    try {
        await connectDB();
        const safePods = await SafePods.findOne({});
        if (!safePods) {
            return NextResponse.json({ message: "Safe Podes not found" }, { status: 404 });
        }
        return NextResponse.json({ data: safePods }, { status: 200 });
    } catch (error) {
        console.log("Error in getting safe podes", error);
        return NextResponse.json({ error: "Error getting safe podes" }, { status: 500 });
    }
}
