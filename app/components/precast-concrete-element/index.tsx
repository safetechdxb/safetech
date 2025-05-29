import React from 'react'
import InnerBanner from '../common/InnerBanner'
import Main from './Main'
import WallPanelsSec from './WallPanelsSec'
import RelatedElements from './RelatedElements'
import { PrecastConcreteElement } from '@/types/PrecastConcreteElement'
import { PrecastConcrete } from '@/types/PrecastConcrete'

export default function index({elementData, productData}: {elementData: PrecastConcreteElement, productData: PrecastConcrete}) {
  return (
    <>
      <InnerBanner pageTitle={elementData.pageTitle} bannerBg={elementData.banner}  />
      <Main data={elementData}/>
      <WallPanelsSec data={elementData}/>
      <RelatedElements data={productData}/>
    </>
  )
}
