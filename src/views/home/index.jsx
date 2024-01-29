import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRoomList from '@/components/section-room-list'
import SectionTabs from '@/components/section-tabs'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual)

  /** 数据的转换
   * 为保证子组件SectionTabs的通用性, 需要对传入的属性数据做转换: SectionTabs只接收string数组 */
  // const [name, setName] = useState(tabNames? tabNames[0] : "")
  const [name, setName] = useState("佛山")
  const tabNames = discountInfo.dest_address?.map(item => item.name)

  /** 如果不用 useCallback 包裹, 每次这个组件重新渲染时,这里都会定义一个新的函数对象传给子组件SectionTabs
   * 那么,就意味着: 每次每次给SectionTabs传入的都是新对象,会造成:就算tabNames没有修改,子组件也会重新刷新
   */
  const tabClickHandle = useCallback(function(index, name) {
    setName(name)
  }, [])

  /** 派发异步事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <div>
      <HomeWrapper>
        <HomeBanner/>
        <div className='content'>
          {/* 折扣数据 */}
          <div className='discount'>
            <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
            <SectionRoomList roomList={discountInfo.dest_list?.[name]} itemWidth = "33.33%" />
          </div>
          <HomeSectionV1 infoData={goodPriceInfo}/>
          <HomeSectionV1 infoData={highScoreInfo}/>
          
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home