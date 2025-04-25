import SubTitle from "../common/SubTitle";
import { parentalCompanies } from "./data"; // data file with the parental companies data
import Image from "next/image";
const ParentalCompaniesSec = () => {
  return ( 
    <section className="py-[140px] bg-secondary">
      <div className="container">
        <div className="relative mb-14">
          <SubTitle titleText="Parental Companies" color="text-white" />
        </div>
        <div className="flex flex-col gap-y-14">
          {
            // parentalCompanies is an array of objects with id, title, bg, icon, and link properties
            parentalCompanies.map((item) => (
              <div key={item.id} className="grid lg:grid-cols-2 group ">
                <div className="relative lg:h-[470px] group-last:order-2">
                  <Image src={item.img} alt={item.title} width={790} height={790} className="w-full h-full"></Image>
                </div>
                <div className="flex flex-col  items-start gap-4 pl-12 lg:pl-[82px] group-last:pl-0 pt-10 lg:pt-[67px] group-last:order-1 group-last:pr-15">
                  <div className="flex gap-4 items-center mb-8 lg:mb-[37.81px]">
                    <Image src={item.logo} alt={item.title} width={45} height={49} className="object-contain"></Image>
                    <h3 className="text-white text-32 leading-[1.5] font-bold">{item.title}</h3>
                  </div>
                  <p className="font-normal text-white/75 text-20 leading-[1.3] ">{item.desc}</p>
                </div>
              </div>
            ))
          }
      </div>
      </div>
    </section>
   );
}
 
export default ParentalCompaniesSec;