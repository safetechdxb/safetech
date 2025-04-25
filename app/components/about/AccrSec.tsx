import SubTitle from "../common/SubTitle";
import { accreditations } from "./data";
import Image from "next/image";
const AccrSec = () => {
  return ( 
    <section className="py-[140px] bg-light-gray">
      <div className="container">
        <div className="relative mb-15">
          <SubTitle titleText="Accreditations" color="text-secondary" />
        </div>
        <div className="flex gap-8 justify-between w-full">
          {accreditations.map((item)=>(
            <div key={item.id}>
              <Image src={item.logo} alt={item.title} width={106} height={104} className="w-[106px] h-[104px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default AccrSec;