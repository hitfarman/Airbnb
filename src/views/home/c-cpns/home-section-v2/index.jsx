import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRoomList from '@/components/section-room-list'
import SectionTabs from '@/components/section-tabs'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  /** 从props中获取数据 */
  const { infoData } = props
  
  /** 定义内部的 state */
  const tabNames = infoData.dest_address.map(item => item.name)
  /** 注意useState hook传入的初始值只有在组件第一次被渲染时才是有效的
   *  这里第一次传入的 infoData 是空对象(因为store中初始值是空对象)
   *  所以第一次,name设置的是空字符串"", 后来网络请求到数据之后,再传进来时,进行的是第二次渲染
   * 第二次渲染时,虽然取到了name,并且用这个name作为useState的初始化值了,
   * 但是,这个初始化值对 useState 这个hook的函数没有作用了
   * 因为, useState这个初始化值只有在第一次时才是有作用的,后面再传入的值都是无效的!
  const [name, setName] = useState(tabNames ? tabNames[0]:"")
   */
  const [name, setName] = useState(tabNames[0])

  /** 事件处理函数
   * 如果不用 useCallback 包裹, 每次这个组件重新渲染时,这里都会定义一个新的函数对象传给子组件SectionTabs
   * 那么,就意味着: 每次每次给SectionTabs传入的都是新对象,会造成:就算tabNames没有修改,子组件也会重新刷新
   */
  const tabClickHandle = useCallback(function(index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRoomList roomList={infoData.dest_list?.[name]} itemWidth = "33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2