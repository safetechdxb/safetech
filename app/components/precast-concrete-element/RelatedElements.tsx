import React from 'react'
import ProductSlider from '../common/ProductSlider'
import { relatedElementsData } from './data'

export default function RelatedElements() {
  return (
    <section className='py-140'>
        <ProductSlider mainTitle="Related Elements" sliderData={relatedElementsData} />
    </section>
  )
}
