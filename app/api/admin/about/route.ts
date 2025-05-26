import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import About from "@/models/About";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET() {
    try {
        await connectDB();
        const about = await About.findOne({});
        if (!about) {
            return NextResponse.json({ message: "About not found" }, { status: 404 });
        }
        return NextResponse.json({data:about,message:"About fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();
        const {banner,bannerAlt,pageTitle,metaTitle,metaDescription,firstSection,secondSection,thirdSection,thirdSectionItems,fourthSection,fourthSectionItems,fifthSection,fifthSectionItems,accreditations,sustainablity} = body;
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const about = await About.findOne({});
        if (!about) {
            return NextResponse.json({ message: "About not found" }, { status: 404 });
        }
        about.banner = banner;
        about.bannerAlt = bannerAlt;
        about.pageTitle = pageTitle;
        about.metaTitle = metaTitle;
        about.metaDescription = metaDescription;
        about.firstSection = firstSection;
        about.secondSection = secondSection;
        about.thirdSection = thirdSection;
        about.thirdSection.items = thirdSectionItems;
        about.fourthSection = fourthSection;
        about.fourthSection.items = fourthSectionItems;
        about.fifthSection = fifthSection;
        about.fifthSection.items = fifthSectionItems;
        about.accreditations = accreditations;
        about.sustainablity = sustainablity;
        await about.save();
        return NextResponse.json({message:"About updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}