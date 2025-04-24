import { visionMission } from "./data";
import Image from "next/image";
const VisionMission = () => {
  return (
    <section className="vision-mission bg-exlight-gray py-[140px]">
      <div className="container">
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 ">

          {
            visionMission.map((item) => (
              <div key={item.id} className=" hover:bg-secondary group">
                <div className="flex flex-col gap-6 lg:gap-10 my-25 border-r border-primary group-last:border-0 px-10 lg:px-15 ">
                  <div className="bg-primary rounded-full flex items-center justify-center w-[110px] h-[110px] p-3">
                    <Image src={item.icon} alt="" className="w-full h-full" />
                  </div>
                  <div className="">
                    <h2 className="text-32 leading-[1] font-semibold text-black uppercase mb-5 group-hover:text-white">{item.title}</h2>
                    <p className="text-20 leading-[1.3] font-normal text-secondary group-hover:text-white">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
      </div>
    </section>
  );
}

export default VisionMission;