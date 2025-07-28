import React from 'react'
import ProductSlider from '../common/ProductSlider'
import { PrecastConcrete } from '@/types/PrecastConcrete'

export default function RelatedElements({data}: {data: PrecastConcrete}) {
  console.log(data)
  return (
    <section className='py-140 overflow-hidden' id="relatedElements">
        <ProductSlider data={data} />
    </section>
  )
}
