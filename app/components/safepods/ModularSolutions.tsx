import SubTitle from "../common/SubTitle";
import NormalCard from "../common/NormalCard";
import { safePodsData } from "./data";
const ModularSolutions = () => {
  return ( 
    <section className="py-140">
      <div className="container">
        <div className="relative mb-10 lg:mb-20">
          <SubTitle titleText={"Modular Solutions"} color="text-secondary" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {safePodsData.secondSection.items.map((item, index) => (
            <NormalCard key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default ModularSolutions;