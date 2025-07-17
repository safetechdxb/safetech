import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import NewsLetter from "@/models/NewsLetter";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const {email} = await request.json();
        const foundEmail = await NewsLetter.findOne({email});
        if(foundEmail){
            return NextResponse.json({ message: "You have already subscribed to our newsletter" }, { status: 404 });
        }
        const newsLetter = await NewsLetter.create({email});
        if(!newsLetter){
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
        const enquiry = await NewsLetter.find({});
        if (!enquiry) {
            return NextResponse.json({ message: "Emails not found" }, { status: 404 });
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
        const enquiry = await NewsLetter.findByIdAndDelete(id);
        if (!enquiry) {
            return NextResponse.json({ message: "Email not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Email deleted successfully" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
