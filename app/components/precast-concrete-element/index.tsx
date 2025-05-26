import React from 'react'
import InnerBanner from '../common/InnerBanner'
import Main from './Main'
import WallPanelsSec from './WallPanelsSec'
import RelatedElements from './RelatedElements'

export default function index() {
  return (
    <>
      <InnerBanner pageTitle="Precast Wall Panels"  />
      <Main/>
      <WallPanelsSec/>
      <RelatedElements/>
    </>
  )
}
