"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image";
import { useState } from "react"
import { blogs } from "./data";
import ArrowBtn from "../common/ArrowBtn";
const categories = ["all", ...Array.from(new Set(blogs.map(blog => blog.category.toLowerCase())))]

const BlogsList = () => {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems = activeTab === "all"
    ? blogs
    : blogs.filter(i => i.category.toLowerCase() === activeTab)
  return (
    <section className="py-[140px]">
      <div className="container">
        <div className="w-full">
          <Tabs defaultValue="all" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="relative flex flex-col lg:flex-row rounded-none mb-10 lg:mb-20 bg-transparent justify-start p-0 h-auto">
              {categories.map(cat => (
                <TabsTrigger key={cat} value={cat}
                  className="relative group text-secondary capitalize w-full text-left lg:w-auto lg:text-center lg:px-8 py-0 border-b lg:border-r lg:border-b-0 last:border-b-0 lg:last:border-r-0 rounded-none data-[state=active]:shadow-none data-[state=active]:text-primary first:pl-0 leading-[1]" >
                  {cat}
                  <div className="absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
                </TabsTrigger>
              ))}
              <div className="absolute w-full h-[1px] bg-secondary/40 bottom-[-18px] left-0 z-0"></div>
            </TabsList>

            <TabsContent value={activeTab} forceMount>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-15">
                {filteredItems.map((item,index) => (
                  <div key={item.id} className="">
                    <div className="">
                      <Image src={item.img} alt={item.title} className={`w-full ${index % 2 === 0 ? 'h-[355px]' : 'h-[287px]'} object-cover`} />
                      <div className="flex justify-between items-center my-4">
                        <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase">{item.category}</p>
                        <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase"> {new Date(item.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-20 font-semibold leading-[1.3] mb-8">{item.title}</div>
                      {/* <div className="text-sm text-muted-foreground mb-2">{item.desc}</div> */}
                      <ArrowBtn btnText={"Read More"} btnLInk={item.link} />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default BlogsList;