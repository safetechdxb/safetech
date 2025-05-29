import Index from "@/app/components/news-details";


const NewsDetails = async ({params}: {params: Promise<{newsid: string}>}) => {

    const {newsid} = await params;

    const newsResponse = await fetch(`${process.env.BASE_URL}/api/admin/news?slug=${newsid}`);
    const newsData = await newsResponse.json();

    const allNewsResponse = await fetch(`${process.env.BASE_URL}/api/admin/news`);
    const allNewsData = await allNewsResponse.json();

  return ( 
    <>
      <Index data={newsData.data} allNews={allNewsData.data}/>
    </>
   );
}
 
export default NewsDetails;