import ContentWrapper from "./ContentWrapper";
import SidebarWrapper from "./SidebarWrapper";
import { IndiNews } from "@/types/IndiNews";
import { News } from "@/types/News";

const PageWrapper = ({data,allNews}: {data: IndiNews,allNews: News}) => {
  return ( 
    <main>
      <section className="py-140">
        <div className="container">
          <div className="lg:grid grid-cols-[3fr_1fr] gap-3 lg:gap-21">
              <ContentWrapper mainImg={data.coverImage} mainImageAlt={data.coverImageAlt} mainDesc={data.content} galleryImgs={data.images} /><SidebarWrapper allNews={allNews}/>
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default PageWrapper;