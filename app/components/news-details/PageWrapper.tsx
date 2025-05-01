import ContentWrapper from "./ContentWrapper";
import SidebarWrapper from "./SidebarWrapper";
import { newsData } from "./data";
const PageWrapper = () => {
  return ( 
    <main>
      <section className="py-140">
        <div className="container">
          <div className="lg:grid grid-cols-[3fr_1fr] gap-3 lg:gap-21">
              <ContentWrapper mainImg={newsData.mainImg} mainDesc={newsData.mainDesc} galleryImgs={newsData.galleryImgs} subDesc1={newsData.subDesc1} subDesc2={newsData.subDesc2} /><SidebarWrapper/>
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default PageWrapper;