import SubTitle from "../common/SubTitle";
import {assets} from "@/public/assets/assets";
import Image from "next/image";
const Achievements = () => {
  return ( 
    <section className="py-[140px] relative ">
      <Image src={assets.AchievementsBg} alt="Achievements" className="absolute inset-0 w-full h-full object-cover -z-10" />
      <div className="bg-black/65 absolute inset-0 w-full h-full -z-10"></div>
      <div className="container">
        <div className="relative mb-10">
          <SubTitle titleText={"Achievements"} color="text-white" />
        </div>
          <p className="text-20 font-normal leading-[1.3] text-white max-w-6xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veni laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>
   );
}
 
export default Achievements;