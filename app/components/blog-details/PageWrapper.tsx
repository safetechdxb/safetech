"use client"
import ContentWrapper from "./ContentWrapper";
import SidebarWrapper from "./SidebarWrapper";
import { IndiBlog } from "@/types/IndiBlog";
import { Blog } from "@/types/Blog";

const PageWrapper = ({data,allBlogs}: {data: IndiBlog,allBlogs: Blog}) => {

  return ( 
    <main>
      <section className="py-140">
        <div className="container">
          <div className="lg:grid grid-cols-[3fr_1fr] gap-3 lg:gap-21">
              <ContentWrapper mainImg={data.coverImage} mainImageAlt={data.coverImageAlt} mainDesc={data.content} galleryImgs={data.images} /><SidebarWrapper allBlogs={allBlogs}/>
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default PageWrapper;