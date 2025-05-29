"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NewsBlock from "../common/NewsBlock";
import PreviousNews from "./PreviousNews";
import { News } from "@/types/News";


const NewsFilter = ({data}: {data: News}) => {
  const [activeTab, setActiveTab] = useState("all");
  
  const sortedNews = [...data.news].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const getFilteredItems = () => {
    if (activeTab === "all") {
      // Get latest 1 news from each unique category
      // const latestByCategory: { [key: string]: typeof data[number] } = {};
      // for (const news of sortedNews) {
      //   for (const cat of news.categories) {
      //     if (!latestByCategory[cat]) {
      //       latestByCategory[cat] = news;
      //     }
      //   }
      // }
      // return Object.values(latestByCategory);
      return sortedNews.slice(0, 3);
    } else {
      // Get latest 3 news for selected category
      return sortedNews.filter(news => news.category === activeTab).slice(0, 3);
    }
  };

  const filteredItems = getFilteredItems();

  const getPreviousItems = () => {
    if (activeTab === "all") {
      return sortedNews.slice(3);
    } else {
      return sortedNews
      .filter(news => news.category === activeTab).slice(3); // items after top 3
    }
  };

  const previousItems = getPreviousItems();

  return (
    <>
      <Tabs defaultValue="all" onValueChange={setActiveTab} value={activeTab}>
        <section className="pt-140">
          <div className="container">
            <TabsList className="relative flex flex-wrap gap-4 lg:gap-0 gap-y-5 lg:flex-row rounded-none mb-10 lg:mb-20 bg-transparent justify-start p-0 h-auto group-tab">
            <TabsTrigger value="all"
                  className={`relative group cursor-pointer text-secondary hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center px-0 lg:px-8 py-0 
                   rounded-none data-[state=active]:shadow-none data-[state=active]:text-primary first:pl-0 leading-[1] lg:border-r`}>
                  All
                  <div className="hidden lg:flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
                </TabsTrigger>
              {data.categories.map((cat,index) => (
                <TabsTrigger key={index} value={cat.name}
                  className={`relative group cursor-pointer text-secondary hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center px-0 lg:px-8 py-0 
                   rounded-none data-[state=active]:shadow-none data-[state=active]:text-primary first:pl-0 leading-[1] ${index === data.categories.length - 1 ? "lg:border-0" : "lg:border-r"}`}>
                  {cat.name}
                  <div className="hidden lg:flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
                </TabsTrigger>
              ))}
              <div className="absolute w-full h-[1px] bg-secondary/40 bottom-[-18px] left-0 z-0"></div>
            </TabsList>
          </div>
        </section>
        <TabsContent value={activeTab}>
          <section className="pb-140">
            <div className="container">
              <NewsBlock latestNews={filteredItems} />
            </div>
          </section>
          <PreviousNews previousNews={previousItems} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default NewsFilter;
