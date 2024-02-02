import React, { memo, useState } from 'react'

/**
 * SwitchTrasition 是在同一个组件里面,切换两个内容时使用
 * 现在是, 两个组件(search-bar 和 search-detail)排它切换, 这时要使用 CSSTransition
 */
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import SearchTabs from './c-cpns/search-tabs'
import searchTitles from '@/assets/data/search_titles'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [tabIndex, setTabIndex] = useState(0)
  const titles = searchTitles.map(item => item.title)

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick()
  }

  return (
    <CenterWrapper>
      {/* search-bar: 是在 isSearch为false时显示, 故 in={!isSearch}
          unmountOnExit={true}: 这个动画执行完之后,要把这个组件卸载掉;在退出动画完成之后自动把这个组件卸载掉
      */}
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-bar' onClick={searchBarClickHandle}>
          <div className='text'>
            search rooms & experience
          </div>
          <div className='icon'>
            <IconSearchBar/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <div className="search-tab">
            <SearchTabs titles={titles} tabClick={setTabIndex} />
          </div>
          <div className='infos'>
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter