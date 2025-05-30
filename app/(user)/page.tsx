import Index from "../components/home/Index";

const page = async() => {
  const response = await fetch(`${process.env.BASE_URL}/api/admin/home`, { next: { revalidate: 60 } });
  const data = await response.json();
  return ( 
    <>
    <Index data={data.data} />
    </>
   );
}
 
export default page;

