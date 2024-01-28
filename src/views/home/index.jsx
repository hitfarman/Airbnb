import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  /** 从redux中获取数据: useSelector返回一个state, 直接结构,就可以拿到state中的数据了 */
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  /** 派发异步事件: 发送网络请求 */
  const dispatch = useDispatch()
  // 发起网络请求, 但是,真正发起网络请求的请求逻辑不放到业务组件里,而是放在redux的store中
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <div>
      <HomeWrapper>
        <HomeBanner/>
        <div className='content'>
          <div className='good-price'>
            <SectionHeader title={goodPriceInfo.title}/>
            <SectionRooms roomList={goodPriceInfo.list}/>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home