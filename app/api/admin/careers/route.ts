import { NextRequest, NextResponse } from "next/server";
import Career from "@/models/Career";
import connectDB from "@/lib/mongodb";

export async function GET() {
    try {
        await connectDB();
        const career = await Career.findOne({});
        if (!career) {
            return NextResponse.json({ message: "Career not found" }, { status: 404 });
        }
        return NextResponse.json({data:career});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();
        const { banner, bannerAlt,pageTitle, firstSection, secondSection, firstSectionItems, secondSectionItems, thirdSectionItems,metaTitle,metaDescription } = body;
        console.log(body)
        const career = await Career.findOne({});
        if (!career) {
            return NextResponse.json({ message: "Career not found" }, { status: 404 });
        }

        career.banner = banner;
        career.bannerAlt = bannerAlt;
        career.pageTitle = pageTitle;
        career.firstSection.items = firstSectionItems;
        career.secondSection.items = secondSectionItems;
        career.thirdSection.items = thirdSectionItems;
        career.firstSection.title = firstSection.title;
        career.firstSection.description = firstSection.description;
        career.firstSection.image = firstSection.image;
        career.firstSection.imageAlt = firstSection.imageAlt;
        career.secondSection.title = secondSection.title;
        career.secondSection.description = secondSection.description;
        career.thirdSection.items = thirdSectionItems;
        career.metaTitle = metaTitle;
        career.metaDescription = metaDescription;
        await career.save();
        return NextResponse.json({message:"Career updated successfully"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
