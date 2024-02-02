import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils'
import HomeLongFor from './c-cpns/home-long-for'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { 
    goodPriceInfo, 
    highScoreInfo, 
    discountInfo, 
    hotRecommendInfo,
    longForInfo,
    plusInfo
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo,
  }), shallowEqual)

  /** 派发异步事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true}))
  }, [dispatch])

  return (
    <div>
      <HomeWrapper>
        <HomeBanner/>
        <div className='content'>
          {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
          {isEmptyObject(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo}/>}
          {isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo}/>}
          {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
          {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
          {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home