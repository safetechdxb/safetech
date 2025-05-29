import React from 'react'
import ProductSlider from '../common/ProductSlider'
import { PrecastConcrete } from '@/types/PrecastConcrete'

export default function RelatedElements({data}: {data: PrecastConcrete}) {
  return (
    <section className='py-140'>
        <ProductSlider mainTitle="Related Elements" sliderData={data.elementsSection.items} />
    </section>
  )
}
