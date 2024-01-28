import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRoomList from '@/components/section-room-list'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

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
          <div className='good-price'>
            <SectionHeader title={goodPriceInfo.title}/>
            <SectionRoomList roomList={goodPriceInfo.list}/>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home