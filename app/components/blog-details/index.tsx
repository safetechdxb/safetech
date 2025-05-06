"use client"
import InnerBanner from "../common/InnerBanner";
import PageWrapper from "./PageWrapper";
import { blogs } from "../blog/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Index = () => {
  const [slug, setSlug] = useState<string | undefined>(undefined);
  const pathname = usePathname(); // Use usePathname to get the current path

  useEffect(() => {
    // Ensure the slug is available and set it from the pathname
    if (pathname) {
      const slugFromPath = pathname.split("/").pop(); // Get the last part of the path
      setSlug(slugFromPath); // Set slug based on the pathname
    }
  }, [pathname]);

  if (!slug) {
    return <div>Loading...</div>; // Show loading until slug is available
  }

  // Extract ID from slug (last part of the slug)
  const id = slug.split("-").pop();

  // Find the blog post by ID
  const blog = id ? blogs.find((post) => post.id.toString() === id) : undefined;

  if (!blog) return <div>Post not found</div>;
  return ( 
    <main>
      <InnerBanner pageTitle={blog.title} isBlogDetails={true} category={blog.category} date={new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", })} />
      <PageWrapper/>
    </main>
   );
}
 
export default Index;