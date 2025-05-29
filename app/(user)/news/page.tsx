import Index from "@/app/components/news";

const News = async() => {

    const newsResponse = await fetch(`${process.env.BASE_URL}/api/admin/news`,{
        next: {
            revalidate: 60,
        }
    });

    const newsData = await newsResponse.json();

  return ( 
    <main>
      <Index data={newsData.data}/>
    </main>
   );
}
 
export default News;