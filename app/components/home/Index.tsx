import React from 'react'
import HeroSlider from './Banner'
import OurCompany from './OurCompany'
import ProductSlider from './ProductSliderSec'
// import Sustainability from './Sustainability'
import OurClients from './OurClients'
// import HomNumberSec from './HomNumber'
// import NewsBlockSec from './NewsBlockSec'
// import { newsEvents } from './data'
import Facilities from './Facilities'

const Index = () => {
  // const latestNews = (newsEvents || [])
  //   .filter((item) => item.type === "news")
  //   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  //   .slice(0, 3);
  return (
    <>
        <HeroSlider/>
        <OurCompany/>
        <ProductSlider/>
        <Facilities/>
        <OurClients/>
        {/* <Sustainability/>
        <HomNumberSec/>
        <NewsBlockSec latestNews={latestNews} /> */}
    </>
  )
}

export default Index