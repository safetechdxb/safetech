import Certifications from "@/models/Certification";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if(!isAdmin){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const body = await req.json();
        
        const response = await Certifications.findOneAndUpdate({},body);
        if(response){
            return NextResponse.json({ message: "Certifications updated successfully" }, { status: 200 });
        }
        return NextResponse.json({ message: "Error updating certifications" }, { status: 500 });
    } catch (error) {
        console.log("Error in adding certifications", error);
        return NextResponse.json({ message: "Error adding certifications" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const data = await Certifications.findOne({});
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.log("Error in fetching certifications", error);
        return NextResponse.json({ message: "Error fetching certifications" }, { status: 500 });
    }
}
