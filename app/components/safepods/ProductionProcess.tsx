import CarouselTypeTwo from "../common/CarouselTypeTwo";
import { SafePodsData } from "@/types/SafePods";


const ProductionProcess = ({ data }: {data:SafePodsData}) => {
  return (
    <section className="py-140 overflow-x-hidden bg-light-gray">
      <CarouselTypeTwo title={data.fourthSection.title} items={data.fourthSection.items} />
    </section>
  );
}

export default ProductionProcess;