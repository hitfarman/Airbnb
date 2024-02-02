import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScrollPosition } from '@/hooks'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  /** 定义组件内部的状态 */
  const [isSearch, setIsSearch] = useState(false)

  /** 从 redux中获取数据 */
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig

  /** 监听滚动 */
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  // 在没有变成搜索状态时(搜索detail没有弹出来), 不断记录scrollY值
  if (!isSearch) prevY.current = scrollY
  // 在弹出搜索detail的情况下,一旦滚动距离大于之前记录的距离30时,设为isSearch为false
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  /** 透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0

  return (
    /** isAlpha 属性在AppHeader组件,及其子组件内部都需要, 所以需要使用通过主题共享这个属性, theme里面要求是个对象 */
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            {/* 当在(滚动)在顶部,并且isAlpha为true时(在alpha状态), 一定时处于搜索的状态的 */}
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {/* 点击蒙版时,设置 isSearch为false */}
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader