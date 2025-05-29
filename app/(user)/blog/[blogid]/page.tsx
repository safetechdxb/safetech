import Index from "@/app/components/blog-details";

const  BlogDetails= async ({params}: {params: Promise<{blogid: string}>}) => {

    const {blogid} = await params;

    const blogResponse = await fetch(`${process.env.BASE_URL}/api/admin/blog?slug=${blogid}`);
    const blogData = await blogResponse.json();

    const allBlogsResponse = await fetch(`${process.env.BASE_URL}/api/admin/blog`);
    const allBlogsData = await allBlogsResponse.json();

  return ( 
    <>
      <Index data={blogData.data} allBlogs={allBlogsData.data}/>
    </>
   );
}
 
export default BlogDetails;