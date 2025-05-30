import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const body = await request.json();
        const contact = await Contact.findOne({});
        if(contact){
            contact.pageTitle = body.pageTitle;
            contact.title = body.title;
            contact.metaTitle = body.metaTitle;
            contact.metaDescription = body.metaDescription;
            contact.banner = body.banner;
            contact.bannerAlt = body.bannerAlt;
            contact.map = body.map;
            contact.location = body.location;
            contact.address = body.address;
            contact.email = body.email;
            contact.phone = body.phone;
            await contact.save();
            return NextResponse.json({
                message: "Contact updated successfully",
            });
        }else{
            return NextResponse.json({ error: "Error updating contact" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error updating contact", error);
        return NextResponse.json({ error: "Error updating contact" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const contact = await Contact.findOne({});
        if (!contact) {
            return NextResponse.json({ error: "Contact not found" }, { status: 404 });
        }
        return NextResponse.json({data:contact});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
