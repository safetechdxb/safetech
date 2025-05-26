import connectDB from "@/lib/mongodb";
import News from "@/models/News";
import { NextRequest, NextResponse } from "next/server";

interface NewsData {
    _id: string;
    title: string;
    slug: string;
    content: string;
    images: string[];
    category: string;
    metaTitle: string;
    metaDescription: string;
    thumbnail: string;
    thumbnailAlt: string;
    coverImage: string;
    coverImageAlt: string;
}

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const {title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt} = await req.json();
        const news = await News.findOne({})
        if(news){
            news.news.push({title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt})
            await news.save()
            return NextResponse.json({message: "News added successfully"},{status: 200});
        }
        else{
            return NextResponse.json({message: "Error in adding news"},{status: 500});
        }
    } catch (error) {
        console.log("Error in adding news",error);
        return NextResponse.json({message: "Error in adding news"},{status: 500});
    }
}

export async function PATCH(req:NextRequest) {
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");
        const {title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt} = await req.json();
        const news = await News.findOne({});
        if(news){
            news.news = news.news.map((news:NewsData) => {
                if(news._id.toString() === id){
                    return {title,slug,content,images,category,metaTitle,metaDescription,thumbnail,thumbnailAlt,coverImage,coverImageAlt}
                }
                return news
            })
            await news.save()
            return NextResponse.json({message: "News updated successfully"},{status: 200});
        }
        else{
            return NextResponse.json({message: "Error in updating news"},{status: 500});
        }
    } catch (error) {
        console.log("Error in updating news",error);
        return NextResponse.json({message: "Error in updating news"},{status: 500});
    }
}

export async function GET(req:NextRequest) {
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");
        const slug = searchParams.get("slug");
        const news = await News.findOne({});
        if(slug){
            if(news){
                const newsData = news.news.find((news:NewsData) => news.slug === slug)
                return NextResponse.json({message: "News fetched successfully",data: newsData},{status: 200});
            }else{
                return NextResponse.json({message: "Error in fetching news"},{status: 500}); 
            }
        }else if(id){
            if(news){
                const newsData = news.news.find((news:NewsData) => news._id.toString() === id)
                return NextResponse.json({message: "News fetched successfully",data: newsData},{status: 200});
            }else{
                return NextResponse.json({message: "Error in fetching news"},{status: 500}); 
            }
        }else{
            if(news){
                return NextResponse.json({message: "News fetched successfully",data: news},{status: 200});
            }
            else{
                return NextResponse.json({message: "Error in fetching news"},{status: 500});
            }
        }

    } catch (error) {
        console.log("Error in fetching news",error);
        return NextResponse.json({message: "Error in fetching news"},{status: 500});
    }
}

export async function DELETE(req:NextRequest) {
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");
        const news = await News.findOne({});
        if(id){
            if(news){
                news.news = news.news.filter((news:NewsData) => news._id.toString() !== id)
                await news.save()
                return NextResponse.json({message: "News deleted successfully"},{status: 200});
            }else{
                return NextResponse.json({message: "Error in deleting news"},{status: 500});
            }
        }else{
            return NextResponse.json({message: "Error in deleting news"},{status: 500});
        }   
    } catch (error) {
        console.log("Error in deleting news",error);
        return NextResponse.json({message: "Error in deleting news"},{status: 500});
    }
}
