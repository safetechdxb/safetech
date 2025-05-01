import InnerBanner from "../common/InnerBanner";
import PageWrapper from "./PageWrapper";
const Index = () => {
  return ( 
    <main>
      <InnerBanner pageTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt "} isBlogDetails={true} category="Technology" date="Augest 7, 2024" />
      <PageWrapper/>
    </main>
   );
}
 
export default Index;