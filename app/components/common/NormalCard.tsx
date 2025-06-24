import Image from "next/image";
import { StaticImageData } from "next/image";
interface NormalCardProps {
    image: string | StaticImageData;
    title: string;
    description: string;
}
const NormalCard = ({ image, title, description }: NormalCardProps) => {
  return ( 
    <div className="group">
      <div className="overflow-hidden">
        <Image src={image} alt={title} width={400} height={400} className="w-full h-[250px] md:h-[350px] 2xl:h-full object-cover flex group-hover:scale-105 transition-all duration-300 ease-in-out"/>
      </div>
      <div className="px-3 py-5 lg:py-15 lg:px-8 text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-in-out">
        <h2 className="text-24 font-semibold leading-[1.3]">{title}</h2>
        <p className="text-20 font-normal leading-[1.5]">{description}</p>
      </div>
    </div>
   );
}
 
export default NormalCard;