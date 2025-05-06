"use client"
import ContentWrapper from "./ContentWrapper";
import SidebarWrapper from "./SidebarWrapper";
import { blogs } from "../blog/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const PageWrapper = () => {
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
      <section className="py-140">
        <div className="container">
          <div className="lg:grid grid-cols-[3fr_1fr] gap-3 lg:gap-21">
              <ContentWrapper mainImg={blog.img} mainDesc={blog.mainDesc} galleryImgs={blog.galleryImgs} subDesc1={blog.subDesc1} subDesc2={blog.subDesc2} /><SidebarWrapper/>
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default PageWrapper;