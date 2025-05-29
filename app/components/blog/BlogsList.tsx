"use client"
import {motion} from "framer-motion";
import { moveUp} from "../motionVarients";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image";
import { useState } from "react"
import ArrowBtn from "../common/ArrowBtn";
import Link from "next/link";
import { Blog } from "@/types/Blog";
import moment from "moment";


const BlogsList = ({data}: {data: Blog}) => {
  const [activeTab, setActiveTab] = useState("all")


  const filteredItems = activeTab === "all"
    ? data.blogs
    : data.blogs.filter(i => i.category.toLowerCase() === activeTab)

    const categories = ["all", ...Array.from(new Set(data.blogs.map(blog => blog.category.toLowerCase())))]
  return (
    <section className="py-140">
      <div className="container">
        <div className="w-full">
          <Tabs defaultValue="all" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="relative flex flex-wrap gap-4 lg:gap-0 gap-y-5 lg:flex-row rounded-none mb-10 lg:mb-20 bg-transparent justify-start p-0 h-auto">
              {categories.map((cat,index) => (
                <TabsTrigger key={cat} value={cat}
                  className={`relative group cursor-pointer text-secondary hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center px-0 lg:px-8 py-0 
                   rounded-none data-[state=active]:shadow-none data-[state=active]:text-primary first:pl-0 leading-[1] ${index !== categories.length - 1 ? 'lg:border-r' : ''}`} >
                  {cat}
                  <div className="hidden lg:flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
                </TabsTrigger>
              ))}
              <div className="absolute w-full h-[1px] bg-secondary/40 bottom-[-18px] left-0 z-0"></div>
            </TabsList>

            <TabsContent value={activeTab} forceMount>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-15">
                {filteredItems.map((item,index) => (
                  <motion.div variants={moveUp(index * 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={index} className="">
                    <div className="">
                      <Link href={`blog/${item.slug}`}>
                      <Image src={item.thumbnail} alt={item.thumbnailAlt} width={500} height={500} className={`w-full ${(index) % 2 === 0 ? 'h-[355px]' : 'h-[287px]'} object-cover`} />
                      </Link>
                      <div className="flex justify-between items-center my-4">
                        <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase">{item.category}</p>
                        <p className="text-12 font-normal leading-[1.7] text-tm-gray uppercase"> 
                          {moment(item.createdAt).format("DD MMM, YYYY")}
                        </p>
                      </div>
                      <Link href={`blog/${item.slug}`}>
                      <h3 className="text-20 font-semibold leading-[1.3] mb-8">{item.title}</h3>
                      </Link>
                      {/* <div className="text-sm text-muted-foreground mb-2">{item.desc}</div> */}
                      <ArrowBtn btnText={"Read More"} btnLInk={`blog/${item.slug}`} border={false} />
                    </div>
                  </motion.div>
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