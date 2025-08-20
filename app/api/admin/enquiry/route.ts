import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Enquiry from "@/models/Enquiry";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();
        const enquiry = await Enquiry.create(body);
        if(!enquiry){
            return NextResponse.json({ message: "Something went wrong" }, { status: 404 });
        }
        return NextResponse.json({message:"Thank you, we will get back to you soon"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const enquiry = await Enquiry.find({});
        if (!enquiry) {
            return NextResponse.json({ message: "Enquiry not found" }, { status: 404 });
        }
        return NextResponse.json({data:enquiry});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}


export async function DELETE(request: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const id = request.nextUrl.searchParams.get("id");
        const enquiry = await Enquiry.findByIdAndDelete(id);
        if (!enquiry) {
            return NextResponse.json({ message: "Enquiry not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Enquiry deleted successfully" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

