import SubTitle from "../common/SubTitle";
import {assets} from "@/public/assets/assets";
import Image from "next/image";
import { achievements } from "./data";
const Achievements = () => {
  return ( 
    <section className="py-140 relative ">
      <Image src={assets.AchievementsBg} alt="Achievements" className="absolute inset-0 w-full h-full object-cover -z-10" />
      <div className="bg-black/65 absolute inset-0 w-full h-full -z-10"></div>
      <div className="container">
        <div className="relative mb-10">
          <SubTitle titleText={"Our Achievements"} color="text-white" />
        </div>
          <p className="text-20 font-normal leading-[1.3] text-white max-w-6xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veni laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
           {
            achievements.map((item)=>(
              <div key={item.id} className="bg-primary p-8 flex flex-col gap-[86px]">
                <div className="flex justify-between items-center">
                  <h3 className="text-64 font-bold leading-[1] text-white">{item.desc}</h3>
                  <Image src={item.icon} alt={item.title} width={50} height={50} className="w-auto h-[50px] object-contain" />
                </div>
                <h4 className="text-20 font-semibold text-white">{item.title}</h4>
              </div>
            ))
           }
          </div>
      </div>
    </section>
   );
}
 
export default Achievements;