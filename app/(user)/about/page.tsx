import Index from "@/app/components/about";

const About = async () => {
  const response = await fetch (`${process.env.BASE_URL}/api/admin/about`, {next: { revalidate: 60}});
  const data = await response.json();
  return ( 
    <>
      <Index data={data.data} />
    </>
   );
}
 
export default About;