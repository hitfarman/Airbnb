import React, { memo, useState } from 'react'

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
      {
        !isSearch ? (
          <div className='search-bar' onClick={searchBarClickHandle}>
            <div className='text'>
              search rooms & experience
            </div>
            <div className='icon'>
              <IconSearchBar/>
            </div>
          </div>
        ) : (
          <div className="search-detail">
            <div className="search-tab">
              <SearchTabs titles={titles} tabClick={setTabIndex} />
            </div>
            <div className='infos'>
              <SearchSections searchInfos={searchTitles[tabIndex].searchInfos}/>
            </div>
          </div>
        )
      }

    </CenterWrapper>
  )
})

export default HeaderCenter