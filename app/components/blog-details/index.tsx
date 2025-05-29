"use client"
import { Blog } from "@/types/Blog";
import InnerBanner from "../common/InnerBanner";
import PageWrapper from "./PageWrapper";
import { IndiBlog } from "@/types/IndiBlog";

const Index = ({data,allBlogs}: {data: IndiBlog,allBlogs: Blog}) => {

  return ( 
    <main>
      <InnerBanner pageTitle={data.title} isBlogDetails={true} category={data.category} date={data.createdAt} />
      <PageWrapper data={data} allBlogs={allBlogs}/>
    </main>
   );
}
 
export default Index;