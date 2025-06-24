import CarouselTypeTwo from "../common/CarouselTypeTwo";
import { StaticImageData } from "next/image";
interface ProductionProcessProps {
  data: {
    title: string;
    items: {
      title: string;
      image: string | StaticImageData;
      imageAlt: string;
      description: string;
    }[];
  };
}



const ProductionProcess = ({ data }: ProductionProcessProps) => {
  return (
    <section className="py-140 overflow-x-hidden bg-light-gray">
      <CarouselTypeTwo title={data.title} items={data.items} />
    </section>
  );
}

export default ProductionProcess;