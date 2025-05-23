"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image";
import { useState } from "react";
import { facilitiesData } from "./data";
import { Check } from "lucide-react";

const Facilities = () => {
  const [activeTab, setActiveTab] = useState(facilitiesData[0].title);

  // Filter data based on selected tab
  const filteredData = facilitiesData.filter(item => item.title === activeTab);

  return (
    <section className="py-140 bg-secondary">
      <div className="container">
        <Tabs defaultValue="all" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="relative flex flex-wrap gap-4 lg:gap-0 gap-y-5 lg:flex-row rounded-none mb-10 lg:mb-20 bg-transparent justify-start p-0 h-auto">
            {facilitiesData.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.title}
                className="relative group cursor-pointer text-white hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center px-0 lg:px-8 py-0 
                rounded-none data-[state=active]:text-primary first:pl-0 leading-[1] data-[state=active]:bg-transparent"
              >
                {item.title}
                <div className="hidden lg:flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
              </TabsTrigger>
            ))}
            <div className="absolute w-full h-[1px] bg-white/40 bottom-[-18px] left-0 z-0"></div>
          </TabsList>

          <TabsContent value={activeTab}>
              {filteredData.map(item => (
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-15" key={item.id}>
                <div key={item.id}>
                  <Image
                    src={item.mainImg}
                    alt={item.title}
                    width={600}
                    height={600} className="w-full "
                  />
                </div>
                <div className="text-white">
                  <h2 className="text-32 font-medium mb-6 lg:mb-10">{item.title}</h2>
                  <p className="text-20 font-normal leading-1.3">{item.desc}</p>
                  <ul className="flex flex-col gap-3 mt-10">
                    <li className="flex items-center gap-4"><div className="bg-primary w-5 h-5 rounded-full flex items-center justify-center"><Check width={10} hanging={10}/></div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos!</li>
                    <li className="flex items-center gap-4"><div className="bg-primary w-5 h-5 rounded-full flex items-center justify-center"><Check width={10} hanging={10}/></div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos!</li>
                    <li className="flex items-center gap-4"><div className="bg-primary w-5 h-5 rounded-full flex items-center justify-center"><Check width={10} hanging={10}/></div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quos!</li>
                  </ul>
                </div>
            </div>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Facilities;
