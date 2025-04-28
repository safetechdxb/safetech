import ContentWrapper from "./ContentWrapper";
import SidebarWrapper from "./SidebarWrapper";
import { blogData } from "./data";
const PageWrapper = () => {
  return ( 
    <main>
      <section className="py-140">
        <div className="container">
          <div className="lg:grid grid-cols-[3fr_1fr] gap-3 lg:gap-21">
              <ContentWrapper mainImg={blogData.mainImg} mainDesc={blogData.mainDesc} galleryImgs={blogData.galleryImgs} subDesc1={blogData.subDesc1} subDesc2={blogData.subDesc2} /><SidebarWrapper/>
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default PageWrapper;