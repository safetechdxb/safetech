import Index from "@/app/components/blog";

const Blog = async() => {
  const blogResponse = await fetch(`${process.env.BASE_URL}/api/admin/blog`,{
    next: {
        revalidate: 60,
    }
});

const blogData = await blogResponse.json();
  return ( 
    <>
      <Index data={blogData.data}/>
    </>
   );
}
 
export default Blog;